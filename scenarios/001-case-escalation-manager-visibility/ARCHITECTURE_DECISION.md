# Architecture Decision: Case Escalation and Manager Visibility

## Scenario

Case Escalation and Manager Visibility

---

## Status

Draft Decision

---

## Context

Support managers need a reliable way to identify and review high-risk customer Cases.

The stakeholder initially asked Salesforce to automatically identify important Cases and make them visible quickly. After requirements clarification, the MVP should focus on making high-risk Cases visible and reportable without overbuilding a full escalation framework.

The solution should be admin-maintainable where possible and should avoid custom code unless the logic clearly requires it.

---

## Business Goal

Improve manager visibility into high-risk open Cases so urgent customer issues are not missed or handled too late.

---

## Key Assumptions

- Cases already exist and are actively used.
- Support managers already have access to appropriate Case records.
- High-risk criteria can be defined using available Case fields or simple new fields.
- The first release prioritizes visibility over advanced alerting.
- Reporting on high-risk Cases is useful for leadership.
- Complex SLA, entitlement, omni-channel, and AI classification features are out of scope.

---

## Options Considered

## Option 1: List View and Report Only

Create a high-risk Case field or use existing criteria, then provide a manager-facing list view and report.

### Pros

- simple to build
- easy for admins to maintain
- low deployment complexity
- supports manager visibility quickly
- avoids unnecessary automation
- supports reporting foundation

### Cons

- depends on data quality
- may not notify managers proactively
- may not fully solve missed updates if managers do not check the view
- criteria may need manual maintenance

### Risks

- managers may ignore the view
- agents may still fail to populate required data
- business may later expect automation that was not included

---

## Option 2: Record-Triggered Flow with High-Risk Indicator

Use Flow to evaluate high-risk criteria when a Case is created or updated. Store the result in a high-risk field and expose the field through list views, reports, and page layouts.

### Pros

- still declarative and admin-maintainable
- creates consistent high-risk identification
- supports list views and reports
- reduces reliance on agents manually flagging Cases
- can be extended later with notifications

### Cons

- Flow logic must be carefully maintained
- criteria changes require admin updates unless custom metadata is introduced
- bad entry criteria could create unexpected updates
- still requires permission and reporting setup

### Risks

- Flow could become too complex over time
- criteria may be disputed by stakeholders
- managers may expect real-time alerting even if MVP only provides visibility

---

## Option 3: Apex-Based Classification

Use Apex to evaluate high-risk criteria and update the Case or related records.

### Pros

- more control over complex logic
- easier to unit test complex branching
- better if criteria become highly dynamic or integration-dependent
- could support future expansion

### Cons

- higher development and maintenance cost
- less admin-friendly
- requires Apex tests and code deployment
- likely overbuilt for the MVP
- creates developer dependency for future criteria changes

### Risks

- unnecessary complexity
- slower first release
- business logic may become hidden from admins
- future changes require developer support

---

## Decision

Recommended MVP approach: Option 2, Record-Triggered Flow with High-Risk Indicator, supported by manager list view/report visibility.

The initial solution should be declarative unless high-risk criteria become too complex for Flow.

---

## Rationale

Option 2 best balances consistency, maintainability, visibility, and future extensibility.

A stored high-risk indicator gives managers and reports a clear way to identify risky Cases. A record-triggered Flow can reduce reliance on agents manually flagging Cases while remaining admin-maintainable for a first release.

Apex is not justified for the MVP unless later discovery reveals complex criteria, integration dependencies, or performance concerns that Flow cannot handle safely.

---

## Proposed MVP Design

Create or use a high-risk Case indicator.

Potential field:

- High_Risk__c checkbox on Case

Use a record-triggered Flow to evaluate agreed high-risk criteria.

Example criteria may include:

- Priority equals High
- Account or customer tier equals Strategic or Premier
- Case age exceeds agreed threshold
- Product or issue type indicates severe customer impact
- manual override field is selected

Expose high-risk Cases through:

- Case page layout or Lightning page
- Support Manager list view
- high-risk Cases report
- optional dashboard component

---

## Admin Considerations

The Salesforce Admin should evaluate:

- field labels and help text
- page layout placement
- Lightning page visibility
- list view filters
- report folder access
- permission set updates
- Flow naming and description
- Flow entry criteria
- whether criteria should be controlled by custom metadata in a future version

---

## Developer Considerations

The Salesforce Developer should not build Apex for the MVP unless:

- Flow logic becomes too complex
- criteria require advanced querying
- integrations are involved
- performance or recursion risks require code control
- testability concerns outweigh admin maintainability

