# Deployment Review: Case Escalation and Manager Visibility

## Scenario

Case Escalation and Manager Visibility

---

## Status

Draft Deployment Review

---

## Deployment Summary

The MVP may introduce a high-risk Case indicator, declarative automation, manager-facing visibility tools, and access updates.

Deployment should be planned carefully because even a small Salesforce change can include dependencies across fields, Flow, page layouts, permissions, reports, and list views.

This review assumes the recommended MVP architecture: a declarative high-risk Case indicator supported by manager list view/report visibility.

---

## Potential Deployment Scope

Potential metadata in scope:

- Case custom field for high-risk indicator
- optional Case manual override field
- record-triggered Flow for high-risk evaluation
- Case page layout update
- Lightning record page update if used
- Support Manager list view
- high-risk Case report
- report folder updates
- permission set updates
- package.xml updates

Potential metadata out of scope:

- Apex classes
- Apex tests
- LWC components
- entitlement processes
- omni-channel routing
- external integrations
- managed package configuration
- complex custom metadata framework

---

## Metadata Dependency Review

Before deployment, verify dependencies.

### Case Field Dependencies

If High_Risk__c is created, confirm:

- field metadata is included
- field-level security is configured
- page layout or Lightning page visibility is configured
- reportability is confirmed
- list view or report filters reference the correct field

### Flow Dependencies

If Flow is created, confirm:

- Flow metadata is included
- Flow is activated or intentionally deployed inactive
- entry criteria are documented
- referenced fields exist in the target org
- fault behavior is understood
- existing Case automation has been reviewed

### Permission Dependencies

If permission sets are updated, confirm:

- object access is included if needed
- field access is included
- tab or app access is included only if needed
- report folder access is handled separately if required
- permission changes are least-privilege

### Report and List View Dependencies

If reports or list views are included, confirm:

- report type exists
- folder exists or is included
- filters reference deployed fields
- folder access is correct
- visibility matches the security model

---

## Pre-Deployment Checklist

Before deployment:

1. Confirm high-risk criteria are finalized.
2. Confirm manager access expectations are finalized.
3. Confirm whether Flow should deploy active or inactive.
4. Confirm all metadata dependencies are included.
5. Validate package.xml contents.
6. Confirm permission set changes are reviewed by Security.
7. Confirm QA test scenarios are ready.
8. Confirm rollback or disablement approach.
9. Confirm post-deployment validation owner.
10. Confirm stakeholder communication if users will notice the change.

---

## Suggested Validation Commands

Potential Salesforce CLI validation commands:

sf project deploy validate --manifest manifest/package.xml

sf project deploy start --manifest manifest/package.xml --dry-run

sf project deploy start --manifest manifest/package.xml

Use the appropriate command based on the actual org, CLI version, and release process.

---

## Deployment Order

Recommended order for the MVP:

1. Deploy Case fields.
2. Deploy permission set updates.
3. Deploy page layout or Lightning page changes.
4. Deploy reports, list views, or report folders.
5. Deploy Flow inactive if risk warrants it.
6. Activate Flow after validation if not deployed active.
7. Run post-deployment smoke tests.

If the target org allows full package deployment safely, these may be deployed together after validation.

---

## Post-Deployment Validation

After deployment:

1. Confirm High_Risk__c exists on Case.
2. Confirm field-level security behaves as expected.
3. Confirm the field appears where intended.
4. Create or update a Case that meets high-risk criteria.
5. Confirm the Case is marked high-risk.
6. Create or update a Case that does not meet criteria.
7. Confirm the Case is not marked high-risk.
8. Confirm Support Manager can access the list view or report.
9. Confirm non-manager access does not expand unexpectedly.
10. Confirm no Flow errors occur.
11. Confirm reports and list views filter correctly.
12. Confirm stakeholder can review the result.

---

## Rollback or Mitigation Plan

Preferred mitigation:

- deactivate the Flow if automation causes unexpected behavior
- remove or adjust list view/report access if visibility is too broad
- correct permission set access if users cannot see expected fields
- hide fields from layouts if needed while preserving metadata
- document any data cleanup if high-risk values were set incorrectly

Full rollback may be more complicated if data was updated.

If High_Risk__c values are populated incorrectly, rollback may require:

- data correction
- Flow deactivation
- criteria update
- post-fix validation

---

## Release Risks

Known risks:

- missing field-level security
- Flow deployed active with incorrect criteria
- report folder access too broad
- list view filters incorrect
- manager access expectations not finalized
- target org has existing Case automation not represented in the source org
- rollback may require data cleanup if values are set incorrectly

---

## Deployment Readiness

Current assessment: Ready with Risks

The deployment is reasonable for an MVP if metadata dependencies are confirmed and Flow activation is handled carefully.

Before deployment, the team must finalize:

- high-risk criteria
- manager access model
- Flow activation approach
- list view/report ownership
- post-deployment validation owner

---

## Guiding Principle

A small Salesforce change is still a release.

Deploy the visibility layer with clear dependencies, validation steps, and a safe disablement path.