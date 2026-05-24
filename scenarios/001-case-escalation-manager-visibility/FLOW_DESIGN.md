# Flow Design: Case Escalation and Manager Visibility

## Scenario

001-case-escalation-manager-visibility

---

## Status

Draft Flow Design

This file documents the intended Flow behavior before Salesforce Flow metadata is created.

The goal is to keep automation scenario-driven, readable, and reviewable before committing to Flow XML.

---

## Purpose

The Flow should evaluate whether a Case should be marked high-risk for manager review.

The Flow should support the MVP goal:

Make high-risk Cases visible and reviewable without building a full escalation engine.

---

## Source Artifacts

This design is informed by:

- `ACCEPTANCE_CRITERIA.md`
- `ARCHITECTURE_DECISION.md`
- `IMPLEMENTATION_PLAN.md`
- `METADATA_BUILD_NOTES.md`
- `runs/2026-05-23-agent-smoke-test001.md`

---

## Flow Name

Candidate API name:

`Case_Set_High_Risk_Status`

Candidate label:

`Case - Set High Risk Status`

Final name may change before metadata creation.

---

## Flow Type

Record-triggered Flow on Case.

---

## Trigger Timing

Recommended initial timing:

Before-save record-triggered Flow.

Reason:

The first version only needs to update fields on the same Case record.

Before-save Flow should be simpler and more efficient for setting `High_Risk__c` and `High_Risk_Reason__c`.

If future behavior includes notifications, related record updates, tasks, or emails, use a separate after-save Flow or scheduled path rather than overloading the before-save Flow.

---

## Trigger Conditions

The Flow should run when a Case is created or updated.

The Flow should only evaluate records where the Case is not closed.

Candidate condition:

- `IsClosed = False`

Additional entry optimization may be added later once final criteria are known.

---

## Fields Used

Current created fields:

- `Case.High_Risk__c`
- `Case.High_Risk_Reason__c`

Candidate existing fields:

- `Case.Priority`
- `Case.Status`
- `Case.AccountId`
- Account customer tier field, if available

Candidate future fields:

- `Case.High_Risk_Override__c`
- `Case.Last_Meaningful_Update__c`

---

## Initial Criteria

For the first version, high-risk logic should stay simple.

Candidate high-risk reasons:

1. Top-Tier Customer
2. Critical Severity
3. Stale Case
4. Manual Review

Only criteria backed by available Salesforce fields should be implemented.

If a criterion cannot be validated against available fields, it should remain documented but not automated.

---

## Decision Sequence

Recommended evaluation order:

1. If Case is closed, mark high-risk false and clear high-risk reason.
2. If manual override exists and is true, mark high-risk true and reason `Manual Review`.
3. If Case is from a top-tier customer, mark high-risk true and reason `Top-Tier Customer`.
4. If Case priority or severity is critical, mark high-risk true and reason `Critical Severity`.
5. If stale Case logic is available and threshold is met, mark high-risk true and reason `Stale Case`.
6. If none of the criteria match, mark high-risk false and clear high-risk reason.

The first matching reason should be used unless the business later asks to track multiple reasons.

---

## Candidate Flow Pseudocode

Plain-English pseudocode:

1. Start when Case is created or updated.
2. Check whether Case is closed.
3. If closed:
   - set `High_Risk__c = false`
   - clear `High_Risk_Reason__c`
   - end
4. Check whether manual override is included and selected.
5. If manual override is true:
   - set `High_Risk__c = true`
   - set `High_Risk_Reason__c = Manual Review`
   - end
6. Check whether customer tier qualifies as top-tier.
7. If top-tier:
   - set `High_Risk__c = true`
   - set `High_Risk_Reason__c = Top-Tier Customer`
   - end
8. Check whether severity or priority qualifies as critical.
9. If critical:
   - set `High_Risk__c = true`
   - set `High_Risk_Reason__c = Critical Severity`
   - end
10. Check stale Case criteria if available.
11. If stale:
   - set `High_Risk__c = true`
   - set `High_Risk_Reason__c = Stale Case`
   - end
12. Otherwise:
   - set `High_Risk__c = false`
   - clear `High_Risk_Reason__c`

---

## MVP Recommendation

For the first actual Flow build, consider implementing only the criteria that can be supported immediately.

Recommended first Flow version:

- closed Case handling
- priority-based critical handling
- high-risk field update
- high-risk reason field update

Defer until fields/data are confirmed:

- customer tier logic
- stale Case logic
- manual override logic
- notifications

---

## Open Flow Decisions

Before creating Flow metadata, confirm:

- Is `Priority = High` enough for the first critical-severity rule?
- Does the org have a separate severity field?
- Is there an Account customer tier field available?
- Should customer tier logic be included in Flow version one?
- Should stale Case logic be deferred?
- Should manual override be added before or after the first Flow?
- Should closed Cases always clear high-risk status?
- Should the Flow use the first matching reason or support multiple reasons?
- Should the Flow be before-save only?
- Should notifications be handled by a separate after-save Flow later?

---

## Flow Risks

Potential risks:

- vague criteria could create false positives or false negatives
- using Priority as severity may not match business intent
- customer tier may not exist or may not be available on Case without related record access
- stale Case logic may be more complex than expected
- automation could update Cases too broadly if entry criteria are loose
- future notification behavior could create alert fatigue

---

## Test Scenarios

Initial Flow test scenarios:

1. Open Case with critical/high priority becomes high-risk.
2. Open Case with normal priority does not become high-risk.
3. Closed Case is not high-risk.
4. Closed Case with previously high-risk values is cleared.
5. Case with top-tier customer becomes high-risk if customer tier logic is included.
6. Stale Case becomes high-risk if stale logic is included.
7. Manual override makes Case high-risk if override field is included.
8. Updating unrelated Case fields does not create unexpected behavior.

---

## Build Guidance

Do not create Flow metadata until the first Flow version is intentionally scoped.

Start smaller than the final design.

Recommended first Flow build:

- evaluate Case open/closed status
- evaluate Priority
- set `High_Risk__c`
- set `High_Risk_Reason__c`

Then expand only after validation.

---

## Guiding Principle

A readable Flow that handles two criteria correctly is better than a complex Flow that tries to handle every future requirement immediately.

