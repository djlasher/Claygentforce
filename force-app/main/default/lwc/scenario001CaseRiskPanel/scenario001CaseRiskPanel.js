import { LightningElement, api, wire } from "lwc";
import { getFieldValue, getRecord } from "lightning/uiRecordApi";

import HIGH_RISK_FIELD from "@salesforce/schema/Case.High_Risk__c";
import HIGH_RISK_OVERRIDE_FIELD from "@salesforce/schema/Case.High_Risk_Override__c";
import HIGH_RISK_REASON_FIELD from "@salesforce/schema/Case.High_Risk_Reason__c";
import CUSTOMER_TIER_FIELD from "@salesforce/schema/Case.Customer_Tier__c";
import PRIORITY_FIELD from "@salesforce/schema/Case.Priority";
import STATUS_FIELD from "@salesforce/schema/Case.Status";
import IS_CLOSED_FIELD from "@salesforce/schema/Case.IsClosed";

const FIELDS = [
  HIGH_RISK_FIELD,
  HIGH_RISK_OVERRIDE_FIELD,
  HIGH_RISK_REASON_FIELD,
  CUSTOMER_TIER_FIELD,
  PRIORITY_FIELD,
  STATUS_FIELD,
  IS_CLOSED_FIELD
];

const SCENARIO_STATES = {
  Closed: "Closed Case",
  ManualOverride: "Manual Override",
  StrategicRisk: "StrategicRisk",
  StaleEscalation: "Stale Escalation",
  PriorityRisk: "Priority-Based High Risk",
  Clean: "Not Flagged"
};

const FLOW_SIGNALS = {
  Closed: "Closed visibility only",
  ManualOverride: "Override precedence",
  StrategicRisk: "Customer tier criteria",
  StaleEscalation: "Stale escalation criteria",
  PriorityRisk: "Priority criteria",
  Clean: "No active match"
};

const OUTCOME_AND_RISK = {
  Closed: {
    outcome: "Closed Cases are removed from active escalation tracking.",
    risk: "Historical escalation visibility may be reduced."
  },
  ManualOverride: {
    outcome: "Manager visibility ensured through manual escalation.",
    risk: "Overuse of manual overrides could reduce signal quality."
  },
  StrategicRisk: {
    outcome: "Strategic customers now receive automatic visibility.",
    risk: "Escalation volume may increase if customer tiers are overused."
  },
  StaleEscalation: {
    outcome:
      "Aging Medium or High priority Cases receive escalation visibility.",
    risk: "Escalation fatigue may increase if queue aging is not managed."
  },
  PriorityRisk: {
    outcome: "High priority Cases receive automatic manager visibility.",
    risk: "Priority-only escalation may miss important lower-priority Cases."
  },
  Clean: {
    outcome: "No active escalation criteria matched.",
    risk: "Important Cases may still be missed if criteria are too narrow."
  }
};

const ESCALATION_METRICS = {
  Closed: {
    activeSignal: "Cleared",
    source: "Closed Case",
    queueAgingWatch: "Inactive",
    attentionLevel: "Normal"
  },
  ManualOverride: {
    activeSignal: "Active",
    source: "Manual Intervention",
    queueAgingWatch: "Monitor",
    attentionLevel: "High"
  },
  StrategicRisk: {
    activeSignal: "Active",
    source: "Customer Tier",
    queueAgingWatch: "Monitor",
    attentionLevel: "High"
  },
  StaleEscalation: {
    activeSignal: "Active",
    source: "Queue Aging",
    queueAgingWatch: "Active",
    attentionLevel: "Elevated"
  },
  PriorityRisk: {
    activeSignal: "Active",
    source: "Priority Criteria",
    queueAgingWatch: "Monitor",
    attentionLevel: "Elevated"
  },
  Clean: {
    activeSignal: "None",
    source: "No Active Match",
    queueAgingWatch: "Inactive",
    attentionLevel: "Normal"
  }
};

const GUIDANCE_GROUPS = {
  InitialReview: "Initial Review",
  AutomationImpact: "Automation Impact",
  QaWatch: "QA Watch",
  NextDecision: "Next Decision"
};

const GUIDANCE_GROUP_ORDER = [
  GUIDANCE_GROUPS.InitialReview,
  GUIDANCE_GROUPS.AutomationImpact,
  GUIDANCE_GROUPS.QaWatch,
  GUIDANCE_GROUPS.NextDecision
];

const HIGH_RISK_GUIDANCE = [
  {
    group: GUIDANCE_GROUPS.InitialReview,
    role: "Support Manager",
    focus: "Manager visibility",
    label: "Simulated review note",
    text: "This Case is currently flagged for manager review."
  },
  {
    group: GUIDANCE_GROUPS.QaWatch,
    role: "QA",
    focus: "List view validation",
    label: "Simulated review note",
    text: "Confirm the list view shows this Case and excludes closed Cases."
  },
  {
    group: GUIDANCE_GROUPS.AutomationImpact,
    role: "Security",
    focus: "Access model",
    label: "Simulated review note",
    text: "Verify visibility comes from normal Case sharing and the scenario permission set."
  }
];

