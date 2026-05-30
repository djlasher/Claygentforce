Here’s the big-picture roadmap as I see it now:

Finish Scenario 001 smoke-test hardening
Run the checklist end-to-end, capture any weird org behavior, and decide what is truly MVP vs next increment.
Decide Flow v3 clearing behavior
Determine whether Flow should clear High Risk / High Risk Reason when priority drops, override is disabled, or the Case closes.
Implement Flow v3 clearing behavior if approved
Add safe before-save logic for “no longer matches criteria,” with careful handling for closed Cases and manual override.
Add Customer Tier escalation criteria
Decide how Customer_Tier\_\_c should affect risk, likely starting with Strategic customer Cases or Strategic + High Priority.
Update LWC for Customer Tier criteria
Make Scenario State, Flow Signal, and Delivery Team Channel explain when customer tier is influencing risk.
Add stale Case criteria metadata
Introduce whatever field or calculated logic we need to represent “stale” Cases, but only after defining the threshold clearly.
Implement stale Case Flow logic
Add stale Case criteria to Flow once the learning objective is clear: age threshold, status exceptions, and whether stale overrides priority.
Expand the smoke test checklist for each new risk path
Add test cases for customer tier, stale Cases, combined criteria, and regression around clearing behavior.
Improve the LWC state model
Move from simple state strings to a clearer internal state model like Closed, Override, PriorityRisk, StrategicRisk, StaleRisk, Clean.
Make Delivery Team Channel messages more scenario-aware
Add different role notes for each state so QA, Architect, Security, Product Owner, and Support Manager react differently.
Add message grouping or sequencing to the LWC
Make the channel feel more like a timeline: “Initial review,” “Automation impact,” “QA watch,” “Next decision.”
Add lightweight learner prompts in the LWC
Show read-only “Decision to consider” prompts like “Should this be Flow or Apex?” or “Should this clear automatically?”
Add a scenario outcome panel
Display “Current Outcome” and “Risk if shipped as-is” so the simulator starts teaching consequences.
Create scenario run logs
Add a runs/ entry for today’s implementation session showing what was built, tested, and learned.
Update Scenario 001 architecture docs
Capture the actual decisions: manual override precedence, no clearing yet, Customer Tier deferred, no Apex, no external AI.
Add a realistic stakeholder change request
Simulate a client saying something like “Strategic customers should always be visible to managers,” then evolve the build.
Create Scenario 001 “learner challenge mode”
Document the same scenario as a learner exercise where they must propose criteria, risks, tests, and deployment plan before seeing the build.
Add first static role-message dataset
Move channel messages into a clearer structure that can later be swapped for generated/agent-sourced messages.
Add scenario configuration constants
Keep LWC logic cleaner by centralizing role names, message labels, signal labels, and state definitions.
Refactor LWC only when it hurts
Do not over-refactor early, but eventually split state derivation, message selection, and display helpers.
Create Scenario 002
Start a second realistic Salesforce delivery problem, likely something like “Entitlement SLA breach visibility” or “Experience Cloud access request triage.”
Reuse the same metadata/UI pattern for Scenario 002
Build another small vertical slice: fields, Flow, layout/list view, permission set, LWC, smoke checklist.
Extract reusable scenario panel patterns
Once two scenarios exist, identify what should become reusable UI or shared conventions.
Create a scenario launcher/home LWC
A simple component that lists available scenarios, learning goals, and current implementation status.
Add static simulated team channel outside Case context
Build a generic delivery-room view that is not only tied to one Case record.
Add role-specific prompt files for Scenario 001
Create focused prompts for BA, Architect, QA, Security, DevOps, Support Manager, Product Owner, and Client Stakeholder.
Add agent run transcripts as repo artifacts
Let AI roles review Scenario 001 and save outputs into runs/ before integrating anything live.
Create first multi-role static simulation flow
Use stored role outputs to show how different roles respond to the same implementation decision.
Introduce “learner decision checkpoints”
Ask the learner to choose between options like clear vs preserve high-risk, Flow vs Apex, list view vs report/dashboard.
Add consequences to decisions
Later parts of the scenario should react to earlier decisions, such as QA finding missed edge cases or Security flagging over-broad access.
Add DevOps/release simulation artifacts
Include deployment plan, validation checklist, rollback plan, and post-deploy smoke test expectations.
Add QA simulation artifacts
Generate expected test cases, edge cases, regression risks, and UAT notes for each scenario.
Add Security simulation artifacts
Capture sharing, permission set, field visibility, and data exposure concerns.
Add Architecture Decision Records
Store real ADRs for decisions like “before-save Flow,” “manual override precedence,” and “defer clearing behavior.”
Add GitHub issue templates or scenario task templates
Make it easy to track future scenario increments as implementation issues.
Add CI validation eventually
Use GitHub Actions to run npm lint and possibly Salesforce validation when credentials/secrets are ready.
Add scratch org or dev org setup documentation
Make it possible to recreate the MVP from source without relying on memory.
Package or deploy plan cleanup
Decide whether this stays source-deploy only or eventually becomes unlocked-package friendly.
Explore Agentforce integration later
Create an Agentforce agent only after the static scenario/channel pattern is proven and the prompt/context boundaries are clear.
Use Agentforce for bounded role responses
First Agentforce use should likely generate or select role-specific guidance, not control metadata or make broad decisions.
Add Data Cloud only when there is a real scenario reason
Do not force Data Cloud early. Use it later for customer profile/tier/context if it supports a real learning path.
Add multi-agent orchestration outside Salesforce first if needed
Prototype agent coordination safely in repo artifacts or local scripts before wiring anything into Salesforce UI.
Connect agents to scenario artifacts
Agents should read scenario brief, acceptance criteria, architecture notes, QA/security reviews, and current metadata state.
Create “delivery room” orchestration
The eventual experience is multiple roles chiming in as a project team, not one chatbot answering questions.
Add learner scoring or reflection
Track whether the learner identified risks, asked clarifying questions, chose safe implementation paths, and tested edge cases.
Add progressive difficulty modes
Guided mode gives hints, standard mode gives less, hard mode introduces ambiguity and consequences.
Create portfolio-ready demo narrative
Shape Scenario 001 into a clean story you can show: problem, design, metadata, Flow, LWC, testing, tradeoffs, next steps.
Record a short demo walkthrough
Eventually capture a 3–5 minute demo showing the Case, Flow behavior, Scenario Signals, and Delivery Team Channel.
Prepare an interview/enablement explanation
Turn Claygentforce into a concise explanation for Salesforce TA/FDE/Agentforce conversations.
Keep expanding by vertical slices
The core pattern stays: small scenario, real Salesforce metadata, visible UI, role guidance, smoke tests, devlog, issue lessons, then expand.

The direction is: real Salesforce implementation first, simulated delivery-team intelligence second, live agents third. That keeps this grounded and portfolio-worthy instead of becoming a flashy chatbot shell.
