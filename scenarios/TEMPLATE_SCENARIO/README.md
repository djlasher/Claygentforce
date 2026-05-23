# Template Scenario

This folder is the reusable scenario template for Claygentforce.

Copy this folder when creating a new simulation scenario.

---

## How to Use This Template

1. Copy `scenarios/TEMPLATE_SCENARIO/`.
2. Rename the copied folder using the scenario naming pattern.
3. Replace placeholder text in each file.
4. Keep the standard artifact structure unless the scenario has a clear reason to differ.
5. Update `scenarios/README.md` if the scenario introduces a new artifact type.
6. Update `docs/DEVLOG.md` when a new scenario is created.

---

## Naming Pattern

Use this folder naming pattern:

`###-short-business-problem-name`

Examples:

- `002-account-data-quality-cleanup`
- `003-experience-cloud-access-review`
- `004-integration-failure-response`

Use lowercase words and hyphen separators.

---

## Standard Files

Each scenario should include:

- `SCENARIO_BRIEF.md`
- `STAKEHOLDER_INTAKE.md`
- `ACCEPTANCE_CRITERIA.md`
- `ARCHITECTURE_DECISION.md`
- `QA_REVIEW.md`
- `SECURITY_REVIEW.md`
- `DEPLOYMENT_REVIEW.md`
- `RETROSPECTIVE.md`

These files represent the lifecycle of a realistic Salesforce delivery simulation.

---

## Template Usage Rules

When using this template:

- preserve the learning path
- keep stakeholder context realistic and incomplete
- avoid jumping directly to the final solution
- document assumptions and open questions
- include tradeoffs and risks
- include QA, security, and deployment considerations
- preserve retrospective learning

Do not create scenarios that are only quizzes or feature demos.

---

## Scenario Author Checklist

Before committing a new scenario, confirm:

- scenario folder uses the correct naming pattern
- every standard file exists
- scenario brief explains the business context
- stakeholder intake includes ambiguity
- acceptance criteria are testable or intentionally incomplete
- architecture decision includes options and tradeoffs
- QA review includes happy path, negative path, and edge cases
- security review includes access and visibility concerns
- deployment review includes dependencies and validation
- retrospective captures lessons and possible consequences

---

## Guiding Principle

A template scenario should make it easy to create realistic Salesforce delivery practice without removing the ambiguity that makes delivery judgment worth practicing.