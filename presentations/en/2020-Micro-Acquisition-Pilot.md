<!--markdownlint-disable MD001 MD033 MD026 MD036 MD041 -->
<style>
.reveal section img { background:none; border:none; box-shadow:none; }
</style>

# Micro-Acquisition for digital work

ESDC IT Strategy team

---

## Purpose for being here

To share with you and get your comments on:

- Our research on low dollar value procurement
- Our proposal - a Micro-Acquisition Pilot for digital work at ESDC

Note:

- we are here to share with you the work we have been doing to understand the micro-procurement landscape as well as our proposal for how to we could facilitate micro-procurement for digital work
- we are working in joint partnership with the procurement innovation team in CFOB on this initiative and are very interested to get your comments on this as we are looking to move this forward

---

## Why look at an alternate way to procure digital work?

- Barriers to suppliers means reduced access to talent
- Lots of time spent on formalizing small contracts
- Getting external help for ad hoc development work is cumbersome

Note:

- 95% of small and medium enterprises don't see the GC as a client.  In a recent procurement ombudsman report GC standing offers and supply arrangements are 'cumbersome to use and difficult to qualify for. They also seem to disproportionately favour suppliers in the NCR'. As a result, the GC doesn't get the opportunity to benefit from many of the amazing developer talent that exists in Canada.
- while small contracts are low dollar value and low risk, they take up the time of procurement officers whose expertise is needed for complex and high-risk procurement.
- although procurement processes at ESDC are becoming streamlined (including initiatives like contract on demand), getting external help for small pieces of ad hoc development work (say to fix a bug or to build a small prototype) still takes weeks. In the world of open source, where the code is freely available to anyone to fix and access immediately, and when IT is moving towards a DevOps/agile way of working (where changes to IT systems can, and should, be made daily), it is necessary to have a procurement process that can move equally as fast. Without fast procurement we hinder our ability to deliver high-quality IT solutions.

---

## Who Cares?

- ESDC IT Strategy team
- Red tape reduction initiative
- Gartner
- Office of the Procurement Ombudsman (Canada)
- Office of Small and Medium Enterprise (PSPC)
- Freelancers & Small and medium enterprises themselves
- Canadian Digital Service
- TBS Procurement policy team

Note:

ESDC IT Strategy team:

- Procurement is a key piece of the puzzle that will take us to where we want to go. ​
- This initiative is aligned with our "Target Solution Delivery Model", "Adopt, Build, Buy", and "Continuous Improvement" strategies
  - The tie-in with continuous improvement is because micro-procurement for OSS is not just about speed, it can also help us to continually improve by pushing us towards modern technologies and tools.​

Red tape reduction initiative:

- Recommended establishing "a fast track process for service contracts under $10,000"

Gartner:

- In their Procurement in 2020 and Beyond report, Gartner recommends **shifting the ownership for low and mid-tier purchases away from corporate procurement teams so that they can focus primarily on strategic, high value, high-risk purchases**

Those are the drivers, and then some stakeholders who also care are:

Office of the Procurement Ombudsman:

- As part of an effort to explore significant and recurring issues in federal procurement, the Office of the Procurement Ombudsman released a report on Low Dollar Value Contracting in 2019.
- They care about this as they help Canadian businesses. They investigate complaints and provide dispute resolution services to businesses for GC contracts up to $105K. They also review widespread federal contracting issues and provide recommendations on how to improve them. With the limit of $105K, they primarily work with small businesses.

Office of Small and Medium Enterprise (at PSPC):

- advocates for and encourages SME participation in GC procurement (including running regular webinars to help SMEs navigate the various procurement processes).
- We have had a number of conversations with them and they have offered to help with design for the next version of GCDevEx.
  
Freelancers and small businesses:

- Suppliers have told the Office of the Procurement Ombudsman that supply arrangements and standing offers “can sometimes be cumbersome to use and difficult to qualify for. They also seem to disproportionately favour suppliers located in the National Capital Region”.

Canadian Digital Service:

- licence all their work as open source and are strong advocates for open source in the GC. They had initially planned to lead a relaunch of the GC Developers Exchange (originally launched in 2017) but they are at capacity and cannot proceed. However they have been providing guidance.
- More recently, applicants to the CDS have mentioned the fact that the COVID Alert app had been released as open source to explain their sudden interest in joining their ranks.

TBS procurement policy team:

- We have engaged this team and they confirmed that there is nothing in the current policy instruments that prevents establishing a simplified process for LDV purchases.  They are currently doing a policy reset.

--

## In the GC, each LDV procurement takes approximately

<img src="assets/images/67-working-days.png" alt="This image shows the following statistics: it takes 7 people, 8 days of touch time and 15 weeks to complete the average Low Dollar Value procurement in the GC.  This results in an 11% flow efficiency rate and 67 working days of wait time">

Note:

The Red Tape Reduction Report included some analysis of current processes and timelines for LDV procurement and determined that based on the departments that participated.....
These stats led them to their recommendation to fast track contracts under $10K
7 people across groups including the contract owner as well as the suppliers

