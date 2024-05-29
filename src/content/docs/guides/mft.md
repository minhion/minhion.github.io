# MFT as a Service

> Maintainer: [Virtual Team - Control-M MFT](mailto:_22a02d@BMC.com)

## Introduction

Managed File Transfer is data movement and is a core data integration concept.  MFT on Control-M enables the evolution of data democratization.

The following use cases demonstrate the concept of MFT-as-a-Service, enabling all users of diverse technical skill level to solve data challenges.

>The use cases below can all be run from your SE login.
>
>However, they are designed around multiple users playing different roles within the enterprise, and exercise RBAC to create a working demonstration of freedom within the framework.  Working through the Use Cases using the different personas will showcase a more impactful story.

## Resources
All access links and user logins can be found in this document:
[MFT Demo System Resources](\images\mftdemoresources.docx)

## Use Case Framework

You are the Enterprise Architect of a financial services company that offers banking and insurance services.  Your strategy is to increase productivity by enabling business and IT via self-service, to reduce complexity of the MFT & MFTE Platform, and to increase service quality.

## Use Case 1: B2B Onboarding through Orderable Service

**B2B Overview** - TEST

This use case onboards new external trading partners onto Managed File Transfer Enterprise (MFTE), including registering the trading partner with one of two active Services: Bank Payments or Insurance Payments.  The trading partner will receive instructions how to log on and change passwords, then be able to upload a file which will go through a processing simulation.  Finally, a business user will send a file adhoc to the trading partner.

**USE CASE 1A: ONBOARDING EXTERNAL TRADING PARTNER**

In this use case, a business user needs to enable data transfer with an external Trading Partner.  This trading partner is a new customer and needs to be able to send and receive files.  Inbound files are consumed and processed by internal applications.

**USE CASE 1B: AD-HOC B2B FILE TRANSFER – BUSINESS USER TO TRADING PARTNER**

For this scenario, a business user needs to send a file to an external trading partner.  The business user will use a new portal to drop files into the external user’s private folder.

Personas Involved:
> **MFT_B2B_Admin**: The MFTE Administrator is responsible for setting up the B2B services and the roles/users for B2B business users to be able to run the services and verify the messages.
>
>**MFT_BusinessUser**: Business User is responsible for running the B2B service to onboard a customer/user on MFTE using automated orderable service process.  This user can verify on the MFTE configuration page in the WebUI if users are onboarded successfully and also verify if messages are processing successfully or failing on the MFT File Search dashboard.
>
>**External Trading Partner User**: The External User is the new Trading Partner onboarded to trade data.  The username is assigned and created during the service requested by Business User.  The external Trading Partner will use this login to send and pickup files to/from the MFTE site.

## MFTE Sites
V21 introduces a multi-Site feature.  This is the ability to deploy multiple MFTE platforms managed by a single EM instance.  A “Site” has its own MFTE hubs, gateways, users, folders, groups, rules, settings, etc.  Each MFTE site requires its own Control-M Server and a minimum of one Hub + one Gateway for non-HA mode and 3 hubs + 2gateways for High Availability mode.  Sites may represent geographical regions, different lines of business, specific departments within an organization, and more.

AWS Sandbox site: **SAND1**


## Use Case 1A: Onboarding External Trading Partner

**Description**: Business Users need to setup a new Trading Partner to send their data files, which in turn need to be processed by the enterprise applications.  This process needs to be scalable.

1.	Login to the CTM WebUI as **MFT_Business_User** and navigate to Monitoring domain -> Services -> Run Service.  Run the service **B2B_User_Onboarding** and enter the necessary parameters.

    - Site: SAND1 (the only site available)
    - Select “Run as Independent Flow”.
    - Do NOT use spaces and special characters in UserName and UserCompany fields.
            - (you may use a user name and company name of your choosing as long as it meet this criteria)
    - You must enter a valid email address. (The onboarding credentials will be sent here.)

2. Monitor the service through the Monitoring -> Services page.  The service will show green when successfully completed. (TIP: Click Refresh under the Service tab to update the status faster.)

    Optionally, you can check status of Control-M Folder “B2BOnboarding” in Monitoring -> Viewpoints.

