# AI Commands and Workflows

This file is for Codex and implementation-focused AI tooling.

Its purpose is to reduce repeated prompting during implementation work.

This is not the main ChatGPT project memory file.

ChatGPT project rehydration and current-state context belong in:

`docs/AI_SESSION_STARTER.md`

---

## Repository

GitHub repository:

`https://github.com/djlasher/Claygentforce`

Preferred local checkout:

`D:\Github Repos\Claygentforce`

Codex should modify the preferred local checkout when possible.

Before editing files, Codex should confirm whether it is modifying:

`D:\Github Repos\Claygentforce`

If Codex cannot modify that exact checkout, it must stop and say so before editing.

Do not silently edit a separate `work/Claygentforce` checkout.

If a separate generated workspace must be used, clearly state that and provide copy instructions back to:

`D:\Github Repos\Claygentforce`

After editing, summarize the exact local path that was modified.

---

## Codex Operating Context

Claygentforce is a Salesforce delivery team simulation and enablement project.

This is not the previous game or roguelite sandbox project.

The product direction is a chat-first simulated Salesforce delivery room with deterministic local orchestration first and future Agentforce/Data Cloud-backed role agents later. Different delivery roles provide contextual guidance, concerns, tradeoffs, review notes, role pushback, and closeout feedback through a compact conversation-style interface.

This is not intended to become a generic chatbot.

Make the smallest useful change that moves the demo, scenario capability, or orchestration architecture forward.

Keep changes:

- scoped
- reviewable
- scenario-driven
- grounded in existing repository docs
- biased toward visible Salesforce/LWC behavior or real orchestration progress when the user asks for demo progress

Unless explicitly requested:

- do not create Apex
- do not create external AI calls
- do not create freeform chat input
- do not modify unrelated metadata
- do not rewrite large docs unnecessarily
- do not add Scenario 002 yet

---

## Default Implementation Constraints

For Scenario 001 implementation prompts, assume these constraints apply unless the prompt explicitly says otherwise. ChatGPT should not need to repeat this full list in every Codex prompt.

- keep changes state-driven and deterministic where practical
- preserve existing Flow precedence behavior
- do not add Apex
- do not add persistence
- do not add external AI calls
- do not add Agentforce integration yet
- do not add Data Cloud integration yet
- do not add freeform chat input
- do not add navigation
- do not add timers or async message streaming
- do not add scoring unless explicitly requested
- do not add randomization unless explicitly requested
- do not change Salesforce metadata unless the task is specifically about metadata
- do not update DEVLOG, ISSUES_LOG, roadmap docs, or ADRs unless explicitly requested
- avoid broad refactors when a targeted change is enough
- avoid adding new explanatory panels when a role-agent message or compact summary would work

Interactivity is allowed only when explicitly requested and should be bounded/local unless the prompt says otherwise.

Allowed bounded interactivity examples:

- local selected choice state
- local reset control
- display-only or predefined learner choices
- static predefined follow-up messages
- static predefined validation/evidence notes
- static predefined role challenge/pushback messages
- static predefined challenge response choices
- static predefined closeout notes
- deterministic local orchestration plan execution
- deterministic local role-agent task routing

Disallowed unless explicitly requested:

- persistence
- server calls
- Apex controllers
- freeform chat input
- generated AI responses
- live Agentforce invocation
- live Data Cloud queries
- timers/async message streaming
- navigation
- scoring/best-answer mechanics

After implementation:

- run lint for LWC changes
- summarize changed files only
- mention validation performed
- say explicitly whether a manifest update was needed
- for launcher-only work, say whether the launcher-only manifest was used

---

## Metadata and Manifest Rules

When creating, deleting, or renaming Salesforce metadata outside an existing bundle, update `manifest/scenario-001-package.xml` in the same task.

Examples:

- New LWC bundle: add `LightningComponentBundle`
- New FlexiPage: add `FlexiPage`
- New custom app: add `CustomApplication`
- New Lightning page tab: add `CustomTab`
- New field: add `CustomField`
- New permission set: add `PermissionSet`

Preserve existing manifest members unless the task explicitly removes metadata.

Markdown files, scenario notes, run artifacts, docs, and new JavaScript modules inside an existing LWC bundle do not require manifest updates.

Changes inside the existing `scenarioLauncher` LWC bundle usually do not require manifest updates.

For normal launcher-only work, use:

`manifest/scenario-launcher-package.xml`

The launcher-only manifest includes only:

- `LightningComponentBundle: scenarioLauncher`

Do not use the full Scenario 001 manifest for launcher-only work. The full manifest includes the Flow and can hit the org Flow version limit even when the Flow is not changing.

Use `manifest/scenario-001-package.xml` only when validating/deploying the full Scenario 001 metadata set. If Flow work is needed again, clean up old Flow versions in the org first.

