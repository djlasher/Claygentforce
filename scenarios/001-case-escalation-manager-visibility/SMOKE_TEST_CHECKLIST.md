# Smoke Test Checklist: Scenario 001 Case Escalation and Manager Visibility

## Purpose

Validate the current Scenario 001 MVP in a Salesforce dev org.

This checklist confirms that the Case fields, Flow v3, Open High-Risk Cases list view, permission set, Case record page, and read-only LWC simulation panel work together as one end-to-end delivery slice.

---

## Metadata Covered

- `Case.High_Risk__c`
- `Case.High_Risk_Reason__c`
- `Case.High_Risk_Override__c`
- `Case.Customer_Tier__c`
- `Scenario001_Case_High_Risk_Flagging`
- `Open High-Risk Cases`
- `Case-Case Layout`
- `Case_Record_Page`
- `Claygentforce Support Manager`
- `scenario001CaseRiskPanel`
- `scenarioPreviewSection`
- `scenarioLauncher`

---

## Preconditions

1. Deploy the Scenario 001 manifest successfully.
2. Confirm the manifest includes both Lightning Web Components:
   - `scenario001CaseRiskPanel`
   - `scenarioPreviewSection`
   - `scenarioLauncher`
3. Confirm the Scenario 001 panel is visible on the Case Lightning Record Page.
4. Confirm the testing user has access through either System Administrator permissions or the `Claygentforce Support Manager` permission set.
5. For new Cases in this checklist, set `Case Origin` to `Phone`.

---

## Test Case 1: Closed Case Clears Active Escalation

### Steps

1. Open or create a Case that is currently high risk.
2. Set `Status` to `Closed`.
3. Save the Case.
4. Open the `Open High-Risk Cases` list view.
5. Open the Case record page and review the LWC.

### Expected Flow Result

- `High Risk` is not checked.
- `High Risk Reason` is blank.
- The Case does not appear in the `Open High-Risk Cases` list view.

### Expected LWC State

- Scenario State is `Closed Case`.
- Flow signal is `Closed visibility only`.
- Delivery Team Channel shows closed-case guidance.
- Scenario Summary, Escalation Metrics, Stakeholder Change Pressure, Learner Branch Preview, Consequence Preview, Learner Challenge Mode, Outcome and Risk, Simulation Decision Paths, Learning Checkpoint, and Learner Progression all render.
- `scenarioPreviewSection` renders the preview-card sections through the parent panel.

---

## Test Case 2: Manual Override Takes Precedence

### Steps

1. Create a Case with `Status = New`.
2. Set `Priority` to `Medium` or `Low`.
3. Confirm `Customer Tier` is not `Strategic`.
4. Select `High Risk Override`.
5. Save the Case.
6. Open the `Open High-Risk Cases` list view.
7. Open the Case record page and review the LWC.

### Expected Flow Result

- `High Risk` is checked.
- `High Risk Reason` is `Manual Review`.
- The Case appears in the `Open High-Risk Cases` list view.

### Expected LWC State

- Scenario State is `Manual Override`.
- `High Risk Override` is `Enabled`.
- Flow signal is `Override precedence`.
- Delivery Team Channel shows manual override guidance.
- Stakeholder Change Pressure describes override governance tension.
- Learner Branch Preview, Consequence Preview, and Learner Challenge Mode show manual override content.

---

## Test Case 3: Strategic Customer Risk Escalates Before Stale Or Priority Criteria

### Steps

1. Create a Case with `Status = New`.
2. Set `Priority` to `Medium`.
3. Set `Customer Tier` to `Strategic`.
4. Leave `High Risk Override` unselected.
5. Save the Case.
6. Open the `Open High-Risk Cases` list view.
7. Open the Case record page and review the LWC.

### Expected Flow Result

- `High Risk` is checked.
- `High Risk Reason` is `Strategic Customer`.
- The Case appears in the `Open High-Risk Cases` list view.

### Expected LWC State

