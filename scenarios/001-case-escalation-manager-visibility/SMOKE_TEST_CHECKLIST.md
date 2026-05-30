# Smoke Test Checklist: Scenario 001 Case Escalation and Manager Visibility

## Purpose

This checklist validates the current Scenario 001 MVP in a Salesforce dev org.

The goal is to confirm that the Case fields, Flow, list view, permission set, layout, and LWC work together as a small end-to-end Salesforce delivery slice.

---

## Metadata Covered

- `Case.High_Risk__c`
- `Case.High_Risk_Reason__c`
- `Scenario001_Case_High_Risk_Flagging`
- `Open High-Risk Cases`
- `Case-Case Layout`
- `Claygentforce Support Manager`
- `scenario001CaseRiskPanel`

---

## Preconditions

Confirm the Scenario 001 manifest has been deployed successfully.

Run:

`sf project deploy validate --manifest manifest/scenario-001-package.xml --target-org Claygentforce`

Then run:

`sf project deploy start --manifest manifest/scenario-001-package.xml --target-org Claygentforce`

Confirm the LWC has been added to the Case Lightning Record Page.

Confirm the testing user has access through either System Administrator permissions or the `Claygentforce Support Manager` permission set.

---

## Test Case 1: High Priority Open Case Is Flagged

### Steps

1. Create a new Case.
2. Set `Case Origin` to `Phone`.
3. Set `Status` to `New`.
4. Set `Priority` to `High`.
5. Save the Case.

### Expected Result

- `High Risk` is checked.
- `High Risk Reason` is `Critical Severity`.
- The Case appears in the `Open High-Risk Cases` list view.
- The LWC shows the Case as flagged for manager review.
- The LWC shows high-risk guidance from Support Manager, QA, and Security.

---

## Test Case 2: Non-High Priority Open Case Is Not Flagged

### Steps

1. Create a new Case.
2. Set `Case Origin` to `Phone`.
3. Set `Status` to `New`.
4. Set `Priority` to `Medium` or `Low`.
5. Save the Case.

### Expected Result

- `High Risk` is not checked.
- `High Risk Reason` is blank or unchanged.
- The Case does not appear in the `Open High-Risk Cases` list view.
- The LWC shows the Case is not currently flagged.
- The LWC shows guidance from Support Manager and Architect.

---

## Test Case 3: Closed Case Does Not Appear In Open High-Risk List View

### Steps

1. Create or open a high-risk Case.
2. Confirm `High Risk` is checked.
3. Change `Status` to `Closed`.
4. Save the Case.
5. Open the `Open High-Risk Cases` list view.

### Expected Result

- The closed Case does not appear in the `Open High-Risk Cases` list view.

### Current Limitation

Flow v1 does not yet clear `High Risk` or `High Risk Reason` when a Case no longer meets criteria.

This is intentional for the first automation increment and should be reviewed before adding more logic.

---

## Test Case 4: Permission Set Supports Scenario Field Access

### Steps

1. Assign `Claygentforce Support Manager` to a test user.
2. Log in or test as that user.
3. Open a Case.
4. Review the Scenario 001 fields and LWC.

### Expected Result

- The user can access Cases according to normal Case sharing.
- The user can see the Case tab.
- The user can read and edit `High Risk`.
- The user can read and edit `High Risk Reason`.
- The permission set does not grant broad administrative access.

---

## Test Case 5: LWC Loads On Case Record Page

### Steps

1. Open a Case record page.
2. Confirm the `Scenario 001 Risk Review` panel is visible.
3. Review the displayed fields and guidance messages.

### Expected Result

- The component loads without visible error.
- High Risk status is displayed.
- High Risk Reason is displayed.
- Priority is displayed.
- Status is displayed.
- Delivery Team Guidance messages are displayed.

---

## Known MVP Limitations

- Flow v1 only flags open High priority Cases.
- Flow v1 does not clear high-risk values when priority changes or the Case closes.
- Customer tier logic is not implemented.
- Stale Case logic is not implemented.
- Manual override behavior is not implemented.
- Notifications are not implemented.
- The LWC uses static role-style guidance, not live agent orchestration.
- The LWC is not yet a full simulated delivery-team channel.

---

## Pass / Fail Notes

Use this section during manual testing.

| Test                                       | Pass/Fail | Notes |
| ------------------------------------------ | --------- | ----- |
| High Priority Open Case Is Flagged         |           |       |
| Non-High Priority Open Case Is Not Flagged |           |       |
| Closed Case Excluded From List View        |           |       |
| Permission Set Supports Field Access       |           |       |
| LWC Loads On Case Record Page              |           |       |

---

## Next Review Questions

- Should Flow v1 clear high-risk values when a Case no longer meets criteria?
- Should closed Cases always clear high-risk status, or only disappear from the open manager list view?
- Should manual manager override be added before customer tier or stale Case logic?
- Should the LWC show different guidance for closed Cases?
- Should the next LWC increment visually resemble a delivery-team channel more strongly?
