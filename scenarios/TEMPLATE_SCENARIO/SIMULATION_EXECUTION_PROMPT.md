# Simulation Execution Prompt: [Scenario Title]

Use this prompt to run a static Claygentforce scenario simulation from existing scenario artifacts.

This is a reusable prompt template. Replace placeholders for the target scenario. Scenario 001 can be used as the implemented MVP example:

`scenarios/001-case-escalation-manager-visibility/`

---

## Purpose

Simulate a Salesforce delivery-room review for a scenario using only source-controlled artifacts.

The goal is to produce realistic delivery-team observations, questions, tradeoffs, test concerns, and a concise run artifact summary without taking live actions or inventing validation evidence.

---

## Required Files To Read

Read the scenario files that exist for the target scenario:

- `SCENARIO_BRIEF.md`
- `STAKEHOLDER_INTAKE.md`
- `ACCEPTANCE_CRITERIA.md`
- `ARCHITECTURE_DECISION.md`
- `QA_REVIEW.md`
- `SECURITY_REVIEW.md`
- `DEPLOYMENT_REVIEW.md`
- `RETROSPECTIVE.md`

If implementation artifacts exist, also read:

- `IMPLEMENTATION_PLAN.md`
- `METADATA_BUILD_NOTES.md`
- `FLOW_DESIGN.md`
- `SMOKE_TEST_CHECKLIST.md`
- relevant files under `runs/`

For Scenario 001, include the current Salesforce implementation context when available, but do not claim manual org validation unless a run artifact or user-provided evidence confirms it.

---

## Scenario Context Loading Steps

1. Identify the scenario title, scenario ID, business problem, affected personas, and difficulty.
2. Summarize the current MVP scope and known out-of-scope items.
3. Identify the Salesforce surface, metadata or implementation artifacts, and validation artifacts already present.
4. Note known assumptions, unresolved questions, risks, and deferred capabilities.
5. Determine whether the run is source-only, simulated, manually validated, or mixed.

If evidence is missing, say it is missing. Do not fill gaps with invented results.

---

## Delivery Roles To Simulate

Simulate concise observations from these roles when relevant:

- Business Analyst
- Architect
- Admin/Developer
- QA
- Security
- DevOps
- Support Manager
- Product Owner / Stakeholder

Each role should stay professional, scenario-grounded, and brief.

The roles may disagree. Keep disagreement realistic: scope pressure, criteria quality, testing risk, security visibility, deployment readiness, operational usefulness, or stakeholder expectations.

---

## Static Delivery Room Transcript

Produce a short static Delivery Room transcript.

For each message, include:

- role
- focus area
- message
- tradeoff, risk, question, or test concern when useful

Keep the transcript static. Do not add chat input, live agent behavior, buttons, navigation, orchestration, persistence, or external AI calls.

---

## Tradeoffs, Risks, Questions, And Test Concerns

After the transcript, summarize:

- main implementation tradeoffs
- risks or edge cases
- open stakeholder or architecture questions
- QA and regression concerns
- security or permission concerns
- deployment or validation concerns
- learner reflection prompts

Tie every point back to the scenario artifacts.

---

## Validation Evidence Rules

Do not claim:

- a Salesforce org was tested
- metadata was deployed
- Flow behavior was manually verified
- LWC UI rendered in an org
- permission set access was confirmed
- smoke tests passed

unless the user provides evidence or a run artifact explicitly records that validation.

If only source files were reviewed, say: `Source-level simulation only; manual org validation deferred.`

---

## Run Artifact Summary

End with a concise run artifact summary that can be saved under the scenario `runs/` folder.

Include:

- run title
- run mode: static source simulation / manual org test / mixed
- source files reviewed
- scenario path used
- Delivery Room transcript highlights
- risks identified
- test concerns
- decisions or recommendations
- validation evidence available
- validation explicitly deferred
- recommended next step

Do not duplicate the full scenario checklist. Reference the checklist when full validation is needed.

---

## Guardrails

- Do not perform live Salesforce actions.
- Do not modify metadata.
- Do not create Apex.
- Do not add persistence.
- Do not call external AI services.
- Do not create chat input or runtime orchestration.
- Do not invent test results.
- Do not invent org validation.
- Do not mark a scenario as fully smoke-tested without evidence.
- Keep Scenario 002 and future scenarios as placeholders until their business problem is selected.

---

## Example Scenario

For Scenario 001, use:

`scenarios/001-case-escalation-manager-visibility/`

The static simulation should recognize Scenario 001 as the implemented MVP example and may discuss:

- Case high-risk criteria
- before-save Flow behavior
- manager list view visibility
- read-only LWC Delivery Team Channel behavior
- static Delivery Room launcher context
- deferred manual smoke testing when evidence is not present