3. Once the service is complete, open a new browser tab for MFT Enterprise.  Verify your new user is successfully created and has access to the following Virtual Folders:
    - A PRIVATE folder used to exchange files exclusively with this trading partner.  This folder has been created with the name pattern “\<username\>_private”.
    - A SERVICE folder made available to this trading partner (and is also shared to others) enabling them to submit files to a business application (e.g., a payments service).  
        - In this Demo, a ‘service folder’ is a MFTE Virtual Folder that is the entry point for external customers to consume a business service by exchanging files.  Simply making an external user a member of a group entitled to that folder will automatically entitle access to the respective business service.
        - SAND1_BANK_PAYMENTS for (SAND1_Banks)
        - SAND1_INSURANCE_FILES for (SAND1_Insurers)

4.	Assume the role of the External User.  Open a new browser tab and navigate to the Web File Exchange URL for the AWS Sandbox Environment: <https://zzz-aws-linux-2.bmcdemo.com:19443/Login>
    
    **Check your e-mail**.  The new external trading partner user should have received an email with the username and a temporary password.  

    <!-- compare to original doc for image inserts -->

5.	Enter the External UserName and password received via email and change your password on first login.  
> TIP: Use password `Password@123`, or you may choose to enter your own.

    Once the password is changed, the External User should receive an email that password is updated successfully.

6.	Once logged into the File Exchange portal, verify you are able to see the user’s Private folder incoming/outgoing folders in addition to the business service folder with the sub-folders **Documentation** & **Submit**.

    > B2B Processing rules in this demo exercise will only read files from `Submit` Folder, you can consider this as incoming folder for customer to submit the files. 
    >
    > The purpose of the Documentation folder in a real-world scenario is to provide read-only reference location containing documentation, readme files, etc.

    <!-- Reword as Discussion point about file/folder permissions. -->

7.	 Upload one or more files into the `Submit` folder of the business service.

8.	 As soon as files are dropped, the MFTE processing rule will execute. It calls the Control-M workflow adh_inbound_payment_service_site1_version1.

    * Control-M Jobs will copy the files to Azure BLOB, GCS and AWS S3 storages.
        * Files to Azure BLOB will be renamed as %%user._%%filename._backup%%DATE.%%TIME
        * Files to GCS will be renamed as: GCP_%%filename
        * Files to AWS will be transferred as is with the same name.

9. Files uploaded through this demo will go through a mock AVScan script, which generates a random number to verify if AVScan is success or failure. This mimics AVScan in a real world scenario.
    * If the file fails the AVScan, the user will receive an email stating file failed in Scan, please re-submit.
    * If the file passes the AVScan, the file will be moved to the User Private folder under the /outgoing subdirectory.

10. Verify the file has been successfully delivered in the File Exchange portal, in the external user's private folder's /outgoing directory.
    * When the file has been delivered, the external user also receives an email notification the file is available to download.
 
## Use Case 1B: Ad-hoc B2B File Transfer – Business User to Trading Partner

**Description**: The Business User needs to manually send a file to the Trading Partner.  This could be considered an ad-hoc file transfer use case.

1.	Take on the role of an internal business user to gain access to external trading partner’s folders.  You are now an internal employee.  Login to the FTS Web UI on the Hub: <https://zzz-aws-linux-3.bmcdemo.com:7443>

        user: mftaws
        pass: password

    NOTE: This is **NOT** the “File Exchange” site you logged into previously.  That is for external users.

    As the internal user, you will be able to see the external trading partner folders located under the `/b2bhome` folder.  By default, all Internal Users are granted access to external Virtual Folders.

2.	Send the external trading partner an ad-hoc file by uploading a file into your external user’s private/outgoing folder.
 
3.	Review MFTE file transfer activities.  Login to the Control-M WebUI as **MFT_Business_User**.  Navigate to ‘File Search’ and locate the file tranfsers.
    <!-- Needs rewording.  Are portal transfers reported in v21? -->  

4.	View Cloud Buckets.  Navigate to the Cloud Buckets to verify the file has been copied successfully to AWS S3, GCS and Azure BLOB.
    <!-- Probably need to provide instruction how to verify -->
 
## Use Case 2 - MFT Provisioning Services (MPS)

**MPS Overview**

These use cases explore different internal Managed File Transfer scenarios.  The objective is to create a services portal for users of all types - casual users, developers, data scientists, and even admins - where they can initiate re-usable MFT Services.

**USE CASE 2A: ONE TIME EXTERNAL B2B TRANSFER – BUSINESS USER TO TRADING PARTNER**

In this use case, a business user needs to manually send a single file to an external Trading Partner.  This use case could be considered ad-hoc or a one-time transfer.

**USE CASE 2B: ONE TIME INTERNAL MFT TRANSFER BETWEEN APPLICATIONS – DATA SCIENTIST**

