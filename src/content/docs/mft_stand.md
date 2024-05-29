# Control-M Generic Managed File Transfer Demo

## Introduction
> Maintainer: <minh_nguyen2@bmc.com>

This generic MFT demo is used to demonstrate out of the box MFT capabilities that covers about 90% of use cases that customers are looking for when shopping for an MFT tool. This is primarily focused on "Non-MFTE" capabilities and other use cases can be combined to demonstrate an end-to-end fully featured MFT B2B model. This flow can be duplicated and is repeatable to address most initial impressions of Control-M MFT to meet minimal business requirements or validation of common business use cases. Most customers will have a "punch-list" of MFT items they are assessing. 

## Use Case Overview

Demonstrates the following Control-M MFT capabilities:

- Local to Local File Transfer
- Local to Cloud Storage(s) File Transfer
- Watch and Transfer (File-event driven)
- Watch only (triggering of downstream processes)
- Transfer Multiple Files Simultaneously (multi-threaded)
- File Pattern Transfers (transfer based on wildcard file pattern or exact name)
- Filename manipulation on extensions, casing, dates or entire name of file
- Encryption & Decryption with GPG/PGP
- Passing filenames as variables to other jobs/workflows
- Cyclic jobs and error handling
- Rerunning from point of failure
- Reattempting of file transfer attempts (e.g., SFTP server login fails)
- File Archival after File Delivery
- File Zipping
- E-Mail Alerting
- File Traceability and Audibility 
- File integrity checking (destination vs source comparison)
- File locking
- FIPS 140-2 requirements [MFT security](https://documents.bmc.com/supportu/9.0.21/en-US/Documentation/Control-M_MFT_Security.htm#ControlMMFTSecurity)
- Embedding SLA jobs into MFT workflows for accountability and guaranteed file delivery

## Use Case Explanation

General messaging should be unique and tailored, where possible, to meet the customer's persona or needs. The "zzz-generic-mft-flow" will need to be reviewed before the live demonstration. Each job will address common queries such as the movement of files between local file shares for internal network transfers. It should also showcase capabilities like replicating a file pull, delivering a file to an internal file share or server, and archiving files for resending purposes. The Managed File Transfer (MFT) domain should be leveraged during the demonstration to illustrate the value of file searches and to provide an audit trail of transferred jobs.

Start by viewing **zzz-generic-mft-flow** and understand which each job is doing in **Helix Control-M Production**

Here is the most typical MFT workflow for the health care industry. Files are pulled from an external vendor to a local file share. Different departments may access the file share if authorized. Unzipped files are sent to EDIFECS for processing. EDIFECS allows healthcare companies to transform data between different healthcare data standards and formats like HL7, X12 and XML.

![](../images/mft_generic_diagram.jpg)

## Resources on MFT/E and MFT side

Please reach out to Volker for assistance on messaging or the MFT team. In addition,  MFT certification (TBA) can be taken for Control-M MFT proficiency. 

## Usage Instructions

???+ warning "Pre-checks"

    - Ensure zzz-linux-agent-0 is up and available.
    - Ensure zzz-linux-agent-0 has FileTransfer plugin.
    - Please validate flow is running successfully before live demo.

## Running the flow

1. Order/Run "zzz-generic-mft-flow"
2. Certain jobs and folders will be waiting on user confirmation for the demo.
3. See below table on what each job does

| JobName                        | Description                                                                                                                            | Show (optional)                                                                                                                 |
|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| zzz-transfer-local-to-local    | Internal file movement between hosts e.g. NFS or CIFS or SMB or Local File System or NFS paths are supported.                          | Advanced -> Destination Filename  Rerun from point of failure                                                                   |
| zzz-transfer-to-gcp            | Internal to external file movement to a cloud storage. Google Cloud.                                                                   | -                                                                                                                               |
| zzz-transfer-to-s3-and-archive | Internal to external file movement to a cloud storage S3 bucket then upon successful transfer, archive file to a folder on a drive.    | Advanced -> Source Actions. Usually external vendors allow deletion after file pull                                             |
| zzz-blob-storage-event         | File detection in Azure Blob Storage and pulling file remotely to local file storage (File is also zipped after a successful download. | Advanced -> File Watcher settings. Review File Watcher documenation for more details. Post-execution command for Zipping        |
| zzz-transfer-date-var          | Internal file transfer with current date appended in MMDDYYYY format.                                                                  | Append current run date MMDDYYYY at destination filename.                                                                       |
| zzz-transfer-mutliple          | Transfer Multiple Files Simultaneously using a wildcard or folder.                                                                     | Advanced -> Scroll Down to Transfer Mutliple Files section                                                                      |
| zzz-watch-only                 | Trigger downstream upon detection of a "trigger" file.                                                                                 | Advanced -> File Watcher tab                                                                                                    |
| zzz-watch-and-transfer         | Watches files remotely and transfers to another remote host.                                                                           | Advanced -> File Watcher tab Note output of watched file stored to a pool variable. See If-Actions for alerting/troubleshooting |
| zzz-echo-filename              | Prints file that was detected into a pool variable. Pool variable can be used among other jobs across the enterprise.                  | Advanced -> File Watcher job                                                                                                    |
| zzz-sla-job                    | Critical business flow that has a SLA deadline.                                                                                        | Service Actions                                                                                                                 |
| zzz-error-job                  | Re-running jobs due to failures and can set a max re-run threshold.                                                                    | Cyclic options for jobs                                                                                                         |
| zzz-error-job-copy             | Re-running jobs due to failures and can set an action.                                                                                 | Cyclic options for jobs If-Actions                                                                                              |
| zzz-send-pgp-to-s3             | Encrypt plain text file and send to S3 bucket using GPG. PGP templates are found under Config -> FileTransfer Plugin of Agent          | PGP templates management located on zzz-linux-agent-0 -> plugins -> file transfer -> configuration                              |
| zzz-pull-pgp-file-from-s3      | Download encrypted file and decrypt using PGP.                                                                                         | PGP templates management located on zzz-linux-agent-0 -> plugins -> file transfer -> configuration                              |

## Screenshot of the Demo Flow

<figure markdown>
  ![Control-M Generic MFT Flow](../images/mft_generic_flow_demo.jpg)
  <figcaption>click to zoom</figcaption>
</figure>
