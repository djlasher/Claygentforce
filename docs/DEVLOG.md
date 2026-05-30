# Devlog

This file tracks development progress, project milestones, validation steps, and next actions for Claygentforce.

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
7. update the focused Scenario 001 manifest to represent the full MVP slice
8. retrieve source-controlled metadata back into the repository

This moved Claygentforce from documentation-only planning into a real Salesforce org-backed implementation.

### Files Updated

- manifest/scenario-001-package.xml
- force-app/main/default/objects/Case/fields/High_Risk__c.field-meta.xml
- force-app/main/default/objects/Case/fields/High_Risk_Reason__c.field-meta.xml
- force-app/main/default/objects/Case/listViews/Open_High_Risk_Cases.listView-meta.xml
- force-app/main/default/layouts/Case-Case Layout.layout-meta.xml
- force-app/main/default/permissionsets/Claygentforce_Support_Manager.permissionset-meta.xml
- force-app/main/default/flows/Scenario001_Case_High_Risk_Flagging.flow-meta.xml
- docs/DEVLOG.md

### Validation Notes

- Salesforce CLI was installed and org authorization was completed successfully.
- Java tooling was addressed for Salesforce DX VS Code support.
- The focused Scenario 001 manifest now includes the fields, list view, layout, permission set, and Flow that make up the current MVP slice.
- The High Risk and High Risk Reason Case fields are now present in the org.
- Field-level security initially had to be granted manually to the System Administrator profile before the fields were visible/editable.
- The Open High-Risk Cases list view was created manually, shared so it could be retrieved, and added to source control.
- The Case layout now includes a dedicated Claygentforce Scenario 001 section with editable High_Risk__c and High_Risk_Reason__c fields.
- A Claygentforce Support Manager permission set was added with Case read/create/edit access, tab visibility, and field read/edit access for the two Scenario 001 high-risk fields.
- Flow v1 was added as an active before-save record-triggered Flow on Case.
- Flow v1 evaluates open High priority Cases and sets High_Risk__c to true with High_Risk_Reason__c set to Critical Severity.
- A test Case required Case Origin = Phone before save, which should be remembered for smoke testing.
- Extra Case metadata retrieved during local development was cleaned out before continuing.

### Current MVP Behavior

The current Scenario 001 MVP supports this workflow:

1. Create or edit a Case in the Salesforce UI.
2. Set Case Origin as required by the org.
3. Set Priority to High while the Case is open.
4. Save the Case.
5. Flow v1 marks the Case as High Risk and sets the High Risk Reason to Critical Severity.
6. Review the Case in the Open High-Risk Cases list view.

The list view filters to open high-risk Cases and includes High_Risk_Reason__c as a visible column.

### Notes

The first source-controlled Salesforce implementation slice is intentionally small. This keeps the project aligned with the principle of validating real delivery behavior before expanding automation.

The project now has a cleaner permissions path through a scenario-specific permission set instead of relying only on full System Administrator profile edits.

Flow v1 intentionally avoids customer tier logic, stale Case logic, notifications, assignment changes, manual override behavior, and custom code.

### Next Actions

- Run or confirm a focused validate/deploy using the updated Scenario 001 manifest.
- Add a Scenario 001 smoke test checklist for the manual and Flow-assisted MVP.
- Review whether Flow v1 should also clear high-risk values when a Case no longer meets criteria, or defer that until requirements are clearer.

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