- Scenario State is `Strategic Customer Risk`.
- Customer Tier is `Strategic`.
- Flow signal is `Customer tier criteria`.
- Delivery Team Channel includes Strategic customer guidance.
- Stakeholder Change Pressure describes strategic visibility versus escalation volume.
- Learner Branch Preview, Consequence Preview, and Learner Challenge Mode show Strategic customer content.

---

## Test Case 4: Stale Escalation Flags Aging Open Work

### Steps

1. Create or identify an open Case with `Priority = Medium` or `High`.
2. Confirm `Customer Tier` is not `Strategic`.
3. Leave `High Risk Override` unselected.
4. Ensure `LastModifiedDate` is older than 5 days.
5. Save or update the Case so Flow v3 evaluates the record.
6. Open the `Open High-Risk Cases` list view.
7. Open the Case record page and review the LWC.

### Expected Flow Result

- `High Risk` is checked.
- `High Risk Reason` is `Stale Escalation`.
- The Case appears in the `Open High-Risk Cases` list view.

### Expected LWC State

- Scenario State is `Stale Escalation`.
- Flow signal is `Stale escalation criteria`.
- Delivery Team Channel shows stale-case handling guidance.
- Escalation Metrics shows Queue Aging Watch as active.
- Stakeholder Change Pressure describes aging visibility versus noisy stale criteria.
- Learner Branch Preview, Consequence Preview, and Learner Challenge Mode show stale escalation content.

---

## Test Case 5: Priority-Based High Risk Flags High Priority Open Case

### Steps

1. Create a Case with `Status = New`.
2. Set `Priority` to `High`.
3. Confirm `Customer Tier` is not `Strategic`.
4. Leave `High Risk Override` unselected.
5. Save the Case.
6. Open the `Open High-Risk Cases` list view.
7. Open the Case record page and review the LWC.

### Expected Flow Result

- `High Risk` is checked.
- `High Risk Reason` is `Critical Severity`.
- The Case appears in the `Open High-Risk Cases` list view.

### Expected LWC State

- Scenario State is `Priority-Based High Risk`.
- Flow signal is `Priority criteria`.
- Delivery Team Channel shows priority-risk guidance.
- Stakeholder Change Pressure describes simple urgent-case visibility versus limited criteria depth.
- Learner Branch Preview, Consequence Preview, and Learner Challenge Mode show priority-risk content.

---

## Test Case 6: Not Flagged Clean Path Clears Prior Values

### Steps

1. Create or open an open Case.
2. Set `Priority` to `Low`.
3. Confirm `Customer Tier` is not `Strategic`.
4. Clear `High Risk Override`.
5. Save the Case.
6. Open the `Open High-Risk Cases` list view.
7. Open the Case record page and review the LWC.

### Expected Flow Result

- `High Risk` is not checked.
- `High Risk Reason` is blank.
- The Case does not appear in the `Open High-Risk Cases` list view.

### Expected LWC State

- Scenario State is `Not Flagged`.
- Flow signal is `No active match`.
- Delivery Team Channel shows clean-path guidance.
- Stakeholder Change Pressure explains criteria boundaries.
- Learner Branch Preview, Consequence Preview, and Learner Challenge Mode show clean-path content.

---

## Test Case 7: Clearing Behavior When Criteria Stop Matching

### Steps

1. Start with a Case that is currently high risk through manual override, Strategic customer, stale escalation, or High priority.
2. Change the Case so no criteria match:
   - `Status` is open.
   - `Priority` is `Low`.
   - `Customer Tier` is not `Strategic`.
   - `High Risk Override` is not selected.
3. Save the Case.
4. Open the `Open High-Risk Cases` list view.
5. Review the LWC.

### Expected Result

- Flow v3 clears `High Risk`.
- Flow v3 clears `High Risk Reason`.
- The Case is removed from `Open High-Risk Cases`.
- The LWC changes to `Not Flagged` with `No active match`.

---

