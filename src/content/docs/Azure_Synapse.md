<!--- Comments: target=blank opens links in new tab --->
<base target="_blank">


**<h1 style="text-align: center;"><u>Azure Synapse Analytics</u></h1>**

 <font size="3
 ">**Azure Synapse Analytics** is a limitless analytics service that brings together data integration, enterprise data warehousing, and big data analytics. It gives you the freedom to query data on your terms, using either serverless or dedicated resources—at scale. Azure Synapse brings these worlds together with a unified experience to ingest, explore, prepare, manage, and serve data for immediate BI and machine learning needs. 
 - <u>[**Azure Synapse Additional Information**](https://azure.microsoft.com/en-us/products/synapse-analytics#overview)</u>


---

**<h2 style="text-align: Left;"><u>Use Case Overview</u></h2>**


This workflow will trigger a Azure Synapse pipeline: HelloWorldPipeline_copy1 twice using 2 different authentication mechanisms, Service Principal and Managed Identity. 


**<h2 style="text-align: Left;"><u>Use Case Technical Discusson</u></h2>**


This pipeline starts by doing XYZ.
<span style="color:Black">

---
**<h2 style="text-align: Left;"><u>Demo Environment Jobs</u></h2>**


|Job Name|Execution|Pipeline Name|Connection Profile|
|-----------|------|-----|------------------|
|**zzz-azure-synapse-job**|Executes Azure Synapse job using Service Principal access|HelloWorldPipeline_copy1|ASA_STANDARD_CP|
|**zzz-azure-synapse-mi**|Executes Azure Synapse job using Managed Identity|HelloWorldPipeline_copy1|ASA_STANDARD_MI|

---
**<h2 style="text-align: Left;"><u>Demo Environment Information</u></h2>**

|Environment|Status|Hosts/Hosts Group|Connection Profile|Site Standard|Folder Name|
|-----------|------|-----|------------------|-------------|---------|
|[**Helix Production**](https://se-prod.us1.controlm.com/ControlM/#Planning)|Available|zzz-linux-agents|ASA_STANDARD_CP,ASA_STANDARD_MI|SE Demo System Standard|zzz-azure-synapse-analytics|
|[**Helix Pre-Prod**](https://se-preprod.us1.controlm.com/ControlM/Planning)|Not Available| ||
|[**Helix Sandbox**](https://se-dev.sandbox.us1.controlm.com/ControlM/Planning)|Not Available| | |
---


Duration: Takes about 6 Minutes to complete.


For additional information on the **Helix Conrtol-M Azure Synapse job type** select the following link.

- <u>[**Control-M Integrations - Control-M for Azure Synapse**](https://docs.bmc.com/docs/ctm_integrations/control-m-for-azure-synapse-1106228085.html)</u>
- <u>[**Helix Control-M Azure Synapse Job Typle Detail Information**](https://confluence.bmc.com/display/JDI/Azure+Synapse)</u>
- <u>[**Helix Control-M Azure Synapse Job Type Documentation**](https://documents.bmc.com/supportu/controlm-saas/en-US/Documentation/Jobs_for_Data_Processing.htm#AzureSynapseJob)</u>
</font>
