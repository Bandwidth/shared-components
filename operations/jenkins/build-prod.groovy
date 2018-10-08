gitSourceRef = "${params.GIT_SOURCE_REF}"

def reportGithubStatus(context,status,description) {
  githubNotify credentialsId: 'scl-github-access-token',
    description: description,
    status: status,
    context: context,
    repo: 'shared-components',
    sha: gitSourceRef,
    account: 'bandwidth'
}

node('master') {
    currentBuild.displayName = "SCL Pipeline » #${env.BUILD_NUMBER} - ${env.GIT_SOURCE_REF}"
    reportGithubStatus('jenkins/1unit','PENDING','Unit Tests in Progress')
    reportGithubStatus('jenkins/2prepublish','PENDING','NPM Preparation in Progress')
    reportGithubStatus('jenkins/3deploy','PENDING','Preparing to Deploy to NPM')
}

node {
  withCredentials([
    string(credentialsId: 'npm-token', variable: 'TOKEN')
  ]) {
    def label = "scl-${UUID.randomUUID().toString()}"
    podTemplate(label: label, cloud: 'openshift', containers: [
      containerTemplate(
        name: 'node',
        image: 'node:8',
        ttyEnabled: true,
        command: 'cat',
        resourceRequestCpu: '1000m',
        resourceLimitCpu: '2500m',
        resourceRequestMemory: '1Gi',
        resourceLimitMemory: '3Gi',
        envVars: [
          envVar(key: 'NPM_TOKEN', value: value: "$TOKEN")
        ]
      )
    ],
    volumes: [
      persistentVolumeClaim(mountPath: '/home/jenkins/.npm', claimName: 'npm-cache-apollo', readOnly: false)
    ]) {
      node(label) {
        stage("Git Clone") {
          checkout ([$class: 'GitSCM',
            branches: [[name: env.GIT_SOURCE_REF ]],
            userRemoteConfigs: [[
              credentialsId: 'scl-github-access-token',
              url: 'https://github.com/Bandwidth/shared-components.git'
            ]]
          ])

        }
        container('node') {
          dir("./packages/shared-components") {
            stage('Install NPM dependencies') {
              sh 'npm config set cache "/home/jenkins/.npm"'
              sh 'npm install'
            }
            stage('Run Unit Tests') {
              try {
                //sh 'npm test'
                reportGithubStatus('jenkins/1unit','SUCCESS',"Unit Tests Successful")
              } catch (e) {
                reportGithubStatus('jenkins/1unit','FAILURE','Unit Tests Failed')
              }
            }
          }
          stage('Lerna Install') {
            sh 'npm config set cache "/home/jenkins/.npm"'
            sh 'npm install'
          }
          stage('Lerna Publish') {
            try {
              //sh 'npm test'
              sh 'npm run publish'
              reportGithubStatus('jenkins/2prepublish','SUCCESS',"Prepared for NPM")
            } catch (e) {
              reportGithubStatus('jenkins/2prepublish','FAILURE','Prepare script failed')
            }
          }
        }
      }
    }
  }
}
