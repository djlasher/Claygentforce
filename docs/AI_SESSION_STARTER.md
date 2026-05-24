# AI Session Starter

This file is the first file an AI assistant should read before helping with Claygentforce.

Its purpose is to reduce repeated prompting, preserve project direction, and prevent future sessions from confusing Claygentforce with earlier sandbox projects.

---

## Project Identity

Claygentforce is a Salesforce technical architect simulation and enablement project.

It is not primarily a game, toy chatbot, or generic AI demo.

The goal is to build a realistic, AI-assisted Salesforce delivery simulator that helps learners practice:

- architecture decisions
- requirements clarification
- implementation planning
- DevOps workflows
- QA review
- security review
- stakeholder tradeoffs
- deployment readiness
- incident response
- retrospective learning

The project should help learners practice Salesforce delivery judgment, not just memorize Salesforce syntax.

---

## Important Context

This repository is:

`djlasher/Claygentforce`

Do not confuse it with:

`djlasher/Multi-Agent-Volume-1-RPG`

The Multi-Agent Volume 1 RPG repo was an earlier Godot/roguelite learning sandbox.

Claygentforce is the more strategically important career-leverage project focused on Salesforce architecture, delivery simulation, and AI-assisted enablement.

---

## Current Repository Type

Claygentforce is a Salesforce DX project with a documentation-first simulation framework.

The repository now includes both durable simulation context and the first small Salesforce metadata increment.

The project intentionally started with:

- project vision
- architecture documentation
- delivery simulation process
- role-based AI prompts
- reusable scenario templates
- scenario artifacts
- devlog and issue log
- AI workflow notes

Salesforce metadata should still be added only when it directly supports a scenario learning or implementation objective.

---

## Current Architecture Principle

The project should store durable context in files so future AI tools can work from the repository instead of relying on long chat history.

The docs folder is the project memory layer.

The prompts folder contains reusable role instructions.

The scenarios folder contains repeatable simulation content and scenario-specific implementation notes.

The force-app folder contains deployable Salesforce metadata when a scenario requires it.

---

## Current Important Folders

- `docs/`
  - project vision
  - architecture
  - delivery simulation loop
  - simulation runbook
  - simulation run modes
  - template strategy
  - development log
  - issue log
  - AI workflow notes
  - AI session starter

- `prompts/`
  - reusable AI role prompts
  - simulation runner prompt

- `scenarios/`
  - reusable scenario template
  - first real scenario
  - scenario-specific run logs
  - implementation plan
  - metadata build notes
  - Flow design notes

- `force-app/`
  - Salesforce metadata created only when needed by a scenario

- `manifest/`
  - Salesforce deployment/retrieval manifests
  - scenario-specific manifest for Scenario 001

---

## Current Role Prompt Set

Claygentforce currently models a Salesforce delivery team with prompts for:

- Business Analyst
- Technical Architect
- Salesforce Admin
- Salesforce Developer
- QA Engineer
- DevOps Engineer
- Security Reviewer
- Product Owner
- Client Stakeholder
- Incident Commander
- Simulation Runner

When running simulations, use role-specific perspectives instead of flattening every response into generic assistant advice.

---

## Current Simulation Loop

Default simulation flow:

1. Client Stakeholder Intake
2. Business Analyst Discovery
3. Product Owner Scope Review
4. Technical Architecture Review
5. Salesforce Admin Configuration Review
6. Salesforce Developer Implementation Review
7. QA Review
8. Security Review
9. DevOps / Deployment Review
10. Stakeholder Review or UAT
11. Outcome / Consequence Simulation
12. Retrospective

The simulation may loop backward when a review finds gaps.

---

## Current First Scenario

The first real scenario is:

`scenarios/001-case-escalation-manager-visibility/`

Scenario theme:

A support team is missing urgent or high-risk Salesforce Cases. Managers need better visibility so important customer issues are not escalated too late.

The learner should not jump directly into automation.

The learner should first clarify:

- what urgent means
- who needs visibility
- what managers should do
- what counts as high-risk
- whether visibility, notification, escalation, reporting, or ownership change is actually needed
- what can be handled declaratively
- what security and deployment concerns exist

---

## Current Salesforce Metadata State

Initial Salesforce metadata exists for Scenario 001.

Created metadata:

- `force-app/main/default/objects/Case/fields/High_Risk__c.field-meta.xml`
- `force-app/main/default/objects/Case/fields/High_Risk_Reason__c.field-meta.xml`

Created manifests:

- `manifest/package.xml`
- `manifest/scenario-001-package.xml`

`manifest/scenario-001-package.xml` is the preferred focused manifest for Scenario 001 validation/deployment once a Salesforce org is authenticated.

No Salesforce org is authenticated or connected yet.

Do not assume validation or deployment has occurred.

---

## Scenario 001 Key Artifacts

Important current Scenario 001 files include:

- `SCENARIO_BRIEF.md`
- `STAKEHOLDER_INTAKE.md`
- `ACCEPTANCE_CRITERIA.md`
- `ARCHITECTURE_DECISION.md`
- `IMPLEMENTATION_PLAN.md`
- `METADATA_BUILD_NOTES.md`
- `FLOW_DESIGN.md`
- `QA_REVIEW.md`
- `SECURITY_REVIEW.md`
- `DEPLOYMENT_REVIEW.md`
- `RETROSPECTIVE.md`
- `runs/2026-05-23-agent-smoke-test001.md`
- `runs/2026-05-23-artifact-promotion-plan001.md`

---

## Near-Term Project Direction

The next work should focus on tying the simulator into Salesforce in very small, scenario-driven increments.

Preferred next actions:

1. Authenticate or connect a Salesforce org.
2. Validate `manifest/scenario-001-package.xml` against the authenticated org.
3. Fix any metadata validation issues.
4. Deploy the initial Case high-risk fields only after validation succeeds.
5. Retrieve or build subsequent metadata in small increments.
6. Avoid hand-writing complex Flow XML unless necessary; prefer designing the Flow first, building it in an org, retrieving it, then committing reviewed metadata.

---

## Current Best Next Task

First thing next session:

Authenticate or connect a Salesforce org for this project.

Then run validation against the focused Scenario 001 manifest:

```bash
sf project deploy validate --manifest manifest/scenario-001-package.xml --target-org YOUR_ORG_ALIAS
```

If validation succeeds, the next decision is whether to deploy the fields or continue setup first.

Also consider connecting Notion so the Business Analyst agent can eventually write or sync user stories there.

Do not build more Salesforce automation before the field metadata is validated against an org.

---

## AI Collaboration Rules

When helping with this repository:

- read repository files before assuming project state
- prefer small, reviewable changes
- keep commands grouped together to save tokens
- automatically chunk long Markdown or XML when copy/paste might break
- avoid huge copy/paste blocks with nested Markdown code fences unless chunked
- update `docs/DEVLOG.md` after meaningful changes
- update `docs/ISSUES_LOG.md` when setup/tooling problems occur
- update this file at the end of each working session
- preserve the scenario-driven strategy
- do not invent completed work
- do not blindly add complex architecture
- do not overbuild before a scenario proves the need
- do not create new documentation types unless they solve a clear problem

---

## Token-Saving Instruction

Future AI sessions should not ask for the full project explanation again.

Start by reading:

1. `docs/AI_SESSION_STARTER.md`
2. `README.md`
3. `docs/DEVLOG.md`
4. `docs/SIMULATION_RUNBOOK.md`
5. `docs/SIMULATION_RUN_MODES.md`
6. `prompts/simulation-runner.md`
7. the active scenario folder

Then continue from the latest devlog entry and the user’s current request.

---

## Current Strategic Framing

Claygentforce should become a portfolio-worthy Salesforce technical architect enablement simulator.

The core value is not flashy AI.

The core value is:

- realistic delivery pressure
- role-based review
- tradeoff explanation
- consequence-based learning
- durable artifacts
- repeatable Salesforce architecture practice
- scenario-driven Salesforce implementation

The project should demonstrate that the builder understands Salesforce delivery beyond implementation syntax.

---

## Guiding Principle

Do not solve the stakeholder’s first sentence.

Discover the actual business problem, define a small useful release, document tradeoffs, validate readiness, and show consequences.

Metadata should follow the scenario.

Do not add Salesforce components unless they support a documented learning or implementation objective.

---

## Current Session Notes

Last updated: 2026-05-23

Recent work completed:

- Created `docs/AI_SESSION_STARTER.md`.
- Added it to the README Documentation start-here list.
- Added a devlog entry documenting the AI session starter.
- Added `docs/SIMULATION_RUN_MODES.md`.
- Added the first scenario run log:
  - `scenarios/001-case-escalation-manager-visibility/runs/2026-05-23-agent-smoke-test001.md`
- Added artifact promotion plan:
  - `scenarios/001-case-escalation-manager-visibility/runs/2026-05-23-artifact-promotion-plan001.md`
- Promoted candidate smoke test output into `ACCEPTANCE_CRITERIA.md` and `ARCHITECTURE_DECISION.md`.
- Added `IMPLEMENTATION_PLAN.md` for Scenario 001.
- Added initial Salesforce metadata fields for Case high-risk tracking.
- Added `METADATA_BUILD_NOTES.md` for Scenario 001.
- Added `FLOW_DESIGN.md` for Scenario 001.
- Added focused Scenario 001 manifest:
  - `manifest/scenario-001-package.xml`
- Updated README, scenario README, and devlog entries where appropriate.
- Verified pushed changes in GitHub throughout the session.

Current workflow convention:

- When the user replies with `k`, continue with the next recommended step.
- After the user pushes changes, check the GitHub repository to verify the expected files landed correctly.
- Do not assume local edits were pushed until repository verification confirms them.
- Keep command blocks grouped together to reduce token usage.
- Automatically chunk long content when copy/paste may break.
- At the end of each working session, update this file with the latest project state and recommended next step.

Current recommended next step:

Authenticate or connect a Salesforce org, then validate the focused Scenario 001 manifest.

Also consider connecting Notion so the Business Analyst agent can write or sync user stories there in a future workflow.

Do not continue adding documentation-only artifacts unless they solve a clear project need.
