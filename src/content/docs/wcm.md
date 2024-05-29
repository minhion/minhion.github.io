<!---[markdown cheatsheet](https://docs.gitlab.com/ee/user/markdown.html)---->

<!---we need to get the actual job definitions into git repo for automated deployment--->

# **Workload Change Manager**

## Introduction

> Maintainer: <amy_pitcher@bmc.com>

This project contains the necessary information for the Workflow Change Manager (WCM) demonstration.  For this demonstration you are provided the following artifacts: 
 - This readme document
 - Two JSON files: wcm.json and wcmdd.json
 - Powerpoint (Control-M_WCM_Overview) to be used to lead the discussion and demonstration
 - Video recording reference (WCM_video)

The **readme** is broken into sections for **Configuration** and for **Usage**.  The Configuration section documents the configuration in place, but is does not need to be performed more than once per environment. The Usage section outlines an overview of the steps taken during the demonstration.

<!---overview graphic---->
![WCM](/images/wcm.gif)

## Use Case Overview

This use case is designed to highlight WCM capabilities. 

 
Control-M’s Workload Change Manager **simplifies** Dev and Ops **collaboration** and **accelerates time-to-production** for application workflows. It supports a collaborative process that allows developers to **quickly build or modify** workflows, and operations to easily check development changes and **make promotion decisions**. 

WCM Automation features **enforce workflows** – including those built via a **shift-left** approach – to adhere to predefined enterprise site standards and promote workflows across stages while adapting them for the target environment. Enable the Control-M platform team to focus on **governance** and **oversight**, instead of focusing on rudimentary tasks.

[WCM datasheet](https://www.bmc.com/documents/datasheets/control-m-workload-change-manager.html)


<!---Phase 2 to include a simulated (or real?) integration with an external ITSM system for advanced use cases---->


## Use Case Technical Explanation

It is suggested you begin with the slides in this repository to drive the conversation and demonstration. 

To effectively demonstrate the process flow, you will need the **Control-M Web**, the **Control-M Client**, **VSCode**, and ,optionally, the Control-M **jobs-as-code snippets** installed.

We will be leveraging at least **three** different **personas** to perform the demo; application developer/DevOps engineers, operations, Control-M SMEs and potentially executive stakeholders.

## Configuration
**Promotion rule:**
- wcm_Sand-TO-wcm_Production
    ![Promotion Rule](/images/promotionrule.PNG)



**Two site standards:**

 - wcm_sand: used during workflow creation
 - wcm_prd: assigned to workflow during promotion to production



    ![Site Standard](/images/sitestandard.PNG)


**One folder containing job flow** 

- **wcm-Folder**
- Folder has site standard referenced - wcm_sand
- Workflow has job types of OS, Hadoop, File transfer, database, AI (databricks and azure data factory), and SLA inteded to highlight the Site Standard rules.


    ![Job Flow](/images/jobflow.PNG)


<!---Change Management interation links--->

## Usage

These artifacts are to be used in a use case demonstration to highlight how they work together to help organizations shift-left and get business applications to production faster and with higher adherance to standards.

The **Demonstration** section of this document details the demo flow. Summary:

- **Application development/DevOps** creates workflow **request** through the Control-M Web and submits for review.
- **Approver** takes ownership of workspace and **checks in** to the current test/non-production environment.
- **Operations** (or other production control role) **promotes** workspace to production when ready.
- DevOps **manager** (or other leadership role) uses Workflow Insights **Workflow Definition Updates** to understand volume of changes being made per application, etc.

<!---Change Management interation can happen between any or all steps.--->

## Demonstration

## Prior to the Demonstration  

  
1. Have the Control-M CLI installed and configured on the machine where you will be performing the demonstration from.

    [Documentation here](https://docs.bmc.com/docs/automation-api/monthly/installation-1116950274.html#Installation-ctm_cliInstallingtheControl-MAutomationCLIz)
  

2. Go to [Git Automated Demo Site - WCM](https://ctm-git.trybmc.com/automated-demos/workload-change-manager/-/tree/master), **download** the repository and **unzip** the contents into the directory you will use for your demonstration.


3. Become familiar with this **readme** as well as the **Site Standards**, **Promotion Rule**, and **json files** the demonstration consists of so you can clearly articulate the content.


4. In Control-M **Web** for AWS **Sandbox**:

    -    In Planning, **Duplicate** the **wcm-Folder**.
   - **Append** the **Folder Name** with your 3 letter usercode (i.e. **wcm-Folder-gbr**)
   - Select **Check In** and then select **Modify**. This is done to ensure multiple people can run the demonstration simultaneously.
   - **Modify** the **wcm-run_adf_pipeline**'s Job name and Host-Host/Group to reflect attributes that do not meet the standards in place (**remove wcm-** at the front of the Job name and **change** the **Host**/Hostgroup to **wcm-linux3**), and **remove** the **Description**.
   - Open the **wcm_sand** Site Standard in the Tools Domain.


5. In  Control-M **Client** for AWS **Sandbox**:
    - Open the **Unassigned Work** tab in the Planning Domain.
    - Ensure the **wcm_Sandbox-TO-wcm_Production** Promotion Rule is selected in the Tools Domain.



6. In Control-M **Web** for AWS **Production**:
   - In **Workflow Insights**, invoke the  **Workflow Definition Updates** dashboard and filter for the **last 5 minutes** to ensure that the range populates to the **Recently used date ranges** filter.

   - Go to the Planning Domain and Filter for the **prd-wcm-Folder-{username}** Folder.  **You will not receive any results** until after the promotion to production has been performed.

   - If desired, open the **wcm-prd** Site Standard in the Tools Domain.



7. In VSCode:
    - Open the **wcm.json** and **wcmdd.json** files.
    - In the **wcm.json** file, **remove wcm-** from the Folder name on **line 28**.
    - Open a terminal session and **set** your ctm **environment** to the AWS Sandbox; for example "**ctm env set AWSSand**".

## Begin in Control-M Web for AWS Sandbox:

1. Go to the **wcm_Sand** Site Standard:

    **Discuss**: "An authorized user creates **Site Standards** that guide users through the process and help them **create compliant** and clean **workflows without** numerous rounds of **revision** and repeated testing. Virtually any attribute can be governed, whether that be naming, agent infrastructure, calendars available to end users, required notifications, run as accounts, etc. This also **elevates your Control-M team** as they do not have to spend large amounts of time validating workflows so they can now be a **more strategic asset** to your organization." 

    **NOTE**: Dive deeper into the Site Standard if desired.

2. Go to the **wcm-Folder-{usercode}** Folder in Planning

    **Discuss**: "During the workflow creation process, your application developers and DevOps engineers can either build a new workflow or load an existing one. In this example, we are modifying and existing workflow. You will notice that the **wcm-run_adf_pipeline** job is **not adhering** to the standards that are in place for this Sandbox environment. These issues would traditionally **go undetected** when the workflow is being created or modified." 

    **Action**: Within the **wcm-run_adf_pipeline** job, prepend **wcm-** to the job name, change the Host/Hostgroup attribute to **wcm-linux1** and add a **Description**.

3. Demonstrate Workspace, Folder and Job Notes. Add a **Folder Note**.

      **Discuss**: "Adding **Notes** provides **greater** detail, **communication**, and **collaboration** across the people and personas that are part of the process."

4. Click **Validate** to ensure accuracy.

5. **Submit** your Workspace.
  
6. Click on the **Home** tab in the Planning Domain and select **My Work** to show that the request has been sent and the status is **Scheduler works**.
   
## Move to VS Code

This is the **VSCode/API Site Standards** section of the demonstration.

1.  In VSCode, show the **wcm.json** file.
      
    **Discuss**: "We are now going to show you the capabilities Control-M provides via code and the API. Within Control-M you can leverage a **code-based approach** with creating workflows and other objects (calendars, security authorizations, etc.). In addition, through the API, **workload status** can be viewed, as can **output** and **log** file data, so as your developers are writing and testing their code they do not have to leave their IDE. That being said, regardless of how you interact with Control-M **Site Standards are enforced**."
      
2. In your terminal session, run the **ctm build wcm.json** command OR use the **code snippets**. The build will fail due to the lack of the wcm- string at the front of the folder name.
      
    **Discuss**: "Control-M will provide you **direct feedback** to pinpoint exactly where the fault is in the code, creating a fully developer friendly experience. In addition, Control-M can now become a full participant in your **CI/CD and DevOps practices** as you will be able to move your application code in parallel with your Control-M code to **increase velocity** related to new revenue generating applications you bring to market by including the automation (Control-M workflows) throughout rather than at the end of the application build process."
     
3. Go to **slide 8** in the presentation to solidfy this point.

    ![Devops Pipeline](/images/devops_pipeline.PNG)


4. Prepend wcm- to the folder name on **line 28**, save the file, and run **ctm build wcm.json** again OR use the **code snippets**. All is now peaceful!!!

5. **Optional**: Run the **ctm deploy wcm.json** command in your ternmial session OR use the **code snippets** and discuss further.
      
    **NOTE**: Feel free to dive further into the API, showing the various services the API provides.

## Move to the Control-M Client in AWS Sandbox

1. Go to the **Unassigned Work** tab in the Planning Domain.

2. Select the workspace that was submitted by you earlier.

3. **Take Ownership** of the workspace.

    **Discuss**: "Now that the application developer/DevOps engineer has submitted their workflow, we took ownership of the workspace so **final checks** can be performed prior to it being saved to the test/non-production environment. In addition, you can **Return** the Workspace to the end user should you decide to. Again, it is this type of **collaboration** that streamlines the process."

4. Resolve the **Folder Note** by clicking on the Folder and then clicking the **Notes** tab in the right-hand pane, click **Resolve**.

    **Discuss**: "As we talked about earlier, **Notes** increase the **collaboration** opportunities across your development, operations, and Control-M teams."

5. Click **Validate** to show there are no errors ('No Data Found' in the bottom pane).

6. Also demonstrate the ability to look at the changes that were made to the **wcm-run_adf_pipeline** job.

7. Select the **Check In** icon, explain that the request from the end user has been approved, and we are saving the workflow to test/non-production.

    **Quickly Back to Control-M Web on AWS Sandbox**: Refresh the page and show the the status of the request is **Approved**.

8. Go to the Tools Domain and show the **wcm_Sand-TO-wcm_Production** Promotion Rule to focus on the Source and Target environment settings as well as the details of the Promotion Rule itself.

    **Discuss**: "We are now ready to **promote** the workflow. First of all, even though this construct within Control-M is called a Promotion Rule, it can also be used for **demotion** (from a higher environment to a lower environment) which provides additional **flexibility** and true **synchronization** across Control-M deployments. As you can see we are changing various attributes.  In it's simplest form, Promotion Rules are simply, very sophisticated find and replace rules. Relating back to Site Standards you will see that the **production Site Standards are being assigned** as the standards are different in test than they are in production. This is an extremely important concept and **increases the intelligence** with which you move workflows between environments. Furthermore, it **protects** your **production workflows** while **decreasing** the potential of **failures** and other negative events"

9. Go to **VSCode**, show the **wcmdd.json** file, and describe the contents.

    **Discuss**: "As we discussed previously, you can take a code-based approach to developing your workflows; this includes promoting workloads through the use of **deploy descriptors**. Essentially, deploy descriptors are code-based **Promotion Rules**. Again, through the API services Control-M provides, Control-M can fit seamlessly into your CI/CD and DevOps pipelines and practices, increasing velocity into production."
    
    **Optional**: Run the **ctm deploy transform wcm.json wcmdd.json** command and show the output in your terminal session.

10. Go back to the Control-M Client on AWS Sandbox and select the **Promote** icon. 
    
11. Select the **wcm_Sandbox-TO-wcm_Production** Promotion Rule from the pull-down menu and click Ok.
    
12. Fill out the form:

    ![Promotion Form](/images/promoteform.PNG)

    - Customer name in the **Name** field 
    - Leave the **Change ID** field blank
    - Populate the **E-Mail Notification** field with your email address
    - Include a brief **Description**
    - Select the **Promote and check-in** radio button
    - Populate the User Name and Password fields with your **AWS Production credentials**
    
    **Discuss**: "You are presented with the promotion form. If the **Change ID** field is left blank a Change ID is automatically created in your ITSM tool of choice. Of course we would prefer that you are using a BMC solution (insert chuckle here), however, Control-M integrates with non-BMC tools like ServiceNow, Jira and others. Also, an e-mail can be sent to inform the requestor of the successful promotion providing **complete visibility** to the end user. The **Choose Promotion Type** options are **Promotion Request** and **Promote and check-in**. The request is identical to the **Submit** we performed in the WebUI. This means that users can submit requests through the UI of their choice. We are going to **Promote and check-in**, meaning save the workflow to the Control-M repository."

13. You will receive an error; select **View & Fix**; the offending job and attribute are shown in the bottom pane as well as the Map view.
  
    **Discuss**: "As you can see, as a user, you can **very easily identify** the offending job or jobs as well as the offending attributes. Running jobs in production as root; that's a no no!!! Again, the goal of WCM is to get workflows into production with **optimal speed** and **accuracy** while **reducing friction** throughout the process"

14. Change the **Run As** from **root to ctmagent**.

15. Click **Validate** showing that the errors have been resolved.

16. Click **Complete Promotion**, viola!!!

## Quickly to Control-M Web for AWS Production

1. Go to the **Planning** Domain in the **AWS Production  WebUI** and select the **Refresh** icon to show the promoted Folder.

2. **Ask for questions.** "What questions do you have?"


## Workflow Insights

  **NOTE**: If this is an existing Control-M customer and it is not appropriate to show them Workflow Insights, then you may chose to end with standard Control-M audit reports.

  **NOTE Numero Dos**: Reporting is not covered in this demonstration.
   
1. After the promotion has completed successfully, in **AWS Production** navigate to the Workflow Insights **Workflow Definition Updates dashboard** and **filter** for changes in the **last 5 minutes** (you may need to extend to longer than 5 minutes based on timing). Provided that you are the only person that has made changes in the last 5 minutes, you will see **13 Total definition updates** (the jobs and Folder that were promoted), **13 total definitions added** (the jobs and Folder that were promoted).

2. **Browse** the data.

    **Discuss**: "Using the Workflow Insights Workflow Definition Updates dashboard you are provided visibility into **volumes of change** and the details of those changes. You will then be able to **correlate change with negative events** (failure) volumes.
  
    **Optional**: Show additional dashboards

**Wrap Up**: 

- Standards definition and enforcement
- Request Management with integrations into ITSM solutions
- Promotion to/from Control-M environments
- Assignment of production standards
- Insight into volumes and details of change
- Audit reporting


## After the Demonstration- Cleanup

In order to **avoid collisions** prior to your next WCM demonstration:

1. In **AWS Sandbox** delete the **wcm-Folder-{usercode}** Folder
2. In **AWS Production** a job runs once daily at Newday to remove any folders with a prefix of **prd-wcm-Folder-**