const STANDARD_GUIDANCE = [
  {
    group: GUIDANCE_GROUPS.InitialReview,
    role: "Support Manager",
    focus: "Triage status",
    label: "Simulated review note",
    text: "This Case is not currently flagged by Scenario 001 criteria."
  },
  {
    group: GUIDANCE_GROUPS.NextDecision,
    role: "Architect",
    focus: "Automation scope",
    label: "Simulated review note",
    text: "Confirm whether the current criteria are sufficient before adding more automation."
  },
  {
    group: GUIDANCE_GROUPS.QaWatch,
    role: "QA",
    focus: "Regression watch",
    label: "Simulated review note",
    text: "Flow v3 clears prior high-risk values when criteria stop matching, so regression tests should cover priority, override, and customer tier changes."
  }
];

const MANUAL_OVERRIDE_GUIDANCE = [
  {
    group: GUIDANCE_GROUPS.InitialReview,
    role: "Support Manager",
    focus: "Manual manager review",
    label: "Simulated review note",
    text: "This Case is manually flagged for manager review."
  },
  {
    group: GUIDANCE_GROUPS.AutomationImpact,
    role: "Architect",
    focus: "Flow v3 precedence",
    label: "Simulated review note",
    text: "Manual override takes precedence over customer tier and priority-based criteria in Flow v3."
  },
  {
    group: GUIDANCE_GROUPS.QaWatch,
    role: "QA",
    focus: "Override validation",
    label: "Simulated review note",
    text: "Confirm override behavior works even when Priority is not High."
  }
];

const STALE_ESCALATION_GUIDANCE = [
  {
    group: GUIDANCE_GROUPS.InitialReview,
    role: "Support Manager",
    focus: "Delayed response visibility",
    label: "Simulated review note",
    text: "This Case is aging and now needs manager visibility before the backlog risk grows."
  },
  {
    group: GUIDANCE_GROUPS.AutomationImpact,
    role: "Architect",
    focus: "Queue aging concerns",
    label: "Simulated review note",
    text: "Stale escalation helps surface queue aging, but the five-day threshold should be validated against real support expectations."
  },
  {
    group: GUIDANCE_GROUPS.QaWatch,
    role: "QA",
    focus: "Stale criteria validation",
    label: "Simulated review note",
    text: "Confirm only open Medium or High priority Cases older than five days are marked as Stale Escalation."
  },
  {
    group: GUIDANCE_GROUPS.NextDecision,
    role: "Product Owner",
    focus: "Escalation fatigue",
    label: "Simulated review note",
    text: "Review stale escalation volume so managers do not lose trust in the high-risk list."
  }
];

const CLOSED_CASE_GUIDANCE = [
  {
    group: GUIDANCE_GROUPS.InitialReview,
    role: "Support Manager",
    focus: "Closed-case visibility",
    label: "Simulated review note",
    text: "This Case is closed and should not appear in the open high-risk manager list view."
  },
  {
    group: GUIDANCE_GROUPS.QaWatch,
    role: "QA",
    focus: "Negative-path validation",
    label: "Simulated review note",
    text: "Confirm closed Cases are excluded from Open High-Risk Cases even if High Risk remains checked."
  },
  {
    group: GUIDANCE_GROUPS.NextDecision,
    role: "Architect",
    focus: "Future state decision",
    label: "Simulated review note",
    text: "Decide later whether closed Cases should clear high-risk values or simply fall out of open-case visibility."
  }
];

const STRATEGIC_CUSTOMER_GUIDANCE = {
  group: GUIDANCE_GROUPS.NextDecision,
  role: "Product Owner",
  focus: "Customer priority",
  label: "Simulated review note",
  text: "Strategic customer context now contributes to Scenario 001 escalation in Flow v3."
};

export default class Scenario001CaseRiskPanel extends LightningElement {
  @api recordId;

  @wire(getRecord, { recordId: "$recordId", fields: FIELDS })
  caseRecord;

  get isHighRisk() {
    return getFieldValue(this.caseRecord.data, HIGH_RISK_FIELD) === true;
  }

  get isManualOverride() {
    return (
      getFieldValue(this.caseRecord.data, HIGH_RISK_OVERRIDE_FIELD) === true
    );
  }

  get isClosed() {
    return getFieldValue(this.caseRecord.data, IS_CLOSED_FIELD) === true;
  }

  get isStrategicCustomer() {
    return this.customerTier === "Strategic";
  }

  get isStaleEscalation() {
    return this.highRiskReason === SCENARIO_STATES.StaleEscalation;
  }

