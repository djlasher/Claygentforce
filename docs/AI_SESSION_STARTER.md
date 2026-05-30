# AI Session Starter

This file is for ChatGPT session rehydration.

Read this first before helping with Claygentforce so the assistant remembers the current project state, avoids repeating completed setup work, and does not confuse Claygentforce with earlier sandbox projects.

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

Repository:

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

The current Scenario 001 MVP is source-controlled and deployable through:

`manifest/scenario-001-package.xml`

The MVP includes:

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

The org was authenticated under the alias:

`Claygentforce`

The local repo path used by the user is:

`D:\Github Repos\Claygentforce`

---

## Current Flow Behavior

Flow file:

`force-app/main/default/flows/Scenario001_Case_High_Risk_Flagging.flow-meta.xml`

Flow v2 behavior:

1. Runs before-save on Case create/update.
2. Entry condition: open Cases only, `IsClosed = false`.
3. Manual override is evaluated before priority.
4. If `High_Risk_Override__c = true`:
   - `High_Risk__c = true`
   - `High_Risk_Reason__c = Manual Review`
5. Else if `Priority = High`:
   - `High_Risk__c = true`
   - `High_Risk_Reason__c = Critical Severity`
6. Otherwise Flow does not clear existing high-risk values yet.

Flow v2 intentionally avoids:

- customer tier logic
- stale Case logic
- notifications
- assignment changes
- clearing behavior
- custom code

Customer Tier exists as future escalation context but Flow v2 does not use it yet.

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

It displays:

- Scenario State
- High Risk
- High Risk Override
- High Risk Reason
- Customer Tier
- Priority
- Status
- Scenario Signals strip
- Delivery Team Channel

Scenario State values:

- `Closed Case`
- `Manual Override`
- `Priority-Based High Risk`
- `Not Flagged`

Scenario Signals display compact pills for:

- State
- Tier
- Priority
- Flow

Flow Signal values:

- `Closed visibility only`
- `Override precedence`
- `Priority criteria`
- `No active match`

Delivery Team Channel guidance priority:

1. Closed Case guidance
2. Manual Override guidance
3. Open high-risk guidance
4. Open not-flagged guidance

If Customer Tier is `Strategic` and the Case is not closed, the LWC appends a Product Owner message explaining that Strategic customer context may affect future escalation criteria, but Flow v2 does not use customer tier yet.

The LWC intentionally avoids:

- Apex
- external AI calls
- chat input
- live agent orchestration

It is the first visual UI foundation for the future simulated delivery-team channel experience.

---

## Visual / Org Validation Completed

Visual testing in the org confirmed:

- the LWC is visible on the Case record page
- High priority open Cases are flagged
- manual override works on a Medium priority open Case
- manual override sets High Risk Reason to `Manual Review`
- the Delivery Team Channel shows manual override messages
- Scenario State displays `Manual Override`
- Scenario Signals displays State, Tier, Priority, and Flow context

Case creation in this org requires:

`Case Origin = Phone`

Remember this for smoke testing.

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

---

## Codex Guidance

`docs/AI_COMMANDS_AND_WORKFLOWS.md` is for Codex and implementation-focused AI tooling.

Do not treat it as ChatGPT's main memory file.

For Codex prompts:

- keep prompts short
- point Codex to `docs/AI_COMMANDS_AND_WORKFLOWS.md`
- include only the specific files relevant to the task
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

The next useful work is to continue Scenario 001 in small, scenario-driven increments.

Likely next options:

1. Execute the smoke test checklist and record final findings.
2. Decide whether Flow v2 should clear high-risk values when criteria stop matching.
3. Add customer tier logic to Flow only after the criteria are clarified.
4. Add stale Case logic only after the age threshold and business meaning are clarified.
5. Add richer static Delivery Team Channel guidance if it improves the learning experience.
6. Keep the LWC read-only and avoid Apex/external AI calls until the static UI pattern is proven.

Claygentforce now has enough foundational documentation and Salesforce metadata to keep validating the simulator against real implementation work.
