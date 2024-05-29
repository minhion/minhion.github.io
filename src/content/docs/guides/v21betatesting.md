# Control-M 21 Beta Guide

Thank you for your efforts and willingness to test out our v21 Beta Installation.
<br>
<br>

Below is an updated beta guide that includes some of bthe new features that are now available. In addition to the installation itself, the following items are encouraged for testing:
  -	Application (on bulk of agents) and Agent deploy using the CCM with External Java 
  -	AI designer
  -	New CM for SAP
  -	Local Connection Profile to Centralized Connection Profile python utility – convert Local CP to CCP


<br>
<br>
Online Help (OLH) documentation is available by pressing the F1 key. Documentation is not yet available for some of the items, as indicated in the &quot;Comments&quot; column.

<style type="text/css">

</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-i78y">Feature</th>
    <th class="tg-i78y">Feature description</th>
    <th class="tg-i78y">Comments</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-lxgu" colspan="3">Agent </td>
  </tr>
  <tr>
    <td class="tg-9idf">One&nbsp;&nbsp;&nbsp;agent (Agent, AI, AAPI)</td>
    <td class="tg-9idf">New one&nbsp;&nbsp;&nbsp;installation for Agent, AI, and AAPI CLI</td>
    <td class="tg-9idf">This topic is not yet documented&nbsp;&nbsp;&nbsp;in OLH in this Beta.</td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="8">Agent supports VB\PS\Perl\Python&nbsp;&nbsp;&nbsp;embedded scripts</td>
    <td class="tg-fjpf">Embedded script first line&nbsp;&nbsp;&nbsp;should include #! and the interpreter definition.</td>
    <td class="tg-cly1" rowspan="8"> <br><br><br><br><br><br><br></td>
  </tr>
  <tr>
    <td class="tg-fjpf">In&nbsp;&nbsp;&nbsp;case of PowerShell script, -File should be added to the first line after the&nbsp;&nbsp;&nbsp;interpreter definition</td>
  </tr>
  <tr>
    <td class="tg-fjpf">On&nbsp;&nbsp;&nbsp;Windows, when the interpreter path contains spaces, it must be enclosed in&nbsp;&nbsp;&nbsp;quotation marks.</td>
  </tr>
  <tr>
    <td class="tg-fjpf">Example&nbsp;&nbsp;&nbsp;of the first line that should be added to the embedded script:</td>
  </tr>
  <tr>
    <td class="tg-fjpf">Windows&nbsp;&nbsp;&nbsp;example (PowerShell):</td>
  </tr>
  <tr>
    <td class="tg-gaq4">#!C:\WINDOWS\system32\WindowsPowerShell\v1.0\powershell.exe&nbsp;&nbsp;&nbsp;- File</td>
  </tr>
  <tr>
    <td class="tg-gaq4">Unix\Linux&nbsp;&nbsp;&nbsp;example (Python):</td>
  </tr>
  <tr>
    <td class="tg-gaq4">#!/usr/bin/python</td>
  </tr>
  <tr>
    <td class="tg-i78y" colspan="3">CTM&nbsp;&nbsp;&nbsp;Server </td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="3">New request service</td>
    <td class="tg-9idf">New microservices:</td>
    <td class="tg-9idf">New microservice not documented&nbsp;&nbsp;&nbsp;in OLH in this release</td>
  </tr>
  <tr>
    <td class="tg-9idf">·         “Request service” handle: log and why request from EM</td>
    <td class="tg-9idf"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">·         Order service handle: ctmorder,&nbsp;&nbsp;&nbsp;ctmudly, new day and order from EM</td>
    <td class="tg-9idf">Do Force job is ready only on PG&nbsp;&nbsp;&nbsp;DB in this Beta.</td>
  </tr>
  <tr>
    <td class="tg-i78y" colspan="3">Security</td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="3">Oracle support with Kerberos for&nbsp;&nbsp;&nbsp;DBO password</td>
    <td class="tg-9idf" rowspan="3">Support Kerberos authentication&nbsp;&nbsp;&nbsp;between the Control-M Servers DS and Oracle Server </td>
    <td class="tg-9idf">This topic is not yet documented&nbsp;&nbsp;&nbsp;in OLH in this Beta.</td>
  </tr>
  <tr>
    <td class="tg-9idf"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">Oracle&nbsp;&nbsp;&nbsp;Kerberos on Control-M EM supported only on Redhat 7 in this beta.</td>
  </tr>
  <tr>
    <td class="tg-9idf">Oracle&nbsp;&nbsp;&nbsp;secure communication (TLS 1.2 support)</td>
    <td class="tg-9idf">Full TLS 1.2 encryption for the&nbsp;&nbsp;&nbsp;communication layer between the Control-M Servers (CTM Server DS and CTM&nbsp;&nbsp;&nbsp;EM) and Oracle Server</td>
    <td class="tg-9idf">This topic is not yet documented&nbsp;&nbsp;&nbsp;in OLH in this Beta.</td>
  </tr>
  <tr>
    <td class="tg-i78y" colspan="3">Plugins (avoid adding invalid values at CCP&nbsp;&nbsp;&nbsp;fields, it may cause the Control-M Web to get stuck or break)</td>
  </tr>
  <tr>
    <td class="tg-cly1">AI</td>
    <td class="tg-9idf">New Designer &amp; data&nbsp;&nbsp;&nbsp;integrity (Add New at the end of url:&nbsp;&nbsp;&nbsp;&lt;hostname&gt;/ApplicationIntegratorNew/)</td>
    <td class="tg-9idf">AI – new UI design see the&nbsp;&nbsp;&nbsp;appendix section at the bottom for related use cases</td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="5">AI (deploy changes)</td>
    <td class="tg-9idf">AI deploy moved from Application&nbsp;&nbsp;&nbsp;Pack to One Agent installation</td>
    <td class="tg-9idf">The following topics are not yet&nbsp;&nbsp;&nbsp;documented in OLH in this Beta:</td>
  </tr>
  <tr>
    <td class="tg-9idf">·         AI is now part of One Agent installation</td>
    <td class="tg-9idf"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">·         AI is removed from Application Pack Installation</td>
    <td class="tg-9idf">·        &nbsp;&nbsp;&nbsp;Introduction section</td>
  </tr>
  <tr>
    <td class="tg-0lax"> </td>
    <td class="tg-04hz"><a href="https://jira.wla.bmc.com:8443/browse/WBL-181473">·        &nbsp;&nbsp;&nbsp;Validating and Testing</a></td>
  </tr>
  <tr>
    <td class="tg-0lax"> </td>
    <td class="tg-9idf">·        &nbsp;&nbsp;&nbsp;Tutorials (Full Flow Examples)</td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="8">Airflow</td>
    <td class="tg-9idf">New&nbsp;&nbsp;&nbsp;Airflow plugin enabling the user to trigger and monitor&nbsp;&nbsp;&nbsp;Airflow DAGs.</td>
    <td class="tg-9idf" rowspan="8"> <br><br><br><br><br><br><br></td>
  </tr>
  <tr>
    <td class="tg-mc24">It also&nbsp;&nbsp;&nbsp;enables viewing DAG tasks’ logs and XCOM variables.</td>
  </tr>
  <tr>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-9mf2">Pre&nbsp;&nbsp;&nbsp;requisite : Verify that the Airflow server is configured&nbsp;&nbsp;&nbsp;to accept REST API requests in the Airflow property  auth_backend.</td>
  </tr>
  <tr>
    <td class="tg-cly1"> </td>
  </tr>
  <tr>
    <td class="tg-cly1">The&nbsp;&nbsp;&nbsp;default value is airflow.api.auth.backend.deny_all and must be changed to airflow.api.auth.backend.basic_auth.</td>
  </tr>
  <tr>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-9idf"> </td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="3">Local CP convert to CCP</td>
    <td class="tg-9idf">How to use this utility:</td>
    <td class="tg-9idf" rowspan="3"> <br><br></td>
  </tr>
  <tr>
    <td class="tg-04hz"><a href="https://documents.bmc.com/supportu/9.0.21/en-US/Documentation/Creating_a_centralized_connection_profile.htm#ConvertingtoaCentralizedConnectionProfile">https://documents.bmc.com/supportu/9.0.21/en-US/Documentation/Creating_a_centralized_connection_profile.htm#ConvertingtoaCentralizedConnectionProfile</a></td>
  </tr>
  <tr>
    <td class="tg-9idf"> </td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="10">MFTE </td>
    <td class="tg-9idf">External User locking for&nbsp;&nbsp;&nbsp;business partners (non-LDAP)</td>
    <td class="tg-9idf">The following parts are not yet&nbsp;&nbsp;&nbsp;documented in OLH:</td>
  </tr>
  <tr>
    <td class="tg-9idf">Password&nbsp;&nbsp;&nbsp;policy for business partners (non-LDAP)</td>
    <td class="tg-9idf"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">Web&nbsp;&nbsp;&nbsp;Interface to Hub (https://&lt;hub_host&gt;:7443) for internal users</td>
    <td class="tg-04hz"><a href="https://jira.wla.bmc.com:8443/browse/WBL-182270">Configure SSL&nbsp;&nbsp;&nbsp;authentication between the Hub and the Gateway</a></td>
  </tr>
  <tr>
    <td class="tg-9idf">White-labelled&nbsp;&nbsp;&nbsp;file exchange interface</td>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">Customization&nbsp;&nbsp;&nbsp;of Logo/Image/icon for the file exchange interface</td>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">Multiple&nbsp;&nbsp;&nbsp;uploads via file exchange interface</td>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">Support&nbsp;&nbsp;&nbsp;for sub-directories in file exchange interface</td>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">Multiple&nbsp;&nbsp;&nbsp;MFT Enterprise Sites on the same EM</td>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">Disable&nbsp;&nbsp;&nbsp;simultaneous HTTPS logins</td>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">Support&nbsp;&nbsp;&nbsp;for TLS 1.3</td>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="15">MFT</td>
    <td class="tg-9idf">MFT Job -&gt; Advanced - If file&nbsp;&nbsp;&nbsp;exists, create a copy (counter/timestamp)</td>
    <td class="tg-cly1" rowspan="15"> <br><br><br><br><br><br><br><br><br><br><br><br><br><br></td>
  </tr>
  <tr>
    <td class="tg-9idf">MFT Job&nbsp;&nbsp;&nbsp;-&gt; Advanced - Post action "Change Permissions" (Unix only)</td>
  </tr>
  <tr>
    <td class="tg-9idf">MFT Job&nbsp;&nbsp;&nbsp;-&gt; Advanced - Post action "Run command" (Local only)</td>
  </tr>
  <tr>
    <td class="tg-9idf">MFT Job&nbsp;&nbsp;&nbsp;-&gt; Advanced - Post action on destination "Add an empty&nbsp;&nbsp;&nbsp;file" </td>
  </tr>
  <tr>
    <td class="tg-9idf">MFT Job&nbsp;&nbsp;&nbsp;-&gt; Advanced - PGP - choose PGP operation</td>
  </tr>
  <tr>
    <td class="tg-9idf">MFT Job&nbsp;&nbsp;&nbsp;-&gt; Advanced - FTP QUOTE Command</td>
  </tr>
  <tr>
    <td class="tg-9idf">MFT Job&nbsp;&nbsp;&nbsp;-&gt; Use $$ variables in the destination path</td>
  </tr>
  <tr>
    <td class="tg-9idf">FTS –&nbsp;&nbsp;&nbsp;Allowed/Blocked users list of internal users</td>
  </tr>
  <tr>
    <td class="tg-9idf">FTS -&nbsp;&nbsp;&nbsp;Disable server</td>
  </tr>
  <tr>
    <td class="tg-9idf">FTS -&nbsp;&nbsp;&nbsp;Access Log</td>
  </tr>
  <tr>
    <td class="tg-9idf">Support&nbsp;&nbsp;&nbsp;for TLS 1.3</td>
  </tr>
  <tr>
    <td class="tg-9idf">SFTP -&nbsp;&nbsp;&nbsp;new supported ciphers/KEX/MAC algorithms</td>
  </tr>
  <tr>
    <td class="tg-9idf">·         Support transfers from/to GCS (google cloud storage) </td>
  </tr>
  <tr>
    <td class="tg-cly1">·         Support transfers from/to Azure Data Lake Storage Gen2</td>
  </tr>
  <tr>
    <td class="tg-cly1">·         Support transfers from/to AWS S3 via AWS PrivateLink</td>
  </tr>
  <tr>
    <td class="tg-i78y" colspan="3">AAPI</td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="3">AAPI's token-based authentication</td>
    <td class="tg-9idf">Token management through&nbsp;&nbsp;&nbsp;Control-M Web UI and Automation API </td>
    <td class="tg-04hz" rowspan="3"><a href="https://docs.bmc.com/docs/automation-api/9021/services-993192292.html#:~:text=provided%20through%20GitHub.-,Authentication%20tokens,-You%20must%20include">You&nbsp;&nbsp;&nbsp;can find relevant documentation under Control-M Automation API section:&nbsp;&nbsp;&nbsp;Working with REST API &gt; Authentication tokens (specifically the 2nd&nbsp;&nbsp;&nbsp;option)</a></td>
  </tr>
  <tr>
    <td class="tg-9idf">Token&nbsp;&nbsp;&nbsp;authentication library used by Automation API, Config API, and Authorization&nbsp;&nbsp;&nbsp;Microservice</td>
  </tr>
  <tr>
    <td class="tg-9idf">Token&nbsp;&nbsp;&nbsp;storage based on EM Database </td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="2">Deploy at jobs/sub-folder level</td>
    <td class="tg-9idf" rowspan="2">Reduces the overhead of making smaller changes&nbsp;&nbsp;&nbsp;by enabling dev to deploy only the job/sub-folder they worked on</td>
    <td class="tg-cly1" rowspan="2">You can find relevant documentation under&nbsp;&nbsp;&nbsp;Control-M Automation API section: Job Properties &gt; PathElement and a note to Code Reference &gt; Folder &gt; SubFolder</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td class="tg-9idf"> </td>
    <td class="tg-cly1"> </td>
    <td class="tg-cly1"> </td>
  </tr>
  <tr>
    <td class="tg-i78y" colspan="3">New&nbsp;&nbsp;&nbsp;Control-M Web additions </td>
  </tr>
  <tr>
    <td class="tg-9idf">Host&nbsp;&nbsp;&nbsp;groups with RBA </td>
    <td class="tg-9idf"> Host Groups can now have&nbsp;&nbsp;&nbsp;RBA authorization</td>
    <td class="tg-cly1"> </td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="2">Run as </td>
    <td class="tg-9idf" rowspan="2">The ability to manage Run As from Control-M Web</td>
    <td class="tg-9idf" rowspan="2">Removed from CCM (when upgrading and&nbsp;&nbsp;&nbsp;compatibility mode is off) </td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td class="tg-9idf">Agent&nbsp;&nbsp;&nbsp;communication analysis </td>
    <td class="tg-9idf">The ability to perform Agent&nbsp;&nbsp;&nbsp;communication analysis from Control-M Web</td>
    <td class="tg-9idf">Removed from CCM</td>
  </tr>
  <tr>
    <td class="tg-9idf">Agent&nbsp;&nbsp;&nbsp;diagnostics (data collection) </td>
    <td class="tg-9idf">The ability to perform Agent&nbsp;&nbsp;&nbsp;diagnostics from Control-M Web</td>
    <td class="tg-9idf">Removed from CCM</td>
  </tr>
  <tr>
    <td class="tg-9idf">Agent&nbsp;&nbsp;&nbsp;system parameters </td>
    <td class="tg-9idf">Manage agent system parameters&nbsp;&nbsp;&nbsp;from Control-M Web</td>
    <td class="tg-9idf">Removed from CCM</td>
  </tr>
  <tr>
    <td class="tg-9idf">Agent&nbsp;&nbsp;&nbsp;debug </td>
    <td class="tg-9idf">You can now set agent debug from&nbsp;&nbsp;&nbsp;Control-M Web</td>
    <td class="tg-9idf">Removed from CCM</td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="2">Authorization (Roles &amp; Users)</td>
    <td class="tg-9idf">Moving existing “Authorizations”&nbsp;&nbsp;&nbsp;feature from CCM to the web (it’s no longer exist on CCM).</td>
    <td class="tg-9idf" rowspan="2">Removed from CCM (when upgrading and&nbsp;&nbsp;&nbsp;compatibility mode is off)</td>
  </tr>
  <tr>
    <td class="tg-9idf">Only&nbsp;&nbsp;&nbsp;roles can hold permissions dentitions, and user can be assigned to any of the&nbsp;&nbsp;&nbsp;defined roles. (User can’t hold it’s own permissions definitions)</td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="3">Site standards policies&nbsp;&nbsp;&nbsp;(template/global site standards)</td>
    <td class="tg-9idf" rowspan="3">You can create a Site Standard Policy and apply&nbsp;&nbsp;&nbsp;the policy to a specific folder or group of folders. (avoid the need to add&nbsp;&nbsp;&nbsp;global rules in each standard)</td>
    <td class="tg-9idf">When upgrading and compatibility&nbsp;&nbsp;&nbsp;mode is off.</td>
  </tr>
  <tr>
    <td class="tg-9idf">Set the&nbsp;&nbsp;&nbsp;following workaround:</td>
  </tr>
  <tr>
    <td class="tg-9idf">Set your&nbsp;&nbsp;&nbsp;role permission for Site standards as Full and recycle AAPI service.</td>
  </tr>
  <tr>
    <td class="tg-9idf">Json&nbsp;&nbsp;&nbsp;import/export</td>
    <td class="tg-9idf">Enable Control-M Web users to&nbsp;&nbsp;&nbsp;import\export workspace data from\to AAPI JSON formatted files.</td>
    <td class="tg-9idf">This topic is not yet documented&nbsp;&nbsp;&nbsp;in OLH in this Beta.</td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="9">New Control-M Reports</td>
    <td class="tg-9idf">1.    &nbsp;&nbsp;&nbsp;Folders/Jobs with Do actions reports:</td>
    <td class="tg-cly1" rowspan="9"> <br><br><br><br><br><br><br><br></td>
  </tr>
  <tr>
    <td class="tg-cly1"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">All&nbsp;&nbsp;&nbsp;jobs that send email to specific user with specific email details</td>
  </tr>
  <tr>
    <td class="tg-9idf">All&nbsp;&nbsp;&nbsp;jobs that have Do Set To OK, Set to Not OK</td>
  </tr>
  <tr>
    <td class="tg-9idf">All jobs&nbsp;&nbsp;&nbsp;that have Do that order another Jobs</td>
  </tr>
  <tr>
    <td class="tg-9idf">All jobs&nbsp;&nbsp;&nbsp;that have Do that add/delete events</td>
  </tr>
  <tr>
    <td class="tg-9idf">All jobs&nbsp;&nbsp;&nbsp;that have Do that add a variable</td>
  </tr>
  <tr>
    <td class="tg-9idf">All jobs&nbsp;&nbsp;&nbsp;that have Do that Handle Output</td>
  </tr>
  <tr>
    <td class="tg-0lax">2.       User&nbsp;&nbsp;&nbsp;authorization report adjustment to the new authorization in Web</td>
  </tr>
  <tr>
    <td class="tg-9idf">Folder&nbsp;&nbsp;&nbsp;management </td>
    <td class="tg-9idf">Folder manager (same as in the&nbsp;&nbsp;&nbsp;Desktop client) is now available from Control-M Web</td>
    <td class="tg-9idf">This topic is not yet documented&nbsp;&nbsp;&nbsp;in OLH in this Beta.</td>
  </tr>
  <tr>
    <td class="tg-i78y" colspan="3">Scheduling Features (applied from Control-M Server DS and MF)</td>
  </tr>
  <tr>
    <td class="tg-9idf">Add&nbsp;&nbsp;&nbsp;the ability to create Sub Folder that reference an existing Smart Folder or&nbsp;&nbsp;&nbsp;existing Job</td>
    <td class="tg-9idf">You can create a dedicated&nbsp;&nbsp;&nbsp;sub-folder that references an existing SMART folder or a specific job within&nbsp;&nbsp;&nbsp;a SMART folder or sub-folder. This enables you to reuse existing defined&nbsp;&nbsp;&nbsp;folders and jobs without the need to duplicate them creating more dynamic workflows&nbsp;&nbsp;&nbsp;and faster deployment of new workflows.</td>
    <td class="tg-i78y"> </td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="2">Late submission -shout for&nbsp;&nbsp;&nbsp;cyclic jobs </td>
    <td class="tg-9idf" rowspan="2">Add the ability to set late submission alerts if&nbsp;&nbsp;&nbsp;calculated cyclic submission is late by &lt;X&gt; minutes for any cyclic jobs&nbsp;&nbsp;&nbsp;or cyclic folders according to business needs.</td>
    <td class="tg-9idf" rowspan="2">This topic is not yet documented in OLH in this&nbsp;&nbsp;&nbsp;Beta.</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td class="tg-9idf">Unique&nbsp;&nbsp;&nbsp;Order Flow</td>
    <td class="tg-9idf">The “unique flow” indication is&nbsp;&nbsp;&nbsp;now supported also from DO FORCE statements.</td>
    <td class="tg-9idf"> </td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="3">Adjust Condition “Bridge” option</td>
    <td class="tg-9idf" rowspan="3">A bridge connects and enables scheduled jobs to&nbsp;&nbsp;&nbsp;run when there are unscheduled jobs in the workflow. The bridge maintains the&nbsp;&nbsp;&nbsp;order and dependencies between jobs, which enables all the jobs within the&nbsp;&nbsp;&nbsp;folder to run according to their defined criteria.</td>
    <td class="tg-9idf">Known issue:</td>
  </tr>
  <tr>
    <td class="tg-9idf">When&nbsp;&nbsp;&nbsp;creating flow where the first job in the flow isn’t order in the current day,&nbsp;&nbsp;&nbsp;the ordered flow not shown in monitoring domain.</td>
  </tr>
  <tr>
    <td class="tg-9idf"> </td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="2">Post processing based on&nbsp;&nbsp;&nbsp;variables</td>
    <td class="tg-9idf" rowspan="2">New type of ON statement, "On Variable&nbsp;&nbsp;&nbsp;value", will be added to the job, SMART folder and (for CTM&nbsp;&nbsp;&nbsp;DS) sub-folder definitions, and to active jobs (Z &amp; S), folder,&nbsp;&nbsp;&nbsp;sub-folders, EMAPI, AAPI</td>
    <td class="tg-9idf" rowspan="2">Not documented in OLH in this Beta.</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td class="tg-i78y" colspan="3">EM&nbsp;&nbsp;&nbsp;Features</td>
  </tr>
  <tr>
    <td class="tg-9idf" rowspan="12">Workflow insight domain</td>
    <td class="tg-9idf">Control-M Workflow Insights is a&nbsp;&nbsp;&nbsp;new add-on that enables you to improve and optimize your Control-M&nbsp;&nbsp;&nbsp;business workflows.</td>
    <td class="tg-9idf">Below you can find documentation&nbsp;&nbsp;&nbsp;of V20 FP2, as this Add on introduced already in FP2:</td>
  </tr>
  <tr>
    <td class="tg-9idf">The&nbsp;&nbsp;&nbsp;Control-M Workflow Insights collects various Control-M workflow metrics into&nbsp;&nbsp;&nbsp;a new offline Elasticsearch cluster and exposes a new Workflow Insights&nbsp;&nbsp;&nbsp;domain in the Control-M Web client that enables customers to track and&nbsp;&nbsp;&nbsp;monitor business workflow metrics over time via various dashboards.</td>
    <td class="tg-04hz"><a href="https://documents.bmc.com/supportu/ctmweb/help/9.0.20/en-US/index.htm#101770.htm">https://documents.bmc.com/supportu/ctmweb/help/9.0.20/en-US/index.htm#101770.htm</a></td>
  </tr>
  <tr>
    <td class="tg-9idf">The&nbsp;&nbsp;&nbsp;following lists the dashboards that you can view in Workflow Insights:</td>
    <td class="tg-stvh"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">·        Workflow Health</td>
    <td class="tg-cly1"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">·        Workflow Trends and Peak Volumes</td>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">·        Workflow Distribution</td>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">·        Workflow Alerts</td>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">·        Workflow Definition Updates</td>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">·        SLA Management Services</td>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">·        Optimization Insights</td>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-9idf">·        Job Executions</td>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-cly1"> </td>
    <td class="tg-0lax"> </td>
  </tr>
