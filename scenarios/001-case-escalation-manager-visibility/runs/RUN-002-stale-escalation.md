# RUN-002: Stale Escalation Path

## Scenario

Scenario 001: Case Escalation and Manager Visibility

This run simulates an open Case that has aged past the stale escalation threshold without manual override or Strategic customer context.

## Starting Case State

| Field              | Value             |
| ------------------ | ----------------- |
| Status             | Working           |
| Priority           | Medium            |
| Last Modified Date | Older than 5 days |
| High Risk Override | Not Enabled       |
| Customer Tier      | Standard          |

## Flow Path

Flow v3 evaluates the Case in this order:

1. The Case is not closed, so closed-case clearing does not apply.
2. `High_Risk_Override__c` is false, so manual review does not apply.
3. `Customer_Tier__c` is not Strategic, so Strategic customer escalation does not apply.
4. The Case is open, Priority is Medium, and LastModifiedDate is older than five days.
5. The Flow sets `High_Risk__c` to true.
6. The Flow sets `High_Risk_Reason__c` to `Stale Escalation`.
7. Priority-only escalation is skipped because stale escalation matched first.

## Resulting System Behavior

- The Case is flagged as high-risk.
- The high-risk reason is `Stale Escalation`.
- The Case appears in the `Open High-Risk Cases` list view.
- The Scenario 001 LWC shows the state as `Stale Escalation`.
- The Scenario Signals strip shows `Stale escalation criteria`.
- Escalation Metrics show Queue Aging Watch as active and attention level as elevated.

## Simulated Delivery-Team Observations

### Support Manager

The stale escalation path surfaces Cases that may not look urgent by priority alone but are becoming operationally risky because they have not moved in several days.

### Product Owner

The five-day threshold gives the team a practical starting point. It should be monitored for escalation fatigue if too many medium-priority Cases enter manager review.

## Simulated QA Observations

- Test an open Medium priority Case older than five days.
- Confirm the Case becomes high-risk with reason `Stale Escalation`.
- Confirm a non-Strategic customer tier does not block stale escalation.
- Confirm manual override still takes precedence when enabled.
- Confirm closed Cases are cleared even if they would otherwise match stale criteria.
- Confirm newer Medium priority Cases do not escalate as stale.

## Simulated Architecture Observations

Stale escalation sits after Strategic customer logic and before priority-only logic. That keeps customer-driven escalation ahead of queue aging while still allowing aging Cases to surface before the simpler High priority rule.

The implementation remains metadata-first and avoids Apex. The tradeoff is that the stale threshold is fixed in Flow metadata for now, rather than configurable by support operations.

## Outcome and Risk Notes

Current outcome: Aging Medium or High priority Cases receive escalation visibility.

Risk if shipped as-is: Escalation fatigue may increase if queue aging is not managed.

## Decision Path Notes

- Reducing the aging threshold could surface delayed responses sooner, but may increase escalation volume.
- Queue ownership reporting would make stale patterns easier to act on, but requires manager follow-through.
- Leadership-level aging metrics could help with capacity decisions, but may create pressure before root causes are clear.

## Learning Checkpoint Notes

- What makes a Case stale enough to escalate?
- How would you tune the five-day threshold?
- What false positives could this create?

## Run Result

Pass for the current vertical slice. The stale escalation path is understandable, testable, and gives the simulator a realistic operational-risk scenario beyond manual override, Strategic customer, and priority-only escalation.
