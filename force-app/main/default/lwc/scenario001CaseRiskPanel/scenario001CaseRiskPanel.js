import { LightningElement, api, wire } from "lwc";
import { getFieldValue, getRecord } from "lightning/uiRecordApi";

import HIGH_RISK_FIELD from "@salesforce/schema/Case.High_Risk__c";
import HIGH_RISK_OVERRIDE_FIELD from "@salesforce/schema/Case.High_Risk_Override__c";
import HIGH_RISK_REASON_FIELD from "@salesforce/schema/Case.High_Risk_Reason__c";
import CUSTOMER_TIER_FIELD from "@salesforce/schema/Case.Customer_Tier__c";
import PRIORITY_FIELD from "@salesforce/schema/Case.Priority";
import STATUS_FIELD from "@salesforce/schema/Case.Status";
import IS_CLOSED_FIELD from "@salesforce/schema/Case.IsClosed";

// Case fields used by the read-only record wire.
const FIELDS = [
  HIGH_RISK_FIELD,
  HIGH_RISK_OVERRIDE_FIELD,
  HIGH_RISK_REASON_FIELD,
  CUSTOMER_TIER_FIELD,
  PRIORITY_FIELD,
  STATUS_FIELD,
  IS_CLOSED_FIELD
];

// Central scenario states and the flow signal text displayed in the panel.
const SCENARIO_STATES = {
  Closed: "Closed Case",
  ManualOverride: "Manual Override",
  StrategicRisk: "Strategic Customer Risk",
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

// Static outcome/risk teaching model for each scenario state.
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

// Static operational observability model for the current escalation state.
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

// Static implementation options shown as non-interactive simulation paths.
const DECISION_PATHS = {
  Closed: [
    {
      recommendation: "Confirm closed-case reporting needs",
      benefit: "Keeps active escalation views clean.",
      tradeoff: "Historical review may need a separate report."
    },
    {
      recommendation: "Review closure handoff expectations",
      benefit: "Clarifies when manager visibility should end.",
      tradeoff: "Extra review steps can slow support closure."
    }
  ],
  ManualOverride: [
    {
      recommendation: "Tighten override governance",
      benefit: "Keeps manual escalation intentional.",
      tradeoff: "Managers may need clearer usage guidance."
    },
    {
      recommendation: "Add override audit reporting",
      benefit: "Shows who is using manual escalation and why.",
      tradeoff: "Adds reporting and review overhead."
    },
    {
      recommendation: "Expand automated escalation criteria",
      benefit: "Reduces reliance on manual intervention.",
      tradeoff: "Broader automation may create noisy escalations."
    }
  ],
  StrategicRisk: [
    {
      recommendation: "Validate customer tier ownership",
      benefit: "Improves trust in tier-driven escalation.",
      tradeoff: "Requires clear ownership of customer data quality."
    },
    {
      recommendation: "Add account-level escalation visibility",
      benefit: "Helps managers see broader strategic customer patterns.",
      tradeoff: "May require additional reporting or page design."
    },
    {
      recommendation: "Monitor escalation volume growth",
      benefit: "Prevents Strategic tier from overwhelming manager review.",
      tradeoff: "May reveal tier definitions that need cleanup."
    }
  ],
  StaleEscalation: [
    {
      recommendation: "Reduce backlog aging thresholds",
      benefit: "Surfaces delayed responses sooner.",
      tradeoff: "May increase escalation volume."
    },
    {
      recommendation: "Introduce queue ownership reporting",
      benefit: "Makes aging patterns easier to act on.",
      tradeoff: "Requires managers to maintain queue accountability."
    },
    {
      recommendation: "Escalate aging metrics to leadership",
      benefit: "Connects stale Cases to operational capacity decisions.",
      tradeoff: "Can create pressure before root causes are understood."
    }
  ],
  PriorityRisk: [
    {
      recommendation: "Expand beyond priority-only criteria",
      benefit: "Catches important Cases that are not marked High.",
      tradeoff: "Additional criteria can reduce signal quality."
    },
    {
      recommendation: "Add severity scoring",
      benefit: "Creates a more nuanced escalation model.",
      tradeoff: "Requires agreement on scoring rules."
    },
    {
      recommendation: "Validate escalation noise levels",
      benefit: "Protects manager attention.",
      tradeoff: "May delay adding useful automation."
    }
  ],
  Clean: [
    {
      recommendation: "Leave criteria unchanged",
      benefit: "Keeps the first slice simple and predictable.",
      tradeoff: "Some important Cases may remain invisible."
    },
    {
      recommendation: "Expand detection coverage",
      benefit: "Improves chances of catching risky Cases.",
      tradeoff: "Broader criteria can create false positives."
    },
    {
      recommendation: "Review missed-escalation risks",
      benefit: "Uses real examples to guide the next rule.",
      tradeoff: "Requires support team feedback before automation changes."
    }
  ]
};

// State-specific reflection prompts for learner review.
const LEARNING_CHECKPOINTS = {
  Closed: [
    "What visibility should remain after a Case closes?",
    "When should closing a Case clear escalation fields?",
    "What reporting would preserve historical escalation context?"
  ],
  ManualOverride: [
    "What risk does manual override solve?",
    "What new governance risk does it introduce?",
    "When should automation replace manual judgment?"
  ],
  StrategicRisk: [
    "Who owns customer tier accuracy?",
    "Should Strategic customer status always override other criteria?",
    "How could tier-based escalation create noise?"
  ],
  StaleEscalation: [
    "What makes a Case stale enough to escalate?",
    "How would you tune the five-day threshold?",
    "What false positives could this create?"
  ],
  PriorityRisk: [
    "Is priority alone enough to define risk?",
    "What criteria would you add next?",
    "How would QA validate this rule?"
  ],
  Clean: [
    "What risky Cases might still be missed?",
    "What evidence would justify expanding criteria?",
    "What is the safest next rule to add?"
  ]
};

// Delivery Team Channel grouping and static role-message content.
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

const PRIORITY_RISK_GUIDANCE = [
  {
    group: GUIDANCE_GROUPS.InitialReview,
    role: "Support Manager",
    focus: "Manager visibility",
    label: "Simulated review note",
    text: "This Case is currently flagged for manager review."
  },
  {
    group: GUIDANCE_GROUPS.AutomationImpact,
    role: "Product Owner",
    focus: "Response urgency",
    label: "Simulated review note",
    text: "Fast escalation is useful here, but we should confirm the high-priority rule is not creating avoidable review noise."
  },
  {
    group: GUIDANCE_GROUPS.AutomationImpact,
    role: "Architect",
    focus: "Criteria depth",
    label: "Simulated review note",
    text: "Priority-only logic is easy to maintain, but it may be too simple if risk depends on customer tier or age."
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
    group: GUIDANCE_GROUPS.InitialReview,
    role: "Product Owner",
    focus: "Escalation speed",
    label: "Simulated review note",
    text: "Manual override helps the team respond quickly, but too much approval friction could slow urgent escalations."
  },
  {
    group: GUIDANCE_GROUPS.AutomationImpact,
    role: "Architect",
    focus: "Flow v3 precedence",
    label: "Simulated review note",
    text: "Manual override takes precedence over customer tier and priority-based criteria in Flow v3."
  },
  {
    group: GUIDANCE_GROUPS.AutomationImpact,
    role: "Architect",
    focus: "Signal quality",
    label: "Simulated review note",
    text: "If manual overrides become common, the automated criteria may not be doing enough work."
  },
  {
    group: GUIDANCE_GROUPS.QaWatch,
    role: "QA",
    focus: "Override validation",
    label: "Simulated review note",
    text: "Confirm override behavior works even when Priority is not High."
  },
  {
    group: GUIDANCE_GROUPS.QaWatch,
    role: "QA",
    focus: "Override consistency",
    label: "Simulated review note",
    text: "Inconsistent override usage could make regression results look correct while business behavior stays unreliable."
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
    group: GUIDANCE_GROUPS.InitialReview,
    role: "Support Manager",
    focus: "Queue health",
    label: "Simulated review note",
    text: "The stale signal is helpful, but managers still need a way to see whether this is one Case or a wider queue pattern."
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
    group: GUIDANCE_GROUPS.QaWatch,
    role: "QA",
    focus: "False-positive noise",
    label: "Simulated review note",
    text: "If the threshold is too broad, stale escalation may inflate the manager list with Cases that are aging but not actually risky."
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

const STRATEGIC_CUSTOMER_CONTEXT_GUIDANCE = {
  group: GUIDANCE_GROUPS.NextDecision,
  role: "Product Owner",
  focus: "Customer priority",
  label: "Simulated review note",
  text: "Strategic customer context now contributes to Scenario 001 escalation in Flow v3."
};

const STRATEGIC_TENSION_GUIDANCE = [
  {
    group: GUIDANCE_GROUPS.InitialReview,
    role: "Support Manager",
    focus: "Customer urgency",
    label: "Simulated review note",
    text: "Strategic customer Cases should surface quickly, especially when account impact may outweigh the visible priority."
  },
  {
    group: GUIDANCE_GROUPS.AutomationImpact,
    role: "Architect",
    focus: "Tier governance",
    label: "Simulated review note",
    text: "Customer-tier escalation is only trustworthy if tier ownership and updates are well governed."
  },
  {
    group: GUIDANCE_GROUPS.NextDecision,
    role: "Operations",
    focus: "Volume growth",
    label: "Simulated review note",
    text: "If too many customers are marked Strategic, manager review volume could grow faster than the team can absorb."
  }
];

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

  get decisionPaths() {
    switch (this.scenarioState) {
      case SCENARIO_STATES.Closed:
        return DECISION_PATHS.Closed;
      case SCENARIO_STATES.ManualOverride:
        return DECISION_PATHS.ManualOverride;
      case SCENARIO_STATES.StrategicRisk:
        return DECISION_PATHS.StrategicRisk;
      case SCENARIO_STATES.StaleEscalation:
        return DECISION_PATHS.StaleEscalation;
      case SCENARIO_STATES.PriorityRisk:
        return DECISION_PATHS.PriorityRisk;
      default:
        return DECISION_PATHS.Clean;
    }
  }

  get learningCheckpoints() {
    switch (this.scenarioState) {
      case SCENARIO_STATES.Closed:
        return LEARNING_CHECKPOINTS.Closed;
      case SCENARIO_STATES.ManualOverride:
        return LEARNING_CHECKPOINTS.ManualOverride;
      case SCENARIO_STATES.StrategicRisk:
        return LEARNING_CHECKPOINTS.StrategicRisk;
      case SCENARIO_STATES.StaleEscalation:
        return LEARNING_CHECKPOINTS.StaleEscalation;
      case SCENARIO_STATES.PriorityRisk:
        return LEARNING_CHECKPOINTS.PriorityRisk;
      default:
        return LEARNING_CHECKPOINTS.Clean;
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
          this.isHighRisk ? PRIORITY_RISK_GUIDANCE : STANDARD_GUIDANCE
        );
      case SCENARIO_STATES.StaleEscalation:
        return STALE_ESCALATION_GUIDANCE;
      case SCENARIO_STATES.PriorityRisk:
        return PRIORITY_RISK_GUIDANCE;
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
      return [
        ...selectedGuidance,
        ...STRATEGIC_TENSION_GUIDANCE,
        STRATEGIC_CUSTOMER_CONTEXT_GUIDANCE
      ];
    }

    return selectedGuidance;
  }
}
