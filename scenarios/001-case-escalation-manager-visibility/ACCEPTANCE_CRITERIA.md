# Acceptance Criteria: Case Escalation and Manager Visibility

## Scenario

Case Escalation and Manager Visibility

---

## Status

Draft

This file represents clarified requirements after Business Analyst discovery.

The acceptance criteria are intentionally practical and MVP-focused. They should support the first version of the scenario without overbuilding a full escalation management system.

---

## Clarified Business Goal

Support managers need a reliable way to identify and review high-risk customer Cases so urgent work is not missed or handled too late.

The first release should improve visibility and consistency without adding unnecessary burden to support agents.

---

## Assumptions

- The organization already uses Salesforce Cases.
- Support agents work from open Case lists or queues.
- Support managers are responsible for monitoring urgent or risky Cases.
- Case Priority exists but may not be updated consistently.
- The first version should avoid complex SLA or entitlement automation.
- The first version should prioritize visibility before advanced notification logic.
- Admin-maintainable configuration is preferred unless custom development is clearly justified.

---

## Open Questions

These questions should be answered before implementation:

- What exact criteria define a high-risk Case?
- Which users are considered support managers?
- Should high-risk status be stored on the Case?
- Should agents be able to manually mark or unmark high-risk Cases?
- Should managers receive notifications, or is a list view/report enough for the first release?
- Should high-risk Case volume be reportable?
- Are there sensitive customer fields that affect who can see these Cases?
- What is the expected manager action after identifying a high-risk Case?

---

## Proposed MVP Scope

The first version should include:

- a clear definition of high-risk Case criteria
- a visible high-risk indicator on the Case
- a manager-facing way to review high-risk open Cases
- basic reporting or list visibility
- permission review for manager access
- QA scenarios for normal, high-risk, and edge-case Cases
- deployment review for metadata dependencies

The first version should not include:

- complex SLA engine
- omni-channel routing changes
- external integrations
- AI-based Case classification
- advanced incident management
- large custom UI
- multi-team escalation framework

---

## User Story 1: Identify High-Risk Cases

As a Support Manager,
I want Salesforce to identify Cases that meet high-risk criteria,
so that urgent customer issues are easier to find and review.

### Acceptance Criteria

1. Given a Case meets the agreed high-risk criteria, when the Case is created or updated, then the Case should be identifiable as high-risk.
2. Given a Case does not meet the agreed high-risk criteria, when the Case is created or updated, then the Case should not be marked high-risk automatically.
3. Given high-risk criteria change in the future, when the team reviews the configuration, then the criteria should be understandable and maintainable.
4. Given a Case is identified as high-risk, when a manager views the Case record, then the high-risk status should be visible.

---

## User Story 2: Manager Visibility

As a Support Manager,
I want one reliable place to view open high-risk Cases,
so that I do not need to manually search through all open Cases.

### Acceptance Criteria

1. Given a Case is open and identified as high-risk, when a Support Manager reviews the high-risk Case view or report, then the Case should appear.
2. Given a Case is closed, when a Support Manager reviews open high-risk work, then the Case should not appear in the open high-risk list.
3. Given a Support Manager has appropriate access, when they open the high-risk Case view or report, then they should only see records they are allowed to access.
4. Given no high-risk Cases exist, when a Support Manager opens the high-risk Case view or report, then the empty state should be understandable.

---

## User Story 3: Minimize Agent Burden

As a Support Agent,
I want the process to avoid unnecessary extra data entry,
so that I can continue working Cases efficiently.

### Acceptance Criteria

1. Given a high-risk Case can be identified from existing data, when the Case is created or updated, then the agent should not need to complete unnecessary extra fields.
2. Given agent input is required for a specific high-risk factor, when the agent updates the Case, then the required input should be clear and limited.
3. Given an agent is working a normal Case, when they save the Case, then the new process should not add unrelated friction.

---

## User Story 4: Reporting Foundation

As a Support Operations Manager,
I want high-risk Cases to be reportable,
so that leadership can understand volume and follow-up needs over time.

### Acceptance Criteria

1. Given a Case is identified as high-risk, when reporting is created, then the high-risk status should be available for filtering or grouping.
2. Given managers need to review high-risk volume, when they use the agreed report or dashboard, then they should be able to see open high-risk Cases.
3. Given leadership asks for future metrics, when the team reviews the first version, then the solution should not prevent future reporting enhancements.

---

## Out of Scope

The following items are intentionally out of scope for the MVP:

- entitlement milestones
- advanced SLA tracking
- omni-channel routing
- automatic reassignment
- AI classification
- external customer notifications
- integration with third-party support tools
- executive dashboard package
- historical data migration

---

## Requirements Readiness

Current assessment: Ready with Assumptions

The scenario is ready for architecture discussion if the learner accepts that the first version will use simple, maintainable high-risk criteria and manager visibility.

Before implementation, the high-risk criteria and manager access model must be finalized.

---

## Guiding Principle

The first release should make risky work visible and reviewable before trying to automate every escalation behavior.