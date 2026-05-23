# Security Review: Case Escalation and Manager Visibility

## Scenario

Case Escalation and Manager Visibility

---

## Status

Draft Security Review

---

## Security Summary

The MVP introduces or uses a high-risk Case indicator and makes high-risk open Cases visible to Support Managers.

The primary security concern is ensuring that visibility improvements do not expose Case records, customer information, sensitive fields, reports, or dashboards to users who should not have access.

Security review should focus on least-privilege access, field-level security, record visibility, reporting exposure, and any automation context concerns.

---

## Data Involved

Potential data involved:

- Case records
- Case Priority
- Case Status
- Case Owner
- Account or customer tier
- Product or issue type
- high-risk indicator field
- manual override field if included
- Case age or created date
- manager-facing list view
- manager-facing report or dashboard

Potential sensitive data:

- customer names
- account tier or strategic customer status
- issue details
- internal escalation notes
- support comments
- product issue categories
- any customer-specific risk indicator

---

## Intended Access

Support Agents should be able to:

- create and update Cases they are assigned to or allowed to access
- view high-risk status if it helps their work
- update manual high-risk inputs only if required by the process

Support Managers should be able to:

- view open high-risk Cases they are responsible for
- access the manager-facing list view, report, or dashboard
- review high-risk status and relevant Case details

Non-manager support users should not automatically receive broader access to Cases only because a high-risk view or report exists.

System Administrators may have broader access as part of administration and support.

---

## Key Security Questions

Before implementation, answer:

- Who should see the high-risk field?
- Who should edit any manual override field?
- Do Support Managers already have access to all Cases they need to review?
- Should managers see all high-risk Cases or only Cases in their team, queue, region, or business unit?
- Does the list view or report expose Cases beyond normal sharing?
- Are report folders secured correctly?
- Are dashboards running as a user with broader access than intended?
- Does the Flow update fields in a way that bypasses normal user expectations?
- Are sensitive fields displayed in the manager view or report?
- Are notifications included, and if so, do they expose sensitive data?

---

## Object Access Review

The solution should not require broad new Case object access unless business ownership requires it.

Review:

- Case read access for Support Managers
- Case edit access for Support Agents
- Case edit access for Support Managers if they must take action
- whether delete access is unnecessary
- whether access is granted by permission set rather than broad profile changes

Recommended approach:

- use permission sets for new access where possible
- avoid broad profile changes
- avoid granting delete unless explicitly justified

---

## Field-Level Security Review

Review FLS for:

- High_Risk__c
- manual override field if used
- customer tier field if surfaced
- product severity field if surfaced
- any internal notes or sensitive fields shown in reports or pages

Recommended approach:

- Support Managers can read the high-risk indicator
- Support Agents can read the high-risk indicator if useful
- edit access should be limited if the field is system-calculated
- manual override edit access should be limited to approved roles
- sensitive fields should not be added to reports or list views unless necessary

---

## Record Access and Sharing Review

Manager visibility must respect the intended sharing model.

Review:

- org-wide defaults for Case
- queue ownership
- role hierarchy behavior
- sharing rules
- team-based access
- whether managers need cross-team visibility
- whether high-risk status should change visibility or only make already-visible Cases easier to find

Recommended MVP assumption:

The high-risk indicator should not itself grant record access.

The list view or report should surface high-risk Cases the manager already has permission to see.

If managers need broader access, that should be treated as a separate sharing decision.

---

## Reporting and Dashboard Review

Reports and dashboards can accidentally expose more than intended.

Review:

- report folder access
- dashboard running user
- report filters
- exported data risk
- whether non-managers can access the report
- whether sensitive fields are included
- whether report visibility matches record sharing expectations

Recommended approach:

- place reports in a secured manager-access folder
- avoid dashboards running as a highly privileged user unless intentionally approved
- avoid including sensitive fields not needed for manager triage
- test report visibility as manager and non-manager users

---

## Automation Security Review

If Flow is used:

- confirm it only updates intended Case fields
- confirm entry criteria are specific
- confirm it does not expose sensitive data in error messages or notifications
- confirm fault paths are considered if needed
- confirm automation behavior is documented

If Apex is introduced later:

- review sharing mode
- review CRUD/FLS enforcement
- review test coverage for access-sensitive behavior
- review error handling and logging

---

## Notification Security Review

Notifications are optional or deferred for MVP.

If notifications are added:

- avoid including sensitive Case details in notification text
- confirm recipients are appropriate
- avoid over-notifying large groups
- ensure notification behavior respects the intended access model
- document whether the notification creates any visibility beyond normal record access

---

## Security Risks

Known risks:

- manager report could expose records too broadly
- dashboard running user could bypass expected visibility
- high-risk field could reveal sensitive customer tier or risk status
- manual override could be edited by too many users
- broad profile changes could over-permission users
- notifications could leak sensitive Case details
- existing Case sharing model may not match manager expectations

---

## Mitigations

Recommended mitigations:

- use permission sets instead of broad profile changes
- secure report folders
- test as Support Manager and non-manager support user
- avoid sensitive fields in list views and reports
- limit edit access to manual override fields
- keep high-risk indicator visibility intentional
- document any sharing changes separately from high-risk identification
- defer notifications until visibility design is proven

---

## Security Readiness

Current assessment: Needs Clarification

The architecture is reasonable, but security cannot fully approve implementation until manager access expectations are finalized.

Required clarifications:

- which managers need visibility
- whether managers need all high-risk Cases or only Cases in their scope
- who can edit manual override fields if included
- which reports or dashboards will be created
- whether any notification content will include Case details

---

## Guiding Principle

Improving visibility should not silently expand access.

Make high-risk Cases easier for the right managers to find without exposing customer information to the wrong users.