# AI Session Starter

This file is for ChatGPT session rehydration.

Read this first before helping with Claygentforce so the assistant remembers the current project state, avoids repeating completed setup work, and does not confuse Claygentforce with earlier sandbox projects.

---

## Project Identity

Claygentforce is a Salesforce delivery team simulation and enablement project.

It is not primarily a game, toy chatbot, generic AI demo, or normal chatbot.

The goal is to build a realistic Salesforce delivery simulator that helps learners practice:

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

The product direction is a simulated Salesforce delivery-team channel experience, similar to a Teams or Slack room, where different delivery roles provide contextual guidance, concerns, tradeoffs, and review notes.

The project should help learners practice Salesforce delivery judgment, not just memorize Salesforce syntax.

---

## Important Context

Repository:

`djlasher/Claygentforce`

Do not confuse it with:

`djlasher/Multi-Agent-Volume-1-RPG`

The Multi-Agent Volume 1 RPG repo was an earlier Godot/roguelite learning sandbox.

Claygentforce is the active strategic project focused on Salesforce delivery simulation, AI-assisted enablement, and cross-role Salesforce project execution.

The local repo path used by the user is:

`D:\Github Repos\Claygentforce`

The org alias used during development is:

`Claygentforce`

---

## Current Repository Type

Claygentforce is a Salesforce DX project with a documentation-first simulation framework and an active Scenario 001 Salesforce implementation slice.

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

The current Scenario 001 implementation is source-controlled and deployable through:

`manifest/scenario-001-package.xml`

The current Salesforce implementation includes:

- `Case.High_Risk__c`
- `Case.High_Risk_Reason__c`
- `Case.High_Risk_Override__c`
- `Case.Customer_Tier__c`
- `Open High-Risk Cases` list view
- `Case-Case Layout` with the `Claygentforce Scenario 001` section
- `Claygentforce Support Manager` permission set
- `Scenario001_Case_High_Risk_Flagging` before-save Case Flow
- `Case_Record_Page` FlexiPage with the LWC placed on the Case record page
- `scenario001CaseRiskPanel` Lightning Web Component
- `SMOKE_TEST_CHECKLIST.md`
- Scenario 001 run artifacts under `scenarios/001-case-escalation-manager-visibility/runs/`
- ADRs under `docs/adr/`

---

## Current Flow Behavior

Flow file:

`force-app/main/default/flows/Scenario001_Case_High_Risk_Flagging.flow-meta.xml`

Current Flow v3 behavior:

1. Runs before-save on Case create/update.
2. Closed Cases clear active high-risk values.
3. Manual override is evaluated before automated escalation criteria.
4. Strategic customer escalation is evaluated after manual override.
5. Stale escalation is evaluated after Strategic customer escalation and before priority-only escalation.
6. Priority-based escalation is evaluated after stale escalation.
7. Cases that no longer match active criteria clear prior high-risk values.

Current Flow v3 precedence:

1. Closed Case handling
2. Manual override precedence
3. Strategic customer escalation
4. Stale escalation
5. Priority-based escalation
6. Clean/no-match clearing behavior

Current high-risk reason values include:

- `Manual Review`
- `Strategic Customer`
- `Stale Escalation`
- `Critical Severity`

Important Flow metadata lesson:

- Do not use `$GlobalConstant.EmptyString` or `$GlobalConstant.Null` for clearing string fields in Flow metadata.
- Salesforce metadata deployments rejected both during Scenario 001 work.
- Use empty `<stringValue></stringValue>` assignments instead.

---

## Current LWC Behavior

LWC folder:

`force-app/main/default/lwc/scenario001CaseRiskPanel/`

The LWC is read-only and uses `lightning/uiRecordApi` / `getRecord`.

It reads:

- `Case.High_Risk__c`
- `Case.High_Risk_Override__c`
- `Case.High_Risk_Reason__c`
- `Case.Customer_Tier__c`
- `Case.Priority`
- `Case.Status`
- `Case.IsClosed`

It currently displays a layered simulation surface including:

- raw Case risk fields
- Scenario Summary
- Scenario Signals
- Scenario Mode / implementation context
- compact demonstration/context notes added during the latest UI pass
- Escalation Metrics
- grouped Delivery Team Channel
- Outcome and Risk
- Simulation Decision Paths
- Learning Checkpoint
- Learner Progression
- Scenario Progression
- loading state
- record load error state

Current scenario state set includes:

- `Closed Case`
- `Manual Override`
- `Strategic Customer Risk`
- `Stale Escalation`
- `Priority-Based High Risk`
- `Not Flagged`

Current Flow Signal set includes:

- `Closed visibility only`
- `Override precedence`
- `Customer tier criteria`
- `Stale escalation criteria`
- `Priority criteria`
- `No active match`

The Delivery Team Channel now uses grouped guidance sections:

- Initial Review
- Automation Impact
- QA Watch
- Next Decision

The LWC includes cross-role tension in the guidance layer. Examples include QA caution, Product urgency, Architect scalability/criteria concerns, Support queue health concerns, and escalation fatigue concerns.

The LWC intentionally avoids:

