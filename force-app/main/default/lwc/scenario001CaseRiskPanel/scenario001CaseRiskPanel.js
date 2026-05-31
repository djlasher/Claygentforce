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

const HIGH_RISK_GUIDANCE = [
  {
    role: "Support Manager",
    focus: "Manager visibility",
    label: "Simulated review note",
    text: "This Case is currently flagged for manager review."
  },
  {
    role: "QA",
    focus: "List view validation",
    label: "Simulated review note",
    text: "Confirm the list view shows this Case and excludes closed Cases."
  },
  {
    role: "Security",
    focus: "Access model",
    label: "Simulated review note",
    text: "Verify visibility comes from normal Case sharing and the scenario permission set."
  }
];

const STANDARD_GUIDANCE = [
  {
    role: "Support Manager",
    focus: "Triage status",
    label: "Simulated review note",
    text: "This Case is not currently flagged by Scenario 001 criteria."
  },
  {
    role: "Architect",
    focus: "Automation scope",
    label: "Simulated review note",
    text: "Confirm whether the current criteria are sufficient before adding more automation."
  },
  {
    role: "QA",
    focus: "Regression watch",
    label: "Simulated review note",
    text: "Flow v3 clears prior high-risk values when criteria stop matching, so regression tests should cover priority, override, and customer tier changes."
  }
];

const MANUAL_OVERRIDE_GUIDANCE = [
  {
    role: "Support Manager",
    focus: "Manual manager review",
    label: "Simulated review note",
    text: "This Case is manually flagged for manager review."
  },
  {
    role: "Architect",
    focus: "Flow v3 precedence",
    label: "Simulated review note",
    text: "Manual override takes precedence over customer tier and priority-based criteria in Flow v3."
  },
  {
    role: "QA",
    focus: "Override validation",
    label: "Simulated review note",
    text: "Confirm override behavior works even when Priority is not High."
  }
];

const CLOSED_CASE_GUIDANCE = [
  {
    role: "Support Manager",
    focus: "Closed-case visibility",
    label: "Simulated review note",
    text: "This Case is closed and should not appear in the open high-risk manager list view."
  },
  {
    role: "QA",
    focus: "Negative-path validation",
    label: "Simulated review note",
    text: "Confirm closed Cases are excluded from Open High-Risk Cases even if High Risk remains checked."
  },
  {
    role: "Architect",
    focus: "Future state decision",
    label: "Simulated review note",
    text: "Decide later whether closed Cases should clear high-risk values or simply fall out of open-case visibility."
  }
];

const STRATEGIC_CUSTOMER_GUIDANCE = {
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

  get highRiskStatus() {
    return this.isHighRisk ? "Flagged" : "Not Flagged";
  }

  get highRiskOverrideStatus() {
    return this.isManualOverride ? "Enabled" : "Not Enabled";
  }

  get scenarioState() {
    if (this.isClosed) {
      return "Closed Case";
    }

    if (this.isManualOverride) {
      return "Manual Override";
    }

    if (this.isStrategicCustomer) {
      return "StrategicRisk";
    }

    if (this.isHighRisk) {
      return "Priority-Based High Risk";
    }

    return "Not Flagged";
  }

  get flowSignal() {
    if (this.isClosed) {
      return "Closed visibility only";
    }

    if (this.isManualOverride) {
      return "Override precedence";
    }

    if (this.isStrategicCustomer) {
      return "Customer tier criteria";
    }

    if (this.isHighRisk) {
      return "Priority criteria";
    }

    return "No active match";
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
    if (this.isClosed) {
      return CLOSED_CASE_GUIDANCE;
    }

    let selectedGuidance;

    if (this.isManualOverride) {
      selectedGuidance = MANUAL_OVERRIDE_GUIDANCE;
    } else {
      selectedGuidance = this.isHighRisk
        ? HIGH_RISK_GUIDANCE
        : STANDARD_GUIDANCE;
    }

    if (this.isStrategicCustomer) {
      return [...selectedGuidance, STRATEGIC_CUSTOMER_GUIDANCE];
    }

    return selectedGuidance;
  }
}