  get highRiskStatus() {
    return this.isHighRisk ? "Flagged" : "Not Flagged";
  }

  get highRiskOverrideStatus() {
    return this.isManualOverride ? "Enabled" : "Not Enabled";
  }

  get scenarioState() {
    if (this.isClosed) {
      return SCENARIO_STATES.Closed;
    }

    if (this.isManualOverride) {
      return SCENARIO_STATES.ManualOverride;
    }

    if (this.isStrategicCustomer) {
      return SCENARIO_STATES.StrategicRisk;
    }

    if (this.isStaleEscalation) {
      return SCENARIO_STATES.StaleEscalation;
    }

    if (this.isHighRisk) {
      return SCENARIO_STATES.PriorityRisk;
    }

    return SCENARIO_STATES.Clean;
  }

  get flowSignal() {
    switch (this.scenarioState) {
      case SCENARIO_STATES.Closed:
        return FLOW_SIGNALS.Closed;
      case SCENARIO_STATES.ManualOverride:
        return FLOW_SIGNALS.ManualOverride;
      case SCENARIO_STATES.StrategicRisk:
        return FLOW_SIGNALS.StrategicRisk;
      case SCENARIO_STATES.StaleEscalation:
        return FLOW_SIGNALS.StaleEscalation;
      case SCENARIO_STATES.PriorityRisk:
        return FLOW_SIGNALS.PriorityRisk;
      default:
        return FLOW_SIGNALS.Clean;
    }
  }

  get outcomeAndRisk() {
    switch (this.scenarioState) {
      case SCENARIO_STATES.Closed:
        return OUTCOME_AND_RISK.Closed;
      case SCENARIO_STATES.ManualOverride:
        return OUTCOME_AND_RISK.ManualOverride;
      case SCENARIO_STATES.StrategicRisk:
        return OUTCOME_AND_RISK.StrategicRisk;
      case SCENARIO_STATES.StaleEscalation:
        return OUTCOME_AND_RISK.StaleEscalation;
      case SCENARIO_STATES.PriorityRisk:
        return OUTCOME_AND_RISK.PriorityRisk;
      default:
        return OUTCOME_AND_RISK.Clean;
    }
  }

  get escalationMetrics() {
    switch (this.scenarioState) {
      case SCENARIO_STATES.Closed:
        return ESCALATION_METRICS.Closed;
      case SCENARIO_STATES.ManualOverride:
        return ESCALATION_METRICS.ManualOverride;
      case SCENARIO_STATES.StrategicRisk:
        return ESCALATION_METRICS.StrategicRisk;
      case SCENARIO_STATES.StaleEscalation:
        return ESCALATION_METRICS.StaleEscalation;
      case SCENARIO_STATES.PriorityRisk:
        return ESCALATION_METRICS.PriorityRisk;
      default:
        return ESCALATION_METRICS.Clean;
    }
  }

  get highRiskReason() {
    return (
      getFieldValue(this.caseRecord.data, HIGH_RISK_REASON_FIELD) || "None"
    );
  }

  get customerTier() {
    return getFieldValue(this.caseRecord.data, CUSTOMER_TIER_FIELD) || "None";
  }

  get priority() {
    return getFieldValue(this.caseRecord.data, PRIORITY_FIELD) || "None";
  }

  get status() {
    return getFieldValue(this.caseRecord.data, STATUS_FIELD) || "None";
  }

  get guidanceMessages() {
    switch (this.scenarioState) {
      case SCENARIO_STATES.Closed:
        return CLOSED_CASE_GUIDANCE;
      case SCENARIO_STATES.ManualOverride:
        return this.withStrategicCustomerGuidance(MANUAL_OVERRIDE_GUIDANCE);
      case SCENARIO_STATES.StrategicRisk:
        return this.withStrategicCustomerGuidance(
          this.isHighRisk ? HIGH_RISK_GUIDANCE : STANDARD_GUIDANCE
        );
      case SCENARIO_STATES.StaleEscalation:
        return STALE_ESCALATION_GUIDANCE;
      case SCENARIO_STATES.PriorityRisk:
        return HIGH_RISK_GUIDANCE;
      default:
        return STANDARD_GUIDANCE;
    }
  }

  get groupedGuidanceMessages() {
    return GUIDANCE_GROUP_ORDER.map((group) => {
      const messages = this.guidanceMessages
        .filter((message) => message.group === group)
        .map((message) => ({
          ...message,
          key: `${group}-${message.role}`
        }));

      return {
        group,
        messages
      };
    }).filter((groupedMessages) => groupedMessages.messages.length > 0);
  }

  withStrategicCustomerGuidance(selectedGuidance) {
    if (this.isStrategicCustomer) {
      return [...selectedGuidance, STRATEGIC_CUSTOMER_GUIDANCE];
    }

    return selectedGuidance;
  }
}