</tbody>
</table>


## Appendix

### Application Integrator (AI) new Designer UI - use cases

#### Description

Application Integrator (AI) is a “self service” tool, which allows developers and operations to independently create job types that can be run in Control-M, while reducing scripting effort and allowing rapid deployment of new applications.
<br>
The AI Designer (AI user interface) is now completely refactored and provides a faster, simpler and modern experience for building, deploying and maintaining job types.


#### How to access the new AI Designer
1. Login to your Control-M 9.0.21 test environment
2. From the “Tools” menu in the top toolbar, click on “Application Integrator”

![ApplicationIntegrator](../images/AI-access.png)

The Application Integrator will be opened in a new browser tab
3.	Change the URL in the new tab by adding “New” after “ApplicationIntegrator”
Example:
https://tst-ctm-tlv:8443/ApplicationIntegrator/  https://dba-tlv-uxt7ik:8443/ApplicationIntegratorNew/
4.	Welcome to the new Application Integrator Designer!
 

### Testing the new Application Integrator Designer 

The new AI Designer is a comprehensive tool that allows users to build job types via multiple interfaces with varying levels of complexity.
<br>
The main purpose of the tests is to verify that customers can perform the same functions in the new AI Designer that they used in the previous Designer AND are able to maintain their job types in a multi-version environment (For example: v9.0.21 test environment and v9.0.20 production environment).
<br>
The tests should be focused on maintaining AI functionality and backward compatibility.


