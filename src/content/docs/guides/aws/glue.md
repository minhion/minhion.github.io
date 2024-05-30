<!--- Comments: target=blank opens links in new tab --->
<base target="_blank">


**<h1 style="text-align: center;"><u>AWS Glue</u></h1>**

 <font size="3
 ">**AWS Glue** is a serverless data integration service that makes it easier to discover, prepare, move, and integrate data from multiple sources for analytics, machine learning (ML), and application development.  
 - <u>[**AWS Glue Additional Information**](https://aws.amazon.com/glue/)</u>



---

**<h2 style="text-align: Left;"><u>Use Case Overview</u></h2>**


This workflow will orchestrate AWS Glue to run the aws glue job <strong>customer_csv_to_paraquet</strong>.  The job will run twice in this flow.
<span style="color:Black">

**<h2 style="text-align: Left;"><u>Use Case Technical Discusson</u></h2>**


This workflow will start by orchestrating the AWS Glue job utilizing IAM (AWS identity and Access Management) to convert a csv file to a paraquet file.  It will then sleep for 60 seconds then run the same job again utilizing an access key.  The is also a dummy SLA job that doe not really do anything.

---

**<h2 style="text-align: Left;"><u>Demo Environment Jobs</u></h2>**



|Job Name|Execution|Glue Job|Connection Profile|
|-----------|------|-----|------------------|
|**zzz-glue-job-iam**|Executes AWS Glue job using IAM access|customer_csv_to_paraquet|AWS_GLUE_IAM|
|**zzz-sleep-timer**|Sleeps 60 Seconds|N/A|
|**zzz-glue-job-access-key**|Executes AWS Glue job using access Key|customer_csv_to_paraquet|AWS_GLUE_STANDARD|
|**zzz-glue-sla-job**|Dummy Job|N/A| |

---

**<h2 style="text-align: Left;"><u>Demo Environment Information</u></h2>**



|Environment|Status|Hosts/Hosts Group|Connection Profile|Site Standard|Folder Name|
|-----------|------|-----|------------------|-------------|---------|
|[**Helix Production**](https://se-prod.us1.controlm.com/ControlM/#Planning)|Available|zzz-linux-agents|Multiple (See Jobs)|SE Demo System Standard|zzz-aws-glue|
|[**Helix Pre-Prod**](https://se-preprod.us1.controlm.com/ControlM/Planning)|Not Available| ||
|[**Helix Sandbox**](https://se-dev.sandbox.us1.controlm.com/ControlM/Planning)|Not Available| | |


Duration: Takes about 4 Minutes 0 Seconds to complete

---

For additional information on the **Helix Conrtol-M AWS Glue job type** select the following link.

- <u>[**Control-M Integrations - Control-M for AWS Glue**](https://docs.bmc.com/docs/ctm_integrations/control-m-for-aws-glue-1004419560.html)</u>
- <u>[**Helix Control-M AWS Glue Job Typle Detail Information**](https://confluence.bmc.com/display/JDI/AWS+Glue)</u>
- <u>[**Helix Control-M AWS Glue Job Type Documentation**](https://documents.bmc.com/supportu/controlm-saas/en-US/Documentation/Jobs_for_Data_Integration.htm?Highlight=AWS%20Glue#AWS)</u>
</font>
