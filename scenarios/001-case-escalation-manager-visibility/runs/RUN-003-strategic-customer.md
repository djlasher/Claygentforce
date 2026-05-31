# RUN-003: Strategic Customer Path

## Scenario

Scenario 001: Case Escalation and Manager Visibility

This run simulates an open Case for a Strategic customer where escalation is triggered by customer tier before stale or priority criteria are evaluated.

## Starting Case State

| Field              | Value       |
| ------------------ | ----------- |
| Status             | Working     |
| Priority           | Medium      |
| Last Modified Date | Recent      |
| High Risk Override | Not Enabled |
| Customer Tier      | Strategic   |

## Flow Path

Flow v3 evaluates the Case in this order:

1. The Case is not closed, so closed-case clearing does not apply.
2. `High_Risk_Override__c` is false, so manual review does not apply.
3. `Customer_Tier__c` is Strategic.
4. The Flow sets `High_Risk__c` to true.
5. The Flow sets `High_Risk_Reason__c` to `Strategic Customer`.
6. Stale escalation and priority-only escalation are skipped because Strategic customer criteria matched first.

## Resulting System Behavior

- The Case is flagged as high-risk.
- The high-risk reason is `Strategic Customer`.
- The Case appears in the `Open High-Risk Cases` list view.
- The Scenario 001 LWC shows the state as `Strategic Customer Risk`.
- The Scenario Signals strip shows `Customer tier criteria`.
- Escalation Metrics show Customer Tier as the escalation source and attention level as high.

## Simulated Delivery-Team Observations

### Support Manager

Strategic customer escalation gives managers visibility before the Case becomes stale or reaches High priority. This supports proactive account care when customer impact matters more than the visible priority value.

### Product Owner

The rule is useful, but the team needs confidence that Strategic tier values are accurate. If too many accounts are marked Strategic, the manager list could become noisy.

## Simulated QA Observations

- Test an open Medium priority Case with Customer Tier set to Strategic.
- Confirm the Case becomes high-risk with reason `Strategic Customer`.
- Confirm stale escalation does not override the Strategic customer reason.
- Confirm High priority does not override the Strategic customer reason.
- Confirm manual override still takes precedence when enabled.
- Confirm closed Strategic customer Cases are cleared and removed from active escalation tracking.

## Simulated Architecture Observations

Strategic customer logic sits after manual override and before stale or priority criteria. That keeps explicit human escalation first, then applies customer-tier escalation before operational aging or simpler priority-based rules.

The implementation stays metadata-first and avoids Apex. The main design dependency is customer tier data quality; the rule is only as reliable as the process that maintains the tier field.

## Outcome and Risk Notes

Current outcome: Strategic customers receive automatic visibility.

Risk if shipped as-is: Escalation volume may increase if customer tiers are overused.

## Decision Path Notes

- Validate customer tier ownership so the escalation signal remains trustworthy.
- Add account-level escalation visibility if managers need broader customer context.
- Monitor escalation volume growth to confirm the Strategic tier is not overwhelming review capacity.

## Learning Checkpoint Notes

- Who owns customer tier accuracy?
- Should Strategic customer status always override other criteria?
- How could tier-based escalation create noise?

## Run Result

Pass for the current vertical slice. The Strategic customer path is clear, testable, and demonstrates how business context can drive manager visibility before stale or priority-only escalation.
