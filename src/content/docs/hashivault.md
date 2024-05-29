# HashiCorp Vault Integration
## Introduction
> Maintainer: <brandi_coleman@bmc.com>

The On-Demand Demo Service for this flow takes approximately 8 minutes to complete. 

See <b>Usage Instructions</b> below for steps to interact with this flow.

## Use Case Overview 
The HashiCorp Vault Integration workflow shows the ability of Control-M Secrets integration to a popular third-party secrets management tool, HashiCorp Vault. 

## Use Case Technical Explanation 
The Production Demo Environment has a deployed Connection Profile, <b>ODD_VAULT_DEMO_FTP</b> which requires a password update. The updated password is stored as a secret within the HashiCorp Vault instance deployed in our Automated Demos Kubernetes Cluster. This workflow demonstrates the process of automating the retrieval of this password secret from HashiCorp Vault (using the Hashivault Application Integrator job type) and updating the Control-M Secret embdedded in the ODD_VAULT_DEMO_FTP Connection Profile (using the AAPI Config Service). 

To view the demo flow code-base please navigate to the [Connection Profiles As Code - Vault Integration Repository](https://ctm-git.trybmc.com/automated-demos/connection-profiles-as-code-vault-integration).

## Job Types Included
- AI HashiVault 
- OS

## Usage Instructions
- It is recommended to show a failed test of validating the ODD_VAULT_DEMO_FTP Connection Profile prior to ordering the workflow
- It is recommended to show a successful test of validating the ODD_VAULT_DEMO_FTP Connection Profile during the sleep-job
- The revert-connection-profile job will revert the ODD_VAULT_DEMO_FTP Connection Profile to the original state of needing a password update

## Screenshot of Demo Flow
![](../images/hashi.PNG)


