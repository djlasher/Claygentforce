# AI Commands and Workflows

This file stores repeated commands, local paths, and workflow conventions used while building Claygentforce.

The goal is to reduce repeated prompting and keep AI-assisted development consistent.

---

## Repository

GitHub repository:

`https://github.com/djlasher/Claygentforce`

Preferred local checkout:

`D:\Github Repos\Claygentforce`

When using Codex or another file-editing AI tool, prefer the existing local checkout above.

If the tool must use a separate generated workspace, it should clearly state that and provide copy instructions back to:

`D:\Github Repos\Claygentforce`

---

## Standard AI Context Header

Use this header for Codex or other implementation-focused AI tools:

You are helping build Claygentforce, a Salesforce delivery team simulation and enablement project.

This is not the previous game or roguelite sandbox project. Claygentforce is the active strategic project.

Claygentforce is building toward a simulated Salesforce delivery team channel experience, similar to a Teams or Slack room. The learner should eventually see delivery roles chime in with contextual guidance, concerns, tradeoffs, and review notes. This is not a generic chatbot.

Use the existing local checkout at:

`D:\Github Repos\Claygentforce`

Do not create or use a separate Codex-generated clone if avoidable. If a separate workspace must be used, clearly state that and provide copy instructions back to the local checkout.

Make the smallest useful change. Keep changes scoped, reviewable, and grounded in existing repository documentation.

---

## Standard Files To Read First

For general project context:

- `README.md`
- `docs/AI_SESSION_STARTER.md`
- `docs/ARCHITECTURE.md`
- `docs/DEVLOG.md`
- `docs/AGENT_ROLES.md`
- `docs/DELIVERY_SIMULATION_LOOP.md`

For Scenario 001 implementation work:

- `scenarios/001-case-escalation-manager-visibility/IMPLEMENTATION_PLAN.md`
- `scenarios/001-case-escalation-manager-visibility/FLOW_DESIGN.md`
- `scenarios/001-case-escalation-manager-visibility/SMOKE_TEST_CHECKLIST.md`
- `manifest/scenario-001-package.xml`

For Scenario 001 LWC work:

- `force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.html`
- `force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.js`
- `force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.js-meta.xml`

---

## Local Setup Commands

Confirm Node and npm:

`node --version`

`npm --version`

Install project dependencies:

`npm install`

Run lint:

`npm run lint`

---

## Salesforce Org Commands

Confirm Salesforce CLI:

`sf --version`

List authenticated orgs:

`sf org list`

Authorize the Claygentforce org if needed:

`sf org login web --alias Claygentforce --set-default`

---

## Scenario 001 Manifest Commands

Validate the full Scenario 001 MVP slice:

`sf project deploy validate --manifest manifest/scenario-001-package.xml --target-org Claygentforce`

Deploy the full Scenario 001 MVP slice:

`sf project deploy start --manifest manifest/scenario-001-package.xml --target-org Claygentforce`

---

## Scenario 001 LWC Commands

Validate only the Scenario 001 LWC:

`sf project deploy validate --source-dir force-app/main/default/lwc/scenario001CaseRiskPanel --target-org Claygentforce`

Deploy only the Scenario 001 LWC:

`sf project deploy start --source-dir force-app/main/default/lwc/scenario001CaseRiskPanel --target-org Claygentforce`

---

## Manual Review Workflow

The current working pattern is:

1. Human builds, retrieves, edits, or accepts tool-generated changes locally.
2. Human validates locally when practical.
3. Human commits and pushes.
4. Human sends `k` in chat.
5. ChatGPT inspects the repository through GitHub.
6. ChatGPT updates project memory files such as `docs/DEVLOG.md`, `docs/ISSUES_LOG.md`, or scenario documentation when appropriate.

Do not create a devlog entry for every tiny file change.

Prefer milestone-oriented devlog entries that summarize related work from the same session or implementation phase.

---

## Chunking Strategy

When manually copying large Markdown content from chat:

- avoid nested fenced code blocks
- use inline code for commands when possible
- split content into smaller chunks
- verify the file ending after saving
- push and have the repository inspected before continuing

This prevents Markdown copy/paste truncation.

---

## Current Scenario 001 MVP Scope

The current Scenario 001 MVP includes:

- Case high-risk fields
- Case layout section
- Support manager list view
- Scenario-specific permission set
- before-save Case Flow v1
- read-only Case LWC risk panel
- smoke test checklist

Flow v1 intentionally avoids:

- customer tier logic
- stale Case logic
- notifications
- assignment changes
- manual override behavior
- custom code

The LWC intentionally avoids:

- Apex
- external AI calls
- chat input
- live agent orchestration

The LWC is the first visual foundation for the future simulated delivery-team channel experience.
