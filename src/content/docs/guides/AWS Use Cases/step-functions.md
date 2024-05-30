---
title: AWS Step Functions (via AWS Job)
description: Overview and technical discussion of orchestrating AWS Step Functions jobs.
---

# AWS Step Functions (via AWS Job)

**AWS Step Functions** is a visual workflow service that helps developers use AWS services to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning (ML) pipelines.

- **[AWS Step Functions Additional Information](https://aws.amazon.com/step-functions/)**

---

## Use Case Overview

This workflow will orchestrate AWS Step Functions to run a job to print out "Hello World".

## Use Case Technical Discussion

This workflow will start by orchestrating the Step Function service utilizing the state machine **mqn-state-machine** to execute **ani-state-machine**. This will execute two steps. The first one will be "Hello" and the second will be "World".

---

## Demo Environment Information

| Environment                                                   | Status        | Hosts/Hosts Group       | Connection Profile   | Site Standard         | Folder Name            |
|---------------------------------------------------------------|---------------|-------------------------|----------------------|-----------------------|------------------------|
| [**Helix Production**](https://se-prod.us1.controlm.com/ControlM/#Planning) | Available     | zzz-linux-agents        | ODD_AWSE_CP          | SE Demo System Standard | zzz-aws-step-functions |
| [**Helix Pre-Prod**](https://se-preprod.us1.controlm.com/ControlM/Planning) | Not Available |                         |                      |                       |                        |
| [**Helix Sandbox**](https://se-dev.sandbox.us1.controlm.com/ControlM/Planning) | Not Available |                         |                      |                       |                        |

Duration: Takes about 1 Minute 0 Seconds to complete

---

For additional information on the **Helix Control-M AWS Step Functions job type**, select the following links:

- **[Control-M Integrations - Control-M for AWS Step Functions](https://docs.bmc.com/docs/ctm_integrations/control-m-for-aws-step-functions-1177492107.html)**
- **[Helix Control-M AWS Step Functions Job Type Detail Information](https://confluence.bmc.com/display/JDI/AWS+Step+Functions)**
- **[Helix Control-M AWS Step Functions Job Type Documentation](https://documents.bmc.com/supportu/controlm-saas/en-US/Documentation/Jobs_for_Application_Workflows.htm?Highlight=Step%20Function)**
