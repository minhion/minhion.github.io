# Control-M for Messaging with ActiveMQ Demo
## Introduction

>Maintainer: <patrick_hicok@bmc.com>

The <b>zzz-messaging-demo</b> folder is avaiable in the AWS Control-M Production demo system. It can be ordered when required for demo purposes and the folder should <b>not</b> be modified. 

See Usage Instructions below for steps to interact with this flow.

## Use Case Overview
Control-M for Web Services, Java, and Messaging (Control-M for WJM) is a comprehensive integration solution, which enables you to expand Control-M job scheduling to on-line and real-time applications.
Control-M for Messaging: Enables you to create a job that sends or receives a JMS or IBM WebSphereMQ Series message to another application’s message queue. If sending a message, the job can optionally wait for a response message from the application. 
Enables you to create a job that sends or receives a JMS or IBM WebSphereMQ Series message to another application’s message queue. The Control Module supports IBM WebSphereMQ,ActiveMQ, JBOSS, SAP Netweaver, Tibco EMS, WebLogic, and any JMS-based application.

## Use Case Technical Explanation
This workflow utilizes ActiveMQ installed on zzz-aws-linux-1 Agent. The workflow contains two jobs. The first Job listens to the Queue for a Message. The second job actually writes the message to the Queue being monitored.

## Job Types Included
* Messaging

## Usage Instructions
* Order the zzz-messaging-demo folder into Control-M. Job zzz-messaging-listen job will automatically start, and will begin listening to the Queue. Job zzz-messaging-post is on User Confirmation. Once confirmed, the job will write a message to the Queue. Upon completion of zzz-messaging-post, zzz-messaging-listen should complete executing

## Screenshot of Demo Flow

![](../images/messaging1.jpg)