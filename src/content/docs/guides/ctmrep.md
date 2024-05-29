# Reporting Standard Demo Flow
## Introduction
> Maintainer: <aaron_baldwin@bmc.com>

The Reporting demo flow runs daily in both Sandbox and Production, and executes the following reports at New Day:

- zzz-report-job-audit - Audit Report that shows logins in the past 7 days
- zzz-report-job-mft - File Transfer Report that shows the File Transfers for the previous month
- zzz-report-job-sla - SLA Report for the past 7 days
- zzz-report-job-workload - Workload Report that shows all Active jobs from the previous day, some details, and their elapsed execution time

There is also a SLA tied to this flow called zzz-reports-sla that has a must complete time of 12:00 UTC.

These reports use the automation-api to execute a restful call to run each of the reports, using a dedicated AI jobtype, and all run from the zzz-aws-linux-1.bmcdemo.com host.

## Use Case Overview 
This workflow shows the ability of Control-M Reporting, and how reports from the BIRT based system embedded within the product can be orchestrated using the automation api, as well as the ability to define a custom AI jobtype in order to templatize them.  Additionally, there is a connection profile for the Reporting Jobtype that allows users to run the reports as a dedicated user via the Control-M system. 

## Use Case Technical Discussion
The workflows are not time based, but could be - and have an SLA. There are no dependencies between the Reporting Jobs, and they are all combined in one folder, adhering to the site standards.  

To view the demo flow code-base, and all artifacts,  please navigate to the [Standard Demo Reporting Flow Git Repository](https://ctm-git.trybmc.com/bmc-control-m/standard-demo-flows/zzz-reports)

## Job Types Included  
- AI CTM Reports Jobtype
- SLA Jobtype

## Screenshot of Demo Flow

![](../images/zzz-report-flow.jpg)
