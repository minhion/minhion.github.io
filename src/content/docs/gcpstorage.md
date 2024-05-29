<!--- Comments: target=blank opens links in new tab (this is being added to test commit)--->
<base target="_blank">


**<h1 style="text-align: center;"><u>GCP Storage</u></h1>**

 <font size="3
 ">**GCP storage** cloud Storage is a managed service for storing unstructured data. Store any amount of data and retrieve it as often as you like.  
 - <u>[**GCP Storage Additional Information**](https://cloud.google.com/storage/)</u>


For additional information on **GCP Storage** select the following link.
- <u>[**Helix Control-M GCP Storage Job Type Detail Information**](https://confluence.bmc.com/display/JDI/GCP+Integrations)</u>
- <u>[**GCP Storage Documentation**](https://cloud.google.com/storage/docs)</u>
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
|[**Helix Production**](https://se-prod.us1.controlm.com/ControlM/#Planning)|Available|zzz-linux-agents|zzz_local and zzz_gcp_s3|SE Demo System Standard|zzz-gcp-storage-demo|
|[**Helix Pre-Prod**](https://se-preprod.us1.controlm.com/ControlM/Planning)|Available|zzz-linux-agents|zzz_local and zzz_gcp_s3|SE Demo System Standard|zzz-gcp-storage-demo ||
|[**Helix Sandbox**](https://se-dev.sandbox.us1.controlm.com/ControlM/Planning)|Not Available| | |
---


