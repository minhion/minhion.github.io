<!--- Comments: target=blank opens links in new tab (this is being added to test commit)--->
<base target="_blank">


**<h1 style="text-align: center;"><u>Kubernetes</u></h1>**

 <font size="3
 ">**Kubernetes** also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.
 - <u>[**Kubernetes Additional Information**](https://kubernetes.io/)</u>


For additional information on **Kubernetes** select the following link.
- <u>[**Helix Control-M Kubernetes Job Type Detail Information**](https://confluence.bmc.com/display/JDI/GCP+Integrations)</u>
- <u>[**Kubernetes Documentation**](https://cloud.google.com/storage/docs)</u>
</font>

---

**<h2 style="text-align: Left;"><u>Use Case Overview</u></h2>**

<span style="color:Red">
This workflow will orchestrate file transfer jobs.
<span style="color:Black">

**<h2 style="text-align: Left;"><u>Use Case Technical Discusson</u></h2>**

<span style="color:Red">
This workflow will is meant to keep jobs in a folder until the folder is removed. If job does not end ok, then the folder will be kept for 1 day after job ends. 
<span style="color:Black">

---

**<h2 style="text-align: Left;"><u>Demo Environment Information</u></h2>**



|Environment|Status|Hosts/Hosts Group|Connection Profile|Site Standard|Demo Name|
|-----------|------|-----|------------------|-------------|---------|
|[**Helix Production**](https://se-prod.us1.controlm.com/ControlM/#Planning)|Available|zzz-linux-agent-1|ZZZ_K8S_CP|SE Demo System Standard|zzz-kubernetes|
|[**Helix Pre-Prod**](https://se-preprod.us1.controlm.com/ControlM/Planning)|Available|zzz-linux-agents|ZZZ-KUBERNETES-AWS-EKS|SE Demo System Standard|zzz-kubernetes-job-example ||
|[**Helix Sandbox**](https://se-dev.sandbox.us1.controlm.com/ControlM/Planning)|Not Available| | |
---

**<h2 style="text-align: Left;"><u>Demo Setup</u></h2>**

- Duplicate the zzz-kubernetes or zzz-kubernetes-job-example
- Name Workspace if desired
- Modify the folder Name to include your usercode
- Modify the Usercode for Site Standard to your usercode
- Modify the Job name to include your usercode
- Check In
- Run Workspace

Duration: Takes about 2 Minutes 30 Seconds to complete

**<h2 style="text-align: Left;"><u>Kubernetes Plug-in enables you to:</u></h2>**


* Connect to your Kubernetes service
* Add your batch job to the predefined Job Definition to the Job Queue, which holds requests for processing jobs and deliver those requests to processes running within the Compute Environment.
* Allow to override predefined parameters using the plugin job properties
* Monitor the run status of the job
* Integrate GCP Storage jobs with other Control-M jobs into a single orchestrated flow

