---
title: GCP Storage
description: Overview and technical discussion of orchestrating GCP Storage jobs.
---

# GCP Storage

**GCP Storage** cloud storage is a managed service for storing unstructured data. Store any amount of data and retrieve it as often as you like.

- **[GCP Storage Additional Information](https://cloud.google.com/storage/)**

For additional information on **GCP Storage**, select the following links:
- **[Helix Control-M GCP Storage Job Type Detail Information](https://confluence.bmc.com/display/JDI/GCP+Integrations)**
- **[GCP Storage Documentation](https://cloud.google.com/storage/docs)**

---

## Use Case Overview

This workflow will orchestrate file transfer jobs.

## Use Case Technical Discussion

This workflow is meant to keep jobs in a folder until the folder is removed. If a job does not end OK, then the folder will be kept for 1 day after the job ends.

---

## Demo Environment Information

| Environment                                                   | Status        | Hosts/Hosts Group       | Connection Profile       | Site Standard         | Demo Name             |
|---------------------------------------------------------------|---------------|-------------------------|--------------------------|-----------------------|-----------------------|
| [**Helix Production**](https://se-prod.us1.controlm.com/ControlM/#Planning) | Available     | zzz-linux-agents        | zzz_local and zzz_gcp_s3 | SE Demo System Standard | zzz-gcp-storage-demo  |
| [**Helix Pre-Prod**](https://se-preprod.us1.controlm.com/ControlM/Planning) | Available     | zzz-linux-agents        | zzz_local and zzz_gcp_s3 | SE Demo System Standard | zzz-gcp-storage-demo  |
| [**Helix Sandbox**](https://se-dev.sandbox.us1.controlm.com/ControlM/Planning) | Not Available |                         |                          |                       |                       |

---