## Test Case 8: LWC Record Page Rendering And Child Preview Sections

### Steps

1. Open any Case record page with the Scenario 001 panel.
2. Confirm the `Scenario 001 Risk Review` panel loads without visible error.
3. Confirm the raw Case summary fields render:
   - Scenario State
   - High Risk
   - High Risk Override
   - High Risk Reason
   - Customer Tier
   - Priority
   - Status
4. Confirm the lower simulation stack renders.

### Expected Result

- Scenario Mode renders as static/read-only.
- Scenario Summary renders.
- Scenario Signals renders.
- Escalation Metrics renders.
- Delivery Team Channel renders grouped role guidance.
- Stakeholder Change Pressure renders.
- Learner Branch Preview renders through `scenarioPreviewSection`.
- Consequence Preview renders through `scenarioPreviewSection`.
- Learner Challenge Mode renders through `scenarioPreviewSection`.
- Outcome and Risk renders.
- Simulation Decision Paths renders.
- Learning Checkpoint renders.
- Learner Progression renders.
- No buttons, chat input, persistence prompts, or external AI behavior are present.

---

## Test Case 9: Permission Set Supports Scenario Access

### Steps

1. Assign `Claygentforce Support Manager` to a test user.
2. Log in or test as that user.
3. Open a Case.
4. Review the Scenario 001 fields, list view, and LWC.

### Expected Result

- The user can access Cases according to normal Case sharing.
- The user can see the Case tab.
- The user can access Scenario 001 fields needed for the panel and list view.
- The user can access the `Open High-Risk Cases` list view.
- The permission set does not grant broad administrative access.

---

## Test Case 10: Scenario Launcher Renders On App Or Home Page

### Steps

1. Add `scenarioLauncher` to a Lightning App Page or Home Page.
2. Open the page.
3. Review the launcher content.

### Expected Result

- The component renders with the title `Claygentforce Scenario Launcher`.
- The guiding principles render:
  - Real Salesforce implementation first
  - Simulated delivery-team intelligence second
  - Live agents third
- The Scenario 001 card renders with `Implemented MVP` status.
- The Scenario 002 placeholder card renders with `Planned` status.
- The static/read-only note renders.
- No buttons, navigation behavior, Apex behavior, persistence, orchestration, external AI behavior, or chat input are present.

---

## Regression Watch

- Flow v3 precedence should remain:
  1. Closed Case clears active escalation.
  2. Manual Override sets `Manual Review`.
  3. Strategic Customer sets `Strategic Customer`.
  4. Stale Escalation sets `Stale Escalation`.
  5. High Priority sets `Critical Severity`.
  6. Clean path clears high-risk values.
- `Case Origin = Phone` should remain part of manual test setup for new Cases.
- Closed Cases should not remain in active manager visibility.
- `Open High-Risk Cases` should include only open high-risk Cases.
- The LWC should remain read-only and static.
- `scenarioPreviewSection` should keep rendering only through the parent `scenario001CaseRiskPanel`.
- `scenarioLauncher` should remain a static, read-only orientation surface.
- Future LWC sections should not add buttons, click handlers, persistence, Apex, orchestration, external AI calls, or chat input unless explicitly planned.

---

## Pass / Fail Notes

Use this section during manual testing.

| Test                                              | Pass/Fail | Notes |
| ------------------------------------------------- | --------- | ----- |
| Closed Case Clears Active Escalation              |           |       |
| Manual Override Takes Precedence                  |           |       |
| Strategic Customer Risk Escalates                 |           |       |
| Stale Escalation Flags Aging Work                 |           |       |
| Priority-Based High Risk Flags High Priority Case |           |       |
| Not Flagged Clean Path Clears Prior Values        |           |       |
| Clearing Behavior When Criteria Stop Matching     |           |       |
| LWC Record Page And Child Preview Rendering       |           |       |
| Permission Set Supports Scenario Access           |           |       |
| Scenario Launcher Renders                         |           |       |
