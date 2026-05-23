# Delivery Simulation Loop

Claygentforce is built around a repeatable Salesforce delivery simulation loop.

The purpose of the loop is to help learners practice how real Salesforce work moves from an unclear business problem to a designed, implemented, tested, deployed, and supported solution.

This file defines the core learning loop that future scenarios, agents, prompts, and Salesforce metadata should support.

---

## Core Loop Summary

A Claygentforce simulation should generally follow this path:

1. Scenario Intake
2. Requirements Clarification
3. Architecture and Tradeoff Review
4. Implementation Planning
5. Build
6. QA Review
7. Security Review
8. DevOps and Release Review
9. Stakeholder/UAT Review
10. Outcome and Consequence Feedback
11. Retrospective and Learning Notes

The loop can be shortened for small exercises or expanded for advanced simulations.

---

## 1. Scenario Intake

The simulation begins with a business problem.

The initial prompt should feel like something a real stakeholder might say. It should not be perfectly written. It may include vague language, hidden assumptions, conflicting priorities, or missing details.

### Example Intake

> Our support team needs a better way to prioritize urgent customer issues. Right now everything comes in as a Case, but agents are missing important escalations. We need Salesforce to automatically identify high-risk Cases and make sure managers see them quickly.

### Goal

The learner should understand the broad business problem without being given a complete solution.

### Primary Agents

- Client Stakeholder
- Product Owner
- Business Analyst

### Learner Responsibilities

- identify what is unclear
- avoid jumping straight to implementation
- ask clarifying questions
- identify personas and business outcomes
- separate business need from assumed solution

### Possible Artifacts

- scenario brief
- initial assumptions
- stakeholder notes
- open questions

---

## 2. Requirements Clarification

The Business Analyst agent helps turn the vague intake into clearer requirements.

This stage should reveal whether the learner can ask useful questions before design begins.

### Key Activities

- identify personas
- define current process
- define desired future process
- gather data requirements
- identify edge cases
- define success criteria
- draft user stories
- write acceptance criteria

### Primary Agents

- Business Analyst
- Client Stakeholder
- Product Owner

### Learner Responsibilities

- ask follow-up questions
- challenge vague terms
- confirm what is in scope
- identify what can be deferred
- approve or revise user stories

### Example Questions

- What makes a Case high-risk?
- Who should be notified?
- How quickly does the notification need to happen?
- Is the priority based on customer tier, keywords, SLA status, product, or manual input?
- Should managers see a queue, a report, a notification, or a task?
- What should happen if the Case is already escalated?
- Are there compliance or audit requirements?

### Possible Artifacts

- user stories
- acceptance criteria
- process notes
- assumptions log
- out-of-scope list

---

## 3. Architecture and Tradeoff Review

The Technical Architect agent proposes one or more solution options.

The goal is not to always produce the most complex design. The goal is to reason through tradeoffs.

### Key Activities

- identify declarative options
- identify programmatic options
- evaluate Flow vs. Apex vs. platform feature
- review data model impacts
- review security implications
- review scalability
- review reporting needs
- document decision rationale

### Primary Agents

- Technical Architect
- Security Reviewer
- DevOps Agent
- Product Owner

### Learner Responsibilities

- compare solution options
- ask about consequences
- choose or modify the recommended design
- document the decision
- understand why alternatives were rejected

### Example Tradeoffs

- Flow is faster to build but may become difficult to maintain if logic grows.
- Apex offers control and testability but increases developer dependency.
- A report or dashboard may solve visibility without new automation.
- A custom object may provide auditability but adds data model complexity.
- Notifications may help managers, but too many notifications may create noise.

### Possible Artifacts

- solution options
- architecture decision record
- risk register
- dependency notes
- implementation recommendation

---

## 4. Implementation Planning

Before building, the learner and agents define the implementation plan.

The plan should be small enough to execute but detailed enough to review.

### Key Activities

- define metadata changes
- identify required fields, objects, Flows, Apex, LWCs, permission sets, or reports
- identify test data
- define unit test needs
- identify deployment dependencies
- confirm acceptance criteria coverage

### Primary Agents

- Salesforce Developer
- Technical Architect
- QA Agent
- DevOps Agent

### Learner Responsibilities

- approve the build plan
- identify missing dependencies
- keep scope controlled
- make sure implementation maps to requirements

### Possible Artifacts

- implementation checklist
- metadata change list
- test plan draft
- deployment dependency list

---

## 5. Build

The Developer agent assists with implementation.

In early versions of Claygentforce, this may be documentation-only or prompt-driven. Later versions may include actual Salesforce metadata, Apex, LWC, Flow definitions, or generated examples.

### Key Activities

- create or update Salesforce metadata
- write Apex or LWC when appropriate
- define Flow logic when appropriate
- create supporting permission sets
- create tests
- document implementation notes
- validate locally when possible

### Primary Agents

- Salesforce Developer
- Technical Architect

### Learner Responsibilities

- review generated work
- avoid blindly accepting AI output
- validate against requirements
- ask for simpler alternatives when needed
- ensure code and configuration are maintainable

### Possible Artifacts

- Apex classes
- Apex tests
- LWC files
- Flow design notes
- permission set notes
- metadata checklist
- implementation notes

---

## 6. QA Review

The QA agent validates whether the implementation satisfies acceptance criteria.

QA should not be treated as a rubber stamp. It should catch ambiguity, missing tests, and behavior that does not match the story.

### Key Activities

- review acceptance criteria
- write positive and negative test cases
- check edge cases
- review regression risk
- evaluate test coverage
- produce bug reports if needed

