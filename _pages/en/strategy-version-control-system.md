---
layout: default
title: Version Control System
ref: version-control-system
lang: en
status: posted
sections: Strategies
permalink: /version-control-system.html
---
<!-- markdownlint-disable MD033 -->
<!-- the below cSpell statement says to ignore any text between HTML tags. e.g., it will ignore "th rowspan='2'" in this string: <th rowspan='2'> -->
<!-- cSpell:ignoreRegExp /\<[^\>]+\>/ -->
## {{ page.title }} <!-- omit in toc -->

<style>
table, th, td {
  border: 1px solid black;
}

th {
  background-color: #ccccff;
}
</style>

<div class="alert alert-warning">
  <strong>This is a DRAFT strategy</strong>.
</div>

<!-- markdownlint-disable MD001 -->
##### Table of Content <!-- omit in toc -->
<!-- markdownlint-enable MD001 -->
- [Introduction](#introduction)
  - [Purpose](#purpose)
  - [Target Audience](#target-audience)
  - [Business Case](#business-case)
    - [Benefits](#benefits)
- [Guiding Policy](#guiding-policy)
  - [Development](#development)
- [Coherent set of actions](#coherent-set-of-actions)
- [Measuring the Strategy's success](#measuring-the-strategys-success)
- [Appendix A - References](#appendix-a---references)
- [Appendix B - Definitions](#appendix-d---definitions)
- [Appendix C - Acronym List Definition](#appendix-e---acronym-list-definition)

## Introduction

### Purpose

To provide IITB with a modern and supported interdepartmental **Version Control System (VCS)** for use in software projects, and a roadmap to get there.

This strategy is aimed at reducing the need to purchase and support various version control systems, while increasing the collaboration and visibility between projects within ESDC and across the GC.

The strategy includes:

1. A **guiding policy**, which serves to set automatic decisions that defines the expected usage of the Version Control System
2. A **coherent set of actions** (an action plan), which serve to operationalize the Version Control System

The intent behind this strategy is to communicate a decision by the CIO (not yet approved) on a path forward (the Guiding Policy), and what investments are needed to operationalize that decision (the coherent set of actions).

### Target Audience

This **strategy document** is targeted to stakeholders involved in determining how IT Products are delivered.
More specifically, stakeholders involved in defining the rules for building, delivering, operationalizing, and maintaining IT Products.
The stakeholders are listed in section [Coherent set of actions](#coherent-set-of-actions) and are expected to participate in the execution stage of this strategy necessary to operationalize the Guiding Policy.

The **Guiding Policy**, once operationalized, will define the default place whereby all teams are responsible to publish their code, scripts, and configurations.
All ESDC personnel involved in the management of IT Products are expected to adhere to this policy, including but not limited to, developers and operations.

### Business Case

Moving to the digital age requires improving IT's responsiveness.

To improve IT's responsiveness, we must find ways to reduce risks associated with its use.
This strategy proposes equipping ESDC with a **modern and supported interdepartmental Version Control System**, for use by default by all software projects (and beyond) by default, and in direct support with the <a href="strategy-target-solution-delivery-model.html">Target IT Solution Delivery Model</a> strategy.
The benefits for the organization are numerous:

#### Benefits

- **Save costs** through consolidation;
- Strengthen **relationship** between IT and business through a common platform;
- **Discover/reuse** code from other projects (incl. other depts);
- Enhance **planning** of feature development through a single view;
- **Accelerate** the rate of development and deployments;
- Increase software **transparency**;
- **Automate** tracking of work;
- Improve the **quality and security** of code with automated testing, and through contributions by developing in the open (internal to GC);
- Attract IT **Talent**;
- Ensure **accountability** by logging changes and incidents; and
- Obtain metrics/statistics for **reporting** and continuous improvement.

The Architecture Review Committee (ARC) already endorsed the usage of three version control systems (July 2019):

- GitHub: Share with public (unclassified data);
- GCcode: Share with GC (up to Protected A data); and
- Azure: Share with ESDC (up to Protected B data).

However, much work remains to be done before we can realistically adopt them. For instance, GCcode is not officially supported by SSC and lack modern DevOps features (such as deployment to public cloud providers).
This strategy’s goal is to define what the target state of this interdepartmental version control system should be, and provide a roadmap in getting to this target state.
It capitalizes on existing IT initiatives (such as the [IITB Way Forward](http://dialogue/grp/IITB-DGIIT-Gov-New-Nouveau/Documents/Departmental%20IMIT%20Plan/19-20%20Plans/IITB%20Moving%20Forward%20v2.docx)) and compliments them with new activities.

## Guiding Policy

The following policy reflects the decision adopted by the **CIO of ESDC** (approval by CIO not yet obtained) regarding usage of the Version Control System.
Each policy statement is a declaration of that decision and has received the endorsement of its associated area of governance body (endorsements not yet obtained, see section [coherent set of actions](#coherent-set-of-actions)).

This policy becomes active when IT Products are to be built.
Once active, all teams involved in the project, and the IT products involved in the IT solution, must comply with this guiding policy.

This Guiding Policy has been prepared by taking into consideration alignment and compliance with existing policy instruments and does not replace them.
Stakeholders are expected to still comply with existing policy instruments including, but not limited to:

- TBS [Directive on Service and Digital](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32601)
- TBS [Directive on Security Management](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32611)
- ESDC Information Management Policy (being drafted)
- ESDC Security Policy (being drafted)

### Development

1. Development teams use the Version Control System (VCS) by default for all projects, while still considering to use a public platform instead (e.g., GitHub)
2. Development teams leverage the functionalities provided by the VCS as much as possible, for instance:
    - Source code hosting
    - Issues (incl. milestones and KanBan)
    - Wiki (documentation)
    - Build and Test Automation
3. Development teams make their projects in the VCS open to all departments by default

### Operations

1. Operations teams (incl. SSC) use the Version Control System (VCS) by default to develop and maintain configuration and scripts, while still considering to use a public platform instead (e.g., GitHub)
2. Operations teams leverage the functionalities provided by the VCS as much as possible, for instance:
    - Hosting of structure-based documents such as configuration and scripts
    - Issues (incl. milestones and KanBan)
    - Wiki (documentation)
    - Build and Test Automation
    - Deployment to internal or external platforms

## Coherent set of actions

The following are actions that need to be performed in order to make the Version Control System operational.

The **Stakeholders** column represent the stakeholders that will participate in the execution of the action.
The first Stakeholder in the list, in ***bold and italic***, is the Office of Primary Interest (OPI) responsible to oversee its execution.
For example, the action “GCcode: Set up official support” is expected to involve DevCoP, IT Strategy, TBS and ARC stakeholders, with DevCoP taking the lead to coordinate and execute this action

<table>
  <tr>
    <th>Outcome</th>
    <th>Action</th>
    <th>Description</th>
    <th>Stakeholders</th>
  </tr>
  <tr>
    <td rowspan="3"><b>Operations</b></td>
    <td>GCcode: Set up official support</td>
    <td>Determine the most appropriate model for providing official support in GCcode. <br>Some of the options are:
    <li>Plan official support with the current owner (SSC)
    <li>Move GCcode to a new owner (e.g., TBS, ESDC)
    <li>Stand up a new interdepartmental platform to use instead of GCcode
    </td>
    <td>
      <b><i>DevCoP</i></b><br>
      IT Strategy<br>
      TBS<br>
      ARC<br>
      ?<br>
    </td>
  </tr>
  <tr>
    <td>GCcode: Internal management, support and monitoring</td>
    <td>Provide support and guidance to ESDC employees, manage projects and monitor usage</td>
    <td>
      <b><i>Software Design Services (SDS)</i></b><br>
      ?
    </td>
  </tr>
  <tr>
    <td>GCcode: Enable connectivity to the Internet</td>
    <td>Enable projects in GCcode to deploy code to public cloud service providers</td>
    <td>
      <b><i>Cloud CoE</i></b><br>
      ?
    </td>
  </tr>

  <tr>
    <td rowspan="2"><b>Development</b></td>
    <td>GCcode: Configure DevOps capabilities</td>
    <td>
    Ensure DevOps capabilities are available in the platform such as:
    <li>Continuous Integration (CI)
    <li>Continuous Deployment (CD)
    </td>
    <td>
    <b><i>?</i></b><br>
    ?<br>
    </td>
  </tr>
  <tr>
    <td>Transfer projects to new source control solution</td>
    <td>Migrate software projects hosted in various internal version control systems to GCcode and gradually sunset these platforms.
    </td>
    <td>
    <b><i>?</i></b><br>
    ?<br>
    </td>
  </tr>
  <tr>
    <td rowspan="2"><b>Architecture</b></td>
    <td>Update ESDC OSS Management Framework</td>
    <td>Update ESDC OSS Management Framework to reflect the usage and capabilities of approved version control systems</td>
    <td>
    <b><i>EA</i></b><br>
    ?<br>
    </td>
  </tr>
  <tr>
    <td>Define best practices and standards on usage</td>
    <td>Define best practices, standards and procedures regarding the use of each version control systems</td>
    <td>
    <b><i>DevCoP</i></b><br>
    EA<br>
    </td>
  </tr>
  <tr>
    <td rowspan="1"><b>Communications</b></td>
    <td>Train staff</td>
    <td>Offer training resources to IITB staff related to DevOps and version control systems</td>
    <td>
    <b><i>?</i></b><br>
    ?<br>
    </td>
  </tr>  
  </table>

## Measuring the Strategy's success

This Strategy ‘s success will be measured by comparing the following metrics against the conventional IT project methodology.

The metrics are defined as follows:

1. *Number of ESDC Projects and Users (Public vs Private)*:
2. *Activity in ESDC Projects (e.g., issues, commits, integrations)*:
3. *User Satisfaction*:
4. *?*:

<table>
<tr>
    <th rowspan="2">Metric</th>
    <th colspan="2">Collection Method</th>
</tr>
<tr>
    <th>Target Model</th>
    <th>Conventional Model</th>
</tr>
<tr>
    <td>Number of ESDC Projects and Users (Public vs Private)</td>
    <td>
    <i>Automatic</i><br>
    Automatically fetch metrics from platform
    </td>
    <td>
    <i>Manual</i><br>
    Manually copy metrics from platform
    </td>
</tr>
<tr>
    <td>Activity in ESDC Projects (e.g., issues, commits, integrations)</td>
    <td>
    <i>Automatic</i><br>
    Automatically fetch metrics from platform
    </td>
    <td>
    <i>Manual</i><br>
    Manually copy metrics from platform
    </td>
</tr>
<tr>
    <td>User Satisfaction</td>
    <td>
    <i>Manual</i><br>
    Client survey
    </td>
    <td>
    <i>Manual</i><br>
    Client survey
    </td>
</tr>
<tr>
    <td>?</td>
    <td>
    <i>TBC</i><br>
    TBC
    </td>
    <td>
    <i>TBC</i><br>
    TBC
    </td>
</tr>
</table>

*Manually*: the collection of data requires manual intervention (e.g., surveys using the SimpleSurvey software, interviews, emails, spreadsheet updates).

*Automatic*: the collection of data is performed automatically, usually involving programmatic means (e.g., events triggered by git repository when a new commit is performed and updates a master dashboard “view”).

## Appendix A - References


## Appendix B - Definitions
<!-- markdownlint-disable MD036 -->

**[Version Control System](https://www.atlassian.com/blog/software-teams/version-control-centralized-dvcs)**

There are 2 types of version control systems:

**Centralized** version control systems are based on the idea that there is a single “central” copy of a software project somewhere (most likely on a server), and developers make code changes directly on this central copy.

**Decentralized** version control system do not necessarily rely on a central server to store all the versions of a software project's files.
Instead, every developer “clones” a copy of a repository and has the full history of the project on their own hard drive.
This copy (or “clone”) has all of the metadata of the original.
In a DVCS, developers typically will make code changes on their local copy, test them on their local copy, and “push” them to a central server containing the “master” copy the software project is intended to use.

ESDC will be using Git decentralized version control system to favour interoperability between source code repositories and accept that the market has moved toward git-based source code repositories.

**IT Solution**

An IT solution is a combination of one or more IT Products.
It produces the environment within which end users operate.

![How IT Solutions, IT Products, software, and infrastructure relate to each other](itsolution-itproduct-model.png)

**IT Product**

The combination of software, infrastructure, and their configuration.
An IT Product is akin to an “application” as defined by the [Application Portfolio Management (APM)](https://www.gcpedia.gc.ca/wiki/OCIO_Application_Portfolio_Management) program.
An IT Product may have one or many software (e.g., COTS, Open Source libraries, Open Source Software, Custom build software).
Each of those software are deployed in one or many infrastructure (on premise, on the public cloud, or a combination of the two making it a hybrid deployment).

A “working IT Product” is a version of the IT Product which allows DevOps teams to collect the maximum amount of validated learning about clients with the least effort.
A working IT Product must be able to be used by end users and provide DevOps teams with observation of end-user behaviours.

For the scope of this Strategy, Operating Systems are NOT defined as IT products.
Therefore should an IT Product depend on an Operating System to run in production, it is compliance with this Guiding Policy.

![How IT Solutions, IT Products, software, and infrastructure relate to each other](itsolution-itproduct-model.png)

**IT Project**

A temporary endeavour undertaken to create a unique technology product, service, or result.
The temporary nature of IT projects indicates that an IT project has a definite beginning and end.

This definition is a modified version for the [ESDC’s Directive on Project Management](https://gpp-ppm.service.gc.ca/sites/pwa/ESDCKnowledgeRepository/All%20Documents/Directive%20on%20Project%20Management.pdf) to include the IT aspect.

## Appendix C - Acronym List Definition

| Acronym | Definition                                |
|---------| ------------------------------------------|
| ARC     | Architecture Review Committee             |
| CCoE    | Cloud Community of Excellence             |
| EA      | Enterprise Architecture                   |
| EARB    | Enterprise Architecture Review Board      |

## Inline references <!-- omit in toc -->

[^1]: [DORA State of DevOps 2019](https://services.google.com/fh/files/misc/state-of-devops-2019.pdf) pages 40, 51, and 53
