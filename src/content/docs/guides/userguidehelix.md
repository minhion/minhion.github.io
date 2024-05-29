
# Helix Control-M POV Setup Guide

Please read and familiarize yourself with the entire document before you begin.

To report problems with the workflow or the documentation please use [git issues.](https://ctm-git.trybmc.com/automated-demos/on-demand-helix-pov-setup/-/issues) 


## Helix POV Tenant Request Steps

The automation is ideal for a customer facing Helix Control-M POVs. If you are leveraging the automation for a demo or other purposes, you can skip this part.

1. Make sure you have all your paperwork in order (SFDC opportunity and POV doc done) 

2. Send a request (email) with the below details to [Erez Gordon](erez_gordon@bmc.com)

| Item | Description |
| ------ | -----|
| Customer Name | |
| Tenant Name | Should be a single world indicating the customer name |
| Time Zone | Please ensure that you correctly specify the time zone and city the participant is in, including explicit UTC offset for standard time and when daylight savings time ends this year (as it may cross the EAP). Some countries have several time zones, so specifying the country may not be enough. | 
| Admin Email | This is the Email of the LOCAL SE who will get the tenant login details once it’s spun up; by default, the person will click the prerelease agreement and get any emergency notifications. SME will shadow |
| Addition Admin Email | Additional emergency email if different to admin | 
| Tenant Start Date | The date you would need to have the tenant available | 
| Tenant End Date | The date on which we can delete the tenant | 

> Note: Usually the admin email is a BMC SCs email which allow you to setup the customer’s users and setup flows in advance for POV. You can also decide to give it directly to the prospect however  you won’t have any further access to it unless they gave you such. A POV is usually a week or two. If you think more time is required, I would need to have a business justification. Once this information is recieved, it will be given to the SRE team to create the tenant and confirm a welcome email is received. 


## On-Demand Helix POV Setup  
>Log in to your Helix POV tenant and generate the necessary tokens. You will be getting **2 values** for setting up communication 
>
>- 1 for the API, which is the API Token Value (An API authentication token that allows the logged-in user to submit API requests.) [read more in docs](https://documents.bmc.com/supportu/controlm-saas/en-US/Documentation/Creating_an_API_Token.htm) 
>
>- 1 for the Agent, which is the Agent Tag Name (An Agent token is required to perform an Agent installation and connect the Agent to the Control-M environment.) [read more in docs](https://documents.bmc.com/supportu/controlm-saas/en-US/Documentation/Agent_Token.htm)
>
>Both are required in order to use the API to provision an agent. It is suggested that you copy them to a place where you can save them for the next step.

1. Navigate to 'Configuration - Add API Token'
    ![](../images/APIToken.PNG)
    * Create a new token. <br>
   ![apitoken](../images/APITokenName.PNG)  
    * Copy the token value.<br>
   ![apitoken](../images/APITokenCopy.PNG)

2.  Navigate to 'Configuration - Manage Agent Token'
    ![agenttoken](../images/AgentToken.PNG)
    * Create ('+')
    * Push "Generate Token" button
    * Copy the agent token name.
    ![generatetoken](../images/GenerateToken.PNG)

3. If you would like to deploy On Demand Demos into your POV tenant, please see the [On-Demand Helix Demo User Guide]()

## Usage Instructions 
- The automated setup takes 5-7 minutes. Your agent will be available and registered with your tenant, and the job flows will be ordered-in but not executed. 
-  The container currently has the following components:
    * Ubuntu
    * Control-M SaaS Agent
    * Control-M CLI
    * NodeJS
    * npm

## On Demand Helix POV Use Cases
* [Forecast Flow](http://ctm-aws-documentation.bmcdemo.com/selab/forecastflow/)
* [Snowflake and AWS Data Pipeline](http://ctm-aws-documentation.bmcdemo.com/selab/snowaws/)
* [Snowflake and Azure Data Pipeline](http://ctm-aws-documentation.bmcdemo.com/selab/snowazure/)
* **And more to come!**

## Credits
* [Brandi Coleman](bcoleman@bmc.com)
* [Aaron Baldwin](Volker_Scheithauer@bmc.com)
* [Jon Fink](jfink@bmc.com)
* [Amy Pitcher](apitcher@bmc.com)

