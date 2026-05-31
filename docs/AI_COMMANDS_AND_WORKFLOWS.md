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

The product direction is a simulated Salesforce delivery-team channel experience, similar to a Teams or Slack room, where different delivery roles provide contextual guidance, concerns, tradeoffs, and review notes.

This is not intended to become a generic chatbot.

Make the smallest useful change.

Keep changes:

- scoped
- reviewable
- scenario-driven
- grounded in existing repository docs

Unless explicitly requested:

- do not create Apex
- do not create external AI calls
- do not create chat input
- do not modify unrelated metadata
- do not rewrite large docs unnecessarily

---

## Default Implementation Constraints

For Scenario 001 implementation prompts, assume these constraints apply unless the prompt explicitly says otherwise:

- keep the LWC static/read-only
- keep changes state-driven where practical
- preserve existing Flow precedence behavior
- do not add Apex
- do not add persistence
- do not add orchestration
- do not add external AI calls
- do not add chat functionality
- do not add buttons or click handlers unless explicitly requested
- do not change Salesforce metadata unless the task is specifically about metadata
- do not update DEVLOG, ISSUES_LOG, roadmap docs, or ADRs unless explicitly requested
- avoid reviewer/demo-only framing unless the task specifically asks for demo polish
- avoid broad refactors when a targeted change is enough

After implementation:

- run lint for LWC changes
- summarize changed files only
- mention validation performed

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

- keep components read-only unless explicitly asked otherwise
- use SLDS classes where practical
- use plain scoped CSS for MVP styling
- do not use Salesforce internal design tokens
- do not use `force:*` tokens
- do not use `--lwc-*` styling hooks unless they are already proven safe in this repo
- avoid styling choices that require org theme assumptions
- keep styling subtle and professional

Reason: a previous LWC CSS update failed deployment because a styling hook compiled to an internal Salesforce token that custom namespace components cannot access.

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

For Scenario 001 LWC work:

- `force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.html`
- `force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.js`
- `force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.js-meta.xml`
- `force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.css`

Read only the files relevant to the current task.

Do not ingest unnecessary repository context for small targeted changes.

---

## Validation and Deploy Reference

If validation or deployment commands are needed, use the existing Salesforce DX and npm workflows already established in the repository.

Do not repeatedly restate the full command list in every Codex prompt.

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
- smoke test checklist
- simulated run artifacts

The LWC is being evolved toward a simulated delivery-team channel experience in small, reviewable increments.