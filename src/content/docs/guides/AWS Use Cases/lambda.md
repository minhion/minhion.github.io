---
title: AWS Lambda (via AWS Job)
description: Overview and technical discussion of orchestrating AWS Lambda jobs.
---

# AWS Lambda (via AWS Job)

**AWS Lambda** is a compute service that lets you run code without provisioning or managing servers.

- **[AWS Lambda Additional Information](https://aws.amazon.com/lambda/)**

---

## Use Case Overview

This workflow will orchestrate AWS Lambda to run a job.

## Use Case Technical Discussion

This workflow will start by orchestrating AWS to create a compute environment **first-job-run-environment** using EC2 as the provisioning model. A job queue **first-run-job-queue** is defined. Depending on the run (1 or 2), job definitions for the **first-run-batch** job will change. On run 1, the first-run-batch job performs an “echo hello world” command, whereas on run 2, the first-run-batch job performs an “echo Howdy, world” command.

---

## Demo Environment Information

| Environment                                                   | Status        | Hosts/Hosts Group       | Connection Profile | Site Standard         | Folder Name           |
|---------------------------------------------------------------|---------------|-------------------------|--------------------|-----------------------|-----------------------|
| [**Helix Production**](https://se-prod.us1.controlm.com/ControlM/#Planning) | Available     | zzz-linux-agents        | ZZZ_AWS            | SE Demo System Standard | zzz-aws-lambda-demo   |
| [**Helix Pre-Prod**](https://se-preprod.us1.controlm.com/ControlM/Planning) | Not Available |                         |                    |                       |                       |
| [**Helix Sandbox**](https://se-dev.sandbox.us1.controlm.com/ControlM/Planning) | Not Available |                         |                    |                       |                       |

Duration: Takes about 2 Seconds to complete

---

For additional information on the **Helix Control-M AWS Job (Lambda) type**, select the following link:

- **[Helix Control-M AWS Batch Job Type Documentation](https://documents.bmc.com/supportu/controlm-saas/en-US/Documentation/AWS_Job_parameters.htm)**
