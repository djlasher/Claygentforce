# Implementation Plan: Case Escalation and Manager Visibility

## Scenario

Case Escalation and Manager Visibility

---

## Status

Draft Implementation Plan

This file bridges the scenario documentation and future Salesforce metadata work.

It should guide implementation without overbuilding before the scenario requires it.

---

## Purpose

The purpose of this implementation plan is to define the minimum Salesforce build needed to support the Scenario 001 MVP.

The plan converts requirements and architecture into a practical build sequence while preserving open questions that must be resolved before final implementation.

---

## Source Artifacts

This plan is informed by:

- `SCENARIO_BRIEF.md`
- `STAKEHOLDER_INTAKE.md`
- `ACCEPTANCE_CRITERIA.md`
- `ARCHITECTURE_DECISION.md`
- `QA_REVIEW.md`
- `SECURITY_REVIEW.md`
- `DEPLOYMENT_REVIEW.md`
- `runs/2026-05-23-agent-smoke-test001.md`
- `runs/2026-05-23-artifact-promotion-plan001.md`

---

## MVP Implementation Goal

Build a small Salesforce configuration that helps Support Managers identify and review high-risk open Cases.

The MVP should:

- identify high-risk Cases using simple criteria
- expose high-risk status on the Case
- give Support Managers one reliable place to review open high-risk Cases
- support basic reporting
- avoid complex escalation automation
- avoid custom code unless clearly justified

---

## Proposed Build Scope

### In Scope

- Case field for high-risk status
- Case field for high-risk reason
- optional Case field for manual high-risk override
- record-triggered Flow to evaluate high-risk criteria
- Support Manager list view for open high-risk Cases
- basic report or report-ready field structure
- permission review for manager visibility
- package manifest updates for deploy/retrieve
- post-deployment smoke test steps

### Out of Scope

- complex SLA engine
- entitlement milestone automation
- Omni-Channel routing changes
- automatic reassignment
- AI classification
- external integrations
- full Customer Success workflow
- custom Lightning Web Component
- Apex-based classification
- managed package design

---

## Candidate Salesforce Metadata

### Case Fields

Candidate fields:

| Field | Type | Purpose | Required for MVP |
|---|---|---|---|
| `High_Risk__c` | Checkbox | Identifies whether the Case is currently high-risk | Yes |
| `High_Risk_Reason__c` | Picklist or Text | Explains why the Case is high-risk | Recommended |
| `High_Risk_Override__c` | Checkbox | Allows authorized users to manually mark a Case high-risk | Optional |
| `Last_Meaningful_Update__c` | Date/Time | Supports stale Case logic | Optional / Future |

Field names are candidates only.

Final API names should be confirmed before metadata is created.

---

## Candidate High-Risk Criteria

Initial criteria may include:

1. Account or customer tier is Strategic, Premier, or another agreed top-tier value.
2. Case severity or priority is Severe, Critical, High, or another agreed value.
3. Case has not had a meaningful update within an agreed time threshold.
4. Authorized user manually overrides the Case as high-risk.

These criteria are not final.

They must be validated against actual available Salesforce fields.

---

## Proposed Flow

### Flow Type

Record-triggered Flow on Case.

### Trigger

Run when a Case is created or updated.

### Candidate Entry Conditions

The Flow should run when fields relevant to high-risk evaluation change.

Potential fields:

- Account/customer tier source
- Case priority
- Case severity
- Case status
- owner or queue
- manual override field
- last meaningful update field

### Candidate Flow Behavior

The Flow should:

1. Check whether the Case is open.
2. Evaluate candidate high-risk criteria.
3. Set `High_Risk__c` to true if one or more criteria are met.
4. Set `High_Risk_Reason__c` when possible.
5. Set `High_Risk__c` to false when criteria are no longer met, unless manual override rules say otherwise.
6. Avoid unnecessary updates when the value has not changed.

### Flow Design Notes

The Flow should remain readable and admin-maintainable.

Avoid adding complex branching before criteria are finalized.

