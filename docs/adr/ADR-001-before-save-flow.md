# ADR-001: Use Before-Save Flow for Scenario 001 Risk Flagging

## Status

Accepted

## Context

Scenario 001 needs to flag Case records for manager visibility using fields already present on Case:

- `High_Risk__c`
- `High_Risk_Reason__c`
- `High_Risk_Override__c`
- `Customer_Tier__c`
- `Priority`
- `IsClosed`

The current behavior is simple record-level classification. It does not create related records, send notifications, call external systems, or require complex branching.

## Decision

Use a before-save record-triggered Flow on Case for the Scenario 001 high-risk classification.

The current escalation precedence is:

1. Closed Cases clear high-risk fields.
2. Manual override marks the Case high-risk with reason `Manual Review`.
3. Strategic customer tier marks the Case high-risk with reason `Strategic Customer`.
4. High priority marks the Case high-risk with reason `Critical Severity`.
5. Otherwise, high-risk fields are cleared.

## Rationale

Before-save Flow is a good fit because the automation only updates fields on the same Case record. It keeps the implementation declarative, reviewable, and easy to explain in a Salesforce delivery simulation.

Apex is intentionally deferred. The scenario does not yet need custom code, test classes, governor-limit handling, or reusable domain logic. Adding Apex now would make the first vertical slice heavier without improving the learning outcome.

Keeping the implementation metadata-first also supports the project goal: learners can inspect real Salesforce configuration and understand how small delivery decisions affect behavior, visibility, QA, and release readiness.

## Consequences

- Admins and learners can inspect the behavior directly in Flow Builder.
- The Flow remains easy to deploy as Salesforce metadata.
- More complex future behavior, such as notifications or related record updates, should be handled separately rather than overloading this before-save Flow.
- If criteria become more complex, the team should revisit whether custom metadata, Apex, or a split Flow design is justified.
