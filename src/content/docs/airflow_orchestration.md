# Airflow Orchestration
## Introduction
> Maintainer: <brandi_coleman@bmc.com>

The On-Demand Demo Service for this flow takes approximately 10 minutes to complete.

See <b>Usage Instructions</b> below for steps to interact with this flow.

## Use Case Overview 
This workflow will orchestrate Airflow to run 3 DAGS in sequence. 

## Use Case Technical Discussion
This workflow will start by orchestrating Airflow to create three DAGS in sequence. The first DAG is used for tutorials and will use the bash command to print the date. The second DAG will run the sleep command for 5 seconds. The third DAG will run a templated command with a parameter that is passed in. 

To view the demo flow code-base please navigate to the [Airflow Orchestration Git Repository](https://ctm-git.trybmc.com/automated-demos/airflow-orchestration/-/tree/master)


## Job Types Included
- AI Airflow

## Usage Instructions
- The Airflow Web UI is accessible for this demo. To obtain the URL please navigate to the OnDemand Demo job, and parse for the Return Airflow Web Server step in the Output
- The jobs in this workflow run slowly, between 10-20 minutes, depending on the DAG that is being triggered. This functionality is normal as the Airflow environment utilizes a lot of resources. 

## Screenshot of Demo Flow
![airflow](../images/airflow.JPG)