For now, Developer review should focus on whether code is unnecessary and whether the Flow approach creates any technical risk.

---

## Security Considerations

The Security Reviewer should verify:

- which users can see the high-risk indicator
- which users can edit any manual override field
- whether managers can access the underlying Cases
- whether reports or dashboards expose Cases too broadly
- whether sensitive customer data is displayed in notifications, reports, or list views

---

## QA Considerations

QA should validate:

- Case that meets criteria is marked high-risk
- Case that does not meet criteria is not marked high-risk
- closed high-risk Case does not appear in open high-risk manager view
- manager can see appropriate high-risk Cases
- non-manager access behaves as expected
- criteria changes are understandable
- edge cases such as missing data or changed priority

---

## DevOps Considerations

Deployment may include:

- Case field metadata
- Flow metadata
- page layout or Lightning page updates
- list view metadata if included
- report metadata if included
- permission set metadata
- package.xml updates

Post-deployment validation should include:

- create or update a test Case that meets criteria
- confirm high-risk field updates
- confirm manager list view/report visibility
- confirm permission behavior
- confirm no unexpected automation errors

---

## Consequences

This decision creates a simple and realistic MVP path.

Benefits:

- supports manager visibility
- improves consistency
- remains admin-maintainable
- avoids premature Apex
- supports future reporting

Tradeoffs:

- criteria must be clearly defined
- Flow may need maintenance as business rules evolve
- notifications are deferred or optional
- full escalation lifecycle is not solved in the first release

---

## Deferred Enhancements

Potential future enhancements:

- notification to managers
- custom metadata for high-risk criteria
- dashboard for leadership
- escalation history tracking
- SLA or entitlement integration
- omni-channel routing changes
- AI-assisted classification
- incident-style response workflow for severe Cases

---

## Architecture Readiness

Current assessment: Approved with Risks

The solution is reasonable for MVP architecture if high-risk criteria and manager access are finalized before implementation.

Primary accepted risks:

- criteria ambiguity
- possible future Flow complexity
- manager adoption of list view/report workflow
- notification expectations may grow after release

---

## Guiding Principle

Use declarative automation to make high-risk Cases visible first.

Do not introduce custom code or complex escalation architecture until the business proves the first visibility layer is not enough.

---

## Candidate Output From First Smoke Test

Source:

`scenarios/001-case-escalation-manager-visibility/runs/2026-05-23-agent-smoke-test001.md`

These candidate architecture notes came from the first Agent Smoke Test run.

They are not final architecture decisions.

They should be treated as an initial option for learner review and validation.

---

## Candidate Architecture Direction

The likely MVP architecture should be declarative-first.

The first release should prioritize maintainability, visibility, and clear criteria over a complex escalation engine.

Potential components:

- Case field or fields for high-risk status and reason
- Record-triggered Flow for evaluating high-risk criteria
- Manager list view for open high-risk Cases
- Report or dashboard component for high-risk Case volume and aging
- Lightweight notification only for the highest-priority events

---

## Candidate Declarative-First Rationale

A declarative-first approach appears appropriate because:

- the scenario is MVP-focused
- the likely criteria are based on Case or related Account data
- support admins should be able to understand and maintain the logic
- manager visibility can likely be handled through list views, reports, dashboards, and permissions
- notification behavior should remain lightweight to avoid alert fatigue

---

## Candidate Apex Restraint

Apex should not be introduced for the MVP unless one or more of the following becomes true:

- high-risk criteria require complex reusable logic that is difficult to maintain in Flow
- external system data is required
- performance or transaction complexity becomes a concern
- the meaningful-update logic cannot be represented clearly in declarative automation
- a custom user interface becomes necessary

---

## Candidate Tradeoffs

Benefits of the likely MVP approach:

- faster first release
- easier admin maintenance
- lower implementation complexity
- easier stakeholder review
- easier rollback if notification behavior is too noisy

Risks:

- vague high-risk criteria could create false positives or false negatives
- broad notifications could cause alert fatigue
- unclear manager visibility requirements could create security or sharing issues
- stale Case logic may require more precise definition than the stakeholder initially provides

---

## Architecture Questions Still Open

- What exact field stores customer tier?
- Is severity already captured reliably on Case?
- What field or event represents a meaningful update?
- Should high-risk status be recalculated automatically, manually overridden, or both?
- Should notification behavior differ by high-risk reason?
- What existing Case sharing model must manager visibility respect?
- Should reporting be part of MVP or only enabled by storing high-risk status?