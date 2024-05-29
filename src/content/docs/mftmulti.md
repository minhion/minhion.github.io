# Multi-Cloud and MFT Standard Demo Flows
## Introduction
> Maintainer: <aaron_baldwin@bmc.com>

The Multi Cloud and MFT demo flows are loaded daily in AWS Sandbox, AWS Production, and Helix Control-M Production and execute at the following times:
Multi-Cloud - 0900
MFT - 1000

## Use Case Overview 
This workflow shows the ability of Control-M to orchestrate on each of the most common cloud providers, Azure, AWS, and GCP.  Additionally, there are connection profiles and MFT jobs to show the ability of Control-M to orchestrate file transfers using Azure Blob, S3, and GCloud Storage, in addition to SFTP. 

## Use Case Technical Discussion
There are 2 flows in this User case for Multi Cloud - 
- First, a flow of jobs with dependancies and a SLA that do simple OS commands on hosts in aws, azure, and gcp to show the ability to cross platforms, as well as different cloud providers.
- Second, a flow of MFT processes that do transfers between the different cloud storage providers.  There are zzz* centralized connection profiles built for each of these transfers.

To view the demo flow code-base please navigate to the [MFT Multi-Cloud Git Repository](https://ctm-git.trybmc.com/bmc-control-m/standard-demo-flows/zzz-multi-cloud-mft)

## Job Types Included  
OS
MFT - Azure
MFT - S3
MFT - S3 compatible (gcs)
SLA

## Screenshot of Demo Flow

![](../images/zzz-mftmulti.jpg)
