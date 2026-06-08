# RUN-004: Static Validation And Deferred Manual Smoke Test

## Purpose

Capture a time-boxed source-level validation pass for the current Scenario 001 Flow v3 and LWC simulation stack.

This is not a full manual end-to-end org smoke test, and it does not mark Scenario 001 as fully smoke-tested. The full manual validation source of truth remains `scenarios/001-case-escalation-manager-visibility/SMOKE_TEST_CHECKLIST.md`.

---

## Run Details

- Run date:
- Reviewer:
- Org alias, if checked:
- Validation mode: Static source review / lightweight command checks
- Summary result: Source validation captured; manual org smoke test deferred

---

## Source Files Reviewed

- `docs/AI_SESSION_STARTER.md`
- `docs/ROADMAP.md`
- `docs/AI_COMMANDS_AND_WORKFLOWS.md`
- `scenarios/001-case-escalation-manager-visibility/SMOKE_TEST_CHECKLIST.md`
- `manifest/scenario-001-package.xml`
- `force-app/main/default/flows/Scenario001_Case_High_Risk_Flagging.flow-meta.xml`
- `force-app/main/default/lwc/scenario001CaseRiskPanel/`
- `force-app/main/default/lwc/scenarioPreviewSection/`
- `force-app/main/default/lwc/scenarioLauncher/`

---

## Manifest Coverage Reviewed

`manifest/scenario-001-package.xml` should include the current Scenario 001 source-controlled metadata needed for static validation:

- Custom fields:
  - `Case.High_Risk__c`
  - `Case.High_Risk_Reason__c`
  - `Case.High_Risk_Override__c`
  - `Case.Customer_Tier__c`
- Flow:
  - `Scenario001_Case_High_Risk_Flagging`
- List view:
  - `Case.Open_High_Risk_Cases`
- Layout:
  - `Case-Case Layout`
- FlexiPages:
  - `Case_Record_Page`
  - `Claygentforce_Home`
- Lightning component bundles:
  - `scenario001CaseRiskPanel`
  - `scenarioPreviewSection`
  - `scenarioLauncher`
- Permission set:
  - `Claygentforce_Support_Manager`
- App metadata:
  - `Claygentforce`
  - `Claygentforce_Home` custom tab

---

## Metadata Members Expected In Scenario 001

The Scenario 001 vertical slice currently expects:

- Case high-risk fields and reason values for `Manual Review`, `Strategic Customer`, `Stale Escalation`, and `Critical Severity`
- before-save Case Flow v3 with clearing behavior
- Open High-Risk Cases manager visibility list view
- Case layout exposure for scenario fields
- Case record page panel through `scenario001CaseRiskPanel`
- reusable child preview section through `scenarioPreviewSection`
- static scenario launcher through `scenarioLauncher`
- Claygentforce app/page/tab metadata for launcher access
- support manager permission set for scenario access

---

## LWC Static UI Behavior Expected From Source

`scenario001CaseRiskPanel` is expected to remain read-only and state-driven from Case record data.

Expected static UI behavior from source:

- derives Scenario State from closed, manual override, Strategic customer, stale escalation, priority risk, or clean path
- displays raw Case risk context, Scenario Summary, Scenario Signals, Scenario Mode, and demonstration notes
- displays Escalation Metrics and grouped Delivery Team Channel guidance
- displays Stakeholder Change Pressure, Learner Branch Preview, Consequence Preview, and Learner Challenge Mode
- displays Outcome and Risk, Simulation Decision Paths, Learning Checkpoint, Learner Progression, and Scenario Progression
- uses `scenarioPreviewSection` indirectly for the repeated learner preview card sections
- does not add buttons, chat input, persistence, Apex calls, orchestration, or external AI calls

`scenarioLauncher` is expected to remain a static/read-only orientation surface for Scenario 001 and a Scenario 002 placeholder.

---

## Flow Behavior Expected From Source

`Scenario001_Case_High_Risk_Flagging` is expected to preserve Flow v3 precedence:

1. Closed Cases clear `High_Risk__c` and `High_Risk_Reason__c`.
2. Manual override sets `High_Risk__c = true` and reason `Manual Review`.
3. Strategic customer escalation sets reason `Strategic Customer`.
4. Stale escalation sets reason `Stale Escalation`.
5. Priority-based escalation sets reason `Critical Severity`.
6. Clean/no-match behavior clears prior high-risk values.

String clearing assignments should use empty `<stringValue></stringValue>` values, not `$GlobalConstant.EmptyString` or `$GlobalConstant.Null`.

---

## Checklist Coverage Mapping

This static artifact maps to the manual checklist without requiring manual Pass/Fail entry right now.

| Checklist Area                                    | Static Coverage Captured                                  | Manual Result Deferred |
| ------------------------------------------------- | --------------------------------------------------------- | ---------------------- |
| Closed Case Clears Active Escalation              | Expected Flow/LWC behavior documented from source         | Yes                    |
| Manual Override Takes Precedence                  | Expected Flow/LWC behavior documented from source         | Yes                    |
| Strategic Customer Risk Escalates                 | Expected Flow/LWC behavior documented from source         | Yes                    |
| Stale Escalation Flags Aging Work                 | Expected Flow/LWC behavior documented from source         | Yes                    |
| Priority-Based High Risk Flags High Priority Case | Expected Flow/LWC behavior documented from source         | Yes                    |
| Not Flagged Clean Path Clears Prior Values        | Expected Flow/LWC behavior documented from source         | Yes                    |
| Clearing Behavior When Criteria Stop Matching     | Expected Flow clearing behavior documented from source    | Yes                    |
| LWC Record Page And Child Preview Rendering       | Parent/child LWC expectations documented from source      | Yes                    |
| Permission Set Supports Scenario Access           | Manifest member confirmed for later org validation        | Yes                    |
| Scenario Launcher Renders                         | Launcher metadata/LWC expectations documented from source | Yes                    |

---

## Deferred Manual Smoke-Test Items

Manual org testing is intentionally deferred for this time-boxed pass.

When manual testing resumes, use `SMOKE_TEST_CHECKLIST.md` and verify:

- each Flow v3 path on real Case records
- Open High-Risk Cases list view inclusion/exclusion
- Case record page LWC rendering
- `scenarioPreviewSection` rendering through `scenario001CaseRiskPanel`
- `scenarioLauncher` rendering from the Claygentforce app/page/tab setup
- permission set access for a non-admin support manager user
- clearing behavior after criteria stop matching

For new Cases, set `Case Origin = Phone`.

---

## Risks Accepted By Deferring Manual Org Testing

- Source can look correct while org activation, page assignment, profile access, or Lightning cache behavior still needs review.
- Stale escalation depends on realistic `LastModifiedDate` setup, which is harder to prove without manual or scripted org data preparation.
- Permission set behavior cannot be fully confirmed from source alone.
- List view visibility and Case sharing behavior still require org-level validation.
- LWC rendering, child component composition, and app navigation still need visual confirmation after deployment.

---

## Recommended Next Step

Move on after this static validation artifact, then return to `SMOKE_TEST_CHECKLIST.md` for a focused manual smoke run when there is time to test the org end to end.