#### Proposed functional scenarios for testing

<table>
<thead>
  <tr>
    <th>Scenario</th>
    <th>Description</th>
    <th>Purpose</th>
    <th>Non-functional focus</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2">Manually re-build an existing job type</td>
    <td>Build a job type that you have&nbsp;&nbsp;&nbsp;already built with the previous AI Designer, with the new Designer, from&nbsp;&nbsp;&nbsp;scratch.</td>
    <td rowspan="2">Maintaining&nbsp;&nbsp;&nbsp;Functionality - Users can utilize the same AI capabilities as before*</td>
    <td>Is the working flow intuitive?</td>
  </tr>
  <tr>
    <td>It is&nbsp;&nbsp;&nbsp;recommended to build job types using all 3 interfaces (Command line, REST API&nbsp;&nbsp;&nbsp;and Web service). Job types should include CCP/LCP and&nbsp;&nbsp;&nbsp;Output Handling.</td>
    <td>Are the functions/buttons location&nbsp;&nbsp;&nbsp;convenient? Are the steps and attributes order ease the working flow? Are the&nbsp;&nbsp;&nbsp;right areas are focused by default?</td>
  </tr>
  <tr>
    <td>Deploy a created job type to your&nbsp;&nbsp;&nbsp;Control-M environment</td>
    <td>Publish and deploy a job type you have previously built with AI and test&nbsp;&nbsp;&nbsp;it by running a Control-M job.</td>
    <td>Maintaining Functionality – Jobs created by the new AI Designer can be&nbsp;&nbsp;&nbsp;deployed to the customer’s Control-M environment. </td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">Import a Job Type that was built via the previous AI Designer</td>
    <td>Import the job and verify all job&nbsp;&nbsp;&nbsp;steps and definitions are visible in the new AI Designer.</td>
    <td rowspan="2">Backward Compatibility –&nbsp;&nbsp;&nbsp;Users can maintain their existing AI job types with the new Designer.</td>
    <td rowspan="2">How easy is it to find&nbsp;&nbsp;&nbsp;specific attributes in a familiar job type?</td>
  </tr>
  <tr>
    <td>Next&nbsp;&nbsp;&nbsp;step: deploy the imported job in the new Control-M environment.</td>
  </tr>
  <tr>
    <td>Export&nbsp;&nbsp;&nbsp;a job type to an older Control-M version AI </td>
    <td>Export a job built via the new AI&nbsp;&nbsp;&nbsp;Designer in an older Control-M version AI</td>
    <td>Backward Compatibility – Jobs that&nbsp;&nbsp;&nbsp;are built via the new AI Designer can be used and maintained in older&nbsp;&nbsp;&nbsp;Control-M Versions</td>
    <td> </td>
  </tr>
</tbody>
</table>


***Testing functionality in the new AI Designer is not fully developed for 9.0.21 Pre-GA, thus testing created jobs should be done via the previous AI Designer.***
