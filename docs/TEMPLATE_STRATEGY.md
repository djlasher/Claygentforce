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

---

## Template Creation Workflow

When creating a new scenario from the template:

1. Copy `scenarios/TEMPLATE_SCENARIO/`.
2. Rename the copied folder using the scenario naming rules.
3. Fill `SCENARIO_BRIEF.md` first.
4. Fill `STAKEHOLDER_INTAKE.md` second.
5. Draft `ACCEPTANCE_CRITERIA.md` only after defining the stakeholder ambiguity.
6. Draft `ARCHITECTURE_DECISION.md` after requirements are clear enough for options.
7. Draft QA, Security, and Deployment reviews after the architecture direction exists.
8. Draft `RETROSPECTIVE.md` last.
9. Update `docs/DEVLOG.md`.
10. Review the full scenario folder for consistency.

This order preserves the learning path.

Do not start with the final architecture answer.

---

## Template Maintenance Rules

Templates should change when the simulation model changes.

Update templates when:

- a new standard artifact type is added
- a role prompt introduces a new required output
- the simulation runbook changes lifecycle stages
- scenario authors repeatedly need the same missing section
- artifact structure becomes confusing or inconsistent

Do not update templates for one-off scenario needs unless the change improves future scenarios.

---

## AI-Assisted Template Usage

AI tools may help create scenarios from the template.

When using AI, provide:

- the target scenario folder name
- scenario difficulty
- business context
- intended learning goals
- Salesforce clouds or features involved
- roles that should be emphasized
- any constraints or exclusions

AI should preserve the standard template structure unless instructed otherwise.

After AI generation, a human should review for:

- realism
- ambiguity quality
- Salesforce accuracy
- scope control
- security implications
- testability
- deployment realism
- consistency with the runbook

---

## Template Quality Checklist

A good scenario template supports:

- intake ambiguity
- discovery
- MVP scoping
- architecture tradeoffs
- admin maintainability
- developer judgment
- QA validation
- security review
- deployment readiness
- stakeholder feedback
- retrospective learning

If a template encourages skipping one of these areas, revise it.

---

## Guiding Principle

Templates should reduce setup friction without reducing delivery realism.

A good template helps the learner move faster into judgment, tradeoffs, and consequences.