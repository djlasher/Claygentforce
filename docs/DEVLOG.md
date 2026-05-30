# Devlog

This file tracks development progress, project milestones, validation steps, and next actions for Claygentforce.

---

## 2026-05-29 — Scenario 001 org validation and manager list view

### Summary

Authenticated the first Salesforce dev org for Claygentforce and validated/deployed the initial Scenario 001 Case metadata increment.

Created the first manager visibility slice for Scenario 001: an `Open High-Risk Cases` Case list view that surfaces open Cases marked as high-risk.

### Files Updated

- force-app/main/default/objects/Case/fields/High_Risk__c.field-meta.xml
- force-app/main/default/objects/Case/fields/High_Risk_Reason__c.field-meta.xml
- force-app/main/default/objects/Case/listViews/Open_High_Risk_Cases.listView-meta.xml
- docs/DEVLOG.md

### Validation / Build Notes

- Salesforce CLI was installed and org authorization was completed successfully.
- `manifest/scenario-001-package.xml` was validated and deployed successfully.
- The `High Risk` and `High Risk Reason` Case fields are now present in the org.
- Field-level security had to be granted manually to the System Administrator profile before the fields were visible/editable.
- The list view was created manually in the org, shared so it could be retrieved as metadata, then retrieved into source.
- A test Case required `Case Origin = Phone` before save.
- The high-risk fields are not yet on the Case page layout, so test values were set from the backend.

### Notes

The retrieved list view metadata arrived cleanly and includes the expected columns and filters.

Current list view behavior:

- label: `Open High-Risk Cases`
- developer name: `Open_High_Risk_Cases`
- filter scope: `Everything`
- filters: open Cases only and `High_Risk__c = true`
- includes `High_Risk_Reason__c` as a visible column

Avoid committing full System Administrator profile metadata unless there is a specific reason. A future permission set is likely cleaner for scenario-specific field access.

### Next Actions

- Add or retrieve the list view into a focused Scenario 001 manifest if desired.
- Decide whether the next source-controlled increment should be a Case page layout update or a dedicated Scenario 001 permission set.
- Keep Flow implementation deferred until the simple manager visibility MVP is fully reviewed.

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

## 2026-05-23 — Added scenario-specific deployment manifest

### Summary

Added `manifest/scenario-001-package.xml` for focused Scenario 001 validation and deployment.

The scenario-specific manifest currently includes only the initial Case high-risk fields.

### Files Updated

- manifest/scenario-001-package.xml
- scenarios/001-case-escalation-manager-visibility/METADATA_BUILD_NOTES.md
- docs/DEVLOG.md

### Notes

No Salesforce org is authenticated yet.

First thing next session should be authenticating or connecting a Salesforce org, then validating this manifest against that org.

## 2026-05-23 — Added Flow design for first scenario

### Summary

Added `FLOW_DESIGN.md` for Scenario 001.

The Flow design documents intended record-triggered Flow behavior before Salesforce Flow metadata is created. It defines candidate Flow name, trigger timing, fields used, initial criteria, decision sequence, pseudocode, MVP recommendation, open decisions, risks, test scenarios, and build guidance.

### Files Updated

- scenarios/001-case-escalation-manager-visibility/FLOW_DESIGN.md
- scenarios/README.md
- docs/DEVLOG.md

### Notes

The recommended first Flow version is intentionally small: evaluate Case open or closed status, evaluate Priority, set `High_Risk__c`, and set `High_Risk_Reason__c`.

Customer tier, stale Case logic, manual override, and notifications remain deferred until supporting fields and requirements are confirmed.
