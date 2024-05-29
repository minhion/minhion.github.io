#On-Demand Demo User Guide


1. Log into the [Control-M Production Demo System](https://ctm-aws-production.bmcdemo.com:8443)
2. Navigate to the Self-Service Portal in the  Monitoring Domain
3. Select Order Service
    ![](../images/order.JPG)
4. Select OnDemand Demo
5. Complete the form
	- The **User Code** is a 3 letter, lower case, identifier used for Control-M Folder Name, Application, Sub-Application, Job Names, Agent Name, Hostgroup, and Kubernetes Resources.
	- The **Email Address** must be a valid BMC email address.
	- The **Time to Live (days)** is a list of duration values in days. This duration defines when the K8s resources created for the demo will be decommissioned.
	- The **Selected Demo** is a list of the available demos to be created On-Demand.
    ![](../images/form.jpg)
6. Once the service is complete, you will recieve an email similar to the screenshot below containing details about the Demo 
    ![](../images/email.JPG)    
7. Once Service is complete, Order the folder beginning with your User Code followed by the name of the Preferred Demo
	- For Example: dba_forecast_flow 
    
## Usage Instructions
- Please keep in mind, you only have to complete the OnDemand Demo service once, while the Agent is still avaiable. All of the OnDemand Demo flows can be re-run before the Decommission Date. 
- Depending on the selected OnDemand Demo, completion times may vary. Please refer to the Demo Use Case Information section for more information on completion times.