---

## Proposed solution

A one year Micro-Acquisition Pilot consisting of:

1. A simplified procurement process
   (few approvals required, less paperwork, more automation)
2. A website to share opportunities, and find talent

Note:

Solution has 2 components:

1. A simplified back-end procurement process for code licenced as open source. Why open source code only ... but that doesn't mean that only folks who are currently using open source solutions or running systems built on open source code could benefit. This pilot could also be used to procure code for proprietary systems such as pipeline scripts to automate processes.
2. A front end to facilitate sharing contract opportunities and finding talent

we are proposing that this initiative be a pilot for one year and then reassess

---

## What sort of contracts are we talking about?

- $10K and under
- Work that can be done remotely
- Work that is unclassified
- Work that is licenced as open source
- All work is done in an open repository (e.g., GitHub, GitLab)
- ESDC only (at this time)

Note:

- Risk is very low on LDV​ especially if under the proactive disclosure threshold of $10K
- LDV procurements go through many of the same steps as >$1M​
- Opportunity to better distribute GC contract $
- Big contracts will always go to big companies.  But with small contracts that the big players are less interested in, there is an opportunity to make it easier for folks other than the usual suspects to get contracts.​
- only contracts initiated by ESDC

---

## What if...

<img src="assets/images/GCDevEx-Presentation.PNG" alt="This image shows a process flow scenario where the entire procurement takes only 72 hours.  Process items are shown using circles.  The first two process items of finding the bug and posting the opportunity are completed within 24 hours, the next two process items of bid received, and supplier selected are completed 24 hours after that, and finally the last two process items of Code submitted and checked and Code accepted and payment issued are completed in the last 24 hours">

Note:
To further elaborate on what we think this could look like...
You notice a bug in an open source component of an application.  You post a description of the bug online with a dollar value of what you would pay to fix the bug. Within 24 hours you have folks from across the country who have said they can fix it.  You look at their GitHub profile to verify that they have the skills and experience needed to fix the bug. You tell them to go for it.  They submit the code 24 hours after that. You check the code against acceptance criteria (including security), and if it is ok, you pull the code and provide payment.

---

## This is not about increasing outsourcing

Note:

- probably some flags are coming up for you about outsourcing...our feeling is that this is not about increasing outsourcing but rather about doing procurement differently

---

## What do we expect to achieve?

- Access to developers who wouldn’t normally bid on GC IT contracts
- Reduced workload burden on ESDC procurement officers
- Increased working in the open
- Increased knowledge of modern software/tools by IITB employees
- Increased capabilities around agile including breaking work up into smaller chunks (NOT CONTRACT SPLITTING)

Note:

- Regarding access to developers, 95% of SMEs surveyed in 2017 do not see the GC as a buyer.
  - Through a **simplified and expedited** process that **reduces the barriers** that these organizations (including startups) and freelancers face, and a **targeted communications strategy** (to diverse businesses such as those that are Black, and Indigenous led), this pilot is **expected to increase access to IT talent that the GC is currently missing out on**
- reduced workload burden on procurement officers - we propose that they will help put guardrails in place but largely be uninvolved in the micro-procurement process
- all procured code will be licenced as open source. Could also be a nudge for some teams to open up some of their code in order to easily work with contractors.
- Strategic procurement of open source code can bring knowledge into IT teams that is not currently there. Suppliers will be contracted to solve problems and when they turn over the open source code, ESDC IT teams will be able to learn from suppliers in almost a train the trainer sort of way. This would enable IITB to build capacity in-house and embed modern tools and practices within IITB teams.
- Further, contributions to GC open source projects, or open source projects being leveraged by the GC, has the **potential to be leveraged as a recruitment tool** for IITB. (CDS has experienced this with COVID Alert)

---

## Alignment

- ESDC Mandate
- Digital Operations Strategic Plan
- Digital Nations Charter commitment
- Directive on Service and Digital
- ESDC Investment Plan

Note:

- as mentioned, lots of people see the benefits of having separate processes for micro-procurement
- there is strong alignment to policy and mandate... ESDC's mandate of "works to improve the standard of living and quality of life for all Canadians. We do this by promoting a labour force that is highly skilled. We also promote an efficient and inclusive labour market." makes ESDC a good fit to lead this initiative
- Digital Operations Strategic Plan – which speaks to the need for Procurement Modernization for IT specifically, Agility, and Open Source​
- Digital Nations Charter commitment (formerly D9) – Open Standards, Open Source, Open Markets, Open Government, and which Canada is a signatory
- Directive on Service and Digital – Open First​
- ESDC Investment plan (2017-18 to 2022-23) – Emphasizes the use of OSS​

---

## Who is already doing this?

- Private industry
- US Government
- BC Government
- Yukon Government (in development)
- QC Government (in development)

Note:

