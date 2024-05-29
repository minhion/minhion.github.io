<!--- Comments: target=blank opens links in new tab --->
<base target="_blank">


**<h1 style="text-align: center;"><u>AWS Lambda</u>
(via AWS Job)</h1>**


 <font size="3
 ">**AWS Lambda** AWS Lambda is a compute service that lets you run code without provisioning or managing servers.  
 - <u>[**AWS Lambda Additional Information**](https://aws.amazon.com/lambda/)</u>


---

**<h2 style="text-align: Left;"><u>Use Case Overview</u></h2>**


This workflow will orchestrate AWS Lambda to run a job.


**<h2 style="text-align: Left;"><u>Use Case Technical Discusson</u></h2>**


This workflow will start by orchestrating AWS to create a compute environment <strong>first-job-run-environment</strong> using EC2 as the provisioning model.  A job queue <strong>first-run-job-queue</strong> is defined.  Depending on the run (1 or 2), job definitions for the <strong>first-run-batch</strong> job will change.  On run 1 the first-run-batch job performs an “echo hello world” where as on run 2 the first-run-batch job performs a “echo Howdy, world” command.   
<span style="color:Black">

---

**<h2 style="text-align: Left;"><u>Demo Environment Information</u></h2>**


|Environment|Status|Hosts/Hosts Group|Connection Profile|Site Standard|Folder Name|
|-----------|------|-----|------------------|-------------|---------|
|[**Helix Production**](https://se-prod.us1.controlm.com/ControlM/#Planning)|Available|zzz-linux-agents|ZZZ_AWS|SE Demo System Standard|zzz-aws-lambda-demo|
|[**Helix Pre-Prod**](https://se-preprod.us1.controlm.com/ControlM/Planning)|Not Available| ||
|[**Helix Sandbox**](https://se-dev.sandbox.us1.controlm.com/ControlM/Planning)|Not Available| | |


Duration: Takes about 2 Seconds to complete


---

For additional information on the **Helix Conrtol-M AWS Job (Lambda) type** select the following link.

- <u>[**Helix Control-M AWS Batch Job Type Documentation**](https://documents.bmc.com/supportu/controlm-saas/en-US/Documentation/AWS_Job_parameters.htm)</u>
</font>
