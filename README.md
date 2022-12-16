# Let's Meet is a one-O-one Video Chatting web application . 


[![Continuous-Staging (Terraform)](https://github.com/Mahesh-Kasabe/Lets-Meet-Devops/actions/workflows/terraform.yaml/badge.svg)](https://github.com/Mahesh-Kasabe/Lets-Meet-Devops/actions/workflows/terraform.yaml) [![Datree-policy-Checks](https://github.com/Mahesh-Kasabe/Lets-Meet-Devops/actions/workflows/datree-test.yaml/badge.svg)](https://github.com/Mahesh-Kasabe/Lets-Meet-Devops/actions/workflows/datree-test.yaml) [![Docker Build Backend](https://github.com/Mahesh-Kasabe/Lets-Meet-Devops/actions/workflows/cd-backend.yaml/badge.svg)](https://github.com/Mahesh-Kasabe/Lets-Meet-Devops/actions/workflows/cd-backend.yaml) [![Docker Build Frontend](https://github.com/Mahesh-Kasabe/Lets-Meet-Devops/actions/workflows/cd-frontend.yaml/badge.svg)](https://github.com/Mahesh-Kasabe/Lets-Meet-Devops/actions/workflows/cd-frontend.yaml) [![K8s Manifest Sec checks Kubescape](https://github.com/Mahesh-Kasabe/Lets-Meet-Devops/actions/workflows/kubescape.yaml/badge.svg)](https://github.com/Mahesh-Kasabe/Lets-Meet-Devops/actions/workflows/kubescape.yaml) [![CircleCI](https://dl.circleci.com/status-badge/img/gh/Mahesh-Kasabe/Lets-Meet-Devops/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/Mahesh-Kasabe/Lets-Meet-Devops/tree/master)

![alt tag](https://github.com/Mahesh-Kasabe/Lets-Meet-Devops/blob/master/Images/ss.png?raw=true)

![alt tag](https://github.com/Mahesh-Kasabe/Lets-Meet-Devops/blob/master/Images/0.png?raw=true)

## Tech Stack 

1.  Node.js
2. ReactJS 
3. WebRTC & Socketio
4. Github Actions , CircleCI & Jenekins
5. Terraform & Ansible
6. AWS & Azure 
7. Kubernetes & Docker 
8. ArgoCD & Flux
9. Datree.io , Jest & KubeScape (for Testing images and yaml files validation)

## What is the end-result ??

I successfully implemented the video calling feature.I also implemented:

1. Adding own name to profile with which you join the meeting
2. Update whenever somebody joins or leaves the meeting
3. Copy URL in-meeting
4. Chatbox
5. Send invitation through email 
6. Leave meeting

## Running App on your local system 

```bash

git clone https://github.com/Mahesh-Kasabe/Lets-Meet-Devops

cd Lets-Meet-Devops

docker-compose up

```

## Running App on your kubernetes cluster

```bash

git clone https://github.com/Mahesh-Kasabe/Lets-Meet-Devops

cd Lets-Meet-Devops/Deployments/K8s

kubectl apply -f argocd.yaml 

```

### Running App on AWS

```bash 

git clone https://github.com/Mahesh-Kasabe/Lets-Meet-Devops

cd Lets-Meet-Devops/Deployments/IAC/AWS

terraform apply

```

### Deploying to Civo Cluster

```bash 

git clone https://github.com/Mahesh-Kasabe/Lets-Meet-Devops

cd Lets-Meet-Devops/Deployments/IAC/CIVO

terraform apply

```

## Demo

live app : https://letsmeetapp.netlify.app/



