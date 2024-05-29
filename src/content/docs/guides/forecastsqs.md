# AWS Message Queuing Service (SQS)
## Introduction
>Maintainer: <robert_cohen@bmc.com>

This flow is ordered daily via the zzz-order process in production, and runs cyclically.

Each day, there is also a cleanup process that removes the flow and containerized agent that it runs on.

See <b>Usage Instructions</b> below for steps to interact with this flow.

## Use Case Overview

This flow represents a custom spin on the typical Forecast Flow use case. This flow ingests an email as the input to direct what zip code to process the weather request for, and then emails the result back to the sender. <br> <br>
This flow’s folder is cyclic.  The first job in the workflow will read a queue in AWS SQS to see if any email requests have arrived for a weather report.  This job will extract the sender’s email address and zip code from the email and save those values to Pool variables for use throughout the workflow.  Additionally, this job will store the SQS record’s receipt handle, so that it can be deleted from the SQS queue when the process is complete.
![](../images/aws-sqs-forecast.png)

## Use Case Technical Explanation
This workflow begins with an OS:Command job type that executes a REST API call to Openweather map providing a zip code and retrieving the weather data related to that zip code in json format. This output is appended to an output.json file and the dependent jobs parse this file to obtain the high temperature, city, and state. The concluding job in the flow gathers the parsed information into a weather update email to be sent as an email via AWS SES the email address defined in the folder-level Control-M variable.<br>
To view the demo flow code-base please [Forecast Flow with SQS Git Repository](https://ctm-git.trybmc.com/automated-demos/forecast-flow-with-sqs)

## Job Types Included
* OS
* AI AWS SQS Process

## Usage Instructions
* Send an email to weather@roclobster.com
* In the Subject field enter the <b>zip code</b>
![](../images/image-email2.jpg)
* If you are in a zip code outside of the US, you must specificy the <b>zip code, country code</b> in the Subject Field.
![](../images/image-email.png)
>* Note: The country code must be in the 2 Digit ISO Format. Please visit [here](https://countrycode.org/) to quickly search for your country code. 
> * Don’t worry about anything in the body of the email, that will be completely ignored <br>

## Screenshot of Demo Flow
![](../images/image-flow-example.JPG)