If criteria become complex, consider whether Custom Metadata or Apex is justified in a future version.

---

## Manager Visibility

### Candidate List View

Create a Support Manager list view for open high-risk Cases.

Candidate name:

`Open High-Risk Cases`

Candidate filters:

- `High_Risk__c = True`
- `Status != Closed`
- optional owner, queue, region, or team filters depending on the security model

Candidate columns:

- Case Number
- Subject
- Account Name
- Priority or Severity
- Status
- Owner
- Created Date
- Last Modified Date
- High Risk Reason

### Reporting

The MVP should ensure high-risk status is reportable.

A report or dashboard may be added if stable enough for the first build.

Candidate report:

`Open High-Risk Cases by Owner`

Candidate groupings:

- Owner
- Priority or Severity
- High Risk Reason
- Account tier

---

## Notification Approach

Notifications should be treated carefully.

The first release should prioritize reliable visibility over noisy alerting.

Candidate notification rule:

Notify Support Managers only when a Case becomes high-risk for a severe reason, such as:

- top-tier customer plus critical severity
- manual high-risk override
- severe Case with no meaningful update past threshold

Notification behavior is not required for the first metadata build unless the criteria and recipients are clear.

---

## Security and Permissions

Before implementation, confirm:

- which users count as Support Managers
- whether managers should see all high-risk Cases or only Cases in their support scope
- existing Case org-wide defaults
- existing role hierarchy behavior
- whether queues or teams affect visibility
- who can edit high-risk fields
- who can manually override high-risk status
- who can view reports or dashboards

Security principle:

Do not broaden Case access just to make the high-risk view work.

---

## QA Smoke Tests

Initial smoke tests should validate:

1. A top-tier customer Case becomes high-risk.
2. A critical severity Case becomes high-risk.
3. A stale Case becomes high-risk after the agreed threshold.
4. A normal Case does not become high-risk.
5. A closed high-risk Case does not appear in the open high-risk list view.
6. A Support Manager can see appropriate high-risk Cases.
7. A non-manager does not gain inappropriate access.
8. Updating unrelated Case fields does not cause unnecessary automation behavior.
9. Manual override behavior works if included.
10. Report/list view output matches expected records.

---

## Deployment Plan

### Likely Metadata

- Case custom fields
- Flow
- list view
- report, if included
- dashboard, if included
- permission set updates
- custom notification type, if included
- package manifest updates

### Deployment Sequence

1. Create fields.
2. Add field-level security.
3. Add page layout or Lightning page visibility.
4. Build Flow in inactive or sandbox-safe state.
5. Create list view/report.
6. Configure permission set access.
7. Activate Flow after validation.
8. Run post-deployment smoke tests.

### Rollback / Mitigation

If the Flow causes issues:

- deactivate Flow
- remove notification behavior
- hide high-risk fields if needed
- remove report/list view access if security issue is found

---

## Open Decisions Before Metadata Build

Before creating Salesforce metadata, decide:

- final high-risk field API names
- whether `High_Risk_Reason__c` should be Picklist or Text
- whether manual override is included in MVP
- where customer tier comes from
- whether severity already exists or must be added
- whether stale Case logic is included now or deferred
- exact manager visibility model
- whether notification is included in MVP
- whether report/dashboard is created now or later

---

## Recommended First Build Increment

Start with the smallest useful Salesforce increment:

1. Create `High_Risk__c` on Case.
2. Create `High_Risk_Reason__c` on Case.
3. Create a manager list view for open high-risk Cases.
4. Document the Flow logic before building it.
5. Build the Flow only after criteria are finalized.

This allows the project to tie into Salesforce while still preserving scenario-driven implementation discipline.

---

## Implementation Readiness

Current assessment: Almost Ready

The scenario is close to Salesforce metadata work.

The next step should be to finalize a very small metadata increment and confirm the exact fields before creating deployable Salesforce source.

---

## Guiding Principle

Build the minimum Salesforce configuration needed to make high-risk Cases visible.

Do not build the full escalation machine until the scenario proves it needs one.