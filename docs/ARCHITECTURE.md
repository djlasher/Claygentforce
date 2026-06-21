# Architecture

Claygentforce is a Salesforce DX project and delivery-room simulation prototype.

The architecture is intentionally incremental:

1. build real Salesforce metadata in small scenario-driven slices
2. simulate delivery-team intelligence with deterministic local orchestration
3. later replace selected local tasks with Agentforce/Data Cloud/server-backed role agents

---

## Current Architecture Summary

Current Scenario 001 launcher architecture:

```text
learner run state
  -> deliveryRoomOrchestrator.js
  -> deliveryRoomPlan.js
  -> deliveryRoomAdapter.js
  -> deliveryRoomAgents.js
  -> normalized task outputs
  -> run model
  -> scenarioLauncher LWC renderer
```

The LWC renderer should stay focused on displaying the run model and handling local click events. The orchestration modules own run-state interpretation, task planning, local role-agent routing, and normalized outputs.

---

## Key Source Areas

| Area | Purpose |
|---|---|
| `force-app/main/default/` | Deployable Salesforce metadata. |
| `force-app/main/default/lwc/scenarioLauncher/` | Chat-first Scenario 001 Delivery Room launcher and local orchestration modules. |
| `force-app/main/default/lwc/scenario001CaseRiskPanel/` | Read-only Case record risk review panel for Scenario 001. |
| `manifest/scenario-001-package.xml` | Full Scenario 001 metadata manifest. Use only for full scenario validation/deployment. |
| `manifest/scenario-launcher-package.xml` | Launcher-only manifest for normal LWC/orchestration iterations. |
| `scenarios/` | Scenario artifacts, templates, smoke tests, and run logs. |
| `docs/` | Project memory: vision, architecture, roadmap, devlog, issues, AI workflow guidance, and ADRs. |
| `prompts/` | Reusable role prompts for manual or AI-assisted simulation work. |

---

## Scenario 001 Salesforce Architecture

Scenario 001 is **Case Escalation and Manager Visibility**.

The real Salesforce implementation includes:

- Case high-risk fields
- before-save Case Flow
- Case layout section
- Open High-Risk Cases list view
- scenario-specific permission set
- read-only Case risk panel LWC
- Claygentforce app/home tab/launcher page
- chat-first Scenario 001 launcher LWC

The Case Flow owns real record evaluation. The launcher owns local learner simulation. The two surfaces should remain clearly separated unless a future scenario intentionally connects them.

---

## Current Local Orchestration Modules

| File | Responsibility |
|---|---|
| `scenarioLauncher.js` | LWC controller/renderer bridge. Stores local run state and exposes run-model getters. |
| `scenarioLauncher.html` | Chat-first learner surface and compact summary panels. |
| `scenarioLauncher.css` | Scoped launcher styling. |
| `scenarioCatalog.js` | Static Scenario 001 content, choices, follow-up actions, role pushback, decision quality data, and closeout copy. |
| `deliveryRoomOrchestrator.js` | Converts run state and catalog data into the derived run model. |
| `deliveryRoomPlan.js` | Builds deterministic role-agent task plans by run stage. |
| `deliveryRoomAdapter.js` | Executes local task plans and creates the future replacement seam for Agentforce/Data Cloud/server-backed task execution. |
| `deliveryRoomAgents.js` | Routes deterministic local role-agent tasks through a local role-agent registry. |

Current local run state includes:

- `selectedChoiceId`
- `selectedFollowUpActionId`
- `selectedChallengeResponseId`

Supporting context expansion is UI-only state and should remain separate from the learner run state.

---

## Architecture Boundaries

The current launcher intentionally avoids:

- Apex
- persistence
- external AI calls
- live Agentforce invocation
- Data Cloud integration
- freeform chat input
- navigation
- timers or async streaming
- scoring
- randomization

These are future capabilities, not current MVP defaults.

---

## Documentation Architecture

The docs folder should stay lean and role-specific:

| File | Purpose |
|---|---|
| `docs/PROJECT_VISION.md` | Product direction and current status. |
| `docs/ARCHITECTURE.md` | Current system and repository architecture. |
| `docs/AGENT_ROLES.md` | Delivery role model and local role-agent responsibilities. |
| `docs/DELIVERY_SIMULATION_LOOP.md` | Core delivery learning loop and run modes. |
| `docs/ROADMAP.md` | Active priorities and future direction. |
| `docs/DEVLOG.md` | Milestone-oriented development history. |
| `docs/ISSUES_LOG.md` | Meaningful setup/tooling/deployment issues and lessons. |
| `docs/AI_SESSION_STARTER.md` | ChatGPT rehydration and current project state. |
| `docs/AI_COMMANDS_AND_WORKFLOWS.md` | Codex/implementation workflow guidance. |
| `docs/adr/` | Architecture decision records. |

Avoid adding new documentation files unless the new file has a clearly distinct job.

---

## Future Architecture Direction

The current local adapter is the planned replacement seam.

Later versions may replace selected local role-agent tasks with:

- Agentforce actions for bounded role guidance
- Data Cloud context for customer/account risk enrichment
- Apex-backed persistence for saved learner runs
- server-side evaluation or reflection logic
- CI validation and deployment automation

Do not wire dynamic agents into the UI until the deterministic local task model is stable and easy to reason about.

---

## Guiding Principle

Architecture should serve the learning loop.

Every technical decision should answer:

> Does this make Salesforce delivery judgment easier to practice, inspect, and improve?

If the answer is no, defer it.
