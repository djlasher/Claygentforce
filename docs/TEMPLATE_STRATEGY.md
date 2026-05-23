# Template Strategy

This document explains how Claygentforce templates should be designed, maintained, and used.

Templates are the reusable structure that allow new simulations to be created quickly without rebuilding the delivery workflow from scratch.

---

## Purpose

Claygentforce uses templates to standardize scenario creation while still allowing each scenario to feel realistic and unique.

Templates should help future scenario authors:

- create consistent scenario folders
- preserve the simulation lifecycle
- reuse proven artifact structures
- reduce repeated setup work
- support AI-assisted generation
- keep delivery roles aligned
- make future automation easier

The goal is not to make every scenario identical.

The goal is to make every scenario complete enough to support realistic Salesforce delivery practice.

---

## Template Types

Claygentforce may use several template types.

### Scenario Folder Template

A reusable folder structure for each new scenario.

Located at:

`scenarios/TEMPLATE_SCENARIO/`

### Scenario Artifact Templates

Reusable Markdown structures for scenario files such as:

- SCENARIO_BRIEF.md
- STAKEHOLDER_INTAKE.md
- ACCEPTANCE_CRITERIA.md
- ARCHITECTURE_DECISION.md
- QA_REVIEW.md
- SECURITY_REVIEW.md
- DEPLOYMENT_REVIEW.md
- RETROSPECTIVE.md

### Future Artifact Templates

Potential future templates may include:

- architecture decision record template
- admin configuration plan template
- developer implementation plan template
- UAT script template
- bug report template
- incident response template
- stakeholder communication template
- release checklist template

---

## Template Scenario Folder

The template scenario folder should mirror the standard scenario structure.

Expected folder:

`scenarios/TEMPLATE_SCENARIO/`

Expected files:

- README.md
- SCENARIO_BRIEF.md
- STAKEHOLDER_INTAKE.md
- ACCEPTANCE_CRITERIA.md
- ARCHITECTURE_DECISION.md
- QA_REVIEW.md
- SECURITY_REVIEW.md
- DEPLOYMENT_REVIEW.md
- RETROSPECTIVE.md

When creating a new scenario, copy the template folder and rename it using this pattern:

`###-short-scenario-name`

Examples:

- `001-case-escalation-manager-visibility`
- `002-account-data-quality-cleanup`
- `003-experience-cloud-access-review`
- `004-integration-failure-response`

---

## Naming Rules

Scenario folders should use:

- three-digit numeric prefix
- lowercase words
- hyphen separators
- clear business-oriented name

Good:

`002-account-data-quality-cleanup`

Avoid:

`scenario2`
`test`
`new-demo`
`salesforce-thing`

The name should help a future reader understand the business problem before opening the files.

---

## Template File Philosophy

Template files should be reusable but not empty.

A good template file includes:

- section headings
- placeholder guidance
- questions to consider
- expected outputs
- readiness or review status areas
- guidance for what belongs in the file
- guidance for what does not belong in the file

Templates should avoid scenario-specific details unless clearly marked as examples.

The template should help a human or AI assistant create a complete scenario without needing to reinvent the artifact structure.

