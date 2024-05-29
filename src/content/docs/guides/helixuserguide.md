#On-Demand Helix Demo User Guide

>Note the On-Demand Helix Demo Service will deploy demos into the Production Helix Control-M Tenant unless POV is specified and the additional parameters are completed (See Step 5 for more details).

1. Log into the [Control-M Production Demo System](https://ctm-aws-production.bmcdemo.com:8443)
2. Navigate to the Self-Service Portal in the  Monitoring Domain
3. Select Order Service
    ![](../images/order.JPG)
4. Select OnDemand Helix Demo
5. Complete the form
	- The **User Code** is a 3 letter, lower case, identifier used for Control-M Folder Name, Application, Sub-Application, Job Names, Agent Name, Hostgroup, and Kubernetes Resources.
	- The **Email Address** must be a valid BMC email address.
	- The **Time to Live (days)** is a list of duration values in days. This duration defines when the K8s resources created for the demo will be decommissioned.
	- The **Selected Demo** is a list of the available demos to be created On-Demand.
	- The **POV** parameter determines what environment to deploy the Demo and Helix Control-M Agent. <br>
			- If this is a demo in Production Helix Control-M, this should be **No**. _Note: if **No**, please ignore the remaining 3 fields in the form._ <br>
			- If this is for a POV, this should be **Yes**. <br>
	- If **POV** is Yes, the **POV Tenant AAPI Endpoint URL** is required in the format https://sample-tenant-aapi.us1.controlm.com/automation-api. For more information on how to generate this value please see the [Helix Control-M POV Setup Guide](http://ctm-aws-documentation.bmcdemo.com/selab/userguidehelix/). 
    - If **POV** is Yes, the **POV Tenant AAPI Token Value** is required. For more information on how to generate this value please see the [Helix Control-M POV Setup Guide](http://ctm-aws-documentation.bmcdemo.com/selab/userguidehelix/).
    - If **POV** is Yes, the **POV Tenant Agent Token Tag Name** is required. For more information on how to generate this value please see the [Helix Control-M POV Setup Guide](http://ctm-aws-documentation.bmcdemo.com/selab/userguidehelix/).
	![](../images/servicehelix.jpg)
6. Once the service is complete, you will recieve an email similar to the screenshot below containing details about the Demo: 
    ![](../images/emailhelixdemand.JPG)    
7. Once Service is complete, navigate to the Production Helix Control-M Tenant or your POV Tenant and order the folder beginning with your User Code followed by the name of the Preferred Demo
	- For Example: dba-forecast-flow 

    
## Usage Instructions
- Please keep in mind, you only have to complete the OnDemand Helix Demo service once, while the Agent is still available. All of the OnDemand Helix Demo flows can be re-run before the agent is decommissioned. 
- Depending on the selected OnDemand Helix Demo, completion times may vary. Please refer to the Demo Use Case Information section for more information on completion times.

## On Demand Helix Demo Use Cases
* [Forecast Flow](http://ctm-aws-documentation.bmcdemo.com/selab/forecastflow/)
* [Snowflake and AWS Data Pipeline](http://ctm-aws-documentation.bmcdemo.com/selab/snowaws/)
* [Snowflake and Azure Data Pipeline](http://ctm-aws-documentation.bmcdemo.com/selab/snowazure/)
* **And more to come!**