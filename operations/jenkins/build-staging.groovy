environment = "${params.ENVIRONMENT}"
gitSourceRef = "${params.GIT_SOURCE_REF}"
projectName = null
tagVersion = null
githubTokenCredentialId = null

def reportGithubStatus(context,status,description) {
  githubNotify credentialsId: 'apollo-github-access-token',
    description: description,
    status: status,
    context: context,
    repo: 'apollo',
    sha: gitSourceRef,
    account: 'bandwidth'
}


node('master') {
    library identifier: 'pipeline-utils@master', retriever: modernSCM([
        $class: 'GitSCMSource',
        credentialsId: "apollo-github-access-token",
        remote: 'https://github.com/Bandwidth/pipeline-utils.git'
    ])
    osUtils.initialize(openshift)
    currentBuild.displayName = "Apollo Pipeline » #${env.BUILD_NUMBER} - ${env.GIT_SOURCE_REF}"
    reportGithubStatus('jenkins/1unit','PENDING','Unit Tests in Progress')
    reportGithubStatus('jenkins/2build','PENDING','Bundle Build in Progress')
}

pipelineUtils.applyCommonProperties()
repoName = 'apollo'

node {
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
          envVar(key: 'BANDWIDTH_ENV', value: "development")
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
              credentialsId: 'apollo-github-access-token',
              url: 'https://github.com/Bandwidth/apollo.git'
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
              junit 'junit.xml'
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

node('master') {
  stage('Build docker image') {
    sh 'oc project apollo'
    sh 'oc start-build apollo'
  }
}
