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

The product direction is now a **chat-first simulated Salesforce delivery room**. Different delivery roles should surface context through messages, prompts, bounded learner choices, follow-up guidance, role pushback, and closeout feedback instead of showing every artifact as an always-visible dashboard.

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

Claygentforce is a Salesforce DX project with:

- project vision and architecture documentation
- delivery simulation process documentation
- role-based AI prompts
- reusable scenario templates
- Scenario 001 artifacts
- deployable Salesforce metadata
- devlog and issue log
- AI workflow notes
- Codex operating guidance in `docs/AI_COMMANDS_AND_WORKFLOWS.md`
- a source-controlled chat-first Delivery Room launcher LWC

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
- `Case_Record_Page` FlexiPage with the Scenario 001 Case risk panel
- `scenario001CaseRiskPanel` Lightning Web Component
- `scenarioPreviewSection` non-exposed child Lightning Web Component
- `scenarioLauncher` exposed Lightning Web Component
- `Claygentforce` custom application
- `Claygentforce_Home` FlexiPage
- `Claygentforce_Home` Lightning page custom tab
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

## Current Case Record LWC Behavior

Scenario 001 Case risk panel folder:

`force-app/main/default/lwc/scenario001CaseRiskPanel/`

The Case risk panel is read-only and uses `lightning/uiRecordApi` / `getRecord`.

It reads:

- `Case.High_Risk__c`
- `Case.High_Risk_Override__c`
- `Case.High_Risk_Reason__c`
- `Case.Customer_Tier__c`
- `Case.Priority`
- `Case.Status`
- `Case.IsClosed`

It displays a layered static simulation surface including raw Case risk fields, scenario summary, signals, escalation metrics, grouped Delivery Team Channel guidance, stakeholder pressure, learner branch/consequence/challenge previews, outcome/risk, decision paths, learning checkpoint, learner progression, loading state, and record load error state.

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

`scenarioPreviewSection` is a non-exposed child LWC used by the Case risk panel to render repeated preview-card sections.

The Case panel remains read-only and avoids Apex, persistence, external AI, chat input, live agent orchestration, and interactive branching.

---

## Current Launcher / Chat-First Delivery Room State

Launcher LWC folder:

`force-app/main/default/lwc/scenarioLauncher/`

The launcher is exposed for:

- `lightning__AppPage`
- `lightning__HomePage`

The Salesforce app path is source-controlled:

`Claygentforce` app → `Claygentforce Home` tab → `Claygentforce_Home` FlexiPage → `scenarioLauncher` LWC

The launcher has evolved from a static dashboard into the current demo surface: a **bounded local Scenario 001 Delivery Room run**.

Current launcher bundle files include:

- `scenarioLauncher.html`
- `scenarioLauncher.js`
- `scenarioLauncher.css`
- `scenarioLauncher.js-meta.xml`
- `scenarioCatalog.js`

Current launcher behavior includes:

- compact hero/product framing
- bounded simulation header
- scenario/mode/phase/current focus context
- phase/progress strip
- realistic Scenario 001 Support Manager scenario moment
- chat-style delivery role messages
- first learner prompt with bounded response choices
- selected learner choice rendered as a chat message
- static role follow-up message based on selected choice
- static simulation note/evidence guidance based on selected choice
- second bounded follow-up action prompt
- selected follow-up action rendered as a learner chat message
- final predefined delivery-role response
- Team Challenge / role pushback rendered in the main chat flow
- third-stage learner challenge response prompt in the main chat flow
- selected challenge response rendered as a learner chat message
- final delivery-room reaction rendered as a role message
- compact Session Result summary
- Team Review section
- Manual Validation Checklist
- optional closeout note when a challenge response is selected
- collapsible supporting dashboard context, collapsed by default
- local reset control that clears all selected run state

Current first learner choice options include:

- Flow precedence
- Permission visibility
- List view accuracy
- Stakeholder tradeoff
- Release readiness
- Regression risk

Current local launcher state includes:

