# GCP Fraud Detection Model
## Introduction
>Maintainer: <joe_goldberg@bmc.com>

This flow is ordered daily in the AWS Production Demo System.

## Use Case Overview
Three csv files containing new transaction, historical fraud data and personal information are dropped into storage. The new data is added to transaction history and fraud detection models can then be tested against new data. The services used here are Google Cloud Storage, Google Cloud Dataflow and Google BigQuery. 

## Use Case Technical Explanation
This workflow features accessing Google Cloud Storage and AWS S3 using S3 Compatibility support in Control-M Managed File Transfer, Application Integrator job type for GCP Dataflow provided by the Integrations team in Github and Control-M for Databases support for BigQuery via the Simba JDBC driver recommended by Google. 

## Job Types Included
•	MFT (AWS S3 to GCP Storage Transfer)
•	AI Dataflow
•	Database Embedded Query (Big Query)
•	SLA Management

## Usage Instructions
•	The folder that is ordered daily in Production is <b>zzz-mc-gcp-fraud-detection</b>.

## Screenshot of Demo Flow
![](../images/gcp.JPG)


