# Devlog

This file tracks development progress, project milestones, validation steps, and next actions for Claygentforce.

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

- Start next session with code cleanup/refactor of `scenarioLauncher` before adding more behavior.
- Keep the final product direction chat-first: context should generally appear through agent messages or learner prompts rather than always-visible panels.
- After cleanup, continue toward richer bounded interactivity before live agents, persistence, or Agentforce integration.

---

## 2026-06-02 — Scenario 001 simulation mechanics and launcher milestone

### Summary

Advanced Scenario 001 from a Case-record simulation panel into a broader static Salesforce learning surface. The work added stakeholder pressure, learner branching, consequence previews, learner challenge prompts, a reusable preview-section child component, smoke-test hardening, validation run capture, and a source-controlled Claygentforce app with a launcher page.

The implementation remains intentionally read-only and static: no Apex, persistence, scoring, chat input, external AI calls, Agentforce, or orchestration were added.

### Files Updated

- manifest/scenario-001-package.xml
- force-app/main/default/applications/Claygentforce.app-meta.xml
- force-app/main/default/flexipages/Claygentforce_Home.flexipage-meta.xml
- force-app/main/default/tabs/Claygentforce_Home.tab-meta.xml
- force-app/main/default/lwc/scenario001CaseRiskPanel/*
- force-app/main/default/lwc/scenarioPreviewSection/*
- force-app/main/default/lwc/scenarioLauncher/*
- scenarios/001-case-escalation-manager-visibility/SMOKE_TEST_CHECKLIST.md
- scenarios/001-case-escalation-manager-visibility/runs/RUN-004-smoke-test-validation.md
- docs/SCENARIO_LAUNCHER_DESIGN.md
- docs/CLAYGENTFORCE_APP_SETUP.md
- docs/DEVLOG.md

### Notes

- Added state-driven Stakeholder Change Pressure, Learner Branch Preview, Consequence Preview, and Learner Challenge Mode sections to the Scenario 001 Case risk panel.
- Extracted repeated preview-card rendering into the non-exposed `scenarioPreviewSection` child LWC.
- Added the exposed `scenarioLauncher` LWC as a static orientation surface for Scenario 001 and future Scenario 002 readiness.
- Created the `Claygentforce` custom application, `Claygentforce Home` FlexiPage, and `Claygentforce_Home` Lightning page tab.
- Updated app navigation so the Claygentforce app includes Home, Claygentforce Home, and Cases.
- Hardened the Scenario 001 smoke test checklist for Flow v3, LWC rendering, child component rendering, launcher rendering, app/tab behavior, and regression watch items.
- Added `RUN-004-smoke-test-validation.md` as a concise manual validation capture artifact.
- Added short launcher design/setup notes to support implementation and manual app activation without creating broad documentation sprawl.

### Validation Notes

- LWC changes were linted locally during the implementation workflow.
- Deployments were performed during the session for deployable metadata updates.
- The custom app, launcher page, custom tab, and app navigation were verified in the Salesforce org after manual nav adjustment and source retrieval.
- `sf project deploy validate --manifest manifest/scenario-001-package.xml --target-org Claygentforce` succeeded after the app/tab metadata was source-controlled.

### Current State

Scenario 001 now has:

- real Salesforce metadata for Case escalation and manager visibility
- Flow v3 precedence and clearing behavior
- Case record simulation panel
- reusable preview-section child component
- static scenario launcher LWC
- Claygentforce custom app and launcher tab
- hardened smoke-test checklist
- validation run capture template

### Next Actions

- Run and fill out the smoke-test validation artifact when ready.
- Decide whether the next build increment should focus on Scenario 002 selection, launcher polish, or additional regression hardening.
- Keep future expansion vertical-slice oriented and avoid adding live agents, persistence, or scoring until the static scenario model is stable.

---

## 2026-05-31 — Scenario 001 Flow v3 and simulation refinement

### Summary

Expanded Scenario 001 from a basic escalation proof-of-concept into a richer Salesforce delivery simulation slice. The scenario now combines real Salesforce metadata with state-driven UI interpretation, operational observability, outcome/risk framing, learner reflection, progression modeling, and lightweight consequence-oriented simulation behavior.

The project direction remains intentionally focused on:

1. real Salesforce implementation first
2. static delivery simulation second
3. live agents/orchestration later

### Files Updated

- manifest/scenario-001-package.xml
- force-app/main/default/flows/Scenario001_Case_High_Risk_Flagging.flow-meta.xml
- force-app/main/default/objects/Case/fields/High_Risk_Reason__c.field-meta.xml
- force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.html
- force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.js
- force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.css
- scenarios/001-case-escalation-manager-visibility/SMOKE_TEST_CHECKLIST.md
- scenarios/001-case-escalation-manager-visibility/runs/RUN-001-manager-override.md
- scenarios/001-case-escalation-manager-visibility/runs/RUN-002-stale-escalation.md
- scenarios/001-case-escalation-manager-visibility/runs/RUN-003-strategic-customer.md
- scenarios/001-case-escalation-manager-visibility/runs/RUN-001-summary.md
- docs/adr/ADR-001-before-save-flow.md
- docs/adr/ADR-002-read-only-lwc.md
- docs/adr/ADR-003-static-simulation-first.md
- docs/AI_COMMANDS_AND_WORKFLOWS.md
- docs/ISSUES_LOG.md
- docs/DEVLOG.md

### Flow v3 escalation behavior

Scenario 001 now supports escalation precedence logic instead of simple priority-only flagging.

Current Flow v3 precedence:

1. Closed Case handling
2. Manual override precedence
3. Strategic customer escalation
4. Stale escalation
5. Priority-based escalation
6. Clean/no-match clearing behavior

Implemented behaviors:

- Closed Cases clear High Risk values.
- Manual override takes precedence over all automated escalation criteria.
- Strategic customers automatically escalate through `Customer_Tier__c`.
- Medium or High priority Cases older than the stale threshold can escalate through `Stale Escalation`.
- High priority Cases still escalate automatically.
- Cases that no longer match criteria clear prior escalation values.

### Deployment notes

Salesforce Flow metadata deployments rejected both `$GlobalConstant.EmptyString` and `$GlobalConstant.Null` inside assignment metadata used for clearing `High_Risk_Reason__c`.

The deployment was stabilized using empty `<stringValue>` assignments instead, and the issue was captured in `docs/ISSUES_LOG.md` for future Flow metadata work.

### LWC simulation surface

The Scenario 001 LWC evolved from simple status rendering into a layered delivery simulation surface.

Major additions and refinements:

- centralized scenario states, flow signals, escalation metrics, progression models, and grouped guidance structures
- grouped Delivery Team Channel sections with lightweight cross-role tension simulation
- state-driven Outcome and Risk framing
- Escalation Metrics for operational visibility and attention modeling
- Simulation Decision Paths with benefits and tradeoffs
- Learning Checkpoints tied to learner reflection prompts
- Learner Progression and Scenario Progression modeling
- compact Scenario Summary and operational context areas
- improved section hierarchy, scanability, loading states, and error handling

The implementation intentionally remains metadata-driven, lightweight, static, and read-only. No Apex, persistence, orchestration, or AI generation has been added.

### Architecture and run artifacts

Added the first lightweight architecture decision records for:

- before-save Flow
- read-only LWC
- static simulation before live agents

Added initial scenario run artifacts representing distinct escalation paths:

- manual override
- stale escalation
- strategic customer escalation

The project intentionally shifted away from over-producing documentation artifacts and back toward simulation mechanics and progression modeling.

### Validation Notes

- `npm run lint` completed successfully after each major LWC refactor.
- Flow v3 deployed successfully after Flow metadata clearing assignments were corrected.
- Strategic customer and stale escalation behavior are deployable and source-controlled.
- Progression modeling, escalation metrics, learning checkpoints, and decision-path structures were visually validated in the Salesforce UI.
- Loading and error-state handling were added for safer UI behavior.

### Current Architectural Direction

Scenario 001 is now functioning simultaneously as:

- a real Salesforce metadata implementation
- a lightweight delivery simulation
- an architecture tradeoff teaching tool
- a learner reflection surface
- a future TA/FDE enablement portfolio artifact

The project continues evolving through small vertical slices instead of broad framework work.

The current implementation intentionally avoids:

- Apex orchestration
- persistence
- external AI integration
- live agent systems
- interactive branching
- chat interfaces

Those capabilities remain future-phase concerns after the static simulation foundation stabilizes.

### Next Actions

- Continue evolving progression-oriented simulation behavior.
- Introduce lightweight learner-driven branching concepts without persistence.
- Expand scenario mechanics before investing heavily in smoke/regression testing.
- Continue refining reusable patterns before Scenario 002 begins.
- Keep implementation focused on meaningful simulation capability rather than reviewer/demo polish.

---

## 2026-05-29 — Scenario 001 Salesforce MVP foundation

### Summary

Completed the first usable Salesforce MVP slice for Scenario 001: Case Escalation and Manager Visibility.

The day started with local Salesforce tooling setup and ended with a working Case-based flow of work in the dev org:

1. authorize the Claygentforce Salesforce org
2. validate and deploy the initial Case high-risk fields
3. create a manager-facing high-risk Case list view
4. add the high-risk fields to the Case layout
5. add a scenario-specific permission set
6. build Flow v1 for simple high-risk Case flagging
7. add manual override support and Flow v2 precedence
8. add and refine the first Scenario 001 Lightning Web Component
9. add a Scenario 001 smoke test checklist
10. update the focused Scenario 001 manifest to represent the full MVP slice
11. retrieve source-controlled metadata back into the repository

This moved Claygentforce from documentation-only planning into a real Salesforce org-backed implementation with its first visible product UI.

### Files Updated

- manifest/scenario-001-package.xml
- force-app/main/default/objects/Case/fields/High_Risk__c.field-meta.xml
- force-app/main/default/objects/Case/fields/High_Risk_Reason__c.field-meta.xml
- force-app/main/default/objects/Case/fields/High_Risk_Override__c.field-meta.xml
- force-app/main/default/objects/Case/listViews/Open_High_Risk_Cases.listView-meta.xml
- force-app/main/default/layouts/Case-Case Layout.layout-meta.xml
- force-app/main/default/permissionsets/Claygentforce_Support_Manager.permissionset-meta.xml
- force-app/main/default/flows/Scenario001_Case_High_Risk_Flagging.flow-meta.xml
- force-app/main/default/flexipages/Case_Record_Page.flexipage-meta.xml
- force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.html
- force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.js
- force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.css
- force-app/main/default/lwc/scenario001CaseRiskPanel/scenario001CaseRiskPanel.js-meta.xml
- scenarios/001-case-escalation-manager-visibility/SMOKE_TEST_CHECKLIST.md
- docs/AI_SESSION_STARTER.md
- docs/AI_COMMANDS_AND_WORKFLOWS.md
- docs/ISSUES_LOG.md
- docs/DEVLOG.md

### Validation Notes

- Salesforce CLI was installed and org authorization was completed successfully.
- Java tooling was addressed for Salesforce DX VS Code support.
- Node and npm were installed/configured so local JavaScript tooling can run.
- `npm install` completed with zero reported vulnerabilities.
- `npm run lint` completed successfully after dependencies were installed.
- The focused Scenario 001 manifest now includes the fields, list view, layout, permission set, Flow, Lightning Web Component, and FlexiPage that make up the current MVP slice.
- The High Risk, High Risk Reason, and High Risk Override Case fields are now present in the org.
- Field-level security initially had to be granted manually to the System Administrator profile before the scenario-specific permission set was added.
- The Open High-Risk Cases list view was created manually, shared so it could be retrieved, and added to source control.
- The Case layout now includes a dedicated Claygentforce Scenario 001 section with editable High_Risk__c, High_Risk_Reason__c, and High_Risk_Override__c fields.
- A Claygentforce Support Manager permission set was added with Case access, tab visibility, and scenario field access.
- Flow v1 was added as an active before-save record-triggered Flow on Case.
- Flow v1 evaluated open High priority Cases and set High_Risk__c to true with High_Risk_Reason__c set to Critical Severity.
- Flow v2 added manual override precedence. Open Cases with High_Risk_Override__c set to true are marked high-risk with High_Risk_Reason__c set to Manual Review before priority-based criteria are evaluated.
- The first LWC, scenario001CaseRiskPanel, was added as a Case record page component.
- The LWC reads Case risk fields through lightning/uiRecordApi and displays Scenario 001 risk status plus a Delivery Team Channel.
- The LWC was refined with scoped CSS so the guidance area reads as a lightweight delivery-team thread with role names, focus areas, simulated review note labels, and closed Case/manual override guidance.
- A visual org test confirmed the manual override path with Priority set to Medium, High Risk Override enabled, High Risk Reason set to Manual Review, and the manual override channel messages displayed.
- A test Case required Case Origin = Phone before save, which should be remembered for smoke testing.
- Extra Case metadata retrieved during local development was cleaned out before continuing.

### Current MVP Behavior

The current Scenario 001 MVP supports this workflow:

1. Create or edit a Case in the Salesforce UI.
2. Set Case Origin as required by the org.
3. Set Priority to High while the Case is open, or enable High Risk Override.
4. Save the Case.
5. Flow v2 marks qualifying Cases as High Risk and sets the High Risk Reason to Critical Severity or Manual Review.
6. Review the Case in the Open High-Risk Cases list view.
7. Open the Case record page and view Scenario 001 risk status and delivery team channel guidance in the LWC panel.

The list view filters to open high-risk Cases and includes High_Risk_Reason__c as a visible column.

The LWC is intentionally simple and read-only at this phase. It helps the learner understand why the Case is or is not currently high risk and what different delivery roles would care about.

### Next Actions

- Continue expanding Scenario 001 only through small, deployable increments.
- Add richer Flow criteria after the initial fields, list view, layout, permission set, Flow, and LWC are stable.
- Keep a strong boundary between real Salesforce metadata work and simulated agent behavior.
- Do not add Apex, persistence, or live AI until the static learning surface has proven useful.

---