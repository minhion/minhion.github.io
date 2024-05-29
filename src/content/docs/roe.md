#Standard Demo User Guide

1. Log into the [Control-M Production Demo System](https://ctm-aws-production.bmcdemo.com:8443)
2. Navigate to the Self-Service Portal in the Monitoring Domain
3. (Optional) Create a viewpoint for zzz* jobs
    ![](../images/viewpoint.jpg)
    Save the Viewpoint and name it what you desire - such as zzz-jobs
4. Use the zzz-jobs viewpoint, or navigate to the zzz jobs in the tree view, or main window, and interact with the flows.  The zzz-reports, and zzz-multicloud can be reordered, reran, etc. by everyone.
5. Understand and be able to articulate the following for demonstrations -
	- The **zzz-reports** flow uses the AI jobtype and aapi to run reports via Control-M.  You can get the report url from accessing the Job Properties in the Web or Client, and the Web is supposed to put it on the synopsis, but does not work regularly.  
	- The **zzz-multi-cloud** flow uses OS jobs and MFT jobs in order to show easily how Control-M is agnostic to Cloud provider or platform, and there are jobs built to orchestrate on GCP, Azure, and AWS, and AWS has both Linux and Windows.  For MFT, there is a flow built with simple transfers built for each of the cloud storage providers, GCS, Azuer BLOB, and AWS S3. 
	- The **zzz-order** flow uses the aapi in order to active 2 of the dynamic demos, 1 for Forecase, and another using the AWS Snowflake flow.  PLEASE do NOT reorder the zzz-order flow. 
	
## Usage Instructions
- Feel free to rerun/hold/free any of the zzz jobs, including the on-demand demo ones.
- Feel free to reorder the zzz-reports and zzz-multi-cloud flows.
- Do NOT reorder the zzz-order flow.

## Making Changes
- Any Changes will be performed to the git repo code base, and NOT be updated to the flows/folders in Control-M directly.