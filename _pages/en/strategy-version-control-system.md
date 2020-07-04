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
<!-- the below cSpell statement says to ignore any text between HTML tags. E.g. it will ignore "th rowspan='2'" in this string: <th rowspan='2'> -->
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
    - [Benefits for IITB](#benefits-for-iitb)
    - [Benefits for Existing Projects](#benefits-for-existing-projects)
- [Guiding Policy](#guiding-policy)
  - [Development](#development)
- [Coherent set of actions](#coherent-set-of-actions)
- [Measuring the Strategy's success](#measuring-the-strategys-success)
- [Appendix A - References](#appendix-a---references)
- [Appendix D - Definitions](#appendix-d---definitions)
- [Appendix E - Acronym List Definition](#appendix-e---acronym-list-definition)

## Introduction

### Purpose

To provide IITB with a central Version Control System, and a roadmap to get there.

The strategy includes:

1. A **guiding policy**, which serves to set automatic decisions that defines the expected usage of the Version Control System
2. A **coherent set of actions** (an action plan), which serve to operationalize the Version Control System

The intent behind this strategy is to communicate a decision by the CIO (not yet approved) on a path forward (the Guiding Policy), and what investments are needed to operationalize that decision (the coherent set of actions).

### Target Audience

This **strategy document** is targeted to stakeholders involved in determining how IT Products are delivered.
More specifically, stakeholders involved in defining the rules for building, delivering, operationalizing, and maintaining IT Products.
The list of stakeholders are listed in section [Coherent set of actions](#coherent-set-of-actions) and are expected to participate in the execution stage of this strategy necessary to operationalize the Guiding Policy.

The **Guiding Policy**, once operationalized, will target stakeholders involved _when_ IT Products are developed, delivered, operationalized, and maintained.
All ESDC personnel involved in IT Products management are expected to adhere to this policy.

### Business Case

Moving to the digital age requires improving IT's responsiveness.

To improve IT's responsiveness, we must find ways to reduce risks associated with its use.
This strategy proposes equipping ESDC with a **unique, modern and supported Version Control System**, for use in all software projects (and beyond) by default.
It directly supports the <a href="strategy-target-solution-delivery-model.html">Target IT Solution Delivery Model</a> strategy.
The benefits for the organization are numerous:

#### Benefits for IITB

- **Cost savings** through consolidation
- Strengthen **relationship** between IT and business through a common platform
- Improve the **quality and security** of code with automated testing
- **Accelerate** the rate of development and deployments
- **Discover/reuse** code from other projects (incl. other depts)
- Obtain metrics/statistics for **reporting** and continuous improvement

#### Benefits for Existing Projects

- Benefit from a **common** development platform  
- Enhance **planning** of feature development through a single view
- **Automate** tracking of work
- Ensure **accountability** by logging changes and incidents
- Improve code **quality** and **collaboration** by developing in the open

This strategy capitalizes on existing IT initiatives (such as the [IITB Way Forward](http://dialogue/grp/IITB-DGIIT-Gov-New-Nouveau/Documents/Departmental%20IMIT%20Plan/19-20%20Plans/IITB%20Moving%20Forward%20v2.docx)) and compliments them with new activities.

This strategy's goal is to define what this Version Control System is, and provide a roadmap in getting to this target state.

## Guiding Policy

The following policy reflects the decision adopted by the **CIO of ESDC** (approval by CIO not yet obtained) regarding usage of the Version Control System.
Each policy statement is a declaration of that decision and has received the endorsement of its associated area of governance body (endorsements not yet obtained, see section [coherent set of actions](#coherent-set-of-actions)).

This policy becomes active when IT Products are to be built.
Once active, all teams involved in the project, and the IT products involved in the IT solution, must comply with this guiding policy.

This Guiding Policy has been prepared by taking into consideration alignment and compliance with existing policy instruments and does not replace them.
Stakeholders are expected to still comply with existing policy instruments including, but not limited to:

- ESDC Information Management Policy (being drafted)
- ESDC Security Policy (being drafted)
- TBS [Directive on Service and Digital](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32601)
- TBS [Directive on Security Management](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32611)

### Development

1. Development teams use the git-based Version Control System (VCS) by default for all projects, while still considering to use a fully public and open system (e.g. GitHub)
2. Development teams leverage the functionalities provided by the VCS as much as possible, for instance:
    - Issues (incl. milestones and KanBan)
    - Documentation
    - Build and Test Automation
3. Development teams make their projects in the VCS open by default

## Coherent set of actions

The following are actions that needs to be performed in order to make the Target IT Solution Delivery Model operational.

The **Stakeholders** column represent the stakeholders that will participate in the execution of the action.
The first Stakeholder in the list, in ***bold and italic***, is the Office of Primary Interest (OPI) is responsible to oversee its execution.
For example, the action “Adjust IITB SDLC” is expected to involve the BPMO and Senior Advisors stakeholders, with BPMO taking the lead to coordinate and execute this action

1. Commence discussions with business owner of GCcode (SSC CIO)
1. Determine and plan evolution of the service (business model, service models, hosting environment, etc.)
1. As required, set funding agreement(s) with ESDC and other departments
1. Implement technical changes & Formalize a support team within SSC
1. Update ESDC OSS Guidance (e.g. When to choose GCcode vs GitHub)

<table>
  <tr>
    <th>Outcome</th>
    <th>Action</th>
    <th>Description</th>
    <th>Stakeholders</th>
  </tr>
  <tr>
    <td rowspan="5"><b>Development</b></td>
    <td>Choose the IT Solution</td>
    <td>Determine the most appropriate platform to use. Some of the options are:
    <li>Existing GCcode platform ("pilot" maintained by Shared Services Canada on a "best effort" basis)
    <li>Existing GCcode but under a new owner (e.g., TBS, ESDC)
    <li>A new platform
    </td>
    <td>
      <b><i>IT Strategy</i></b><br>
      ARC<br>
      ?<br>
    </td>
  </tr>
  <tr>
    <td>Set up official support</td>
    <td>Make the adopted solution officially supported, either by a team of the owner or through a collaborative model (i.e. resources contributed by multiple departments)</td>
    <td>
    <b><i>?</i></b><br>
    ?
    </td>
  </tr>
  <tr>
    <td>Deploy the platform in the public cloud</td>
    <td>Leverage the public cloud for its inherent advantages (scalability, possibility to be visible on the Internet)</td>
    <td>
      <b><i>?</i></b><br>
      ?
    </td>
  </tr>
  <tr>
    <td>Configure DevOps capabilities</td>
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
    <td>Communicate and Train staff</td>
    <td></td>
    <td>
    <b><i>?</i></b><br>
    ?<br>
    </td>
  </tr>
  </table>

## Measuring the Strategy's success

This Strategy ‘s success will be measured by comparing the following metrics against the conventional IT project methodology.

The metrics are defined as follows:

1. *Number of ESDC Projects and Users*:
2. *Activity in ESDC Projects (e.g. issues, commits, integrations)*:
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
    <td>Number of ESDC Projects and Users</td>
    <td>
    <i>TBC</i><br>
    TBC
    </td>
    <td>
    <i>TBC</i><br>
    TBC
    </td>
</tr>
<tr>
    <td>Activity in ESDC Projects (e.g. issues, commits, integrations)</td>
    <td>
    <i>TBC</i><br>
    TBC
    </td>
    <td>
    <i>TBC</i><br>
    TBC
    </td>
</tr>
<tr>
    <td>User Satisfaction</td>
    <td>
    <i>TBC</i><br>
    TBC
    </td>
    <td>
    <i>TBC</i><br>
    TBC
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

*Manually*: the collection of data requires manual intervention (e.g. surveys using the SimpleSurvey software, interviews, emails, spreadsheet updates).

*Automatic*: the collection of data is performed automatically, usually involving programmatic means (e.g. events triggered by git repository when a new commit is performed and updates a master dashboard “view”).

## Appendix A - References

- [SDLC Process](onenote:http://dialogue/grp/PR6893344/OneNote/AppDevSA/02-Development%20%28In%20Progress%29/AppDev%20Roadmap.one#Outcomes%20and%20Dependencies%20Overview&section-id={5E16E60C-310B-49EF-8451-88E0CE4DA968}%26page-id={67E8C1D8-F39B-498E-A809-EEAAB9BDAC88}%26object-id={636B6DD3-FBD6-0F8E-30F2-FD3A0BC5F22E}&2E) (current and proposed alternate by Senior Advisors+BPMO)
- TBS [Directive on Service and Digital](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32601)
- TBS [Directive on Security Management](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32611)

## Appendix D - Definitions
<!-- markdownlint-disable MD036 -->

**[DevOps team](https://014gc-my.sharepoint.com/:w:/g/personal/remy_bernard_hrsdc-rhdcc_gc_ca/EaU8oDNt7iJNj8Zy_M64TOkBVJBlFhQ2d_fzOuF2N6bt8A?e=F5HEeL)**

A cross functional, multidisciplinary team that emphasize the collaboration and communication of both software developers and information technology (IT) professionals while automating the process of software delivery and infrastructure changes. A DevOps team complies with the [following standard IITB definition](https://014gc-my.sharepoint.com/:w:/g/personal/remy_bernard_hrsdc-rhdcc_gc_ca/EaU8oDNt7iJNj8Zy_M64TOkBVJBlFhQ2d_fzOuF2N6bt8A?e=F5HEeL).

A copy of the Office 365 version is [available here]({{ site.baseurl }}/assets/files/standard-devops-team-definition.docx).

**[Decentralized Version Control System (DVCS)](https://www.atlassian.com/blog/software-teams/version-control-centralized-dvcs)**

Centralized version control systems are based on the idea that there is a single “central” copy of a software project somewhere (most likely on a server), and developers make code changes directly on this central copy.

A decentralized version control system (DVCS) do not necessarily rely on a central server to store all the versions of a software project's files.
Instead, every developer “clones” a copy of a repository and has the full history of the project on their own hard drive.
This copy (or “clone”) has all of the metadata of the original.
In a DVCS, developers typically will make code changes on their local copy, test them on their local copy, and “push” them to a central server containing the “master” copy the software project is intended to use.

The three most popular DVCS are Mercurial, Git, and Bazaar.

ESDC will be using Git to favour interoperability between source code repositories and accept that the market has moved towards git-based source code repositories.

**IT Solution**

An IT solution is a combination of one or more IT Products.
It produces the environment within which end-users operates.

![How IT Solutions, IT Products, software, and infrastructure relate to each other](itsolution-itproduct-model.png)

**IT Product**

The combination of software, infrastructure, and their configuration.
An IT Product is akin to an “application” as defined by the [Application Portfolio Management (APM)](https://www.gcpedia.gc.ca/wiki/OCIO_Application_Portfolio_Management) program.
An IT Product may have one or many software (e.g. COTS, Open Source libraries, Open Source Software, Custom build software).
Each of those software are deployed in one or many infrastructure (on premise, on the public cloud, or a combination of the two making it a hybrid deployment).

A “working IT Product” is a version of the IT Product which allows DevOps teams to collect the maximum amount of validated learning about clients with the least effort.
A working IT Product must be able to be used by end-users and provide DevOps teams with observation of end-users behaviours.

For the scope of this Strategy, Operating Systems are NOT defined as IT products.
Therefore should an IT Product depend on an Operating System to run in production, it is compliance with this Guiding Policy.

![How IT Solutions, IT Products, software, and infrastructure relate to each other](itsolution-itproduct-model.png)

**IT Project**

A temporary endeavour undertaken to create a unique technology product, service, or result.
The temporary nature of IT projects indicates that an IT project has a definite beginning and end.

This definition is a modified version for the [ESDC’s Directive on Project Management](https://gpp-ppm.service.gc.ca/sites/pwa/ESDCKnowledgeRepository/All%20Documents/Directive%20on%20Project%20Management.pdf) to include the IT aspect.

**Target IT Solution Delivery Model**

The Target IT Solution Delivery Model has the same objective as the conventional one: deliver business value for money and reducing the risk with the use of technology.
Contrary to the conventional model, it will do so with:

- Limiting the size of IT Projects
- Defining IT Project in its entirety as the iteration step towards an organizational business goal
- Requiring commitments from business sponsors throughout the execution of the IT Project
- Favouring DevOps mentality to improve information flow and accelerate delivery (i.e. using delivery teams as opposed to a series of distributed functional teams)
- Measuring the business value obtained over time as opposed to strict schedule, cost, and scope estimates

## Appendix E - Acronym List Definition

| Acronym | Definition                                |
|---------| ------------------------------------------|
| ARC     | Architecture Review Committee             |
| BPMO    | Branch Project Management Office (IITB)   |
| BRM     | Business Relationship Management          |
| CCoE    | Cloud Community of Excellence             |
| CDO     | Chief Data Office                         |
| CFOB    | Chief Financial Officer Branch            |
| CIPSC   | Cloud Implementation Project Steering Committee|
| DGPOC   | Director General Project Oversight Committee|
| EA      | Enterprise Architecture                   |
| EARB    | Enterprise Architecture Review Board      |
| EPMO    | Enterprise Project Management Office      |
| IAERMB  | Internal Audit and Enterprise Risk Management Branch (formally Internal Audit Services Branch)|
| OCMC    | Operations Change Management Committee    |
| PMLC    | Project Management Life Cycle as defined by CFOB|
| PMP     | Project Management Plan                   |
| PPOC    | Project Portfolio Operations Committee    |
| PPPM    | Policy on Project and Program Management  |
| PPRC    | Portfolio Review Committee                |
| TSWG    | Technical Standards Working Group         |

## Inline references <!-- omit in toc -->

[^1]: [DORA State of DevOps 2019](https://services.google.com/fh/files/misc/state-of-devops-2019.pdf) pages 40, 51, and 53
