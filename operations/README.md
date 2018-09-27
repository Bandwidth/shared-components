# OpenShift Operations

So, lets talk our way through this.

Our current CI pipeline is interesting, and there's some complexities you should be aware of.

We use the Bandwidth DevOps consolidated Jenkins model. What does this mean?

We have a project, `test-forge`, which deploys a jenkins instance (and webhook proxy) to the lab1 OpenShift cluster. That Jenkins instance monitors for BuildConfigs (also referred to as Pipelines) in a list of projects (currently 'apollo', 'scl', and 'janus').

## Consolidated Jenkins

The consolidated jenkins is not tied to a single repo (though it is documented here).

To deprovision the consolidated jenkins, login to the openshift cli `oc`, target the 'test-forge' workspace, and run the following:

`oc apply bw-devops//jenkins-deprovision-1.0.2`

To reprovision the consolidated jenkins, use the following (entries in brackets are needed from elsewhere):

```
oc process bw-devops//jenkins-provision-1.0.2 -p GITHUB_USERNAME={GITHUB_USERNAME_HERE} GITHUB_PASSWORD={ACCESS_KEY_HERE} GITHUB_WEBHOOK_SECRET={WEBHOOK_SECRET_HERE} JENKINS_OPENSHIFT_SYNC_NAMESPACES="janus scl apollo" ARTIFACTORY_CREDENTIALS_B64={ARITFACTORY_CREDENTIALS_BASE64_ENCODED} | oc apply -f -
```

## Apollo Configuration

Everything except for consolidated jenkins has its pipelines in its parent repository.

So, to modify the apollo pipelines, edit operations/pipelines.yml and run the following:

`oc apply -f ./operations/pipelines.yml`

## Janus Configuration

Lives here: 

## SCL Configuration

Lives here:
