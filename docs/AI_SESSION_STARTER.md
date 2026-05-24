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

Claygentforce is currently a documentation-first Salesforce DX project.

The repository intentionally starts with:

- project vision
- architecture documentation
- delivery simulation process
- role-based AI prompts
- reusable scenario templates
- scenario artifacts
- devlog and issue log
- AI workflow notes

Do not rush into Salesforce metadata, Apex, LWC, Flow, or automation unless the work directly supports a scenario learning objective.

---

## Current Architecture Principle

The project should store durable context in files so future AI tools can work from the repository instead of relying on long chat history.

The docs folder is the project memory layer.

The prompts folder contains reusable role instructions.

The scenarios folder contains repeatable simulation content.

The force-app folder should be reserved for deployable Salesforce metadata when a scenario actually requires it.

---

## Current Important Folders

- `docs/`
  - project vision
  - architecture
  - delivery simulation loop
  - simulation runbook
  - template strategy
  - development log
  - issue log
  - AI workflow notes

- `prompts/`
  - reusable AI role prompts
  - simulation runner prompt

- `scenarios/`
  - reusable scenario template
  - first real scenario

- `force-app/`
  - Salesforce metadata only when needed

- `manifest/`
  - Salesforce deployment/retrieval manifests

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

## Near-Term Project Direction

The next work should focus on making the simulation framework actually usable.

Preferred next actions:

1. Run the first manual simulation using `001-case-escalation-manager-visibility`.
2. Capture gaps, awkward moments, and missing artifacts.
3. Update scenario files with durable learnings.
4. Improve the simulation runner prompt based on the first run.
5. Add lightweight automation only after the manual workflow proves useful.
6. Add Salesforce metadata only when it supports a specific scenario learning goal.

---

## Current Best Next Task

The most useful immediate task is usually one of:

- run Scenario 001 manually
- improve the simulation runner prompt
- add a compact scenario execution checklist
- create a first simulation transcript artifact
- create a learner response template
- update the devlog after each meaningful change
- document issues or tool friction in the issue log

Avoid creating unnecessary code before the simulation workflow has been validated.

---

## AI Collaboration Rules

When helping with this repository:

- read repository files before assuming project state
- prefer small, reviewable changes
- keep commands grouped together to save tokens
- avoid huge copy/paste blocks with nested Markdown code fences
- update `docs/DEVLOG.md` after meaningful changes
- update `docs/ISSUES_LOG.md` when setup/tooling problems occur
- preserve the documentation-first strategy
- do not invent completed work
- do not blindly add complex architecture
- do not overbuild before a scenario proves the need

---

## Token-Saving Instruction

Future AI sessions should not ask for the full project explanation again.

Start by reading:

1. `docs/AI_SESSION_STARTER.md`
2. `README.md`
3. `docs/DEVLOG.md`
4. `docs/SIMULATION_RUNBOOK.md`
5. `prompts/simulation-runner.md`
6. the active scenario folder

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

The project should demonstrate that the builder understands Salesforce delivery beyond implementation syntax.

---

## Guiding Principle

Do not solve the stakeholder’s first sentence.

Discover the actual business problem, define a small useful release, document tradeoffs, validate readiness, and show consequences.

---

## Current Session Notes

Last updated: 2026-05-23

Recent work completed:

- Added `docs/SIMULATION_RUN_MODES.md`.
- Added the first scenario run log:
  - `scenarios/001-case-escalation-manager-visibility/runs/2026-05-23-agent-smoke-test001.md`
- Updated `README.md` to reference simulation run modes.
- Updated `scenarios/README.md` to document scenario run logs.
- Updated `docs/DEVLOG.md` with the run modes and smoke test log entry.
- Verified all of the above landed in GitHub.
- Created `docs/AI_SESSION_STARTER.md`.
- Added it to the README Documentation start-here list.
- Added a devlog entry documenting the AI session starter.
- Verified the file landed correctly in GitHub and was not truncated.
- Verified README and devlog updates landed correctly.

Current workflow convention:

- When the user replies with `k`, continue with the next recommended step.
- After the user pushes changes, check the GitHub repository to verify the expected files landed correctly.
- Do not assume local edits were pushed until repository verification confirms them.
- Keep command blocks grouped together to reduce token usage.
- At the end of each working session, update this file with the latest project state and recommended next step.

Current recommended next step:

Review the first smoke test log and decide whether any candidate outputs should graduate into canonical Scenario 001 artifacts, especially:

- `ACCEPTANCE_CRITERIA.md`
- `ARCHITECTURE_DECISION.md`
- `QA_REVIEW.md`
- `SECURITY_REVIEW.md`
- `DEPLOYMENT_REVIEW.md`

Do not blindly promote the whole smoke test. Select only durable, learner-useful outputs.