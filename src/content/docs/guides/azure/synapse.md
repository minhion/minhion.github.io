---
title: Azure Synapse Analytics
description: Overview and technical discussion of orchestrating Azure Synapse Analytics jobs.
---

# Azure Synapse Analytics

**Azure Synapse Analytics** is a limitless analytics service that brings together data integration, enterprise data warehousing, and big data analytics. It gives you the freedom to query data on your terms, using either serverless or dedicated resources—at scale. Azure Synapse brings these worlds together with a unified experience to ingest, explore, prepare, manage, and serve data for immediate BI and machine learning needs.

- **[Azure Synapse Additional Information](https://azure.microsoft.com/en-us/products/synapse-analytics#overview)**

---

## Use Case Overview

This workflow will trigger an Azure Synapse pipeline: HelloWorldPipeline_copy1 twice using 2 different authentication mechanisms, Service Principal and Managed Identity.

## Use Case Technical Discussion

This pipeline starts by doing XYZ.

---

## Demo Environment Jobs

| Job Name                 | Execution                                            | Pipeline Name             | Connection Profile   |
|--------------------------|------------------------------------------------------|---------------------------|----------------------|
| **zzz-azure-synapse-job** | Executes Azure Synapse job using Service Principal access | HelloWorldPipeline_copy1   | ASA_STANDARD_CP      |
| **zzz-azure-synapse-mi**  | Executes Azure Synapse job using Managed Identity   | HelloWorldPipeline_copy1   | ASA_STANDARD_MI      |

---

## Demo Environment Information

| Environment                                                   | Status        | Hosts/Hosts Group                     | Connection Profile         | Site Standard         | Folder Name                  |
|---------------------------------------------------------------|---------------|---------------------------------------|----------------------------|-----------------------|------------------------------|
| [**Helix Production**](https://se-prod.us1.controlm.com/ControlM/#Planning) | Available     | zzz-linux-agents                      | ASA_STANDARD_CP, ASA_STANDARD_MI | SE Demo System Standard | zzz-azure-synapse-analytics  |
| [**Helix Pre-Prod**](https://se-preprod.us1.controlm.com/ControlM/Planning) | Not Available |                                       |                            |                       |                              |
| [**Helix Sandbox**](https://se-dev.sandbox.us1.controlm.com/ControlM/Planning) | Not Available |                                       |                            |                       |                              |

Duration: Takes about 6 Minutes to complete.

---

For additional information on the **Helix Control-M Azure Synapse job type**, select the following links:

- **[Control-M Integrations - Control-M for Azure Synapse](https://docs.bmc.com/docs/ctm_integrations/control-m-for-azure-synapse-1106228085.html)**
- **[Helix Control-M Azure Synapse Job Type Detail Information](https://confluence.bmc.com/display/JDI/Azure+Synapse)**
- **[Helix Control-M Azure Synapse Job Type Documentation](https://documents.bmc.com/supportu/controlm-saas/en-US/Documentation/Jobs_for_Data_Processing.htm#AzureSynapseJob)**
