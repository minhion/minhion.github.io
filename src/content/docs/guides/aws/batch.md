---
title: "AWS Batch"
description: "AWS Batch Use Case"
---

# AWS Batch

**AWS Batch** is a fully managed batch computing service that plans, schedules, and runs your containerized batch or ML workloads across the full range of AWS compute offerings, such as Amazon ECS, Amazon EKS, AWS Fargate, and Spot or On-Demand Instances.

- **[AWS Batch Additional Information](https://aws.amazon.com/batch/)**

---

## Use Case Overview

This workflow will orchestrate AWS Batch to run a job with alternate output based on the revision number.

## Use Case Technical Discussion

This workflow will start by orchestrating AWS to create a compute environment **first-job-run-environment** using EC2 as the provisioning model. A job queue **first-run-job-queue** is defined. Depending on the run (1 or 2), job definitions for the **first-run-batch** job will change. On run 1, the first-run-batch job performs an “echo hello world” command, whereas on run 2, the first-run-batch job performs an “echo Howdy, world” command.

---

## Demo Environment Information

| Environment | Status        | Hosts/Hosts Group         | Connection Profile   | Site Standard         | Folder Name    |
|-------------|---------------|---------------------------|----------------------|-----------------------|----------------|
| [**Helix Production**](https://se-prod.us1.controlm.com/ControlM/#Planning) | Available     | zzz-linux-agents        | ODD_AWS_BATCH_CP       | SE Demo System Standard | zzz-aws-batch  |
| [**Helix Pre-Prod**](https://se-preprod.us1.controlm.com/ControlM/Planning) | Not Available |                           |                      |                       |                |
| [**Helix Sandbox**](https://se-dev.sandbox.us1.controlm.com/ControlM/Planning) | Not Available |                           |                      |                       |                |

Duration: Takes about 2 Minutes 30 Seconds to complete

---

For additional information on the **Helix Control-M AWS Batch job type**, select the following links:

- **[Control-M Integrations - Control-M for AWS Batch](https://docs.bmc.com/docs/ctm_integrations/control-m-for-aws-batch-1167793388.html)**
- **[Helix Control-M AWS Batch Job Type Detail Information](https://confluence.bmc.com/display/JDI/AWS+Batch)**
- **[Helix Control-M AWS Batch Job Type Documentation](https://documents.bmc.com/supportu/controlm-saas/en-US/Documentation/Jobs_for_Cloud_Computing.htm#AWS)**
