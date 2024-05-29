# Control-M Managed File Transfer Enterprise Demo
## Introduction
> Maintainer: <felipe_casali@bmc.com>

This an On-Demand Demo Service designed to demonstrate the Control-M Managed File Transfer Enterprise features and capabilities.


## Architecture diagram AWS MFTE Environment

![](../images/aws_prod_mfte_setup.jpg)

![](../images/aws_sand_mfte_setup.jpg)


## Use Case Overview

This MFTE demo represents a situation where a workflow is ordered when an external trading partner (e.g., customer, vendor, supplier, bank, etc.) uploads a file on the B2B File Exchange site. Uploading a file triggers a rule to fire that orders a workflow to process the incoming data.  The workflow starts on the MFTE hub (agent) with an MFT job that moves the incoming file to an S3 bucket.  From there, the remainder of the workflow runs on the newly created EC2 instance to process the file in AWS and GCP.  The workflow is describe below in more detail.

![](../images/mfte.jpg)

It's a good use case to demo that using CTM with MFTE, you do not need to order the workflow everyday at New Day (NDP/New Day Procedure).  The workflow will execute when there is a file to process.

## Use Case Explanation

The Workflow is composed of the following jobs:

1. <UserCode\>-MFT-MoveFiles - Move the file(s) from the MFTE Incoming Folder to a AWS S3 bucket.
2. <UserCode\>-MFTE-ValidateFile - Run a program on a AWS EC2 instance to validate the file. (dummy job)
3. <UserCode\>-MFTE-ProcessFile - Insert the new data in the remote snowflake database. (dummy job)
4. <UserCode\>-MFTE-GenerateCustomerWelcomeLetters - Runs a utility that will generate individual PDF's for each new customer. (dummy job)
5. <UserCode\>-MFTE-MoveLettersToGCP - MFT Transfer of Welcome Letters to a GCP repository. (note: today this is AWS->AWS, need to make it AWS->GCP)
6. <UserCode\>-MFTE-MFTE-MoveLettersToFileExchange - Move the file from the AWS S3 repository to the MFTE Outgoing Folder.
7. <UserCode\>-MFTE-SendCustomerEmail - Send email to each customer containing the GCP S3 repository link to the Welcome Letter.
8. <UserCode\>-MFTE-MonitorSLA - Monitor the Workflow SLA.

To view the demo flow code-base please navigate to the <a href="https://ctm-git.trybmc.com/automated-demos/mfte-multi-cloud" target="_blank">MFTE Multi Cloud Repository</a>

## Resources on MFT/E side

- User - each demo user should have/create their own MFTE user.  Alternatively, set up a user MFTE_Demo_User and store password in Git Repo
- Virtual Folder - MFTe_Demo_Folder
- Rule - ODD_MFTE_MULTICLOUD_TEMPLATE - Orders the SE Workflow
- LCP - "ODD_MFTE_local" (ensure this exists on MFTE hub)
- CCPs - "ODD_MFTE_AWS" and "ODD_MFTE_GCP"

The MFT B2B File Exchange Locations are as follows:

<a href="https://zzz-aws-linux-1.bmcdemo.com:29443/#/main-dashboard" target="_blank">B2B Production</a>

<a href="https://zzz-aws-linux-4.bmcdemo.com:19443/#/main-dashboard
" target="_blank">B2B Sandbox</a>

## Usage Instructions

1.  Order your own on-demand demo using the **Order Service** option on Monitoring --> Services and select **MFTE Multi Cloud** demo.
    This will create a new EC2 instance and a new workflow named <UserCode\>-mfte-demo-multicloud created just for you.  All artifacts created  for you in the provisioning process will be prefixed with your initials you entered in the self-service request.

2. Update MFTE configurations to make it drive your demo. In the Control-M Web Client, open the Managed File Transfer > MFT Enterprise Configuration
    - Open the **Users** tab.  If you haven't done so already, create your MFTE external user and verify you know the password.
    - Open the **Folders** tab.  Add your user as an authorzied external user.  
    - Open the **Rules** tab and highlight (don't doubleclick) the "ODD_MFTE_MULTICLOUD_TEMPLATE"
        - Click on the "Duplicate selected rule" button (upper right side)
        - Prefix the duplicated rule's Name with your <UserCode\>.
        - Open the **Conditions** section of the rule.  Note that it triggers when anyone uploads a file to the virtual folder selected.  We need to limit this by adding an additional Condition {when User = your MFTE external username}. That way, only your user will trigger your workflow.
        - Open the **Action** section of the rule.  Update the Control-M Folder to be your new folder created during the provisioning process by replacing <UserCode\> with yours.  (e.g., <UserCode\>-mfte-demo-multicloud becomes jpa-mfte-demo-multicloud

3.  Open a browser to the MFT B2B Exchange site and login into the portal with your user and/or MFTE_Demo_User / (the password is stored in Git Repo)

    - <a href="https://zzz-aws-linux-1.bmcdemo.com:29443/#/main-dashboard" target="_blank">B2B Production</a>
    - <a href="https://zzz-aws-linux-2.bmcdemo.com:19443/#/main-dashboard" target="_blank">B2B Sandbox</a>  (not available today)

    
    Alternatively you can use a **SFTP client** like WinSCP to upload files.

    - Production host address: zzz-aws-linux-1.bmcdemo.com
    - Port: 1224
    - Username: Your username/password or MFTE_Demo_User
    - Password: <a href="https://ctm-git.trybmc.com/automated-demos/mfte-multi-cloud/-/tree/master/bin" target="_blank">Click to check Git Repo</a>
    - **Command Line Example:**
      ```bash
      sftp -oPort=1224 MFTE_Demo_User@zzz-aws-linux-1.bmcdemo.com
      ```

4.  Upload any text file named <UserCode\>\*.txt in the virtual folder MFTe_Demo_Folder/incoming

5.  Go back to the Monitoring Domain and check if your workflow was ordered.

    Note: the first job in the workflow is waiting for confirmation.  Confirm the job to make the workflow flow.

6.  Demonstrate the workflow steps

## Screenshot of the Demo Flow

![](../images/mfte_flow.jpg)
