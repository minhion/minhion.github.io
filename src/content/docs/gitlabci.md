# Gitlab CI/CD Integration
## Introduction 
>Maintainer: <brandi_coleman@bmc.com>

See <b>Usage Instructions</b> below for steps to interact with this flow.

<b>This use case is available for the AWS Demo System and Helix Control-M.</b>

## Use Case Overview

This use case is designed to interactively simulate how a developer persona would interact with Control-M leveraging Jobs-as-Code and the Automation API using the Forecast Flow workflow. 

## Use Case Technical Explanation
To effectively demonstrate the interaction between a developer and Control-M Jobs-as-Code and Automation API, an IDE is required (Eclipse, Visual Studio, Notepad++, etc). The demonstration begins with cloning the Gitlab CICD Integration repository into your IDE. <br> <br>
To view and clone the demo flow code-base please [Gitlab CICD Integration Git Repository](https://ctm-git.trybmc.com/automated-demos/gitlab-cicd-integration) <br> <br>
After cloning the repository, it would be helpful to locally demonstrate the application of the prepared **deploy descriptors** against the **forecast flow** JSON job templates. There are 4 deploy descriptors included:

1. **AWS Sandbox**: deploy-descriptor-sand.json
2. **AWS Production**: deploy-descriptor-prod.json
3. **Helix Sandbox**: deploy-descriptor-helix-sand.json
4. **Helix Pre-Production**: deploy-descriptor-helix-preprod.json

*(Please see the Usage Instructions section for the specific commands)* <br> <br>
After locally demonstrating the use of the prepared deploy descriptors, making a change to the **forecast-flow-zzz.json** file or **forecast-flow-helix-zzz.json** by changing the *email* and/or *zip code* variable values, and committing this change back to the master branch will automatically trigger the **Gitlab CI/CD Pipeline**. 

This Gitlab CI/CD pipeline includes the following stages for the AWS Sandbox environment, Production AWS environment, Helix Sandbox environment, Helix Pre-Production environment:

1. Session Login (Self-Hosted only)
2. Deploy Transform
3. Run Flow (includes Build)

After the completion of the Gitlab CI/CD Pipeline, it is helpful to navigate to the Monitoring Domain of the Sandbox and Production AWS Demo environment to show the transformed folders, **zzz-forecast-flow-sand** and **zzz-forecast-flow-prod** or in the Helix Sand and Pre-Prod environments.

## Job Types Included
* OS

## Usage Instructions
1. Clone the code-base to to your IDE Clone with HTTPS Link [here](https://ctm-git.trybmc.com/automated-demos/gitlab-cicd-integration.git)
2. Demo the application of deploy descriptors locally with the following commands (these commands assume the defined environment names are sandbox and production): 
    * ctm deploy transform .\jobs\forecast-flow-template.json .\deploy-descriptors\deploy-descriptor-sand.json -e sandbox <br>
    * ctm deploy transform .\jobs\forecast-flow-template.json .\deploy-descriptors\deploy-descriptor-prod.json -e production
    * ctm deploy transform .\jobs\forecast-flow-helix-template.json .\deploy-descriptors\deploy-descriptor-helix-sand.json -e helix-sand
    * ctm deploy transform .\jobs\forecast-flow-helix-template.json .\deploy-descriptors\deploy-descriptor-helix-preprod.json -e helix-preprod
3. Modify the zip code and/or email variables in deploy-descriptor-sand.json or deploy-descriptor-prod.json or \deploy-descriptor-helix-sand.json or deploy-descriptor-helix-preprod.json.
![](../images/ddgicd.png)
4. Commit the changes back to Gitlab
5. Navigate to the CI/CD Pipelines Page [here](https://ctm-git.trybmc.com/automated-demos/gitlab-cicd-integration/-/pipelines) to view running Pipeline
6. Once complete, open the Monitoring Domain in the Sandbox and Production Environments to view the transformed workflow.

???+ note

    zzz-getweatherdata job will run on both hosts to accurately reflect temperature due to use of zzz-linux-agents **hostgroups**.
    
## Screenshot of Demo Flow in AWS Sandbox and Helix Sandbox
![](../images/ffsand.JPG)

## Screenshot of Demo Flow in Production
![](../images/ffprod.JPG)

## Screen Helix Pre-Prod
![](../images/ff-helix-preprod.jpg)