- Apex
- persistence
- external AI calls
- chat input
- live agent orchestration
- interactive branching

It is currently a static/read-only simulation surface. The near-term goal is to evolve simulation mechanics and learner progression before adding live agents or persistence.

---

## Current Scenario Artifacts

Current run artifacts include:

- `RUN-001-manager-override.md`
- `RUN-001-summary.md`
- `RUN-002-stale-escalation.md`
- `RUN-003-strategic-customer.md`

Current ADRs include:

- `ADR-001-before-save-flow.md`
- `ADR-002-read-only-lwc.md`
- `ADR-003-static-simulation-first.md`

Do not create run artifacts for every tiny UI refinement. Prefer one artifact per materially distinct scenario path or implementation lesson.

---

## Current Workflow Convention

The user often completes local work, validates/deploys, commits, pushes, and then sends:

`k`

When the user sends `k`:

1. Inspect the repository through GitHub.
2. Verify the relevant files.
3. Update project memory files only when useful.
4. Do not ask for file paths when the relevant repo structure is obvious.
5. Do not create a devlog entry for every tiny file change.
6. Prefer milestone-oriented devlog entries that summarize related work from the same session or implementation phase.

Documentation ownership:

- Codex should focus on implementation work.
- ChatGPT should update `DEVLOG.md`, `ISSUES_LOG.md`, `AI_SESSION_STARTER.md`, and roadmap-style docs when needed.
- Avoid asking Codex to maintain documentation unless the task is explicitly documentation-only.

---

## Codex Guidance

`docs/AI_COMMANDS_AND_WORKFLOWS.md` is for Codex and implementation-focused AI tooling.

Do not treat it as ChatGPT's main memory file.

For Codex prompts:

- keep prompts short
- point Codex to `docs/AI_COMMANDS_AND_WORKFLOWS.md`
- include only the specific task details
- rely on the workflow doc for repeated constraints
- do not repeat long setup, path, warning, or command sections unless necessary

Codex must confirm it is modifying:

`D:\Github Repos\Claygentforce`

If Codex cannot modify that exact checkout, it must stop before editing and say so.

Do not allow Codex to silently edit a separate `work/Claygentforce` checkout.

For LWC CSS, avoid Salesforce internal tokens, `force:*` tokens, and unsafe `--lwc-*` styling hooks. Plain scoped CSS is safer for this MVP.

---

## Known Tooling / Workflow Lessons

Documented in `docs/ISSUES_LOG.md`:

- Salesforce CLI was initially missing.
- Node/npm were initially missing.
- PowerShell execution policy initially blocked npm.
- `npm install` was required before `npm run lint` would work.
- Codex repeatedly created or edited files in a separate workspace before the workflow was tightened.
- AI-facing documentation briefly duplicated context across multiple files and was corrected.
- A previous LWC CSS attempt failed because a styling hook compiled to an internal Salesforce token inaccessible from namespace `c`.
- Flow metadata clearing assignments should use empty `<stringValue></stringValue>`, not `$GlobalConstant.EmptyString` or `$GlobalConstant.Null`.

---

## Visual / Org Validation Completed

Visual testing in the org confirmed earlier Scenario 001 behavior including:

- the LWC is visible on the Case record page
- High priority open Cases are flagged
- manual override works on a Medium priority open Case
- manual override sets High Risk Reason to `Manual Review`
- the Delivery Team Channel shows manual override messages
- Scenario State displays `Manual Override`
- Scenario Signals displays State, Tier, Priority, and Flow context

Later UI layers were visually reviewed during development, but full smoke/regression testing is intentionally deferred until the current scenario mechanics stabilize.

Case creation in this org requires:

`Case Origin = Phone`

Remember this for smoke testing.

---

## Documentation Maintenance Notes

When updating docs:

- verify file lists against the actual repository
- avoid leaving placeholder roadmap items after they are completed
- keep project framing aligned with the full-team simulation vision
- avoid creating redundant docs when an existing doc can be updated
- keep `AI_SESSION_STARTER.md` focused on ChatGPT rehydration
- keep `AI_COMMANDS_AND_WORKFLOWS.md` focused on Codex/task execution guidance
- keep `DEVLOG.md` milestone-oriented
- keep `ISSUES_LOG.md` focused on meaningful friction, not every transient hiccup

---

## Current Best Next Task

Do not restart setup work.

Do not expand large documentation just for its own sake.

Do not continue adding reviewer/demo-only UI framing unless the user explicitly asks for portfolio polish.

The next useful work is to continue Scenario 001 in small but meaningful simulation-mechanics increments.

Likely next options:

1. Complete the latest Scenario Progression implementation review after the user pushes.
2. Add lightweight learner-driven branching concepts without persistence.
3. Add a minimal scenario choice scaffold only when the interaction model is clear.
4. Expand smoke/regression testing after the current UI and Flow patterns stabilize.
5. Refactor the LWC JS toward clearer config/state modules only when it starts hurting.
6. Prepare reusable patterns before Scenario 002 begins.

Claygentforce now has enough foundational documentation, Salesforce metadata, and static simulation behavior to keep validating the simulator against real implementation work.