For deployable metadata tasks, summarize:

- changed files
- metadata members added or changed
- manifest update performed
- validation performed

If no manifest update is needed, say so explicitly.

---

## Launcher / App Page Notes

A Lightning App Page FlexiPage does not automatically replace the standard Salesforce Home tab.

For launcher-style app work, the source-controlled path usually needs:

- `CustomApplication`
- `FlexiPage`
- `CustomTab`
- app navigation entry referencing the custom tab
- profile or permission visibility handled in the org when needed

For the current launcher:

- app: `Claygentforce`
- tab: `Claygentforce_Home`
- FlexiPage: `Claygentforce_Home`
- LWC bundle: `scenarioLauncher`
- catalog module: `scenarioCatalog.js`
- orchestrator module: `deliveryRoomOrchestrator.js`
- role-agent module: `deliveryRoomAgents.js`
- plan module: `deliveryRoomPlan.js`
- local adapter module: `deliveryRoomAdapter.js`

Current launcher direction:

- bounded local Scenario 001 Delivery Room run
- deterministic local orchestration prototype
- realistic scenario moment before choices
- chat-first delivery role messages
- first learner decision
- follow-up action
- Delivery Coordinator local task output
- Team Review feedback
- Team Challenge / role pushback
- challenge response choice in the main chat flow
- compact Session Result / Decision Quality Signals / completed-run closeout / Manual Validation Checklist
- collapsible supporting context, collapsed by default

Important UX rules for launcher work:

- active learner choices should appear in the main chat flow
- result panels should summarize what happened, not hide the next action
- supporting context should stay secondary/collapsible
- avoid creating new large information panels when a compact chat message or summary would work
- preserve local reset behavior across all selected run state
- Team Challenge messages must not carry `challengeResponses`; only the dedicated challenge prompt should carry interactive response choices

Future goal:

- local role-agent tasks should be replaceable by Agentforce/Data Cloud-backed execution later
- scenario context should generally be revealed by delivery-role messages or learner prompts
- always-visible dashboard panels should continue shrinking over time
- future scoring/evaluation should be data-backed, but not added until explicitly requested

---

## Salesforce Flow Metadata Notes

When editing Flow metadata, do not use either of these references for field-clearing assignments:

- `$GlobalConstant.EmptyString`
- `$GlobalConstant.Null`

Salesforce metadata deployments rejected both during Scenario 001 Flow work.

When clearing string fields in Flow metadata, use empty `<stringValue></stringValue>` assignments instead.

Do not include Flow metadata in launcher-only validations/deployments. Use `manifest/scenario-launcher-package.xml` for launcher-only work.

---

## LWC Implementation Rules

For Lightning Web Component work:

- use SLDS classes where practical
- use plain scoped CSS for MVP styling
- do not use Salesforce internal design tokens
- do not use `force:*` tokens
- do not use `--lwc-*` styling hooks unless they are already proven safe in this repo
- avoid styling choices that require org theme assumptions
- keep styling professional and compact
- prefer preserving behavior during cleanup/refactor tasks
- keep `scenarioLauncher.js` as renderer/controller when possible
- keep orchestration logic in `deliveryRoomOrchestrator.js`, `deliveryRoomPlan.js`, `deliveryRoomAdapter.js`, and `deliveryRoomAgents.js`

Reason: a previous LWC CSS update failed deployment because a styling hook compiled to an internal Salesforce token that custom namespace components cannot access.

---

## Current Scenario Launcher Files

For current launcher work, read only what is relevant from:

- `force-app/main/default/lwc/scenarioLauncher/scenarioLauncher.html`
- `force-app/main/default/lwc/scenarioLauncher/scenarioLauncher.js`
- `force-app/main/default/lwc/scenarioLauncher/scenarioLauncher.css`
- `force-app/main/default/lwc/scenarioLauncher/scenarioLauncher.js-meta.xml`
- `force-app/main/default/lwc/scenarioLauncher/scenarioCatalog.js`
- `force-app/main/default/lwc/scenarioLauncher/deliveryRoomOrchestrator.js`
- `force-app/main/default/lwc/scenarioLauncher/deliveryRoomAgents.js`
- `force-app/main/default/lwc/scenarioLauncher/deliveryRoomPlan.js`
- `force-app/main/default/lwc/scenarioLauncher/deliveryRoomAdapter.js`
- `manifest/scenario-launcher-package.xml`

Read `manifest/scenario-001-package.xml` only for full Scenario 001 metadata work.

The current launcher is already refactored into a deterministic local orchestrated run. Preserve the current run shape unless the prompt explicitly changes it:

