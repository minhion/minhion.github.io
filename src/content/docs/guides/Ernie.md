<!--- Comments: target=blank opens links in new tab --->
<base target="_blank">


**<h1 style="text-align: center;"><u>AWS Batch</u></h1>**

 <font size="3
 ">**AWS Batch** is a fully managed batch computing service that plans, schedules, and runs your containerized batch or ML workloads across the full range of AWS compute offerings, such as Amazon ECS, Amazon EKS, AWS Fargate, and Spot or On-Demand Instances.  
 - <u>[**AWS Batch Additional Information**](https://aws.amazon.com/batch/)</u>


For additional information on the **Helix Conrtol-M AWS Batch job type** select the following link.
- <u>[**Helix Control-M AWS Batch Job Typle Detail Information**](https://confluence.bmc.com/display/JDI/AWS+Batch)</u>
- <u>[**Helix Control-M AWS Batch Job Type Documentation**](https://documents.bmc.com/supportu/controlm-saas/en-US/Documentation/Jobs_for_Cloud_Computing.htm#AWS)</u>
</font>

---

**<h2 style="text-align: Left;"><u>Use Case Overview</u></h2>**

<span style="color:Red">
This workflow will orchestrate Airflow to run 3 DAGS in sequence.
<span style="color:Black">

**<h2 style="text-align: Left;"><u>Use Case Technical Discusson</u></h2>**

<span style="color:Red">
This workflow will start by orchestrating Airflow to create three DAGS in sequence. The first DAG is used for tutorials and will use the bash command to print the date. The second DAG will run the sleep command for 5 seconds. The third DAG will run a templated command with a parameter that is passed in. 
<span style="color:Black">

---

**<h2 style="text-align: Left;"><u>Demo Environment Information</u></h2>**



|Environment|Status|Hosts/Hosts Group|Connection Profile|Site Standard|Demo Name|
|-----------|------|-----|------------------|-------------|---------|
|[**Helix Production**](https://se-prod.us1.controlm.com/ControlM/#Planning)|Available|zzz-linux-agents|ODD_AWS_BATCH_CP|SE Demo System Standard|zzz-aws-batch|
|[**Helix Pre-Prod**](https://se-preprod.us1.controlm.com/ControlM/Planning)|Not Available| ||
|[**Helix Sandbox**](https://se-dev.sandbox.us1.controlm.com/ControlM/Planning)|Not Available| | |
---

**<h2 style="text-align: Left;"><u>Demo Setup</u></h2>**

- Duplicate the zzz-aws-batch folder
- Name Workspace if desired
- Modify the folder Name to include your usercode
- Modify the Usercode for Site Standard to your usercode
- Modify the Job name to include your usercode
- Check In
- Run Workspace

Duration: Takes about 2 Minutes 30 Seconds to complete

**<h2 style="text-align: Left;"><u>AWS Batch Plug-in enables you to:</u></h2>**


* Connect to your AWS Batch service
* Add your batch job to the predefined Job Definition to the Job Queue, which holds requests for processing jobs and deliver those requests to processes running within the Compute Environment.
* Allow to override predefined parameters using the plugin job properties
* Monitor the run status of the job
* Integrate AWS Batch jobs with other Control-M jobs into a single orchestrated flow