### Primary Agents

- QA Agent
- Business Analyst
- Salesforce Developer

### Learner Responsibilities

- verify test cases make sense
- fix unclear acceptance criteria
- respond to bugs
- decide whether issues block release

### Possible Artifacts

- QA test plan
- bug reports
- regression checklist
- UAT readiness notes

---

## 7. Security Review

The Security Reviewer agent evaluates access control, data exposure, and platform security.

Security should appear before production readiness, not after deployment.

### Key Activities

- review CRUD and FLS assumptions
- review record access
- review Apex sharing behavior
- review permission set requirements
- check for over-permissioning
- consider sensitive data exposure
- review audit needs

### Primary Agents

- Security Reviewer
- Technical Architect
- Salesforce Developer

### Learner Responsibilities

- explain who should access the feature
- identify least-privilege permissions
- respond to security findings
- adjust design or implementation as needed

### Possible Artifacts

- security review notes
- permission model
- risk findings
- mitigation plan

---

## 8. DevOps and Release Review

The DevOps agent checks whether the solution is ready to deploy.

This step reinforces release discipline and metadata dependency thinking.

### Key Activities

- identify deployment package contents
- validate dependencies
- confirm tests are passing
- define deployment order
- define pre-deployment steps
- define post-deployment validation
- define rollback or mitigation approach

### Primary Agents

- DevOps Agent
- Salesforce Developer
- Technical Architect
- QA Agent

### Learner Responsibilities

- confirm metadata completeness
- think through environment differences
- prepare validation steps
- decide whether release risk is acceptable

### Possible Artifacts

- deployment checklist
- release notes
- validation commands
- rollback notes
- environment readiness notes

---

## 9. Stakeholder / UAT Review

The stakeholder reviews whether the solution solves the original business problem.

This stage should test whether the learner built the right thing, not merely whether the implementation works.

### Key Activities

- present the solution
- compare behavior against business goals
- run UAT scenarios
- collect feedback
- identify gaps
- decide whether to accept, defer, or revise

### Primary Agents

- Client Stakeholder
- Product Owner
- Business Analyst
- QA Agent

### Learner Responsibilities

- explain the solution clearly
- avoid over-technical language when speaking to stakeholders
- respond to feedback
- distinguish defects from enhancement requests
- document deferred items

### Possible Artifacts

- UAT notes
- stakeholder feedback
- accepted stories
- deferred backlog items
- change requests

---

## 10. Outcome and Consequence Feedback

Claygentforce should provide consequence-based feedback.

The learner should see how earlier decisions affected later delivery.

### Feedback Should Include

- what went well
- what risks were avoided
- what friction appeared
- which decisions caused rework
- which questions should have been asked earlier
- which tradeoffs were reasonable
- which issues were realistic but acceptable

### Example Positive Outcomes

- requirements were clarified early, reducing rework
- simple declarative solution met the need
- security concerns were handled before release
- deployment checklist caught missing metadata
- stakeholder accepted the solution with minor feedback

### Example Negative Outcomes

- vague acceptance criteria caused QA confusion
- skipped security review exposed field access issues
- missing permission set delayed UAT
- overbuilt solution increased maintenance risk
- deployment failed because dependencies were missing
- stakeholder rejected the feature because the original business goal was misunderstood

### Primary Agents

- Technical Architect
- QA Agent
- Security Reviewer
- DevOps Agent
- Product Owner

---

## 11. Retrospective and Learning Notes

Each simulation should end with a short retrospective.

The goal is to turn the scenario into reusable learning.

### Key Activities

- summarize decisions
- identify lessons learned
- document mistakes
- capture improved questions
- record future enhancements
- update project docs if needed

### Learner Responsibilities

- reflect honestly
- identify what to practice next
- update documentation
- convert lessons into checklists or prompts

### Possible Artifacts

- retrospective notes
- lessons learned
- architecture decision records
- issues log entries
- prompt improvements

---

## Simulation Difficulty

The same loop can be run at different difficulty levels.

### Guided Mode

Agents provide more help, suggestions, explanations, and reminders.

Best for new learners or unfamiliar Salesforce topics.

### Standard Mode

Agents provide realistic support but expect the learner to make decisions.

Best for project practice.

### Hard Mode

Agents provide less guidance. Requirements are more ambiguous. Tradeoffs are less obvious. Stakeholders may disagree.

Best for technical architect preparation and advanced delivery practice.

---

## Minimum Viable Simulation

The first working version of this loop can be very simple.

A minimum viable simulation only needs:

1. a scenario prompt
2. a BA clarification step
3. an architect tradeoff step
4. a learner decision
5. a QA/security/devops review
6. outcome feedback
7. a short retrospective

This can happen entirely in Markdown and prompts before any UI or automation exists.

---

## First Example Scenario Candidate

The first Claygentforce scenario should be small, familiar, and useful for Salesforce architecture practice.

Suggested first scenario:

**Case Escalation and Manager Visibility**

A support team is missing urgent customer Cases. The learner must clarify escalation criteria, choose an automation and visibility approach, consider security and reporting, plan the build, and prepare for deployment.

This scenario is useful because it can involve:

- Case object
- queues
- priority logic
- Flow vs. Apex tradeoffs
- notifications
- reports or list views
- permission sets
- QA edge cases
- deployment dependencies
- stakeholder/UAT feedback

---

## Design Principle

Do not skip the loop.

Even when the implementation is small, Claygentforce should preserve the delivery flow:

> problem → requirements → architecture → build → review → release → consequences → learning

That flow is the product.