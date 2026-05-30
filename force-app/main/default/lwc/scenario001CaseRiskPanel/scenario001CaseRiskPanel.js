import { LightningElement, api, wire } from 'lwc';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';

import HIGH_RISK_FIELD from '@salesforce/schema/Case.High_Risk__c';
import HIGH_RISK_REASON_FIELD from '@salesforce/schema/Case.High_Risk_Reason__c';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import IS_CLOSED_FIELD from '@salesforce/schema/Case.IsClosed';

const FIELDS = [
    HIGH_RISK_FIELD,
    HIGH_RISK_REASON_FIELD,
    PRIORITY_FIELD,
    STATUS_FIELD,
    IS_CLOSED_FIELD
];

const HIGH_RISK_GUIDANCE = [
    {
        role: 'Support Manager',
        text: 'This Case is currently flagged for manager review.'
    },
    {
        role: 'QA',
        text: 'Confirm the list view shows this Case and excludes closed Cases.'
    },
    {
        role: 'Security',
        text: 'Verify visibility comes from normal Case sharing and the scenario permission set.'
    }
];

const STANDARD_GUIDANCE = [
    {
        role: 'Support Manager',
        text: 'This Case is not currently flagged by Scenario 001 criteria.'
    },
    {
        role: 'Architect',
        text: 'Confirm whether the current criteria are sufficient before adding more automation.'
    }
];

export default class Scenario001CaseRiskPanel extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    caseRecord;

    get isHighRisk() {
        return getFieldValue(this.caseRecord.data, HIGH_RISK_FIELD) === true;
    }

    get highRiskStatus() {
        return this.isHighRisk ? 'Flagged' : 'Not Flagged';
    }

    get highRiskReason() {
        return getFieldValue(this.caseRecord.data, HIGH_RISK_REASON_FIELD) || 'None';
    }

    get priority() {
        return getFieldValue(this.caseRecord.data, PRIORITY_FIELD) || 'None';
    }

    get status() {
        return getFieldValue(this.caseRecord.data, STATUS_FIELD) || 'None';
    }

    get guidanceMessages() {
        return this.isHighRisk ? HIGH_RISK_GUIDANCE : STANDARD_GUIDANCE;
    }
}
