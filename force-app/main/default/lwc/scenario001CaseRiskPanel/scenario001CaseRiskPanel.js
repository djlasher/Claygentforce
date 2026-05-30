import { LightningElement, api, wire } from "lwc";
import { getFieldValue, getRecord } from "lightning/uiRecordApi";

import HIGH_RISK_FIELD from "@salesforce/schema/Case.High_Risk__c";
import HIGH_RISK_OVERRIDE_FIELD from "@salesforce/schema/Case.High_Risk_Override__c";
import HIGH_RISK_REASON_FIELD from "@salesforce/schema/Case.High_Risk_Reason__c";
import PRIORITY_FIELD from "@salesforce/schema/Case.Priority";
import STATUS_FIELD from "@salesforce/schema/Case.Status";
import IS_CLOSED_FIELD from "@salesforce/schema/Case.IsClosed";

const FIELDS = [
  HIGH_RISK_FIELD,
  HIGH_RISK_OVERRIDE_FIELD,
  HIGH_RISK_REASON_FIELD,
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
    text: "Flow v2 does not currently clear prior high-risk values when criteria stop matching, so regression tests should cover priority and override changes."
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
    focus: "Flow v2 precedence",
    label: "Simulated review note",
    text: "Manual override takes precedence over priority-based criteria in Flow v2."
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

  get highRiskStatus() {
    return this.isHighRisk ? "Flagged" : "Not Flagged";
  }

  get highRiskOverrideStatus() {
    return this.isManualOverride ? "Enabled" : "Not Enabled";
  }

  get highRiskReason() {
    return (
      getFieldValue(this.caseRecord.data, HIGH_RISK_REASON_FIELD) || "None"
    );
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

    if (this.isManualOverride) {
      return MANUAL_OVERRIDE_GUIDANCE;
    }

    return this.isHighRisk ? HIGH_RISK_GUIDANCE : STANDARD_GUIDANCE;
  }
}
