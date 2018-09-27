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
    reportGithubStatus('jenkins/2build','PENDING','Bundle Build in Progress')
}

node {
  withCredentials([
  ]) {
    def label = "apollo-${UUID.randomUUID().toString()}"
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
          envVar(key: 'NPM_TOKEN', value: "test")
        ]
      )
    ],
    volumes: [
      persistentVolumeClaim(mountPath: '/home/jenkins/.npm', claimName: 'npm-cache-scl', readOnly: false)
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
          stage('Install NPM dependencies') {
            sh 'npm config set cache "/home/jenkins/.npm"'
            sh 'npm install'
          }
          stage('Run Unit Tests') {
            try {
              sh 'npm test'
              reportGithubStatus('jenkins/1unit','SUCCESS',"Unit Tests Successful")
            } catch (e) {
              reportGithubStatus('jenkins/1unit','FAILURE','Unit Tests Failed')
            }
          }
          stage('Build for distribution') {
            try {
              sh 'npm run build'
              reportGithubStatus('jenkins/2build','SUCCESS',"Build Successful")
            } catch (e) {
              reportGithubStatus('jenkins/2build','FAILURE','Build Failed')
            }
          }
        }
      }
    }
  }
}
