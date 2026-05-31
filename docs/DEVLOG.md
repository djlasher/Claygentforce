# Devlog

This file tracks development progress, project milestones, validation steps, and next actions for Claygentforce.

---

## 2026-05-31 — Scenario 001 Flow v3 and simulation refinement

### Summary

Expanded Scenario 001 from a basic escalation proof-of-concept into a more structured delivery simulation slice with clearer escalation precedence, state-driven UI behavior, grouped delivery review messaging, and consequence-oriented learner framing.

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
- docs/DEVLOG.md

### Flow v3 escalation behavior

Scenario 001 now supports escalation precedence logic instead of simple priority-only flagging.

Current Flow v3 precedence:

1. Closed Case handling
2. Manual override precedence
3. Strategic customer escalation
4. Priority-based escalation
5. Clean/no-match clearing behavior

Implemented behaviors:

- Closed Cases clear High Risk values.
- Manual override takes precedence over all automated escalation criteria.
- Strategic customers automatically escalate through Customer_Tier__c.
- High priority Cases still escalate automatically.
- Cases that no longer match criteria clear prior escalation values.

### Deployment notes

Salesforce Flow metadata deployments rejected both:

- `$GlobalConstant.EmptyString`
- `$GlobalConstant.Null`

inside assignment metadata used for clearing `High_Risk_Reason__c`.

The deployment was stabilized using empty `<stringValue>` assignments instead.

### LWC architecture refinement

The Scenario 001 LWC evolved from simple status rendering into a lightweight delivery simulation surface.

Added centralized constants for:

- scenario states
- flow signals
- guidance groups

Current scenario states:

- Closed Case
- Manual Override
- Strategic Risk
- Priority-Based High Risk
- Not Flagged

Current signal states:

- Closed visibility only
- Override precedence
- Customer tier criteria
- Priority criteria
- No active match

### Delivery Team Channel enhancement

The Delivery Team Channel was refactored into grouped delivery-review sections.

Added grouped review stages:

- Initial Review
- Automation Impact
- QA Watch
- Next Decision

Guidance is now intentionally grouped and ordered to better simulate real Salesforce delivery conversations across roles.

The implementation intentionally remains:

- metadata-driven
- lightweight
- static
- read-only

No Apex, persistence, orchestration, or AI generation has been added.

### Outcome and Risk framing

Added a lightweight `Outcome and Risk` panel driven from centralized scenario states.

The panel introduces consequence-oriented learning behavior without requiring dynamic simulation infrastructure.

Example concepts now represented:

- escalation signal quality degradation from excessive manual overrides
- strategic customer escalation volume growth
- closed-case visibility tradeoffs
- risk of overly narrow escalation criteria

### Validation Notes

- `npm run lint` completed successfully after each major LWC refactor.
- Flow v3 deployed successfully after Flow metadata clearing assignments were corrected.
- Strategic customer escalation behavior is now deployable and source-controlled.
- Grouped delivery timeline rendering was visually validated in the Salesforce UI.
- Outcome and Risk rendering was visually validated in the Salesforce UI.

### Current Architectural Direction

Scenario 001 is now functioning simultaneously as:

- a real Salesforce metadata implementation
- a lightweight delivery simulation
- an architecture tradeoff teaching tool
- a future TA/FDE enablement portfolio artifact

The project is intentionally evolving through small vertical slices instead of broad framework work.

### Next Actions

- Add Architecture Decision Records (ADRs) for major implementation choices.
- Introduce the first scenario run artifact under `runs/`.
- Normalize remaining state display naming consistency.
- Continue expanding Scenario 001 through small consequence-oriented increments.
- Begin preparing reusable patterns before Scenario 002 begins.

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

The LWC is intentionally simple and read-only. It is the first UI foundation for the future simulated delivery-team channel experience, not a generic chatbot.

### Notes

The first source-controlled Salesforce implementation slice is intentionally small. This keeps the project aligned with the principle of validating real delivery behavior before expanding automation.

The project now has a cleaner permissions path through a scenario-specific permission set instead of relying only on full System Administrator profile edits.

Flow v2 intentionally still avoids customer tier logic, stale Case logic, notifications, assignment changes, clearing behavior, and custom code.

The LWC intentionally avoids Apex, external AI calls, chat input, and orchestration. It provides the first visual pattern for role-style guidance inside Salesforce.

The AI support docs were also refocused: `AI_SESSION_STARTER.md` is ChatGPT project rehydration, while `AI_COMMANDS_AND_WORKFLOWS.md` is Codex/task-execution guidance.

### Next Actions

- Execute the Scenario 001 smoke test checklist against the dev org and record any final findings.
- Decide whether Flow v2 should eventually clear high-risk values when a Case no longer meets criteria, or defer that until requirements are clearer.
- Decide whether the next Scenario 001 increment should add customer tier logic, stale Case logic, or richer static channel guidance.
- Keep the LWC read-only and avoid Apex/external AI calls until the static UI pattern is proven.

---

## 2026-05-29 — Documentation cleanup and alignment pass

### Summary

Performed a repository-wide documentation cleanup pass before Salesforce org authentication work begins.

The goal was to reduce stale project framing, improve GitHub readability, align documentation with the current repository state, and remove confusion between the original technical-architect emphasis and the broader Salesforce delivery team simulator vision.

### Files Updated

- README.md
- docs/AI_SESSION_STARTER.md
- docs/PROJECT_VISION.md
- docs/DEVLOG.md

### Cleanup Areas

- updated project identity language to emphasize full delivery team simulation
- corrected outdated roadmap and status wording
- aligned documentation with the current Scenario 001 metadata state
- added missing Scenario 001 artifacts to repository structure examples
- converted major repository structure examples to fenced text blocks for better GitHub rendering
- documented future documentation maintenance expectations

### Notes

The project now has enough foundational documentation to shift focus toward Salesforce org authentication, validation, and small scenario-driven metadata implementation.

Large-scale documentation expansion should remain secondary to validating the simulator against real Salesforce delivery workflows.

---

## 2026-05-23 — Scenario 001 planning and metadata preparation

### Summary

Prepared Scenario 001 for its first Salesforce implementation increment.

Added a focused Scenario 001 deployment manifest and documented the first planned Flow behavior before creating Flow metadata.

### Files Updated

- manifest/scenario-001-package.xml
- scenarios/001-case-escalation-manager-visibility/METADATA_BUILD_NOTES.md
- scenarios/001-case-escalation-manager-visibility/FLOW_DESIGN.md
- scenarios/README.md
- docs/DEVLOG.md

### Notes

The scenario-specific manifest initially included only the Case high-risk fields.

The recommended first Flow version remains intentionally small: evaluate Case open or closed status, evaluate Priority, set High_Risk__c, and set High_Risk_Reason__c.

Customer tier, stale Case logic, manual override, and notifications remain deferred until supporting fields and requirements are confirmed.