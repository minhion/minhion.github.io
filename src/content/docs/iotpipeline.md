# IOT Data Pipeline 
## Introduction
> Maintainer: <brandi_coleman@bmc.com>

The On-Demand Demo Service for this flow takes approximately 7 minutes to complete.

See <b>Usage Instructions</b> below for steps to interact with this flow.

## Use Case Overview 
The IOT Data Pipeline workflow was created in support of the [How to Orchestrate a Data Pipeline on AWS with Control-M from BMC Software](https://aws.amazon.com/blogs/apn/how-to-orchestrate-a-data-pipeline-on-aws-with-control-m-from-bmc-software/) blog post. 

## Use Case Technical Explanation 
This workflow consists of dynamically created an EMR cluster in AWS with a Control-M Agent embedded in the master node. Once the EMR cluster is created, and the Control-M Agent is registered to the Control-M Server, the necessary Connection Profiles are deployed for Hadoop and MFT utilizing Connection-Profiles-as-Code. After, leveraging the Hadoop and MFT plugins, files are transferred from S3 into the EMR cluster for for Spark processing. After, text messages are sent utilitizing Amazon SNS to sharing the processed data.

To view the demo flow code-base please navigate to the [IOT Data Pipeline Git Repository](https://ctm-git.trybmc.com/automated-demos/iot-data-pipeline/-/tree/master)

## Job Types Included  
- OS (Perl)
- File Transfer (S3)
- File Transfer (Local File System)
- Hadoop (HDFS)
- Hadoop (Spark)
- Database (Redshift) / Dummy Job

## Usage Instructions
- Update Control-M Folder-level variables, <b> phone1 and phone2</b>, with valid values
- The format of the phone numbers should be in international format. For example, <b> +1555555555 </b>
- The first job in the workflow, USER_CODE-Create-Cluster, takes about 10 minutes to complete. This job is creating an EMR cluster and provisioning the Control-M Agent.

## Screenshot of Demo Flow

![](../images/iot.JPG)