- Lots of folks for us to learn from who are already doing this
- Many external companies (e.g., Bug Bounty Programs and [goquotes.ca](https://goquotes.ca))
- US Government has a Micro-purchase threshold that they just increased to $10K and a number of teams are experimenting with this threshold around the procurement of open source code
- BC Government has the BC Digital Marketplace (run by their BC Developers Exchange team) which is their micro-procurement platform.  They have had this for many years. They started small and ultimately went up to $70K for their micro-procurement 'Code with us' platform and as much as $2M for their associated 'Sprint with us' platform. They have really led the way and we are connected with them and learning from them.
- QC Government - had conversations with them...they are also looking at implementing micro-procurement of open source code

---

## If this is a good idea, why aren't we doing this in the GC?

- Takes commitment from two teams: IT and Finance
- Fear of making a mistake/losing delegated authority/getting fired
- We did

Note:

- Procurement has a lot of rules.  And the fear around making a mistake tends to create a fairly risk averse situation around procurement.  
- We have experimented with micro-procurement for open source code in the GC

---

## The GC Developers Exchange

<img src="assets/images/gcdevex.jfif" alt="This image shows the former GC Developers Exchange website">

Note:

- The GC Developers Exchange was the GC's first experiment with micro-procurement for open source code.
  - It was launched in 2017 by Privy Council Office (in partnership with TBS and PSPC).
  - It was built on code that was forked from the BC Developers Exchange.
  - All contracts awarded via GCDevEx were $10K and under, and were for virtual and unclassified work only (eliminating the need for a supplier security check).
- The GCDevEx pilot created many lessons learned:
  - a **simplified back-end process is required** not just a front end to connect the GC with developers,
  - GC isn't used to breaking work into smaller chunks,
  - the proposal creation process needs to be easier (no more than 2 hrs of work)
- The pilot was shelved at PCO after one contract as we were unable to get the finance folks on board to change back end processes and also due to resourcing issues and mandate of the department.

---

## What about:

- Contract splitting?
- IP and copyright?
- Security of the code?
- Concerns from Unions?

Note:

- Will be working with CFOB to mitigate the risk of contract splitting (likely through a combo of education, audit, and perhaps a limit on re-use of certain suppliers - similar to the way some supply arrangements work)- IP and Copyright around GC procurement of open source code is a relatively new area so we are working with lawyers at ISED who work on IP policy as well as our own ESDC IP CoE and we are making in roads with PSPC as we know that their lawyers will need to approve the contract terms and conditions for this initiative.
- There will be QA of code that is submitted.  When it comes to security, we will be evaluating GitHub's new Code Scanning feature. We've talked to CDS about this as they also only use open source code.... "we had Semmle's previous offering LGTM as a requirement for all CDS OS projects, and so will transition it all over to this (code scanning). It really helps with catching errors." (would include security).  Ultimately it would be great to have automated security checks and audit functionalities.  These are common place in the industry, so we can leverage existing solutions.
- The micro-procurements are intended to supplement the work of employees in short bursts, where the employees have access to specialized resources to help them solve small problems. Once these barriers have been removed, employees can progress with their work.
- We are also working with CFOB on this.  One suggestion so far has been that any micro-procurement contract would include similar questions that must be answered during any procurement (e.g., confirm that capacity does not exist in-house).  We intend to go the National Union Management Committee to be completely transparent about this pilot.
- Possibility to integrate auditing methodologies and tools in the back-end process.

---

## What's Next?

- Move through the lite project process
  - EA review
  - BMPO endorsement
  - Executive sponsors endorsement (IITB and CFOB)
  - PPOC endorsement

Note:

- This pilot is being proposed as a joint initiative with CFOB. We have been working with the procurement innovation team on this and they are on board and have briefed up to the CFO.

---

## Questions?

--

## Contact Us

- EDSC.DGIIT.StrategieTI-ITStrategy.IITB.ESDC@hrsdc-rhdcc.gc.ca
- https://sara-sabr.github.io/ITStrategy
- https://sara-sabr.slack.com

--

## More info

- [Micro-Acquisition Pilot page](micro-acquisition-pilot.html)
- [Better tech through micro-procurement](2020/08/12/better-tech-through-microprocurement-p1.html) (blog post)
- [Business case (ESDC only)](https://014gc.sharepoint.com/:w:/r/sites/GCDevEx/Shared%20Documents/Business%20Case_%20Micro-procurement_pilot.docx?d=wc7a97aad25884ad78c77096c8357638a&csf=1&web=1&e=neLbxM) for pilot to simplify micro-procurement of open source code
- [US GSA - Experimenting with the Micro-Purchase Threshold](https://digital.gov/2020/04/24/experimenting-with-micropurchase-threshold/)

--

## Frequently asked questions

Q: Can GC employees bid on Micro-procurement opportunities?

A: Yes but they can't get paid for them ($ would transfer to their organization).

Q: How is this different from Talent Cloud? Could we use their platform?

A: Talent cloud is focused on HR processes, and the micro-procurement pilot is focused on procurement processes, so while there are synergies it's not a perfect fit.
