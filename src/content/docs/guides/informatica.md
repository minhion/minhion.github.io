<!--- Comments: target=blank opens links in new tab --->
<base target="_blank">


**<h1 style="text-align: center;"><u>Informatica</u></h1>**

**<h2 style="text-align: Left;"><u>Use Case Overview</u></h2>**

This demo showcases Control-M's ability to integrate with Informatica and for Extract, Transform, and Load (ETL) of data. This enables Control-M to control, operate and schedule Informatica workflows allowing actions like run, stop and resume workflows. An Informatica workflow is the equivalent of a SMART folder in Control-M.

The Informatica server must have Web Services Hub enabled. <a href="https://www.youtube.com/watch?v=UYK3Tb1rstY" target="_blank">Click here for information on setting up WS hub.</a> Please refer to below diagram for reference.

**<h2 style="text-align: Left;"><u>Use Case Technical Discusson</u></h2>**

**zzz-wf-call** job calls **WF_Test_Success** workflow containing 1 session named **s_MapTest_Success**. Control-M will monitor the sessions for success or failure. Sessions are what Informatica uses to process data. Sessions are also used to run **Mappings**. They can run in any order and are the key component of a workflow. Mappings represent the data flow between sources and targets to define during transformation on how the data is loaded into the data warehouse.

**zzz-wf-long-run** job also calls **WF_Test_Success** workflow containing 1 session named **s_MapTest_Success**. This job demonstrates the use of **Timers** job type in Informatica Workflow Designer to delay job processing.

---

**<h2 style="text-align: Left;"><u>Demo Environment Information</u></h2>**

|Environment|Status|Hosts/Hosts Group|Connection Profile|Site Standard|Folder Name|
|-----------|------|-----|------------------|-------------|---------|
|[**Helix Production**](https://se-prod.us1.controlm.com/ControlM/#Planning)|Available|vl-aus-ctm-ap01-ctmhelix|ZZZ_INFORMATICA|SE Demo System Standard|zzz-informatica|
|[**Helix Pre-Prod**](https://se-preprod.us1.controlm.com/ControlM/Planning)|Not Available| ||
|[**Helix Sandbox**](https://se-dev.sandbox.us1.controlm.com/ControlM/Planning)|Not Available| | |
---


Duration: Takes about 2 Minutes to complete


