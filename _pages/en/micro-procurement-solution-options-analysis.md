---
layout: default
title: Micro-procurement Solution Options Analysis
ref: mp-solutionOptions
lang: en
status: posted
sections: Work In Progress
permalink: /micro-procurement-solution-options-analysis.html
---

- Introduction
  - Background
  - Purpose and Scope of this Document
- Business Need
  - High Level Business Requirements
  - Solution Scope
- Target Solution
  - Architectural Assumptions, Constraints and Decisions
  - Information Classification
  - Security Classification
  - Architecturally Significant Functional Requirements
  - Architecturally Significant Non-Functional Requirements
  - Solution Context Diagram
  - Solution Conceptual Design
- Option Analysis
  - Option Analysis and Recommendation
  - Evaluation Summary
  - Strategic Enterprise Perspective

## Business Need

### High Level Business Requirements (Capabilities)

#### Core (Must)

#### Provide a way for managers to create/edit opportunities

| Solutions | Pros | Cons |
|----------|-------------|------|
| **1 & 2 - Creating/updating related files on Github (Git)** | Free SaaS; Can be done using command line (no need to use Github Website) | Need Github account; Github Website english only; |
| **4 - Sending email to MP team (Hand holding)** | MP team would already review opportunity before it's posted; | |
| 6 - Creating/updating MP job (one generic or all of them) on Jobs.gc.ca | Use existing solution; | |
| 7 - Creating/updating opportunity on MP platform | | Need to engage EA; |

#### Provide public access to information about opportunities

| Solutions | Pros | Cons |
|----------|-------------|------|
| **1, 2 & 3 - Static Website hosted on Github Pages** | Free SaaS; Unclassified information only; Bilingual with GC theme and accessibility using WET; Source code of Website available as open source software; | Need Github account; Github Website english only; |
| 6 - MP on Jobs.gc.ca | Use existing solution; Protected B; | HR process; |
| 7 - Opportunities on GC Micro-procurement (MP) platform | | Need to engage EA; |

#### Provide a way for interested parties to apply to opportunities

| Solutions | Pros | Cons |
|----------|-------------|------|
| 4 - Sending email to MP team (Hand holding) | | No protected Information by email; |
| **6 - Apply to the MP job on Jobs.gc.ca** | Use existing solution; Can collect Protected B information; | |
| 7 - Apply on GC Micro-procurement (MP) platform | | Need to engage EA; |

#### Provide a way for interested parties to ask questions about opportunities

| Solutions | Pros | Cons |
|----------|-------------|------|
| **2 - Submit question on Github Issue** | Free SaaS; | Need Github account; Github Website english only; |
| **4 - Sending question by email to MP team** | Provide answer about process; Share with manager; Add to FAQ; | |
| **5 - Sending question by email to the manager** | Provide answer about opportunity; | |
| 7 - Submit question on GC Micro-procurement (MP) platform | | Need to engage EA; |

#### Provide a way for interested parties to agreed to terms and conditions

| Solutions | Pros | Cons |
|----------|-------------|------|
| **4. Agreed by sending email to MP team** | | No protected Information by email; |
| **6. Agreed when applying to the MP job on Jobs.gc.ca** | Use existing solution; Can collect Protected B information; | |
| 7 - Agreed when applying on GC Micro-procurement (MP) platform | | Need to engage EA; |

#### Provide a way for managers to announce who (contractor) will be working on the opportunity

| Solutions | Pros | Cons |
|----------|-------------|------|
| **1 & 2 - Updating related files on Github** | Can be done using command line (no need to use Github Website) | Need to know what to change; Need Github account; Github Website english only; |
| **4. Sending email to MP team (Hand holding)** | | |
| 6. Updating MP job on Jobs.gc.ca | | |
| 7. Updating opportunity on MP platform | | Need to engage EA; |

#### Provide a place for contractor to put their code

| Solutions | Pros | Cons |
|----------|-------------|------|
| **1 & 2 - Create a branch on Github in a GC Project for the contractor to save their code (Pull request)** | Branch will include appropriate OSS licence; Code will be reviewed prior to accepting the work; Can be done using command line (no need to use Github Website); | Need Github account; Github Website english only; |
| **4. Sending email to MP team with your code (Hand holding)** | | Might not include history of changes (Git); |

#### Provide a way for ESDC to pay the contractor once work is completed and accepted

| Solutions | Pros | Cons |
|----------|-------------|------|
| 4. Sending email to MP team | | |

ESDC is albe to pay by:

- Credit card
- Cheque
- Interac e-Transfer

#### Provide a way to report on opportunities, applications, submissions

| Solutions | Pros | Cons |
|----------|-------------|------|
| 4. Sending email to MP team | Hand holding through the process; | No protected Information by email; |
| **6. Use answers from applications to the MP job on Jobs.gc.ca** | Use existing solution; Can collect Protected B information; | |
| 7. Answers question during application on GC Micro-procurement (MP) platform | Could be Protected B; | Need to engage EA; |

#### Desirable (Should)

#### Integrated platform for opportunity creation, application, selection and payment process

| Solutions | Pros | Cons |
|----------|-------------|------|
| 7. GC Micro-procurement (MP) platform and public code repo | | Need to engage EA; |

#### Optional (Could)

- Money is sent when code is merged (ex.: Pull Request) into upstream or GC repo

### Solution Scope

#### In scope

- Establishing procurement process to enable micro-procurement in ESDC (< 10000$)
- Publishing Website for micro-procurement opportunities with ESDC
- Supporting hiring managers and contractor with micro-procurement at ESDC
- Reporting..

#### Out of scope

- Hosting a platform for GC public source code repositories
  - Use existing solutions (Gitlab, Github, ..)

## Target Solution

### Architectural Assumptions, Constraints and Decisions

#### Assumptions

- No $

#### Constraints

- Mandatory EA procedures

#### Decisions

- No new Protected B solutions

### Information Classification

#### Information value

### Architecturally Significant Functional Requirements

## Option Analysis

### Solutions

#### 1. Git

Widely used open source version control system to track changes to files.

#### 2. Github or Gitlab or Bitbucket or Codeberg or

SaaS that provides free public source code repositories where code can be saved.

#### 3. Github (or Gitlab) Pages

PaaS that provides free hosting for a static Website. Website can be generated by Jekyll or Gatsby.

#### 4. Emails with MP team

Sending email to the team and getting emails back.

#### 5. Emails with hirring manager

Sending email to the manager and getting emails back.

#### 6. Jobs.gc.ca or Buyandsell.gc.ca

Existing Web portal for posting and applying to GC jobs or procurements
Buyandsell requires Business Number.

#### 7. GC Micro-procurement (MP) platform

Web portal hosted by GC, to enable the MP process for opportunity creation, application, selection and payment processing. Could reuse code for BC Digital Marketplace (Code with us).