For this scenario, a technical user needs to perform a one-time (or ad-hoc) file transfer to send a file within the enterprise.  This could be sending data or job definitions from one environment to another, or sending data models up to cloud storage for a cloud service to consume.

**USE CASE 2C: IT APPROVED SERVICE INTEGRATION PATTERN – DATA ENGINEER**

Here, a technical user needs to incorporate a file transfer job for their broader Control-M workflow.  This service will create a file transfer building block which they can modify and test, then copy or otherwise integrate with their larger workflow.

Personas Involved:
>**MFT_Admin**: The MFT Administrator is responsible for creating the MFT Services and setting up the Role Based Access control to grant users access to the appropriate services.
>
>**MFT_Business_User**: The Business User will utilize the “External Partner” service to transfer a provided file to the specified trading partner.
>
>**MFT_Data_Scientist**: A technical user that works within Control-M and is required to follow specific standards to create file transfer jobs.
>
>**MFT_Data_Engineer**: A technical user that works within Control-M and is required to follow specific standards to create file transfer jobs.

## Use Case 2A: One Time External B2B Transfer – Business User to Trading Partner

**Description**: Business Users have a requirement to send manually generated data to the external trading partners.  The users have a corporate Windows 'jump box' where they can login using the new MFT Portal to upload files which need to be sent to external trading partners.  From there the file will be transferred by Control-M MFT to the Trading Partner’s Virtual Folder on the Hub.

1.	Take on the role of the Business User.  Login to the FTS Web UI on your corporate Windows jump box: <https://zzz-aws-windows-1.bmcdemo.com:7443/Login>

2. Upload a file through the portal to the Home folder.  Remember the filename for the next step.

3.	In the Control-M WebUI, login as **MFT_Business_User** and run the Orderable Service **MPS Transfer to External Partner**.

    > * Select “Run as independent flow”.
    > * Requestor E-Mail Address: \<your email address\>
    > * Region: SAND1
    > * Partner Virtual Folder: \<enter the exact name of a Virtual Folder to deliver the file\>
    >   * You must specify a top-level Virtual Folder.  This could be the folder for the B2B partner you onboarded in Use Case 1A, or you can go to the `MFT Enterprise Configuration` domain and find a Virtual Folder with a username you can access.
    >   * The service will automatically detect it's a `Limited` access folder and append the /outgoing directory.  
    >   * For a Virtual Folder with `Unlimited` access, the file will be delivered to the specified folder.
    > * File Name: \<enter the filename uploaded through the FTS Web UI.\>

4.	Once the service has run, look for Email notifications:

    * The Requestor will receive an email from **Sandbox Control-M AWS DEMO** with the status of the file transfer.

    * The External Trading Partner email will receive an email from **DoNotReplyMFTe@bmcdemo.com** that a file is available for download.

    > NOTE: The external user will only receive this notification if the Virtual Folder has Access Type `Limited` configured.

5.	Validate file delivery and that the file is available for partner download.
    * Locate the file transfer using the File Search page.
    * Login as external trading partner on the Web File Exchange (using the username and password previously created) and verify the file is available for download.

## Use Case 2B: One Time Internal MFT Transfer – Data Scientist

**Description**: Technical users need to send to send data within the enterprise among various applications.  This user may not be a daily user of Control-M and the data they need to send is a one-time transfer.  This data could be files sent from the DEV environment to the Operations team for review, or a new data model sent to an analytics engine for decision insights.  This user will also use an enterprise jump box where they will login through the MFT portal to upload files, then use the Service to transfer the files to their destination.

1.	Prep your file by logging in to the corporate Windows jump box at: <https://zzz-aws-windows-1.bmcdemo.com:7443/Login>.

2. Upload a file to the home folder.  Remember the filename for the next step.

3. Login as **MFT_Data_Scientist** in the Control-M WebUI.  Go the Monitoring domain, and run the Service **MPS File Transfer Service**

    > * Select “Run as independent flow”.
    > * Requestor Email Address: \<your email address\>
    > * Data Service (Application): `IT`
    >   * This value populates the Application field in the folder and jobs.
    > * Sub Application: \<enter a value to populate the Sub Application on the job\>
    > * Source Filename: \<enter the filename uploaded via the portal/>
    > * Target Connection Profile: \<select from available options; destinations listed below\>
    > * Target File: \<leave empty or enter a value to rename the file.\>

    <!-- Needs rewording with clearer instructions regarding the purpose of each field. -->

    Target CCP | CTM Agent Server
    ---------- | ---------------
    MPS_TEAM_OPS | zzz-aws-linux-2
    MPS_TEAM_BIZ | zzz-aws-linux-1
    MPS_TEAM_DATA | zzz-aws-windows-2

    <!-- Review and re-add instructions to use FileZilla to interact with the Internal FTS. -->  

