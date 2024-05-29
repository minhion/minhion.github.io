# Snowflake and AWS Data Pipeline
## Introduction
> Maintainer: <brandi_coleman@bmc.com>

This flow is ordered daily via the zzz-order process in aws production, and runs at 10:00 UTC each day.
Each day, there is also a cleanup process that removes the flow and containerized agent that it runs on.

This use case is also an On-Demand demo. The On-Demand Demo Service for this flow takes approximately 7 minutes to complete.

<b>This use case is available for the AWS Demo System and Helix Control-M Production Demo System via the OnDemand Demo and OnDemand Helix Demo orderable services.</b> 

## Use Case Overview 
This workflow will utilize applications such as Snowflake, Kafka, and Lambda  to create a aws-centric data pipeline.

## Use Case Technical 
The first job in this workflow will conduct a Snowflake query which will select specific information to put into a csv file on the local pod. The file is then transfered to S3 as well as Lambda. The Kafka CLI is installed for this demo which will first create a topic, then put a message on the topic to say "Hello World" and subsequently delete the topic within Kafka. There is a databricks job type that will utilize spark and create a notebook. The flow has an SLA Management job type at the end as well to monitor the entire data pipeline. 

To view the demo flow code-base please navigate to the [Snowflake and AWS Data Pipeline Git Repository](https://ctm-git.trybmc.com/automated-demos/snowflake-data-pipeline/-/tree/master)

## Job Types Included  
- File Transfer (S3)
- AWS (Lambda)
- File Transfer (Local File System)
- OS (Kafka)
- Database Embedded Query (Snowflake)
- Hadoop (Dummy Job)
- SLA Management

## Screenshot of Demo Flow

![](../images/snowaws.JPG)

