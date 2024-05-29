# AWS ECS (Elastic Container Service)
## Introduction
> Maintainer: <jon_fink@bmc.com>

The On-Demand Demo Service for this flow takes approximately 7 minutes to complete.

See **Usage Instructions** below for steps to interact with this flow.

## Use Case Overview

This use case was created to demonstrate Control-M's ability to integrate with AWS Elastic Container service.  It also implements AWS Fargate serverless compute for containers.

Please visit [Amazon ECS Workshop](https://ecsworkshop.com/) for more information.

![](../images/ctmecs.png)

![](../images/aecs.gif)

## Use Case Technical Discussion

This workflow runs the ever familiar Forecast Flow.  In this case each Job implements the "AI ECS RunTask CLI" jobtype to carry out the commands.  The specific use case for this AI jobtype is to launch a Cluster Task (with single Container) in order to run a command/script and monitor that command to completion.  Success of the Job is determined by the exit code of the command/script.  The jobtype was designed specifically to replace [Airflow's ECS Operator](https://airflow.apache.org/docs/apache-airflow-providers-amazon/stable/operators/ecs.html)

Since the Forecast is generated across multiple Control-M Jobs, then there is the need to persist data from one Job to the next.  In order to do this the ECS Task definition mounts an EFS volume.  The last Job in the workflow cleans up the persisted forecast data.

To view the demo flow code-base please navigate to the [AWS ECS Git Repository](https://ctm-git.trybmc.com/automated-demos/aws-elastic-container-service)

## Job Types Included

AI ECS RunTask CLI (ECSRUNCLI)

## Screenshot of Demo Flow

![](../images/aws_ecs.jpg)