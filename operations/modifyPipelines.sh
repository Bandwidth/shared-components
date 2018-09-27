#!/bin/bash
oc login
oc project scl
oc process -f ./jenkins/pipelines.yml | oc apply -f -
