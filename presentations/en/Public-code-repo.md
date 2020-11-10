# IITB Strategy

## Working in the open

### Public source code repo solutions

November 2020

---

## Needs

- Working in the open with Canadians
  - Official: Micro-procurement
- Client (ESDC) can setup a repo; where
- Supplier can
  - pull code from existing branch
  - push changes to a branch

--

## Micro-procurement

One year pilot

The work (code) produced as part of the contrat is saved in the specified branch on the source code repo.

Appropriate open source software licences (guidance on publishing open source code) will be used.

---

## GC working in the open

https://code.open.canada.ca/en/open-source-codes.html

- Most GC open source code is on Github
  - CDS (~150 repos)
  - WET-BOEW (~ 90 repos)
  - TBS, SSC - Canada-ca (~70 repos)
- ESDC is also using Github
  - Developer Experience (~30 repos)
  - SABR - R&P and Strategy (~30 repos)

** We can't control where OSS projects are

---

|             | Github.com | Gitlab.com | Codeberg.org |
|-------------|---|---|---|
| Bilingual   | English | Logged in | Yes |
| Accessible  |  |  |  |
| GC use      | > 500 repos | < 5 repos | None |
| 2FA         | Yes | Yes | Yes |
| Git client  | Yes | Yes | Yes |
| CLI         | Yes | Yes | Yes |
| Owner       | Microsoft | Gitlab Inc. | EU non-profit |
| Pages *     | Yes | Yes | Yes |

--

## Git CLI

- git clone git@github.com:sara-sabr/ITStrategy.git
- git status
- git checkout -b newBranch
- git add --all
- git commit -m "Save changes"
- git push origin newBranch

** Must have account, 2FA enabled, public key shared

--

Is use of Github.com or Gitlab.com acceptable for external collaboration in ESDC?

Just for the pilot?

In general?

---

## Github Pages

- Free SaaS/PaaS
- Make code from a repo available as a Website
  - https://canada-ca.github.io/devex-pages/
- Use Jekyll, a static blog generator, to build the pages

** Fully bilingual Website using WET with the Canada.ca theme

*** Gitlab and Codeberg also have Pages

---

_fin
