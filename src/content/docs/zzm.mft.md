---
tags:
  - overview
  - job types
  - mft
hide:
  - tags
title: CTM Job Types by category - Overview
summary: CTM Job Types by category
authors:
    - Volker Scheithauer
date: 2023-10-12
---

# Overview by Category 

## File Transfer Capability

The capabilities listed are implemented and deployed in the demo environment. 
As each capability demo requires some sample data, the initial creation of sample data is accomplished by the folder **ZZM_CAP_GENERIC_INIT**.
This folder runs on a cyclic schedule and will create a temporary file. In addition, CTM global pool **ZZM_CAP_INIT** variables are used to help the individal folders to re-use the content. 


???+ Example "Building MFT Jobs"  
    === "Demo Folder and Jobs"
        | Focus                   | Status | Info            | Deployed/Implemented  |
        | :-------------          | :---:  | :-------------  | :-------------        |
        | [Watch and Transfer ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.cap.wxfer.md) | ✅ | 🚧 | ZZM_CAP_GENERIC_WXFER |
        | [Watch only ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.cap.watch.md) | ✅ | 🚧 | ZZM_CAP_GENERIC_AWS, ZZM_CAP_GENERIC_AZURE, ZZM_CAP_GENERIC_GCS |
        | [File Pattern ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.cap.wxfer.md) | ✅ | 🚧 | ZZM_CAP_GENERIC_WXFER |
        | [Directory Listing ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.cap.wxfer.md) | ✅ | 🚧 | ZZM_CAP_GENERIC_WXFER |
        | [SFTP ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.ccp.sftp.md) | ✅ | 🚧 | ZZM_CAP_GENERIC_INIT | 
        | [Local ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.ccp.local.md) | ✅ | 🚧 | ZZM_CAP_GENERIC_INIT |
        | [AWS & Compatible Storage ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.ccp.aws.md) |  ✅ | 🚧 | ZZM_CAP_GENERIC_AWS |
        | [Azure Storage ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.ccp.azure.md) |  ✅ | 🚧 | ZZM_CAP_GENERIC_AZURE |
        | [Google Cloud Storage ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.ccp.gcs.md) | ✅ | 🚧 | ZZM_CAP_GENERIC_GCS |
        | [Oracle Object Storage ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.ccp.oci.md) | ⬜ | 🚧 | |


    === "Transfer Modes"
        | Focus                   | Status | Info            |
        | :-------------          | :---:  | :-------------  |
        | [Options](https://documents.bmc.com/supportu/9.0.21/en-US/Documentation/File_Transfer_Job.htm?Highlight=managed%20file%20transfer#TransferOptions)                 | ✅ |
        | Transfer                | ✅ | Transfers the file(s) |
        | [Watch & Transfer](https://documents.bmc.com/supportu/9.0.21/en-US/Documentation/File_Transfer_Job.htm?Highlight=managed%20file%20transfer#FileTransferFileWatcherAttributes)        | ✅ | Watches the file until it reaches a certain size or passes a time limit, and then transfers the file(s) |
        | [Watch Only](https://documents.bmc.com/supportu/9.0.21/en-US/Documentation/File_Transfer_Job.htm?Highlight=managed%20file%20transfer#FileTransferFileWatcherAttributes)              | ✅ | Watches the file until it reaches a certain size or passes a time limit |
        | Directory Listing       | ✅ | Lists all the files and directories from either the source or destination hosts |
        | Synchronize Directory   | 🚧 | Synchronizes all files by comparing all files in the source and destination folders based on the last modification. |

    === "File Transfer Capability"
        | Focus                   | Status | Info            | Deployed/Implemented  |
        | :-------------          | :---:  | :-------------  | :-------------        |
        | [Encryption & Decryption with PGP/GPG ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.cap.gpg.md) | 🔶 | 🚧 | |
        | [Watch and Transfer ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.cap.wxfer.md) | ✅ | 🚧 | ZZM_CAP_GENERIC_WXFER |
        | [Watch only ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.cap.watch.md) | ✅ | 🚧 |  |
        | [File Pattern ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.cap.wxfer.md) | ✅ | 🚧 |  |
        | [Archival ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.cap.transfer.options.md) | 🚧 | 🚧 |    |
        | [Traceability and Audibility ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.cap.transfer.options.md) | ✅ | 🚧 |  |
        | [Integrity Checking ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.cap.transfer.options.md) | 🔶 | 🚧 |  |
        | [Locking ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.cap.transfer.options.md) | ⬜ | 🚧 | |
        | [FIPS ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.cap.transfer.options.md) | ⬜ | 🚧 | |

    === "Connection Profiles"
        | Focus                   | Status | Info            | Deployed/Implemented  |
        | :-------------          | :---:  | :-------------  | :-------------        |
        | [FTP ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.ccp.ftp.md) | ⬜ | 🚧 | |
        | [SFTP ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.ccp.sftp.md) | ✅ | 🚧 | ZZM_SFTP_AGT1, ZZM_SFTP_AGT2 | 
        | [SFTP Transfer Group ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.ccp.sftp.md) | 🔶 | 🚧 | ZZM_SFTP_FTG | 
        | [Local ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.ccp.local.md) | ✅ | 🚧 | ZZM_LFS_AGT |
        | [UNC/SMB](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.ccp.local.md) | ⬜ | 🚧 |  |
        | [NFS4 ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.ccp.local.md) | ⬜ | 🚧 |  |
        | [AWS & Compatible Storage ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.ccp.aws.md) | ✅ | 🚧 | ZZM_AWS_S3 |
        | [Azure Storage ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.ccp.azure.md) | ✅ | 🚧 | ZZM_AZURE |
        | [Google Cloud Storage ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.ccp.gcs.md) | ✅ | 🚧 | ZZM_GCS |
        | [Oracle Object Storage ](https://mtc-docs.trybmc.com/protected/dsse/demo/capabilities/ctm.category.mft.ccp.oci.md) | ⬜ | 🚧 | |


??? Example "Implementing additional Security"  

    | Focus                   | Status | Info            |
    | :-------------          | :---:  | :-------------  |
    | Setup SSH Key Authentication | 🚧 | 🚧 |
    | FTS / SFTP re-authorize | ⬜ | 🚧 |
    | SSH Public Key Management | ⬜ | 🚧 |
    | PGP/GPG Encryption | 🔶 | 🚧 |
    | Allowed / Blocked Users | ⬜ | 🚧 |


### Use Case adpatation

* ✅ — Deployed, Documented and Operational
* 🔶 — Deployed, Testing Phase
* 🚧 — Under Construction
* ⬜ — Not Available, Not Implemented