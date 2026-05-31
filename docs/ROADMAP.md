# Claygentforce Roadmap

The direction is: **real Salesforce implementation first, simulated delivery-team intelligence second, live agents third**.

That keeps Claygentforce grounded and portfolio-worthy instead of becoming a flashy chatbot shell.

---

1. **Finish Scenario 001 smoke-test hardening**  
   Run the checklist end-to-end, capture org quirks, and validate the current Flow v3 and LWC behavior together.

2. **Expand smoke-test coverage for all escalation paths**  
   Add regression validation for clearing behavior, Strategic customer escalation, stale escalation, and combined criteria.

3. **Add realistic stakeholder change requests**  
   Simulate requirement changes such as “Strategic customers should always remain visible” or “stale escalation is too noisy.”

4. **Introduce lightweight learner branching**  
   Begin adding non-persistent learner choice concepts so the simulator starts reacting to decisions.

5. **Add consequences to learner decisions**  
   Later parts of the scenario should react to earlier choices through QA concerns, governance risks, or operational side effects.

6. **Create Scenario 001 learner challenge mode**  
   Present the same scenario as a guided learner exercise where the learner proposes criteria, risks, tests, and implementation paths before seeing the built solution.

7. **Refactor LWC state/config structure only when it hurts**  
   Gradually separate state derivation, progression models, message datasets, and UI rendering helpers without over-engineering early.

8. **Extract reusable scenario panel patterns**  
   Once Scenario 001 stabilizes, identify what should become reusable conventions for future scenarios.

9. **Create Scenario 002**  
   Start a second realistic Salesforce delivery problem, likely something like “Entitlement SLA breach visibility” or “Experience Cloud access request triage.”

10. **Reuse the same metadata/UI pattern for Scenario 002**  
    Build another small vertical slice: fields, Flow, layout/list view, permission set, LWC, smoke checklist.

11. **Create a scenario launcher/home LWC**  
    Build a lightweight launcher that lists scenarios, learning goals, progression status, and implementation state.

12. **Add static simulated delivery-room views outside Case context**  
    Create a generalized delivery-room experience that is not tied only to a single Case record page.

13. **Add role-specific prompt files for Scenario 001**  
    Create focused prompts for BA, Architect, QA, Security, DevOps, Support Manager, Product Owner, and Client Stakeholder.

14. **Add agent run transcripts as repo artifacts**  
    Let AI roles review Scenario 001 and store outputs into `runs/` before integrating anything live.

15. **Create first multi-role static simulation flow**  
    Use stored role outputs to show how different delivery roles react to the same implementation decision.

16. **Add DevOps/release simulation artifacts**  
    Include deployment plans, rollback plans, validation expectations, and post-deploy smoke-test simulation.

17. **Add QA simulation artifacts**  
    Generate expected test cases, edge cases, regression risks, and UAT observations.

18. **Add Security simulation artifacts**  
    Capture sharing, permission set, field visibility, and data exposure concerns.

19. **Add GitHub issue templates or scenario task templates**  
    Make it easier to track future scenario increments as implementation work.

20. **Add CI validation eventually**  
    Use GitHub Actions to run linting and later Salesforce validation once credentials/secrets are ready.

21. **Add scratch org or dev org setup documentation**  
    Make it possible to recreate the MVP from source without relying on memory.

22. **Package or deployment-plan cleanup**  
    Decide whether the project remains source-deploy only or eventually becomes unlocked-package friendly.

23. **Explore Agentforce integration later**  
    Only after the static simulation pattern is stable and bounded.

24. **Use Agentforce for bounded role responses**  
    First Agentforce use should generate or select role-specific guidance, not control metadata or make broad decisions.

25. **Add Data Cloud only when there is a real scenario reason**  
    Use it later for customer profile/tier/context enrichment if it supports a real learning objective.

26. **Add multi-agent orchestration outside Salesforce first if needed**  
    Prototype orchestration safely in repo artifacts or local scripts before wiring anything into Salesforce UI.

27. **Connect agents to scenario artifacts**  
    Agents should read scenario brief, acceptance criteria, architecture notes, QA/security reviews, and current metadata state.

28. **Create delivery-room orchestration**  
    The eventual experience is multiple delivery roles collaborating dynamically, not one chatbot answering questions.

29. **Add learner scoring or reflection systems**  
    Track whether the learner identified risks, asked clarifying questions, chose safe implementation paths, and tested edge cases.

30. **Add progressive difficulty modes**  
    Guided mode gives hints, standard mode gives less, hard mode introduces ambiguity and consequences.

31. **Create portfolio/demo narrative later**  
    After the simulator mechanics stabilize, shape Scenario 001 into a concise implementation story for TA/FDE/Agentforce conversations.

32. **Record a short walkthrough later**  
    Eventually capture a concise walkthrough showing Flow behavior, simulation layers, and delivery-team interpretation.

33. **Prepare interview/enablement explanations**  
    Turn Claygentforce into a concise explanation artifact for Salesforce TA/FDE/Agentforce discussions.

34. **Keep expanding by vertical slices**  
    The core pattern remains: small scenario, real Salesforce metadata, visible UI, role guidance, smoke tests, run artifacts, issue lessons, then expand.