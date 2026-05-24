# Artifact Promotion Plan

## Date

2026-05-23

## Scenario ID

001-case-escalation-manager-visibility

## Source Run

`scenarios/001-case-escalation-manager-visibility/runs/2026-05-23-agent-smoke-test001.md`

## Purpose

This file reviews the first agent smoke test run and identifies which outputs are strong enough to promote into canonical Scenario 001 artifacts.

The smoke test produced useful candidate requirements, architecture direction, QA scenarios, security concerns, and deployment notes.

However, smoke test outputs should not be copied wholesale into scenario artifacts.

Only durable, learner-useful outputs should be promoted.

---

## Promotion Principle

Promote outputs that:

- clarify the scenario without removing useful ambiguity
- improve testability
- strengthen role-specific review
- preserve realistic Salesforce delivery judgment
- support future learner practice
- avoid pretending simulated answers are final client-approved requirements

Do not promote outputs that:

- over-finalize the scenario too early
- remove learner decision-making
- make the scenario feel solved before it starts
- represent only one possible solution path
- depend on assumptions not yet validated by a learner

---

## Candidate Promotions

### ACCEPTANCE_CRITERIA.md

Promote:

- draft MVP user story
- candidate high-risk criteria
- open questions around customer tier, severity ownership, and meaningful update definition
- note that criteria are not final until clarified during discovery

Candidate content:

As a Support Manager, I want Salesforce to identify and surface high-risk Cases so I can review urgent customer issues before they are missed or delayed.

Potential high-risk criteria may include:

1. Case is from a top-tier customer.
2. Case severity is marked severe or critical.
3. Case has had no meaningful update within an agreed time threshold.

Open questions:

- Where does customer tier come from?
- Who owns severity accuracy?
- What counts as a meaningful update?
- Should high-risk status be stored on the Case?
- Should users be able to override high-risk status?

Recommendation:

Promote as candidate discovery output, not finalized acceptance criteria.

---

### ARCHITECTURE_DECISION.md

Promote:

- declarative-first recommendation as a likely MVP path
- Flow, fields, list views, reports/dashboard, and light notification as candidate architecture components
- explicit Apex restraint
- tradeoff about maintainability vs. criteria precision

Candidate content:

The likely MVP architecture should be declarative-first.

Potential components:

- Case field or fields for high-risk status and reason
- Record-triggered Flow for evaluating high-risk criteria
- Manager list view for open high-risk Cases
- Report or dashboard component for high-risk Case volume and aging
- Lightweight notification only for the highest-priority events

Apex should not be introduced unless the criteria become too complex for Flow, require external data, or need reusable logic that cannot be maintained declaratively.

Recommendation:

Promote as a candidate architecture option, not the only valid answer.

---

### QA_REVIEW.md

Promote:

- smoke test scenarios
- requirement gap around stale Case threshold
- manager/non-manager visibility tests

Candidate test scenarios:

1. Top-tier customer Case becomes high-risk.
2. Critical severity Case becomes high-risk.
3. Stale Case becomes high-risk after threshold.
4. Normal Case does not become high-risk.
5. Closed Case does not appear in the open high-risk manager view.
6. Support Manager can access the high-risk Case view.
7. Non-manager access follows expected Case visibility and reporting permissions.

Recommendation:

Promote as initial QA candidate scenarios.

---

### SECURITY_REVIEW.md

Promote:

- manager visibility cannot mean all managers see all Cases
- avoid broadening org-wide defaults
- validate field/report/list view access
- defer Customer Success visibility unless separately scoped
- check sensitivity of high-risk reason

Candidate security concerns:

- Support Managers should only see Cases within their intended support scope.
- Case organization-wide defaults should not be broadened just to support manager visibility.
- List views, reports, dashboards, and notification recipients must respect the security model.
- High-risk reason may expose sensitive customer, product, or issue details.
- Customer Success visibility should remain deferred unless explicitly included in MVP scope.

Recommendation:

Promote as initial security review notes.

---

### DEPLOYMENT_REVIEW.md

Promote:

- likely metadata list
- sandbox validation
- Flow activation check
- permission validation
- manager-user smoke test
- rollback by deactivating Flow or notification path

Candidate deployment notes:

Likely metadata:

- Case custom field or fields
- Flow
- permission set updates
- list view
- report or dashboard artifacts if deployable and stable
- possibly custom notification type

Post-deployment validation:

- Confirm Flow activation state.
- Confirm manager permissions.
- Confirm list view/report visibility.
- Create or update sample Cases that meet each high-risk criterion.
- Confirm normal Cases are not incorrectly flagged.
- Confirm notification behavior is not too noisy.

Rollback or mitigation:

- Deactivate Flow.
- Disable notification path.
- Remove list view/report visibility if security issue is discovered.

Recommendation:

Promote as candidate deployment review notes.

---

## Do Not Promote Yet

Do not promote these as final decisions yet:

- exact high-risk thresholds
- exact notification recipients
- exact stale Case time limit
- exact customer tier source
- final field names
- final Flow design
- final sharing model
- final report/dashboard structure

These should remain learner discovery and design decisions.

---

## Recommended Next Action

Update the canonical Scenario 001 artifacts with clearly labeled candidate sections.

Suggested heading:

`## Candidate Output From First Smoke Test`

Each promoted section should state that it came from the first smoke test and remains subject to learner validation.

---

## Status

Ready for selective artifact updates.