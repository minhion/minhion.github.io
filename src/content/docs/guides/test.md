# Control-M Demo System Overview

## Demo System Architecture
![](../images/system_arch.jpg)


## On-Demand Demo Architecture
> The On-Demand demo flows in our Production Demo environment create a pod/replicaset of our high volume flows to demo. In addition to provisioning this environment and registering the agent, it also deploys the connection profiles, job types, and job definitions based off of user codes. This is leveraging an EKS cluster, and terminated the resources created based on a user specified termination date. This is initiated as an orderable service via Control-M, and the user inputs parameters when they order the service to dictate which deployment and flow is created.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://www.lucidchart.com/documents/embeddedchart/70e1d7e2-e0dc-4a87-8fbe-cee08e4971ac" id="wQSiR7bUEw2k"></iframe></div>

> Interested in how the On-Demand Demo resources are running? You can access the K8s Operational View [here](http://ab4d7208ac30e4a8ea671670517cf77c-779970486.us-west-1.elb.amazonaws.com)

## On-Demand Demo Code Flow
<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embeddedchart/30610101-c437-4eb4-8756-52a33ba605cc" id="I6YIeGpeCmRY"></iframe></div>

## On-Demand Agent Architecture
> The On-Demand agent creation runs as a stateful set pod with ssh access for our Solution Engineers to spin up ad hoc for development and testing in our Sandbox environment. Users specify a termination date, and it's dynamically cleaned up when that's reached. This also uses a k8s cluster in EKS, and is backed by persistent volumes so that the data is retained in the se_storage folder when the agent pod is terminated. This is also initiated as an orderable service via Control-M.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embeddedchart/ced305b7-f9f1-442a-ad33-ab1cc7da73e9" id="P_Afm~dMkyhg"></iframe></div>

> Interested in how the On-Demand Agent resources are running? You can access the K8s Operational View [here](http://afeef6a877a0643138856848b0226c1d-480072045.us-west-2.elb.amazonaws.com)

## On-Demand Helix POV Setup Architecture 
> The On-Demand Helix POV Setup (Formerly Automated SaaS POV Setup-ASPS)was started as an effort to streamline Helix POVs. 

> Helix Control-M requires more agility in sales teams' processes because of expectations that come with a SaaS environment. This automation is a three-step process intended to be used by Control-M presales to streamline the setup, export, and breakdown of a POV agent with workflows. The automation also works well as a demo to highlight an ephemeral Control-M agent running in Kubernetes.

> The automation will stand up a namespace and containerized Helix Control-M Agent within our Automated Demos Kubernetes cluster. The agent will be registered with the Helix tenant stood up for the POV and create two workflows as samples to begin with: [Forecast Flow](http://ctm-aws-documentation.bmcdemo.com/selab/forecastflow/) and [Snowflake and AWS Data Pipeline](http://ctm-aws-documentation.bmcdemo.com/selab/snowaws/) This is also initiated as an orderable service via Control-M.
<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embeddedchart/74f8e41e-680c-4016-b65b-5e8ea35364c6" id="p7pwFx6N2l0O"></iframe></div>

## Standard and On-Demand Demos Included
- Airflow Orchestration
- Ansible Orchestration
- AWS Elastic Container Service
- AWS Sagemaker Machine Learning
- Control-M Reports
- CTM Python Client
- Forecast Flow with SQS
- Forecast Flow
- GCP Fraud Dectection
- Gitlab CICD Integration
- HashiCorp Vault Integration
- IOT Data Pipeline
- Kubernetes Orchestration
- MFT and Multi-Cloud
- MFTE and Multi-Cloud
- Snowflake and AWS Data Pipeline
- Snowflake and Azure Data Pipeline

## TryBMC Gitlab Environment 
>All of our demos as well as this documentation rely on projects in git, where we store and update artifacts. All of these artifacts are created and deployed to Control-M through Git CI/CD pipelines, maintaining Git as the source-of-truth. 
