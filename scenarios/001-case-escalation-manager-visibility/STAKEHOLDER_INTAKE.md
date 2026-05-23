# Stakeholder Intake: Case Escalation and Manager Visibility

## Scenario

Case Escalation and Manager Visibility

---

## Stakeholder Role

Support Operations Manager

---

## Initial Stakeholder Request

Our support team needs a better way to make sure urgent customer cases do not get missed.

Right now everything comes into Salesforce as a Case, but managers do not always know which cases need immediate attention. Agents are supposed to update priority and flag issues, but that depends on the agent noticing the problem and remembering to do it.

We need Salesforce to automatically identify the important cases and make sure managers can see them quickly.

Ideally, managers should not have to dig through all open cases to find the risky ones.

---

## What the Stakeholder Thinks They Want

The stakeholder initially asks for:

- automatic identification of urgent or high-risk Cases
- better manager visibility
- some kind of notification or alert
- a way to review urgent Cases quickly
- less reliance on agents manually flagging issues

This is not yet a complete requirement.

The learner should clarify what urgent means, who the managers are, what visibility means, and what action should happen after a Case is identified.

---

## Known Pain Points

The stakeholder describes these pain points:

- urgent Cases are sometimes mixed in with normal Cases
- managers rely on agents to manually flag problems
- priority values are not always updated consistently
- some important Cases are noticed too late
- managers do not have one reliable place to review risky work
- leadership wants more confidence that urgent customer issues are being handled

---

## Ambiguous Terms

The stakeholder uses terms that require clarification:

- urgent
- high-risk
- important
- managers
- visibility
- quickly
- automatic
- flag
- escalation
- risky cases

The learner should not assume these meanings.

---

## Initial Constraints

The stakeholder mentions or implies:

- the team already uses Salesforce Cases
- agents are busy and may not reliably update fields
- managers need a simple way to review urgent work
- leadership wants a first version quickly
- the solution should not add many extra clicks for agents
- reporting may matter, but the stakeholder has not fully explained it

---

## Information Not Yet Known

The learner should discover:

- what criteria define a high-risk Case
- whether risk is based on customer tier, priority, keywords, age, product, SLA, or manual review
- who exactly should be notified or given visibility
- whether managers need a notification, list view, report, dashboard, queue, or task
- whether agents should be able to override or confirm high-risk status
- whether high-risk status should be stored on the Case
- whether the process needs auditability
- whether customer data sensitivity affects visibility
- what happens after a manager sees a high-risk Case
- what success looks like for the business

---

## Stakeholder Personality / Behavior

The stakeholder is practical and business-focused.

They are not hostile, but they are somewhat vague at first. They know the operational pain but not the Salesforce implementation path.

They care about:

- reducing missed urgent work
- making managers more confident
- keeping the process simple for agents
- getting something useful soon
- being able to explain the improvement to leadership

They do not initially care whether the solution uses Flow, Apex, reports, dashboards, queues, or notifications.

---

## Discovery Guidance

Good learner questions include:

- What makes a Case urgent or high-risk?
- Who needs to see these Cases?
- What should managers do when they see one?
- How quickly do managers need to know?
- Is this primarily a visibility problem, notification problem, prioritization problem, or escalation problem?
- Are agents expected to take any manual action?
- Should this affect Case priority, status, owner, queue, or another field?
- Do you need reporting on how many high-risk Cases occur?
- Are there customer tiers or products that matter?
- What would make you say the first version is successful?

---

## Example Stakeholder Clarifications

If the learner asks good questions, the stakeholder may reveal:

- high-risk probably means a Case from a top-tier customer, a severe product issue, or a Case that has been waiting too long
- managers mainly need a reliable list or view they can check throughout the day
- notifications would be nice, but too many alerts could become noise
- agents should not need to fill out many extra fields
- leadership may eventually want reporting on high-risk Case volume and response time
- the first version does not need complex SLA automation
- the team wants something useful before designing a larger escalation process

---

## Intake Readiness

This intake is intentionally not ready for implementation.

It is ready for Business Analyst discovery.

The next step should be requirements clarification, not solution design.