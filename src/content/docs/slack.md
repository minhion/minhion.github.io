# Slack Integration
## Introduction
> Maintainer: <aaron_baldwin@bmc.com>

This project contains the necessary information for Slack Integration.  The documentation here is broken into two sections for Configuration and for Usage.  The first section is all of the required backend configuration required, but is not required to be done more than once, and how to make a job shout to slack can be found in the Usage section.

![](../images/slack_integration.jpg)


# Configuration

This section outlines required backend configuration necessary to enable integration with Slack.  The Control-M Alert is routed from the database, to a program on the Server, which invokes a rest call to a Slack Webhook to propegate the message into a Slack Channel.


<b>Shout Destination</b>

A shout destination needs to be created through the CCM.  One has been created named Slack in the SYSTEM table on the Control-M Server to allow this to work, pointing to a shell script/program destination type on the Control-M Server.  This program issues a restful curl command to connect to the Slack Webhook/App.

![](../images/shout_destination.png)

<b>Slack Webhook</b>

An App needs to be created in slack, defining a webhook to a channel.  When creating the webhook, you specify which destination and the name of the Bot that sends the messages.  One has been created for EACH demo environment - Production and Sandbox - to easily differentiate the message source.

![](../images/webhook.png)

<b>Shell Script</b>

This is the shell script for the program shout destination.

This script is stored on the Control-M Server, in /opt/ctmsrv/custom/slack.  The script name is shout_to_slack.sh.  The permissions on the script and directory need to allow the Control-M Server account to write to the folder, and execute the script.  All messages additionally get written to a log file in this folder in case something breaks with the Webhook. 

![](../images/shell_script.png)

**Project**

This project is stored in gitlab, under the [Slack-Integration project](https://ctm-git.trybmc.com/abaldwin/slack-integration)

# Usage

The following section contains information for users to invoke an Alert to Slack from a Control-M Job.  This section is the important section to understand, as each Notification that users send to Slack needs to adhere to this information to provide useful information to the Slack Channel.

**Message Format**

On each job that a shout to slack should be performed, the following 2 messages should be created, adjusting for your logical server name and URL:

```
%%JOBNAME with JobID %%JOBID ended with Status %%COMPSTAT on %%NODEID at %%TIME
```

Log into below URL to analyze.

```
https://ctm-aws-production.bmcdemo.com:8443/ControlM/#Neighborhood:id=%%ORDERID&ctm=Production&name=%%JOBNAME&date=%%ODATE&
direction=1&radius=99&history=false
```

**Note** that the message length cannot exceed 255 characters, so there are 2 **"Do Notify"** statements with the above messages in order to create a deep link to navigate to the job and it's neighborhood.

![](../images/message_format.png)
> Control-M On-Do action

In both Production and Sandbox, there is a folder called **acb-slack-example** with a job called **acb-os-1**.  This job is **NOT** scheduled, but can be copied, or ordered in to send a message to Slack.  Additionally, the JSON for this Folder and Job are stored in the [Slack-Integration project](https://ctm-git.trybmc.com/abaldwin/slack-integration) project, under the jobs folder.