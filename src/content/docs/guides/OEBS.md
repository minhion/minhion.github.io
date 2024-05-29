<!--- Comments: target=blank opens links in new tab --->
<base target="_blank">


**<h1 style="text-align: center;"><u>OEBS</u></h1>**

 <font size="3
 ">**OEBS** is an integrated set of business applications developed by Oracle Corporation. OEBS provides a suite of enterprise resource planning (ERP) applications that help organizations manage their business processes across various functional areas such as finance, human resources, supply chain management, customer relationship management, and more.
 - <u>[**OEBS Additional Information**](https://docs.oracle.com/cd/E26401_01/nav/technology.htm)</u>


---

**<h2 style="text-align: Left;"><u>Use Case Overview</u></h2>**


This workflow will orchestrate OEBS to call (2) Single Requests and (1) Request Set. 


**<h2 style="text-align: Left;"><u>Use Case Technical Discusson</u></h2>**


This flow will call 'Users of Responsibility' single request, then 'CP Perl Regression Test' program request, and finally 'CP Regression Test Set' request set. The Request Set will intentionally fail, so you can demonstrate the output and remediation abilities of Control-M. Review the Oracle E-Business Suite tab in monitoring to see the steps/errors. 
<span style="color:Black">

---

**<h2 style="text-align: Left;"><u>Demo Environment Information</u></h2>**



|Environment|Status|Hosts/Hosts Group|Connection Profile|Site Standard|Demo Name|
|-----------|------|-----|------------------|-------------|---------|
|[**Helix Production**](https://se-prod.us1.controlm.com/ControlM/#Planning)|Available|vl-aus-ctm-er01-ctmhelix|ZZZ_OEBS|SE Demo System Standard|zzz-oebs|
|[**Helix Pre-Prod**](https://se-preprod.us1.controlm.com/ControlM/Planning)|Not Available| ||
|[**Helix Sandbox**](https://se-dev.sandbox.us1.controlm.com/ControlM/Planning)|Not Available| | |
---


Duration: Takes about 5 Minutes to complete

**<h2 style="text-align: Left;"><u>OEBS Plug-in enables you to:</u></h2>**


---

For additional information on the **Helix Conrtol-M OEBS job type** select the following link.
- <u>[**Helix Control-M OEBS Job Type Documentation**](https://docs.bmc.com/docs/ctmoebs9001/control-m-for-oracle-e-business-suite-9-0-01-home-793044526.html)</u>
</font>
