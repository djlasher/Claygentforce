# QA Review: Case Escalation and Manager Visibility

## Scenario

Case Escalation and Manager Visibility

---

## Status

Draft QA Review

---

## QA Summary

The proposed MVP uses a high-risk Case indicator, likely maintained by declarative automation, and exposes open high-risk Cases to Support Managers through a list view, report, or similar visibility mechanism.

QA should validate that high-risk Cases are identified consistently, visible to the correct users, excluded when no longer relevant, and reportable without exposing data improperly.

---

## Requirements Under Test

Primary requirements:

- identify high-risk Cases
- make high-risk status visible on the Case
- provide managers one reliable place to review open high-risk Cases
- avoid unnecessary extra work for agents
- support basic reporting
- preserve appropriate user access

---

## Test Data Needs

QA should prepare test records for:

- normal open Case
- high-priority open Case
- top-tier customer Case
- severe issue type Case
- old open Case if age-based risk is used
- closed high-risk Case
- Case with missing optional data
- Case manually overridden as high-risk if manual override is included
- Case owned by or visible to different users or queues

QA should prepare users for:

- Support Agent
- Support Manager
- non-manager support user
- system administrator

---

## Happy Path Tests

## Test Case: Case Meets High-Risk Criteria

### Purpose

Validate that a Case meeting agreed high-risk criteria is identified as high-risk.

### Preconditions

- High-risk criteria are configured.
- Test user can create or update Cases.
- Case data meets one high-risk rule.

### Steps

1. Create or update a Case that meets high-risk criteria.
2. Save the Case.
3. Review the Case record.
4. Review the manager high-risk Case view or report.

### Expected Result

The Case is marked high-risk and appears in the manager-facing high-risk Case view or report.

---

## Test Case: Case Does Not Meet High-Risk Criteria

### Purpose

Validate that normal Cases are not incorrectly marked high-risk.

### Preconditions

- High-risk criteria are configured.
- Test user can create or update Cases.
- Case data does not meet high-risk rules.

### Steps

1. Create or update a normal Case.
2. Save the Case.
3. Review the Case record.
4. Review the manager high-risk Case view or report.

### Expected Result

The Case is not marked high-risk and does not appear in the open high-risk Case view or report.

---

## Test Case: Manager Reviews Open High-Risk Cases

### Purpose

Validate that a Support Manager has one reliable place to review open high-risk Cases.

### Preconditions

- At least one open high-risk Case exists.
- Support Manager has appropriate access.

### Steps

1. Log in or test as a Support Manager.
2. Open the agreed list view, report, or dashboard.
3. Confirm open high-risk Cases are visible.

### Expected Result

The manager can see open high-risk Cases they are allowed to access.

---

## Negative and Edge Case Tests

## Test Case: Closed High-Risk Case Excluded from Open View

### Purpose

Validate that closed high-risk Cases do not clutter the open high-risk manager view.

### Steps

1. Create or identify a high-risk Case.
2. Close the Case.
3. Open the manager high-risk Case view or report.

### Expected Result

The closed Case does not appear in the open high-risk work view.

---

## Test Case: Missing Data Does Not Cause Unexpected Behavior

### Purpose

Validate that incomplete Case data does not break automation or incorrectly mark Cases high-risk.

### Steps

1. Create or update a Case with missing optional fields used near the criteria.
2. Save the Case.
3. Review high-risk status and automation behavior.

### Expected Result

The Case saves successfully. High-risk status follows defined criteria. No automation error occurs.

---

## Test Case: Criteria No Longer Applies

### Purpose

Validate that a Case can stop being high-risk if criteria no longer apply, if the design supports recalculation.

### Steps

1. Create or update a Case so it meets high-risk criteria.
2. Confirm it is high-risk.
3. Update the Case so it no longer meets criteria.
4. Save the Case.
5. Review high-risk status and manager view.

### Expected Result

The Case behavior matches the architecture decision. If recalculation is in scope, the Case is no longer high-risk. If not, the retained high-risk status is documented and understood.

---

## Permission Tests

## Test Case: Manager Access

### Purpose

Validate that Support Managers can see the high-risk indicator and manager visibility tool.

### Expected Result

Support Managers can access the high-risk field, list view, report, or dashboard as designed.

---

## Test Case: Non-Manager Access

### Purpose

Validate that non-manager users do not receive unintended visibility.

### Expected Result

Non-manager users only see records and fields allowed by their permissions and sharing model.

---

## Regression Tests

QA should check:

- existing Case creation still works
- existing Case updates still work
- existing Case priority behavior is not broken
- existing Case list views still work
- existing Case reports still work
- existing Case automation does not conflict with the new Flow
- no unexpected validation errors are introduced

---

## UAT Scenarios

Support Manager UAT should confirm:

- high-risk Cases are easy to find
- the list view or report is understandable
- the high-risk indicator is clear
- the process does not require managers to search through all Cases
- the solution feels useful for the first release

Support Agent UAT should confirm:

- normal Case work is not slowed down
- any required input is understandable
- the process does not add unnecessary clicks

---

## QA Risks

Known QA risks:

- high-risk criteria may still be ambiguous
- test data may not reflect real Case patterns
- manager visibility may depend on existing sharing rules
- reporting expectations may grow beyond MVP
- Flow behavior may differ if existing Case automation is complex

---

## QA Readiness

Current assessment: Ready with Risks

The scenario is ready for QA planning, but implementation should not be considered test-ready until high-risk criteria, manager access, and recalculation behavior are finalized.

---

## Guiding Principle

QA should prove that the first release reliably makes risky work visible without breaking normal Case handling.