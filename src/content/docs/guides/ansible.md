# Ansible Orchestration
## Introduction
> Maintainer: <brandi_coleman@bmc.com>

The On-Demand Demo Service for this flow takes approximately 7 minutes to complete.

See <b>Usage Instructions</b> below for steps to interact with this flow.

# Use Case Overview 
There are 3 sample integration options with Ansible. 
- Leveraging Control-M Ansible AI Job type to run an ansible-playbook configuration file (YAML) that does not require modification.
- Leveraging Control-M Ansible AI Job type to modify and run an ansible-playbook configuration file (YAML).
- Install Control-M Components (Control-M Agent covered in this use case) with ansible-playbook.

## Use Case Technical Explanation 
This folder contains one job which executes an Ansible playbook trigger. The playbook leverages the CTM CLI to upgrade the Control-M Agent from 9.0.20.000 to 9.0.20.100.

To view the demo flow code-base please navigate to the [Ansible Orchestration Git Repository](https://ctm-git.trybmc.com/automated-demos/ansible-orchestration/-/tree/master)

## Usage Instructions
- The USER_CODE-ansible-playbook-agent-upgrade job takes about 17 minutes to complete

## Job Types Included
- AI Ansible Playbook

