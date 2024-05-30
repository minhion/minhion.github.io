---
title: AWS Glue
description: Overview and technical discussion of orchestrating AWS Glue jobs.
---

# AWS Glue

**AWS Glue** is a serverless data integration service that makes it easier to discover, prepare, move, and integrate data from multiple sources for analytics, machine learning (ML), and application development.  
- **[AWS Glue Additional Information](https://aws.amazon.com/glue/)**

---

## Use Case Overview

This workflow will orchestrate AWS Glue to run the AWS Glue job **customer_csv_to_parquet**. The job will run twice in this flow.

## Use Case Technical Discussion

This workflow will start by orchestrating the AWS Glue job utilizing IAM (AWS Identity and Access Management) to convert a CSV file to a Parquet file. It will then sleep for 60 seconds and run the same job again utilizing an access key. There is also a dummy SLA job that does not really do anything.

---

## Demo Environment Jobs

| Job Name                 | Execution                                    | Glue Job                  | Connection Profile  |
|--------------------------|----------------------------------------------|---------------------------|---------------------|
| **zzz-glue-job-iam**     | Executes AWS Glue job using IAM access       | customer_csv_to_parquet   | AWS_GLUE_IAM        |
| **zzz-sleep-timer**      | Sleeps 60 Seconds                            | N/A                       |                     |
| **zzz-glue-job-access-key** | Executes AWS Glue job using access key    | customer_csv_to_parquet   | AWS_GLUE_STANDARD   |
| **zzz-glue-sla-job**     | Dummy Job                                    | N/A                       |                     |

---

## Demo Environment Information

| Environment                                                   | Status        | Hosts/Hosts Group       | Connection Profile          | Site Standard          | Folder Name     |
|---------------------------------------------------------------|---------------|-------------------------|-----------------------------|------------------------|-----------------|
| [**Helix Production**](https://se-prod.us1.controlm.com/ControlM/#Planning) | Available     | zzz-linux-agents        | Multiple (See Jobs)         | SE Demo System Standard | zzz-aws-glue    |
| [**Helix Pre-Prod**](https://se-preprod.us1.controlm.com/ControlM/Planning) | Not Available |                         |                             |                        |                 |
| [**Helix Sandbox**](https://se-dev.sandbox.us1.controlm.com/ControlM/Planning) | Not Available |                         |                             |                        |                 |

Duration: Takes about 4 Minutes 0 Seconds to complete

---

For additional information on the **Helix Control-M AWS Glue job type**, select the following links:

- **[Control-M Integrations - Control-M for AWS Glue](https://docs.bmc.com/docs/ctm_integrations/control-m-for-aws-glue-1004419560.html)**
- **[Helix Control-M AWS Glue Job Type Detail Information](https://confluence.bmc.com/display/JDI/AWS+Glue)**
- **[Helix Control-M AWS Glue Job Type Documentation](https://documents.bmc.com/supportu/controlm-saas/en-US/Documentation/Jobs_for_Data_Integration.htm?Highlight=AWS%20Glue#AWS)**
