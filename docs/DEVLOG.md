# Devlog

This file tracks development progress, project milestones, validation steps, and next actions for Claygentforce.

---

## 2026-05-23 — Added scenario template framework

### Summary

Added the reusable Claygentforce scenario template framework.

The template framework provides a standard folder and artifact structure for creating future Salesforce delivery simulations quickly while preserving realistic ambiguity, discovery, architecture, QA, security, deployment, and retrospective workflows.

### Files Updated

- docs/TEMPLATE_STRATEGY.md
- docs/DEVLOG.md
- scenarios/TEMPLATE_SCENARIO/README.md
- scenarios/TEMPLATE_SCENARIO/SCENARIO_BRIEF.md
- scenarios/TEMPLATE_SCENARIO/STAKEHOLDER_INTAKE.md
- scenarios/TEMPLATE_SCENARIO/ACCEPTANCE_CRITERIA.md
- scenarios/TEMPLATE_SCENARIO/ARCHITECTURE_DECISION.md
- scenarios/TEMPLATE_SCENARIO/QA_REVIEW.md
- scenarios/TEMPLATE_SCENARIO/SECURITY_REVIEW.md
- scenarios/TEMPLATE_SCENARIO/DEPLOYMENT_REVIEW.md
- scenarios/TEMPLATE_SCENARIO/RETROSPECTIVE.md

### Notes

The template scenario folder mirrors the first completed scenario structure and supports future scenario creation by copying and renaming `scenarios/TEMPLATE_SCENARIO/`.

The template strategy document defines naming rules, creation workflow, maintenance rules, AI-assisted usage, and quality expectations.

This establishes Claygentforce as a reusable scenario framework rather than a one-off example.

## 2026-05-23 — Added simulation runbook

### Summary

Added the Claygentforce simulation runbook.

The runbook explains how to execute a simulation using repository documentation, role prompts, and scenario artifacts. It defines the standard simulation lifecycle, role invocation order, artifact update rules, context preservation rules, stage transition rules, readiness gates, consequence simulation, difficulty modes, failure states, retrospective workflow, and future automation direction.

### Files Updated

- docs/SIMULATION_RUNBOOK.md
- docs/DEVLOG.md

### Notes

The runbook acts as the operational bridge between static repository documentation and future multi-agent simulation orchestration.

It establishes that simulations should preserve decisions, assumptions, tradeoffs, consequences, and learning outcomes in repository files rather than relying only on chat history.

## 2026-05-23 — Documented GitHub connector reconnection issue

### Summary

Documented a GitHub connector/session issue encountered during repository setup.

The GitHub App was installed and repository access was granted, but ChatGPT temporarily could not browse repository files in the active chat until the connector state refreshed and the Claygentforce repository was confirmed.

### Files Updated

- docs/ISSUES_LOG.md
- docs/DEVLOG.md

### Notes

The issue reinforced that project setup should distinguish between account-level connector authorization and active conversation-level repository access.

After reconnection, ChatGPT confirmed access to `djlasher/Claygentforce` on the `main` branch.

## 2026-05-23 — Expanded role prompt set

### Summary

Expanded the Claygentforce agent prompt set beyond the initial BA, Architect, QA, DevOps, and Security roles.

Added additional role prompts to better reflect a realistic Salesforce delivery team and support richer simulations across configuration, development, stakeholder management, product ownership, and incident response.

### Prompt Files Added

- prompts/admin-agent.md
- prompts/developer-agent.md
- prompts/product-owner-agent.md
- prompts/client-stakeholder-agent.md
- prompts/incident-commander-agent.md

### Documentation Updated

- docs/PROJECT_VISION.md
- docs/AGENT_ROLES.md
- docs/ARCHITECTURE.md
- docs/DEVLOG.md

### Notes

The Salesforce Admin role was added because many Salesforce delivery decisions should evaluate declarative configuration before custom code.

The Salesforce Developer role remains focused on Apex, LWC, tests, implementation judgment, and developer-owned metadata.

Product Owner, Client Stakeholder, and Incident Commander roles were added to make simulations more realistic beyond implementation alone.

### Next Actions

- create scenario folder structure
- define first scenario template
- define first scenario brief
- update README with current project overview
- begin artifact templates for ADRs, QA review, security review, deployment review, and incident response

## 2026-05-23 — Repaired truncated documentation and prompt files

### Summary

Discovered that several Markdown files were truncated during manual copy/paste from ChatGPT because nested Markdown code fences broke the copyable response block.

The issue was identified during repository review and repaired by replacing the affected files in smaller chunks without nested code fences.

### Files Repaired

- docs/ARCHITECTURE.md
- docs/AI_WORKFLOW_NOTES.md
- prompts/architect-agent.md
- prompts/ba-agent.md

### Documentation Updated

- docs/ISSUES_LOG.md
- docs/DEVLOG.md

### Lesson

Large AI-generated Markdown files should be chunked during manual copy/paste, especially when the content includes examples, templates, or anything that might normally use fenced code blocks.

Future large documentation updates should be verified by checking the end of each file after pushing.

## 2026-05-23 — Project foundation and documentation scaffold

### Summary

Created the initial Claygentforce repository and began establishing the project as a Salesforce technical architect simulation and enablement platform.

The project is intentionally starting with documentation, architecture, and reusable AI context before building Salesforce metadata or automation.

### Completed

- Created GitHub repository: `djlasher/Claygentforce`
- Created a new SFDX project with manifest support
- Confirmed project is using `force-app` as the default package directory
- Confirmed `sfdx-project.json` uses Salesforce API version `66.0`
- Added documentation folder
- Added Claygentforce-specific AI prompt folder
- Added project vision documentation
- Added agent role definitions
- Added delivery simulation loop documentation
- Added initial architecture documentation
- Added issues log
- Added AI workflow notes placeholder

### Files Added / Updated

- `docs/PROJECT_VISION.md`
- `docs/AGENT_ROLES.md`
- `docs/DELIVERY_SIMULATION_LOOP.md`
- `docs/ARCHITECTURE.md`
- `docs/DEVLOG.md`
- `docs/ISSUES_LOG.md`
- `docs/AI_WORKFLOW_NOTES.md`
- `prompts/architect-agent.md`
- `prompts/ba-agent.md`
- `prompts/qa-agent.md`
- `prompts/devops-agent.md`
- `prompts/security-agent.md`

### Setup Issue Resolved

Encountered repeated GitHub authentication popups from VS Code, Codex/Git operations, and GitHub Desktop.

Root cause appeared to be a Windows Credential Manager / Git Credential Manager storage failure:

```text
Failed to write item to store. [0x8]
Not enough memory resources are available to process this command
```