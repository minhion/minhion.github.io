<!--- Comments: target=blank opens links in new tab --->
<base target="_blank">


**<h1 style="text-align: center;"><u>AWS Batch</u></h1>**

 <font size="3
 ">**AWS Batch** is a fully managed batch computing service that plans, schedules, and runs your containerized batch or ML workloads across the full range of AWS compute offerings, such as Amazon ECS, Amazon EKS, AWS Fargate, and Spot or On-Demand Instances.  
 - <u>[**AWS Batch Additional Information**](https://aws.amazon.com/batch/)</u>


---

**<h2 style="text-align: Left;"><u>Use Case Overview</u></h2>**


This workflow will orchestrate AWS Batch to run a job with alternate output based off of the revision number. 


**<h2 style="text-align: Left;"><u>Use Case Technical Discusson</u></h2>**


This workflow will start by orchestrating AWS to create a compute environment <strong>first-job-run-environment</strong> using EC2 as the provisioning model.  A job queue <strong>first-run-job-queue</strong> is defined.  Depending on the run (1 or 2), job definitions for the <strong>first-run-batch</strong> job will change.  On run 1 the first-run-batch job performs an “echo hello world” where as on run 2 the first-run-batch job performs a “echo Howdy, world” command.   
<span style="color:Black">

---

**<h2 style="text-align: Left;"><u>Demo Environment Information</u></h2>**



|Environment|Status|Hosts/Hosts Group|Connection Profile|Site Standard|Folder Name|
|-----------|------|-----|------------------|-------------|---------|
|[**Helix Production**](https://se-prod.us1.controlm.com/ControlM/#Planning)|Available|zzz-linux-agents|ODD_AWS_BATCH_CP|SE Demo System Standard|zzz-aws-batch|
|[**Helix Pre-Prod**](https://se-preprod.us1.controlm.com/ControlM/Planning)|Not Available| ||
|[**Helix Sandbox**](https://se-dev.sandbox.us1.controlm.com/ControlM/Planning)|Not Available| | |
---


Duration: Takes about 2 Minutes 30 Seconds to complete


For additional information on the **Helix Conrtol-M AWS Batch job type** select the following link.

- <u>[**Control-M Integrations - Control-M for AWS Batch**](https://docs.bmc.com/docs/ctm_integrations/control-m-for-aws-batch-1167793388.html)</u>
- <u>[**Helix Control-M AWS Batch Job Typle Detail Information**](https://confluence.bmc.com/display/JDI/AWS+Batch)</u>
- <u>[**Helix Control-M AWS Batch Job Type Documentation**](https://documents.bmc.com/supportu/controlm-saas/en-US/Documentation/Jobs_for_Cloud_Computing.htm#AWS)</u>
</font>
