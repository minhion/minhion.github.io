# v21 Installation Guide

**Please use the following to setup and install the Control-M GUI client for the v21 environment.**

*_If you have any needs or questions regarding this project and the associated systems, please send them directly to David Leigh._*

## Prerequisites

Prior to running the install, be sure to download Java and set the Java variable:
> As of v21, Java is no longer bundled in with Control-M components.
<br>
<br>
1. Download: [OpenJDK version 11](https://adoptium.net/temurin/releases)
![](../images/v21_java_version.png)

2. Set variable

    **Linux/UNIX:** setenv BMC_INST_JAVA_HOME `<your java installation path>`

    **Windows:** This PC -> Right click -> Properties -> Advanced system settings -> environment variables -> System Variables -> New -> Variable name: BMC_INST_JAVA_HOME  `<your java installation path>`

    **Example**
    ```
    C:\EclipseAdoptium\jdk-11.0.15.10-hotspot\
    ```
    ![](../images/v21_java_variables.png)
    
    > **Important Note:** Ensure that there are no spaces in the path when installing the JDK

3. Install

## Download V21 GUI Client

[Click to Download V21 Client](https://control-m-pre-ga.s3.us-east-1.amazonaws.com/PreGA_9.0.21/V21%20SP7%20Beta/DRNFT.9.0.21.000_windows_x86_64.zip)

## V21 Beta Environment Details

For obtaining Control-M Installation Files, <a href="https://docs.bmc.com/docs/display/ctm9021/Obtaining+Control-M+Installation+Files" target="_blank">Click here</a>.
<br>

### Web Interface
<a href="https://ec2-35-153-191-106.compute-1.amazonaws.com:8443/Welcome/" target="_blank">Control-M Web Interface</a>

## GUI Client Installation Steps

1. Extract DRNFT.9.0.21.000_windows_x86_64.zip
2. Run setup.bat
3. Accept TOS
4. Name installation "V21Beta"
![](../images/v21_install.png)
5. Web server hostname ```ec2-35-153-191-106.compute-1.amazonaws.com```
6. Port ```18080```

![](../images/v21_gui_confirm.png)

!!! note
    Congratulations! You have successfully installed the GUI client. Please use your AD username to login and reach out to Dave Leigh for the password. Search for V21 in Windows start menu to launch the client!

![](../images/v21_beta_search.png)


<table>
    <tr>
        <th>EC2 Instance Name </th>
        <th>EC2 Public IPV4 DNS Name</th>
    </tr>
    <tr>
        <td>CTM-V21-Main-Install</td>
        <td>ec2-35-153-191-106.compute-1.amazonaws.com</td>
    </tr>
    <tr>
        <td>CTM-V21-RHEL8-Agent-1</td>
        <td>ec2-3-85-116-182.compute-1.amazonaws.com</td>
    </tr>
    <tr>
        <td>CTM-V21-RHEL8-Agent-2</td>
        <td>ec2-3-229-229-232.compute-1.amazonaws.com</td>
    </tr>
    <tr>
        <td>CTM-V21-RHEL8-MFT-GTW-1</td>
        <td>ec2-54-209-14-169.compute-1.amazonaws.com</td>
    </tr>
    <tr>
        <td>CTM-V21-RHEL8-MFT-GTW-2</td>
        <td>ec2-75-101-248-163.compute-1.amazonaws.com</td>
    </tr>
    <tr>
        <td>CTM-V21-RHEL8-MFT-Hub-1</td>
        <td>ec2-34-193-212-91.compute-1.amazonaws.com</td>
    </tr>
    <tr>
        <td>CTM-V21-RHEL8-MFT-Hub-2</td>
        <td>ec2-52-1-81-41.compute-1.amazonaws.com</td>
    </tr>
    <tr>
        <td>CTM-V21-RHEL8-MFT-Hub-3</td>
        <td>ec2-3-216-237-68.compute-1.amazonaws.com</td>
    </tr>
</table>

<br>
_V21 Credentials were emailed to the team - if you are unable to access the environment or did not receive your credentials, please contact David Leigh._

## Helpful Links and Information

<a href="https://docs.bmc.com/docs/display/ctm9021/Control-M+9.0.21+Release+Notes" target="_blank">9.21 Release Notes</a>
<br>
<a href="http://ctm-aws-documentation.bmcdemo.com/selab/v21issues/" target="_blank">v21 Issue Reporting</a>
<br>
<a href="http://ctm-aws-documentation.bmcdemo.com/selab/v21betatesting/" target="_blank">v21 Beta Guide</a>
<br>
<details><summary>Read the beta release note here!
</summary>
<br>
The V21 Beta System project team has setup a V21 Beta system in AWS for all SE’s to test on.  We have a beta testing guide from R&D that all SE’s can review for what they (R&D) would like tested.  However, we as SE’s need to do more broad spectrum testing.  Our ask is that you test this system as you would use it in a demo creation context.  Build jobs, run them, look at all aspects that you would present to a customer so that we have realistic testing going on.  If you have specific tests that you need to do based on customer interaction, please do them as well as often as possible.  The more rigorous testing we do the better the product will be at GA.  This system is available to all SE’s in all geographies.  We have a full documentation page available on [this site](http://ctm-aws-documentation.bmcdemo.com/selab/v21/) that will give you the information you need to access the system.  You can access the system using all of the interaction methods (Desktop Client, Web Client, AAPI) for whatever testing you want to do.  We have setup a GitLab project to collect issues with and present those issues to R&D and/or support.  If you encounter issues, we are asking you to open a issue in the GitLab project so that the administrative team can work the issues in tandem with you.  We do not want to get into a situation where we have several SE’s opening tickets or talking to R&D about the same encountered issues on their own.  We want to collect them and present them once only.  This will streamline our ability to get issues fixed in the appropriate manner.  The GitLab issue reporting system is also included in the documentation provided at the link above.  For access to the system, we started with uploading all of the userid’s currently defined to the main AWS V20 sandbox system.  If you do not have a userid assigned to the current AWS V20 sandbox system, and you want to test V21, please contact David Leigh directly and the team will get you an id.  Please do not send a general e-mail blast to all SE’s to gain access.  We are using the same userid scheme as the current AWS V20 Sandbox system which will be your ADPROD userid and a assigned password.  This system is NOT hooked up to the BMC Active Directory for secured access.
<br>
The system consists of 1 Control-M/Enterprise Manager, 1 Control-M/Server (distributed), 2 Control-M Agents (RHEL 8), 3 MFT/e Hubs (RHEL 8), 2 MFT/e Gateways (RHEL 8), MFT and MFT/e, Workload Archiving, Workload Change Manager, Self Service, SLA Management, and Forecast.  We have NOT installed Workflow Insights as nothing has changed in that product for V21 as far as we are aware.  We have NOT enabled any of the HA functions for the Control-M/Enterprise Manager, Control-M/Server, or Workload Archiving as well.  We are NOT including the mainframe components in this system as we do not have access to the BMC internal network at this time either.  We are NOT using AWS Route 53 for access, you will access the EC2 image for the Control-M/Enterprise Manager directly through the AWS public DNS name for the machine.
<br>
This system is wide open to everyone.  This means you can test any of the functions you wish that the system is currently enabled with.  However, for needed configuration changes to the Control-M/Enterprise Manager, Control-M/Server, Agents, or MFT/MFTe, PLEASE DO NOT DO THOSE YOURSELF!!!  Please open an issue in the GitLab project for help.  The administration team will look at the configuration change you wish made as we need to understand the change and make sure what you are asking for does not impact other testers.  This does not include creation of connection profiles, workload archiving policies and host groups, you can create those on your own as needed.  Should you need agents installed on other operating system types, please open and issue in the GitLab project and the team will endeavor to install that agent type and make it available to the system for your testing.
<br>
Lastly, this system will be available until the production demonstration systems are upgraded to V21 post-GA.  If you create any demonstrations you wish to keep in this V21 beta testing system, they will have to be moved to the production demonstration systems or sandboxes for continuous use.  We will not be maintaining the images for this system post the upgrade of the current production demonstration systems and sandboxes to V21.  So, anything you want to keep, you need to bring out of the system as needed.
<br>
Thanks for your patience regarding getting this system available.  We really appreciate the interest that has already been shown regarding when this system would be available.  Please take the time to TEST THIS SYSTEM HARD!!  Again, the more we test, and the more issues we find, the better the product will be at GA!
</details>

<br>