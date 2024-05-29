#On-Demand Agent Creation User Guide

1. Log into the [Control-M Sandbox Demo System](https://ctm-aws-sandbox.bmcdemo.com:8443)
2. Navigate to the Self-Service Portal in the  Monitoring Domain
3. Select Order Service
    ![](../images/order.JPG)
4. Select Order OnDemand Agent Creation
5. Complete the form 
    - The **User Code** is a 3 letter, lower case, identifier used for Control-M Agent Name, Hostgroup, and Kubernetes Resources.
    - The **Email Address** must be a valid BMC email address.
    - The **Decommission Date** has the required format YYYYMMDD. This date defines when the K8s resources created for the demo will be decommissioned.
    ![](../images/agentform.jpg)
6. Once the service is complete, you will recieve an email similar to the screenshot below containing details about the Agent
    ![](../images/agentemail.JPG)

## Usage Instructions
- Please keep in mind, you will lose access to the Agent after 0500 CST on the Decommission Date you choose. The files that are in the /home/controlm/se_storage directory will be avaiable the next time the OnDemand Agent Creation service is completed. 