4.	Validate the file transferred successfully between the source platform and the target platform.
    *  Review the email notification sent to the user that initiated the service.
    * Navigate to CTM WebUI File Search to locate the file that was transferred
    * View the File Transfer Flow in Monitoring domain – filter for the Folder: `MPS_CORP_IT`
        * Review the Output of the Job: MPS_Processing

## Use Case 2C: IT Approved Service Integration Pattern – Data Engineer

**Description**: In this scenario, a Control-M technical user needs to initiate an IT Approved File Transfer within their Control-M workflow.  The user needs to follow standard integration patterns for the use case.

1.	Login into the WebUI as **MFT_Data_Engineer**.  Go to the Monitoring domain, and run the Service **MPS Development**.

    > * Select "Run as independent flow".
    > * Requestor E-Mail Address: \<your email address\>
    > * Folder Name: <Unique value.  Ex: 'jlw'.>
    >   * This value will be used to popule the Folder and Job names.
    > * Data Service Template: (Application): `IT`
    >   * This value will populate the Application field of the folder and jobs.
    > * Sub Application: \<enter a value to populate the Sub App field.\>
    > * Schedule Type: `Hourly`
    >   * More options coming soon!
    > * Complexity: \<select a value from the list\>
    >   * Each option provides a different workflow structure.

2.	Monitor completion of the service.  You will receive an email notification with instructions how to locate the workflow in the Planning Domain.

4.	Navigate to Planning and open the Folder created for the Developer prefixed with the Folder Name entered previously.

 	> The user has the new File Transfer Job deployed but not ordered in.  The user can then edit the job as necessary, moving it into the overall process workflow.

## APPENDIX

**Appendix – RBAC**

Granular access controls can be defined in Control-M using a combination of Roles, Role based Administration, User-Views & Site-Standards. This allows us to create simplified views and a “need to know” and/or “need to act” based access definitions based on the various personas/teams which would collaborate to deliver a business service through Control-M. In this exercise we are focusing on the access requirements of File operations personas, who are usually a subset of Data Ops. Read on below to know more on how access controls in the training environment have been setup.

**Appendix 1.1 – MFT Roles**

The below MFT Roles have been created for the different personas responsible for file operations. A Combination of one or more roles can be assigned to a user to achieve the required level of access based on organizational requirements. Below is a high-level description of the roles which are available to you for the purpose of this exercise. (For detailed description, please refer to the TLV_RBAC.xlsx matrix)
1. MFT Admin – Internal Administrated for MFT Related operations and components such as CCP, Plugins, user-creation
2.	MFT B2B Admin – All the roles of MFT Admin + admin level access to B2B Configuration
3.	MFT Business User – Access to Order Services related to MFT, B2B, drill down and check progress, perform File search & validate whether user onboarding has completed successfully through Browse level access to MFTE Configuration
4.	MFT Data Scientist
5.  MFT Data Engineer – Access to planning domain to create jobs and services, and also monitoring domain for testing jobs, ability to perform actions on jobs in the active environment are limited to Managed file transfer jobs only
6.	MFT View only – Role with view only access to jobs in the monitoring domain/active environment (This is a standard role which is combined with additional role such as MFT_L2_L3 – which provide additional access to perform actions on file transfer jobs in the active environment/monitoring domain)
 
**Appendix 2 – MFT Users**

A few sample users have been created using a combination of one or more of the above roles to provide the required level of access.

View the users and their logins here: [MFT Demo Sysem Resources](\images\mftdemoresources.docx)
 
**Appendix 3 – User Views**

User views have been created and assigned to roles, to restrict what can be accessed via the Web UI. For example – Browse access to Service definitions in the planning domain and underlying folder definition must be provided in order to allow a user to order services in the monitoring Domain.   To achieve this, the users have been provided Browse permissions in the planning domain to the corresponding services and folders, however they are restricted from accessing the same via planning domain through user-view definitions. Effectively allowing them to order and view services assigned via the monitoring domain only. Below User Views have been created to control the domains which can be accessed via Web UI.
 

**Appendix 4 – Site Standards**

A basic Site Standard rule for enforcing the naming convention of “MFT*” on the Sub Application field for all File transfer job types has been created.
This allows us to create granular RBAC in the roles, by limiting controls such as “actions” only on File transfer job types in the active environment/monitoring domain, by defining the access through a filter which leverages sub application field.