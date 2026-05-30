# AI Session Starter

This file is for ChatGPT session rehydration.

Read this first before helping with Claygentforce so the assistant remembers the current project state, avoids repeating already-completed setup work, and does not confuse Claygentforce with earlier sandbox projects.

---

## Project Identity

Claygentforce is a Salesforce delivery team simulation and enablement project.

It is not primarily a game, toy chatbot, generic AI demo, or normal chatbot.

The goal is to build a realistic, AI-assisted Salesforce delivery simulator that helps learners practice:

- requirements discovery
- architecture decisions
- implementation planning
- admin configuration
- DevOps workflows
- QA review
- security review
- stakeholder tradeoffs
- deployment readiness
- incident response
- retrospective learning

The product direction is a simulated Salesforce delivery-team channel experience, similar to a Teams or Slack room, where different delivery roles chime in with contextual guidance, concerns, tradeoffs, and review notes.

The project should help learners practice Salesforce delivery judgment, not just memorize Salesforce syntax.

---

## Important Context

This repository is:

`djlasher/Claygentforce`

Do not confuse it with:

`djlasher/Multi-Agent-Volume-1-RPG`

The Multi-Agent Volume 1 RPG repo was an earlier Godot/roguelite learning sandbox.

Claygentforce is the active strategic project focused on Salesforce delivery simulation, AI-assisted enablement, and cross-role Salesforce project execution.

---

## Current Repository Type

Claygentforce is a Salesforce DX project with a documentation-first simulation framework and an active Scenario 001 Salesforce MVP slice.

The repository includes:

- project vision and architecture documentation
- delivery simulation process documentation
- role-based AI prompts
- reusable scenario templates
- Scenario 001 artifacts
- deployable Salesforce metadata
- devlog and issue log
- AI workflow notes
- Codex operating guidance in `docs/AI_COMMANDS_AND_WORKFLOWS.md`

Salesforce metadata should be added only when it directly supports a scenario learning or implementation objective.

---

## Current Scenario 001 State

Scenario 001 is:

`Case Escalation and Manager Visibility`

The current Scenario 001 MVP includes:

- `Case.High_Risk__c`
- `Case.High_Risk_Reason__c`
- `Open High-Risk Cases` list view
- `Case-Case Layout` section for Scenario 001 fields
- `Claygentforce Support Manager` permission set
- `Scenario001_Case_High_Risk_Flagging` before-save Case Flow
- `scenario001CaseRiskPanel` Lightning Web Component
- `SMOKE_TEST_CHECKLIST.md`
- focused deployment manifest at `manifest/scenario-001-package.xml`

Flow v1 currently flags open High priority Cases as high-risk and sets the high-risk reason to Critical Severity.

Flow v1 intentionally avoids:

- customer tier logic
- stale Case logic
- notifications
- assignment changes
- manual override behavior
- custom code

The LWC currently provides a read-only Scenario 001 Case risk panel and is being evolved toward a simulated delivery-team channel UI.

The LWC intentionally avoids:

- Apex
- external AI calls
- chat input
- live agent orchestration

---

## Current Workflow Convention

The user often completes local work, validates/deploys, commits, pushes, and then sends:

`k`

When the user sends `k`, inspect the repository through GitHub, verify the relevant files, and update project memory only when useful.

Do not create a devlog entry for every tiny file change.

Prefer milestone-oriented devlog entries that summarize related work from the same session or implementation phase.

---

## Codex Guidance

`docs/AI_COMMANDS_AND_WORKFLOWS.md` is for Codex and implementation-focused AI tooling.

Do not treat it as ChatGPT's main memory file.

For Codex prompts, keep prompts short and point Codex to `docs/AI_COMMANDS_AND_WORKFLOWS.md` plus the specific files it needs for the task.

Avoid repeating the same long local path, repository setup, command list, and project warnings in every Codex prompt.

---

## Documentation Maintenance Notes

When updating docs:

- verify file lists against the actual repository
- avoid leaving placeholder roadmap items after they are completed
- keep project framing aligned with the full-team simulation vision
- avoid creating redundant docs when an existing doc can be updated
- keep `AI_SESSION_STARTER.md` focused on ChatGPT rehydration
- keep `AI_COMMANDS_AND_WORKFLOWS.md` focused on Codex/task execution guidance

---

## Current Best Next Task

Do not restart setup work.

Do not expand large documentation just for its own sake.

The current best next milestone is to continue evolving Scenario 001 from a basic Salesforce MVP slice toward the simulated delivery-team channel experience.

Near-term work should favor:

1. inspecting the latest `scenario001CaseRiskPanel` LWC refinement after the user pushes it
2. updating the devlog with the LWC channel refinement as part of the existing Scenario 001 milestone
3. improving the LWC in small increments so it feels more like a simulated delivery-team channel
4. keeping the component read-only and static until the UI pattern is proven
5. avoiding Apex, external AI calls, and full orchestration for now
6. keeping each Salesforce metadata change tied to a scenario learning objective

Claygentforce now has enough foundational documentation and Salesforce metadata to keep validating the simulator against real implementation work.
