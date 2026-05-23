# Scenario Brief: Case Escalation and Manager Visibility

## Scenario ID

001-case-escalation-manager-visibility

---

## Difficulty

Standard

This scenario includes realistic ambiguity but remains small enough for the first Claygentforce simulation.

---

## Business Context

A customer support team uses Salesforce Cases to manage customer issues.

Support agents create and update Cases throughout the day. Managers are responsible for monitoring urgent work, but the current process relies heavily on agents manually setting priority, sending messages, or verbally flagging issues.

Leadership is concerned that important customer issues are being missed or escalated too late.

The business wants Salesforce to help identify high-risk Cases and make them more visible to support managers.

---

## Initial Business Problem

The support team needs a better way to identify urgent or high-risk customer Cases and make sure managers can see them quickly.

The request is intentionally incomplete.

The learner should not jump directly into building automation. The learner should first clarify what urgent means, who needs visibility, what action managers should take, and what Salesforce behavior would actually solve the problem.

---

## Affected Personas

- Support Agent
- Support Manager
- Customer Success Manager
- Salesforce Admin
- Salesforce Developer
- QA Tester
- DevOps / Release Owner
- Security Reviewer
- Product Owner
- Client Stakeholder

---

## Salesforce Areas Involved

Potential Salesforce areas involved in this scenario:

- Case object
- Case fields
- queues
- assignment or ownership
- priority logic
- record-triggered Flow
- list views
- reports or dashboards
- notifications
- permission sets
- page layouts or Lightning pages
- validation rules
- Apex only if justified
- deployment manifest
- post-deployment validation

---

## Learner Goals

The learner should practice:

- clarifying ambiguous stakeholder requests
- identifying business outcomes before solutions
- separating visibility, prioritization, notification, and escalation needs
- evaluating declarative vs. programmatic options
- considering admin maintainability
- considering manager user experience
- identifying security and reporting implications
- defining QA scenarios and UAT expectations
- preparing deployment and validation notes
- documenting tradeoffs and decisions

---

## Expected Learning Outcomes

By the end of the scenario, the learner should be able to explain:

- what makes a Case high-risk
- who needs to see high-risk Cases
- what Salesforce mechanism provides visibility
- whether automation is needed
- whether declarative configuration is sufficient
- what permissions are required
- how QA should validate the solution
- what metadata must be deployed
- what post-deployment checks are needed
- what risks or deferred enhancements remain

---

## Scenario Boundaries

This scenario should remain intentionally small.

In scope:

- defining high-risk Case criteria
- manager visibility
- basic notification or review workflow
- reports, list views, or dashboards
- permission considerations
- simple automation if justified
- deployment readiness review

Out of scope for the first version:

- full Service Cloud implementation
- entitlement management
- milestone automation
- omni-channel routing
- complex SLA engine
- external integrations
- AI classification
- large custom application UI
- production-grade managed package design

---

## Suggested Simulation Path

Recommended sequence:

1. Client Stakeholder provides initial intake.
2. Business Analyst clarifies requirements.
3. Product Owner defines MVP scope.
4. Technical Architect compares solution options.
5. Salesforce Admin evaluates declarative configuration.
6. Salesforce Developer evaluates whether code is needed.
7. QA defines test scenarios.
8. Security Reviewer checks access and visibility.
9. DevOps reviews deployment readiness.
10. Client Stakeholder performs UAT-style feedback.
11. Learner completes retrospective.

---

## Success Criteria

The scenario is successful if the learner produces a solution path that is:

- aligned to the business problem
- clear enough to test
- maintainable by admins
- secure enough for production
- deployable with known dependencies
- understandable to stakeholders
- scoped appropriately for a first release

---

## Guiding Principle

Do not solve the stakeholder’s first sentence.

Discover the actual business problem, define a small useful release, and document the tradeoffs.