# Forecast Flow
## Introduction
> Maintainer: <brandi_coleman@bmc.com>


Dummy update

This flow is ordered daily via the zzz-order process in production, and runs hourly each day.  
Each day, there is also a cleanup process that removes the flow and containerized agent that it runs on.

The On-Demand Demo Service for this flow takes approximately 2 minutes to complete. 

See <b>Usage Instructions</b> below for steps to interact with this flow.

<b>This use case is available for the AWS Demo System and Helix Control-M Production Demo System via the OnDemand Demo and OnDemand Helix Demo orderable services.</b>

## Use Case Overview 
The Forecast Flow workflow will run a simple Rest API call to collect data from OpenWeatherMap. The flow will then send the information via email to the user.

## Use Case Technical Explanation 
This workflow begins with an OS:Command job type that executes a REST API call to Openweather map providing a zip code and retrieving the weather data related to that zip code in json format. This output is appended to an output.json file and the dependent jobs parse this file to obtain the high temperature, city, and country. The concluding job in the flow gathers the parsed information into a weather update email to be sent as an email on-do action to the email address defined in the folder-level Control-M variable. 

To view the demo flow code-base please navigate to the <a href="https://ctm-git.trybmc.com/automated-demos/forecast-flow/-/tree/master" target="_blank">Forecast Flow Git Repository</a>

## Job Types Included
- OS

## Usage Instructions
- Update Control-M Folder-level variables, <b> zip code and email</b>, with valid values


## Screenshot of Demo Flow
![](../images/forecast.JPG)


