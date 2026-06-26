# Devlog

This file tracks development progress, project milestones, validation steps, and next actions for Claygentforce.

---

## 2026-06-21 — Local orchestration prototype milestone

### Summary

Moved the Scenario 001 launcher from a bounded local chat simulation toward a real local orchestration prototype. The launcher now has a deterministic orchestration shape: learner run state produces an orchestration plan, the plan executes through a local adapter, role-agent tasks are routed through a local role-agent registry, and normalized task outputs feed the run model rendered by the LWC.

This is still intentionally local and deterministic: no Apex, callouts, persistence, external AI, Agentforce invocation, Data Cloud integration, freeform chat input, async streaming, randomization, scoring, or new Salesforce metadata outside the existing LWC bundle were added. The architecture now has a clearer replacement seam for future Agentforce/Data Cloud-backed task execution.

### Files Updated

- force-app/main/default/lwc/scenarioLauncher/*
- manifest/scenario-launcher-package.xml
- docs/PROJECT_VISION.md
- docs/ARCHITECTURE.md
- docs/AGENT_ROLES.md
- docs/DELIVERY_SIMULATION_LOOP.md
- docs/ROADMAP.md
- docs/ISSUES_LOG.md
- docs/DEVLOG.md
- docs/AI_SESSION_STARTER.md
- docs/AI_COMMANDS_AND_WORKFLOWS.md
- README.md

### Notes

- Added a visible top-level `Reset run` control that remains available after run completion.
- Trimmed the expanded supporting context so it stays secondary to the chat-first run instead of acting like a second dashboard.
- Added non-scored Decision Quality Signals for selected follow-up actions so the run can distinguish coverage, evidence gaps, reviewer lens, and future evaluation direction without right/wrong labels or scoring.
- Added a compact completed-run closeout summary that appears only after the learner selects a challenge response.
- Introduced `deliveryRoomOrchestrator.js` so Scenario 001 run state is converted into a derived run model outside the LWC renderer/controller.
- Added `deliveryRoomAgents.js` so local role-agent tasks are routed through deterministic role-agent handlers instead of being assembled directly by the component.
- Fixed a Team Challenge rendering issue where `challengeResponses` leaked into the role pushback message and caused duplicate raw/default challenge response buttons.
- Converted the former `Simulation note` into a local `Delivery Coordinator` role-agent task.
- Added `deliveryRoomPlan.js` so the orchestrator builds explicit deterministic task plans by stage.
- Added `deliveryRoomAdapter.js` as the local execution seam for future Agentforce/Data Cloud/server-backed task execution.
- Added `manifest/scenario-launcher-package.xml` so launcher-only work can validate and deploy without redeploying the Scenario 001 Flow.
- Cleaned up duplicated/stale documentation by condensing core docs and removing outdated runbook, run-mode, app setup, launcher design, template strategy, and AI workflow note files.

### Validation Notes

- Launcher work should now use `manifest/scenario-launcher-package.xml` for LWC-only validation and deployment.
- The previous full-manifest validation path hit the org Flow version limit for `Scenario001_Case_High_Risk_Flagging`; that issue is documented in `docs/ISSUES_LOG.md`.
- The launcher was visually reviewed during the session, including the duplicate challenge response button fix and the Delivery Coordinator message.
- Full Scenario 001 manual end-to-end smoke testing remains deferred and should still use `SMOKE_TEST_CHECKLIST.md` when time allows.

### Next Actions

- Continue evolving the local orchestration path from static role-agent outputs toward replaceable task adapters.
- Keep future work focused on forward motion toward real orchestration rather than adding more explanatory panels.
- Do not use the full Scenario 001 manifest for launcher-only iterations.
- When Flow work is needed again, clean up old Flow versions in the org before validating or deploying Flow metadata.
- Later, evaluate where Agentforce and Data Cloud should replace or enrich local role-agent tasks once the deterministic local orchestration shape is stable.

---

## 2026-06-14 — Scenario 001 bounded Delivery Room run milestone

### Summary

Advanced the `scenarioLauncher` from a chat-first preview into a more complete bounded Scenario 001 delivery-room run. The launcher now begins with a realistic Support Manager scenario moment, asks the learner to choose an initial response, prompts for a follow-up action, surfaces a delivery-team outcome, shows neutral Team Review feedback, presents constructive Team Challenge pushback, lets the learner respond to that challenge in the main chat flow, and closes with a compact Session Result and Manual Validation Checklist.

The implementation remains intentionally local and bounded: no Apex, persistence, external AI calls, Agentforce integration, freeform chat input, navigation, timers, scoring, randomization, or new Salesforce metadata were added.

### Files Updated

- force-app/main/default/lwc/scenarioLauncher/*
- docs/DEVLOG.md
- docs/ROADMAP.md
- docs/AI_SESSION_STARTER.md
- docs/AI_COMMANDS_AND_WORKFLOWS.md

### Notes

- Refactored `scenarioLauncher` so the main component focuses on local state, derived getters, and event handlers while `scenarioCatalog.js` owns scenario/session content.
- Expanded learner choices beyond the initial validation set to include stakeholder tradeoff, release readiness, and regression risk.
- Added a realistic Scenario 001 moment so choices respond to delivery pressure instead of floating as abstract validation categories.
- Added a multi-step local run flow: first decision, follow-up action, role response, outcome, Team Review, Team Challenge, challenge response, and closeout.
- Moved active learner choices into the main chat flow so the Session Result summarizes the run instead of hiding the next action.
- Collapsed supporting dashboard context by default so the chat simulation remains the primary demo surface.
- Added future-friendly data scaffolding for later decision quality, pushback, missed-risk, and consequence logic without implementing scoring yet.

### Validation Notes

- LWC changes were validated through the established local lint, focused deploy validation, focused deploy, commit, and push workflow during implementation.
- The launcher was visually reviewed in the Salesforce org throughout the session.
- Full Scenario 001 manual end-to-end smoke testing remains deferred and should still use `SMOKE_TEST_CHECKLIST.md` when time allows.

### Next Actions

- Add a compact closeout/run-status treatment only if it improves clarity without creating another dashboard panel.
- Start introducing non-scored decision quality scaffolding that can later distinguish strong, incomplete, and risky learner paths.
- Keep active learner choices in the main chat flow; keep result panels as summaries only.
- Continue avoiding Apex, persistence, live Agentforce, dynamic AI, and scoring until the bounded static simulation pattern is demonstrably useful.

---

## 2026-06-08 — Chat-first Delivery Room and bounded interaction milestone

### Summary

Moved the Claygentforce launcher from a broad static dashboard toward the intended chat-style delivery simulation experience. The `scenarioLauncher` LWC now presents a compact mini simulation session for Scenario 001 with a chat-first layout, structured session context, role messages, learner choice selection, selected-choice chat flow, static follow-up guidance, phase/progress display, recommended validation evidence, and a local reset control.

The implementation remains intentionally bounded: no Apex, persistence, external AI calls, Agentforce integration, freeform chat input, navigation, or new Salesforce metadata were added.

### Files Updated

- force-app/main/default/lwc/scenarioLauncher/*
- scenarios/001-case-escalation-manager-visibility/runs/RUN-004-smoke-test-validation.md
- scenarios/README.md
- scenarios/TEMPLATE_SCENARIO/*
- docs/DEVLOG.md
- docs/ROADMAP.md
- docs/AI_SESSION_STARTER.md
- docs/AI_COMMANDS_AND_WORKFLOWS.md

### Notes

- Added `scenarioCatalog.js` to keep launcher simulation data structured outside the main component class.
- Rebalanced the launcher toward a chat-first product surface while keeping supporting dashboard context secondary.
- Added a static conversation preview, then evolved it into a bounded learner-choice interaction.
- Added local component state for selected learner focus and reset behavior.
- Added static evidence guidance by choice so the demo teaches what to validate next without claiming real org validation.
- Aligned reusable scenario templates with the Delivery Room direction without creating duplicate role runbooks.

### Validation Notes

- LWC work was validated through the established local lint/deploy workflow during implementation.
- The final mini simulation session was visually reviewed in the org and is suitable as the current demo surface.
- Full Scenario 001 manual end-to-end smoke testing remains deferred; `RUN-004-smoke-test-validation.md` captures static validation and deferred manual coverage.

### Next Actions

- Keep the final product direction chat-first: context should generally appear through agent messages or learner prompts rather than always-visible panels.
- Continue toward richer bounded interactivity before live agents, persistence, or Agentforce integration.

---

## 2026-06-02 — Scenario 001 simulation mechanics and launcher milestone

### Summary

Advanced Scenario 001 from a Case-record simulation panel into a broader static Salesforce learning surface. The work added stakeholder pressure, learner branching, consequence previews, learner challenge prompts, a reusable preview-section child component, smoke-test hardening, validation run capture, and a source-controlled Claygentforce app with a launcher page.

The implementation remains intentionally read-only and static: no Apex, persistence, scoring, chat input, external AI calls, Agentforce, or orchestration were added.