- `selectedChoiceId`
- `selectedFollowUpActionId`
- `selectedChallengeResponseId`
- `isSupportingContextExpanded`

Current launcher implementation intentionally uses local LWC state only:

- no Apex
- no persistence
- no external AI calls
- no Agentforce integration
- no freeform chat input
- no navigation
- no timers or async message streaming
- no scoring
- no randomization
- no new Salesforce metadata

The product direction is to make this feel like an actual delivery-room simulation where messages, choices, role pushback, and consequences teach Salesforce delivery judgment. Active learner choices should stay in the main chat flow; result panels should summarize the run, not hide the next action.

Immediate next intended launcher step:

- Add a compact closeout/run-status treatment only if it improves clarity without creating another dashboard panel.
- Then begin non-scored decision quality scaffolding so future versions can distinguish strong, incomplete, and risky learner paths without yet labeling choices as right/wrong.

---

## Current Scenario Artifacts

Current run artifacts include:

- `RUN-001-manager-override.md`
- `RUN-001-summary.md`
- `RUN-002-stale-escalation.md`
- `RUN-003-strategic-customer.md`
- `RUN-004-smoke-test-validation.md`

`RUN-004-smoke-test-validation.md` currently captures static validation and deferred manual smoke-test coverage. Full manual end-to-end smoke testing is still pending.

Current ADRs include:

- `ADR-001-before-save-flow.md`
- `ADR-002-read-only-lwc.md`
- `ADR-003-static-simulation-first.md`

Reusable scenario templates exist under `scenarios/TEMPLATE_SCENARIO/` and have been aligned with the Delivery Room direction. Do not create duplicate role runbooks unless there is a clear gap.

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
- Avoid adding documentation sprawl. Update existing docs when practical.

User preference:

- When giving local commands, put them in copyable code blocks.
- Do not include `cd` commands for the repo; user is already in `D:\Github Repos\Claygentforce`.
- Split commands into three blocks: lint+validate, deploy, then git add/commit/push.
- Do not include standalone `git status` in the standard command set.
- After implementation prompts and commands, include an `After this...` line describing the intended next step so the user can push back before the work drifts.
- Avoid documentation-heavy tasking when the goal is demo progress.
- Bias toward visible Salesforce/LWC behavior unless the user explicitly asks for docs.

---

## Codex Guidance

`docs/AI_COMMANDS_AND_WORKFLOWS.md` is for Codex and implementation-focused AI tooling.

Do not treat it as ChatGPT's main memory file.

For Codex prompts:

- point Codex to `docs/AI_COMMANDS_AND_WORKFLOWS.md`
- include only the specific task details
- rely on the workflow doc for repeated constraints, commands, and validation expectations
- include manifest/package updates whenever new Salesforce metadata files are created
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
- Lightning App Page launcher visibility required a FlexiPage, CustomTab, app navigation entry, profile visibility, and source retrieval after manual nav adjustment.

No new issue-log entry was needed for the 2026-06-14 session.

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

Latest org/app validation confirmed:

- the `Claygentforce` app exists
- the `Claygentforce Home` custom tab exists
- the `Claygentforce Home` tab points to the `Claygentforce_Home` FlexiPage
- the `scenarioLauncher` LWC renders through the app tab
- the launcher now works as a bounded local Scenario 001 Delivery Room run
- active learner choices appear in the main chat flow
- first decision, follow-up action, Team Challenge, and challenge response interactions work locally
- the supporting dashboard context is collapsible and collapsed by default

Full smoke/regression testing is still pending and should be completed from `SMOKE_TEST_CHECKLIST.md` when there is time.

Case creation in this org requires:

`Case Origin = Phone`

Remember this for smoke testing.

---

## Documentation Maintenance Notes

When updating docs:

- verify file lists against the actual repository
- avoid leaving placeholder roadmap items after they are completed
- keep project framing aligned with the chat-first full-team simulation vision
- avoid creating redundant docs
- keep devlog entries milestone-oriented