1. Scenario Moment
2. first learner decision
3. role-agent follow-up and Delivery Coordinator task
4. follow-up action
5. final role-agent response
6. Team Challenge / role pushback
7. challenge response in main chat flow
8. final reaction / closeout
9. Session Result, Decision Quality Signals, completed-run closeout, and Manual Validation Checklist

---

## Standard Files To Read First

For general implementation context:

- `README.md`
- `docs/AI_SESSION_STARTER.md`
- `docs/ARCHITECTURE.md`
- `docs/DEVLOG.md`

For Scenario 001 implementation work:

- `scenarios/001-case-escalation-manager-visibility/IMPLEMENTATION_PLAN.md`
- `scenarios/001-case-escalation-manager-visibility/FLOW_DESIGN.md`
- `scenarios/001-case-escalation-manager-visibility/SMOKE_TEST_CHECKLIST.md`
- `manifest/scenario-001-package.xml`

For Scenario 001 launcher-only work, prefer the narrower launcher file list above and `manifest/scenario-launcher-package.xml`.

For Scenario 001 Case panel LWC work:

- `force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.html`
- `force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.js`
- `force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.js-meta.xml`
- `force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.css`

Read only the files relevant to the current task.

Do not ingest unnecessary repository context for small targeted changes.

---

## Validation and Deploy Reference

Use these commands when relevant.

For LWC/code validation:

```bash
npm run lint
```

For launcher-only deploy validation:

```bash
sf project deploy validate --manifest manifest/scenario-launcher-package.xml --target-org Claygentforce
```

For launcher-only deploy:

```bash
sf project deploy start --manifest manifest/scenario-launcher-package.xml --target-org Claygentforce
```

For full Scenario 001 deploy validation only when full metadata is intentionally included:

```bash
sf project deploy validate --manifest manifest/scenario-001-package.xml --target-org Claygentforce
```

For full Scenario 001 deploy only when full metadata is intentionally included:

```bash
sf project deploy start --manifest manifest/scenario-001-package.xml --target-org Claygentforce
```

For normal git commit flow:

```bash
git add <changed paths>
git commit -m "<concise message>"
git push
```

Do not repeatedly restate full command lists in every implementation response unless the user asks.

---

## Prompt Repetition Reduction Notes

ChatGPT should rely on this file instead of repeating the same large prompt blocks every time.

For future Codex prompts, usually include only:

1. task name and goal
2. relevant files to read if narrower than this file's launcher list
3. specific behavior or architecture change
4. any exceptions to the default constraints
5. expected validation command block

Avoid repeating unless truly necessary:

- the full disallowed list
- full repository identity/background
- full current launcher behavior
- full manifest explanations
- full CSS token warnings
- full visual smoke-test checklist

Use a short phrase such as:

`Use the default Scenario 001 launcher constraints from docs/AI_COMMANDS_AND_WORKFLOWS.md.`

For launcher-only tasks, use a short phrase such as:

`Use the launcher-only manifest for validation/deploy; do not touch the full Scenario 001 manifest unless metadata outside the existing launcher bundle changes.`

---

## Manual Review Workflow

The current working pattern is:

1. Human builds, retrieves, edits, or accepts tool-generated changes locally.
2. Human validates locally when practical.
3. Human commits and pushes.
4. Human sends `k` in chat.
5. ChatGPT inspects the repository through GitHub.
6. ChatGPT updates devlogs, issue logs, or supporting documentation when appropriate or when the user asks.

Do not create a devlog entry for every tiny file change.

Prefer milestone-oriented devlog entries.

No issue-log update is needed unless there is meaningful friction, a deployment problem, or a lesson worth preserving.

User prefers documentation updates at the end of a work burst for speed unless the issue blocks progress.

---

## Chunking Guidance

When generating large Markdown responses for manual copy/paste:

- avoid nested fenced code blocks
- use inline code for commands when possible
- split content into smaller chunks
- verify the file ending after saving

This prevents Markdown truncation during copy/paste.

---

## Current Scenario 001 MVP Scope

The current Scenario 001 MVP includes:

- Case high-risk fields
- Case layout section
- support manager list view
- scenario-specific permission set
- before-save Case Flow v3 with precedence paths
- read-only Case LWC risk panel
- `scenarioPreviewSection` child LWC for repeated preview sections
- `scenarioLauncher` bounded local Delivery Room run
- deterministic local orchestration modules in the launcher bundle
- launcher-only deploy manifest
- `Claygentforce` custom app
- `Claygentforce_Home` FlexiPage and custom tab
- smoke test checklist
- simulated run artifacts

The launcher has moved from a static dashboard to a bounded local chat-style simulation and then into a deterministic local orchestration prototype. Continue evolving it through compact, reviewable, scenario-driven increments that move toward replaceable Agentforce/Data Cloud-backed role-agent tasks later.
