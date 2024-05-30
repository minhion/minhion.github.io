---
title: Azure Data Factory
description: Overview and technical discussion of orchestrating Azure Data Factory pipelines.
---

# Azure Data Factory

**Azure Data Factory** is a cloud-based data integration service provided by Microsoft Azure. It allows you to create, schedule, and manage data pipelines that ingest, transform, and load data from various sources to different destinations. It serves as a central hub for data integration and orchestrates the movement and transformation of data in a scalable and automated manner.

- **[Azure Data Factory Additional Information](https://azure.microsoft.com/en-us/products/data-factory/?ef_id=_k_b747af437aea1efb3e44cb3a817ee098_k_&OCID=AIDcmm5edswduu_SEM__k_b747af437aea1efb3e44cb3a817ee098_k_&msclkid=b747af437aea1efb3e44cb3a817ee098#overview)**

---

## Use Case Overview

This workflow will orchestrate the Azure Data Factory pipeline: automated-demo-copy-pipeline.

## Use Case Technical Discussion

This pipeline starts by doing XYZ.

---

## Demo Environment Information

| Environment                                                   | Status        | Hosts/Hosts Group                     | Connection Profile                  | Site Standard         | Folder Name           |
|---------------------------------------------------------------|---------------|---------------------------------------|-------------------------------------|-----------------------|-----------------------|
| [**Helix Production**](https://se-prod.us1.controlm.com/ControlM/#Planning) | Available     | zzz-linux-agent-1, zzz-linux-agent-0, zzz-azure-linux-1 | ODD_ADF_CP, ADF_STANDARD_CP         | SE Demo System Standard | zzz-azure-data-factory |
| [**Helix Pre-Prod**](https://se-preprod.us1.controlm.com/ControlM/Planning) | Available     | zzz-linux-agent-1, zzz-linux-agent-0, dco_dc01_saasagpre | BHO_ADF_CP, BHO_CP, ZZZ-AZURE-DATA-FACTORY | SE Demo System Standard | zzz-azure-data-factory |
| [**Helix Sandbox**](https://se-dev.sandbox.us1.controlm.com/ControlM/Planning) | Not Available |                                       |                                     |                       |                       |

Duration: Takes about 2 Minutes 30 Seconds to complete

---

For additional information on the **Azure Data Factory job type**, select the following links:

- **[Control-M Integrations - Control-M for Azure Data Factory](https://docs.bmc.com/docs/ctm_integrations/control-m-for-azure-data-factory-994589887.html)**
- **[Azure Data Factory Type Detail Information](https://confluence.bmc.com/display/JDI/Azure+Data+Factory)**
- **[Helix Control-M Azure Data Factory Job Type Documentation](https://documents.bmc.com/supportu/controlm-saas/en-US/Documentation/Jobs_for_Data_Integration.htm#AzureDataFactoryJob)**
