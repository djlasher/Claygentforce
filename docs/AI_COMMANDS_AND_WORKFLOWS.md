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

The product direction is a chat-first simulated Salesforce delivery room. Different delivery roles provide contextual guidance, concerns, tradeoffs, review notes, role pushback, and closeout feedback through a compact conversation-style interface.

This is not intended to become a generic chatbot.

Make the smallest useful change that moves the demo or scenario capability forward.

Keep changes:

- scoped
- reviewable
- scenario-driven
- grounded in existing repository docs
- biased toward visible Salesforce/LWC behavior when the user asks for demo progress

Unless explicitly requested:

- do not create Apex
- do not create external AI calls
- do not create freeform chat input
- do not modify unrelated metadata
- do not rewrite large docs unnecessarily
- do not add Scenario 002 yet

---

## Default Implementation Constraints

For Scenario 001 implementation prompts, assume these constraints apply unless the prompt explicitly says otherwise:

- keep changes state-driven where practical
- preserve existing Flow precedence behavior
- do not add Apex
- do not add persistence
- do not add external AI calls
- do not add Agentforce integration
- do not add freeform chat input
- do not add navigation
- do not add timers or async message streaming
- do not add scoring unless explicitly requested
- do not add randomization unless explicitly requested
- do not change Salesforce metadata unless the task is specifically about metadata
- do not update DEVLOG, ISSUES_LOG, roadmap docs, or ADRs unless explicitly requested
- avoid broad refactors when a targeted change is enough

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

Disallowed unless explicitly requested:

- persistence
- server calls
- Apex controllers
- freeform chat input
- generated AI responses
- live Agentforce invocation
- timers/async message streaming
- navigation
- scoring/best-answer mechanics

After implementation:

- run lint for LWC changes
- summarize changed files only
- mention validation performed
- say explicitly whether a manifest update was needed

---

## Metadata and Manifest Rules

When creating, deleting, or renaming Salesforce metadata, update `manifest/scenario-001-package.xml` in the same task.

Examples:

- New LWC bundle: add `LightningComponentBundle`
- New FlexiPage: add `FlexiPage`
- New custom app: add `CustomApplication`
- New Lightning page tab: add `CustomTab`
- New field: add `CustomField`
- New permission set: add `PermissionSet`

Preserve existing manifest members unless the task explicitly removes metadata.

Markdown files, scenario notes, run artifacts, and docs do not require manifest updates.

Changes inside an existing LWC bundle usually do not require manifest updates.

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
- LWC: `scenarioLauncher`
- catalog module: `scenarioCatalog.js`

Current launcher direction:

- bounded local Scenario 001 Delivery Room run
- realistic scenario moment before choices
- chat-first delivery role messages
- first learner decision
- follow-up action
- Team Review feedback
- Team Challenge / role pushback
- challenge response choice in the main chat flow
- compact Session Result / Manual Validation Checklist
- collapsible supporting dashboard context, collapsed by default

Important UX rules for launcher work:

- active learner choices should appear in the main chat flow
- result panels should summarize what happened, not hide the next action
- supporting dashboard content should stay secondary/collapsible
- avoid creating new large information panels when a compact chat message or summary would work
- preserve local reset behavior across all selected run state

Future goal:

- messages should eventually feel like an actual delivery-room conversation
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

Reason: a previous LWC CSS update failed deployment because a styling hook compiled to an internal Salesforce token that custom namespace components cannot access.

---

## Current Scenario Launcher Files

For current chat-first launcher work, read only what is relevant from:

- `force-app/main/default/lwc/scenarioLauncher/scenarioLauncher.html`
- `force-app/main/default/lwc/scenarioLauncher/scenarioLauncher.js`
- `force-app/main/default/lwc/scenarioLauncher/scenarioCatalog.js`
- `force-app/main/default/lwc/scenarioLauncher/scenarioLauncher.css`
- `force-app/main/default/lwc/scenarioLauncher/scenarioLauncher.js-meta.xml`
- `manifest/scenario-001-package.xml`

The current launcher is already refactored into a bounded local run. Preserve the current run shape unless the prompt explicitly changes it:

1. Scenario Moment
2. first learner decision
3. role follow-up and simulation note
4. follow-up action
5. final role response
6. Team Challenge / role pushback
7. challenge response in main chat flow
8. final reaction / closeout
9. Session Result summary and Manual Validation Checklist

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

For focused Scenario 001 deploy validation:

```bash
sf project deploy validate --manifest manifest/scenario-001-package.xml --target-org Claygentforce
```

For focused Scenario 001 deploy:

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

## Manual Review Workflow

The current working pattern is:

1. Human builds, retrieves, edits, or accepts tool-generated changes locally.
2. Human validates locally when practical.
3. Human commits and pushes.
4. Human sends `k` in chat.
5. ChatGPT inspects the repository through GitHub.
6. ChatGPT updates devlogs, issue logs, or supporting documentation when appropriate.

Do not create a devlog entry for every tiny file change.

Prefer milestone-oriented devlog entries.

No issue-log update is needed unless there is meaningful friction, a deployment problem, or a lesson worth preserving.

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
- `Claygentforce` custom app
- `Claygentforce_Home` FlexiPage and custom tab
- smoke test checklist
- simulated run artifacts

The launcher has moved from a static dashboard toward bounded local chat-style simulation. Continue evolving it through compact, reviewable, scenario-driven increments.
