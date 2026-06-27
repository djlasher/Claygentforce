// Static Scenario 001 War Room data. Keep deterministic content here so the demo helpers stay focused on orchestration.
export const TECHNICAL_ARCHITECT_ROLE_ID = "technical-architect";
export const QA_LEAD_ROLE_ID = "qa-lead";
export const PLAYABLE_ROLE_IDS = [TECHNICAL_ARCHITECT_ROLE_ID, QA_LEAD_ROLE_ID];

export const DEFAULT_EXPANDED_ROLE_GROUP_IDS = ["core-delivery"];

export const ROLE_GROUPS = [
  {
    id: "core-delivery",
    title: "Core Delivery Team",
    roles: [
      {
        id: TECHNICAL_ARCHITECT_ROLE_ID,
        title: "Technical Architect",
        description: "Lead the war-room path through architecture tradeoffs.",
        status: "Active",
        disabled: false
      },
      {
        id: "business-analyst",
        title: "Business Analyst",
        description: "Shape intake, criteria, and stakeholder language.",
        status: "Coming soon",
        disabled: true
      },
      {
        id: QA_LEAD_ROLE_ID,
        title: "QA Lead",
        description: "Drive validation coverage and evidence confidence.",
        status: "Active",
        disabled: false
      },
      {
        id: "devops-lead",
        title: "DevOps Lead",
        description: "Pressure-test release readiness and deployability.",
        status: "Coming soon",
        disabled: true
      },
      {
        id: "security-reviewer",
        title: "Security Reviewer",
        description: "Review access, sharing, and visibility assumptions.",
        status: "Coming soon",
        disabled: true
      },
      {
        id: "delivery-coordinator",
        title: "Delivery Coordinator",
        description: "Keep decisions, evidence, and next steps moving.",
        status: "Coming soon",
        disabled: true
      }
    ]
  },
  {
    id: "architecture-platform",
    title: "Architecture & Platform",
    roles: [
      {
        id: "solution-architect",
        title: "Solution Architect",
        description: "Review solution shape and implementation fit.",
        status: "Coming soon",
        disabled: true
      },
      {
        id: "enterprise-architect",
        title: "Enterprise Architect",
        description: "Connect delivery choices to enterprise standards.",
        status: "Coming soon",
        disabled: true
      },
      {
        id: "integration-architect",
        title: "Integration Architect",
        description: "Pressure-test system boundaries and handoffs.",
        status: "Coming soon",
        disabled: true
      },
      {
        id: "data-architect",
        title: "Data Architect",
        description: "Review data model, quality, and migration risk.",
        status: "Coming soon",
        disabled: true
      }
    ]
  },
  {
    id: "salesforce-specialists",
    title: "Salesforce Specialists",
    roles: [
      {
        id: "agentforce-engineer",
        title: "Agentforce Engineer",
        description: "Plan future agent-backed role execution.",
        status: "Coming soon",
        disabled: true
      },
      {
        id: "data-cloud-architect",
        title: "Data Cloud Architect",
        description: "Map future data-backed evaluation signals.",
        status: "Coming soon",
        disabled: true
      },
      {
        id: "omnistudio-developer",
        title: "OmniStudio Developer",
        description: "Assess guided experience and automation fit.",
        status: "Coming soon",
        disabled: true
      },
      {
        id: "service-cloud-consultant",
        title: "Service Cloud Consultant",
        description: "Review support operations and Case experience.",
        status: "Coming soon",
        disabled: true
      },
      {
        id: "experience-cloud-consultant",
        title: "Experience Cloud Consultant",
        description: "Evaluate external user experience implications.",
        status: "Coming soon",
        disabled: true
      },
      {
        id: "revenue-cloud-consultant",
        title: "Revenue Cloud Consultant",
        description: "Assess revenue-process impact when relevant.",
        status: "Coming soon",
        disabled: true
      }
    ]
  },
  {
    id: "stakeholders-leadership",
    title: "Stakeholders & Leadership",
    roles: [
      {
        id: "product-owner",
        title: "Product Owner",
        description: "Balance scope, outcomes, and stakeholder clarity.",
        status: "Coming soon",
        disabled: true
      },
      {
        id: "project-manager",
        title: "Project Manager",
        description: "Track readiness, risk, ownership, and timing.",
        status: "Coming soon",
        disabled: true
      },
      {
        id: "client-executive",
        title: "Client Executive",
        description: "Frame business urgency and sponsor expectations.",
        status: "Coming soon",
        disabled: true
      },
      {
        id: "operations-manager",
        title: "Operations Manager",
        description: "Represent operational adoption and usability.",
        status: "Coming soon",
        disabled: true
      }
    ]
  }
];

export const ROLE_PROFILES = {
  PO: {
    displayName: "Maya Chen",
    roleTitle: "Product Owner",
    initials: "MC"
  },
  SM: {
    displayName: "Jordan Ellis",
    roleTitle: "Support Manager",
    initials: "JE"
  },
  QA: {
    displayName: "Priya Shah",
    roleTitle: "QA Lead",
    initials: "PS"
  },
  CS: {
    displayName: "Dana Brooks",
    roleTitle: "VP Support Operations",
    initials: "DB"
  },
  AR: {
    displayName: "Marcus Reed",
    roleTitle: "Technical Architect",
    initials: "MR"
  },
  SE: {
    displayName: "Elena Torres",
    roleTitle: "Security Reviewer",
    initials: "ET"
  },
  DO: {
    displayName: "Sam Walker",
    roleTitle: "DevOps Lead",
    initials: "SW"
  },
  SIM: {
    displayName: "Riley Morgan",
    roleTitle: "Delivery Coordinator",
    initials: "RM"
  },
  You: {
    displayName: "You",
    roleTitle: "Technical Architect",
    initials: "TA"
  }
};

export const LEARNER_PROFILES = {
  [TECHNICAL_ARCHITECT_ROLE_ID]: {
    displayName: "You",
    roleTitle: "Technical Architect",
    initials: "TA"
  },
  [QA_LEAD_ROLE_ID]: {
    displayName: "You",
    roleTitle: "QA Lead",
    initials: "QA"
  }
};

export const NPC_ROLE_OWNERSHIP = {
  AR: {
    ownedRoleId: TECHNICAL_ARCHITECT_ROLE_ID
  },
  QA: {
    ownedRoleId: QA_LEAD_ROLE_ID
  }
};

export const CHOICE_SCORE_PROFILES = {
  "flow-precedence": [24, 23, 18, 21],
  "permission-visibility": [21, 22, 20, 20],
  "list-view-accuracy": [20, 22, 23, 19],
  "stakeholder-tradeoff": [19, 18, 25, 20],
  "release-readiness": [21, 20, 21, 25],
  "regression-risk": [23, 24, 18, 22]
};

export const QA_SCORE_PROFILES = {
  "qa-regression-matrix": [23, 24, 21, 22],
  "qa-permission-edge-testing": [22, 20, 23, 21],
  "qa-negative-path-testing": [23, 24, 22, 23],
  "qa-list-filter-validation": [21, 22, 21, 22],
  "qa-evidence-reproducibility": [22, 21, 25, 22],
  "qa-release-smoke-coverage": [22, 22, 23, 24]
};

export const REACTION_LABELS = {
  positive: "Positive",
  concerned: "Concerned",
  blocked: "Blocked",
  neutral: "Neutral"
};

export const TECHNICAL_ARCHITECT_CHOICES = [
  {
    id: "flow-precedence",
    label: "Confirm Flow precedence before release",
    learnerMessage:
      "Decision: Validate Flow precedence before declaring release confidence."
  },
  {
    id: "permission-visibility",
    label: "Verify manager access and sharing",
    learnerMessage:
      "Decision: Review permission boundaries before broader release confidence is declared."
  },
  {
    id: "list-view-accuracy",
    label: "Confirm the active review list stays accurate",
    learnerMessage:
      "Decision: Validate whether active Case review remains actionable for support managers."
  },
  {
    id: "stakeholder-tradeoff",
    label: "Clarify the release promise and open risks",
    learnerMessage:
      "Decision: Align stakeholder expectations around the narrow release promise and unresolved risks."
  },
  {
    id: "release-readiness",
    label: "Separate deploy readiness from user confidence",
    learnerMessage:
      "Decision: Treat release readiness as evidence-based confidence, not deployability alone."
  },
  {
    id: "regression-risk",
    label: "Test every escalation state change",
    learnerMessage:
      "Decision: Assess regression risk across Case escalation state transitions before release review."
  }
];

export const QA_CHOICES = [
  {
    id: "qa-regression-matrix",
    label: "Test every escalation state change before release",
    learnerMessage:
      "Decision: Anchor QA confidence in a regression matrix across high-risk, clearing, and closed Case paths."
  },
  {
    id: "qa-permission-edge-testing",
    label: "Verify manager access and sharing edge cases",
    learnerMessage:
      "Decision: Verify manager visibility through realistic permission boundaries before approval."
  },
  {
    id: "qa-negative-path-testing",
    label: "Prove stale and closed Cases stay out",
    learnerMessage:
      "Decision: Validate negative paths so false positives and stale risk flags do not pass release review."
  },
  {
    id: "qa-list-filter-validation",
    label: "Confirm the active review list stays accurate",
    learnerMessage:
      "Decision: Confirm the support manager list remains accurate, current, and operationally usable."
  },
  {
    id: "qa-evidence-reproducibility",
    label: "Capture repeatable proof for each must-pass test",
    learnerMessage:
      "Decision: Require evidence that another reviewer can reproduce without privileged assumptions."
  },
  {
    id: "qa-release-smoke-coverage",
    label: "Define the must-pass release smoke test",
    learnerMessage:
      "Decision: Define must-pass smoke coverage for release review and separate it from exploratory QA."
  }
];

export const ROLE_CHOICE_PROMPTS = {
  [TECHNICAL_ARCHITECT_ROLE_ID]: {
    title: "What consulting decision do you make first?",
    choices: TECHNICAL_ARCHITECT_CHOICES
  },
  [QA_LEAD_ROLE_ID]: {
    title: "Where should QA establish confidence first?",
    choices: QA_CHOICES
  }
};

export const QA_FOLLOW_UP_ACTIONS = [
  {
    id: "qa-evidence-plan",
    label: "Define evidence plan",
    learnerMessage:
      "Decision: Define the required evidence, owner, and pass criteria before release approval."
  },
  {
    id: "qa-risk-owner",
    label: "Assign risk ownership",
    learnerMessage:
      "Decision: Assign ownership for unresolved validation risks before the release review proceeds."
  },
  {
    id: "qa-smoke-gate",
    label: "Set smoke-test gate",
    learnerMessage:
      "Decision: Set a must-pass smoke-test gate and keep exploratory coverage outside the release blocker list."
  }
];

export const QA_CHALLENGE_RESPONSES = [
  {
    id: "qa-targeted-validation",
    label: "Convert concern to must-pass validation",
    learnerMessage:
      "Decision: Convert the concern into a must-pass validation step with an owner and evidence standard."
  },
  {
    id: "qa-owned-risk",
    label: "Log owned release risk",
    learnerMessage:
      "Decision: Track this as an owned release-review risk with a clear trigger for escalation."
  },
  {
    id: "qa-scope-guardrail",
    label: "Protect release scope",
    learnerMessage:
      "Decision: Protect the release scope by separating required validation from broader exploratory testing."
  }
];

export const CHOICE_REACTION_SCENARIOS = {
  "flow-precedence": {
    confidence: 82,
    sentiment: [
      { speaker: "QA", state: "positive" },
      { speaker: "SE", state: "concerned" },
      { speaker: "PO", state: "concerned" },
      { speaker: "DO", state: "neutral" },
      { speaker: "CS", state: "neutral" }
    ],
    messages: [
      {
        speaker: "QA",
        state: "positive",
        text: "That gives me confidence on automation ordering. If we prove the precedence paths first, QA has a real spine for the rest of the review."
      },
      {
        speaker: "SE",
        state: "concerned",
        text: "I support the automation focus, but access assumptions are still unresolved. A clean Flow does not prove the right managers can see the right Cases."
      },
      {
        speaker: "PO",
        state: "concerned",
        text: "This is defensible, but I need the validation path kept narrow. We cannot let precedence testing turn into a timeline sink."
      },
      {
        speaker: "DO",
        state: "neutral",
        text: "I can support this if the validation stays bounded and produces evidence we can carry into release review."
      }
    ],
    strength: "Strong architecture-first validation approach.",
    riskArea: "Security and manager-visibility assumptions remain open.",
    nextAction:
      "Pair the precedence matrix with a permission and list-view visibility check."
  },
  "permission-visibility": {
    confidence: 79,
    sentiment: [
      { speaker: "SE", state: "positive" },
      { speaker: "SM", state: "positive" },
      { speaker: "QA", state: "neutral" },
      { speaker: "PO", state: "concerned" },
      { speaker: "DO", state: "concerned" }
    ],
    messages: [
      {
        speaker: "SE",
        state: "positive",
        text: "Good. If visibility is wrong, the rest of the demo can look right for the wrong reasons."
      },
      {
        speaker: "SM",
        state: "positive",
        text: "That is exactly where my team will feel the pain. Managers need to trust what they can see without admin-only assumptions."
      },
      {
        speaker: "DO",
        state: "concerned",
        text: "This may slow the deploy path if we discover profile or sharing gaps late. I need the access checks framed as release blockers or deferrals."
      },
      {
        speaker: "PO",
        state: "concerned",
        text: "I agree with the risk, but we still need a business-facing answer on what is ready for this release."
      }
    ],
    strength: "Strong access-risk framing before release confidence.",
    riskArea:
      "Timeline and deploy readiness may become unclear if access gaps are discovered late.",
    nextAction:
      "Validate the scenario permission set and manager persona before claiming release readiness."
  },
  "list-view-accuracy": {
    confidence: 81,
    sentiment: [
      { speaker: "SM", state: "positive" },
      { speaker: "QA", state: "positive" },
      { speaker: "PO", state: "neutral" },
      { speaker: "SE", state: "concerned" },
      { speaker: "DO", state: "neutral" }
    ],
    messages: [
      {
        speaker: "SM",
        state: "positive",
        text: "That is the operational surface managers will judge first. If the list is noisy, they will stop trusting the scenario."
      },
      {
        speaker: "QA",
        state: "positive",
        text: "List accuracy is useful because it forces us to test active, closed, and clean-path Cases against visible behavior."
      },
      {
        speaker: "SE",
        state: "concerned",
        text: "I still need to know who can see that list and why. Accuracy without access control is only half the answer."
      },
      {
        speaker: "PO",
        state: "neutral",
        text: "This helps the manager experience, but keep the release story tied back to the stakeholder ask."
      }
    ],
    strength: "Strong operational validation focus.",
    riskArea: "Access assumptions and stakeholder framing still need coverage.",
    nextAction: "Test list membership alongside manager persona visibility."
  },
  "stakeholder-tradeoff": {
    confidence: 76,
    sentiment: [
      { speaker: "PO", state: "positive" },
      { speaker: "CS", state: "positive" },
      { speaker: "QA", state: "concerned" },
      { speaker: "SE", state: "concerned" },
      { speaker: "DO", state: "neutral" }
    ],
    messages: [
      {
        speaker: "PO",
        state: "positive",
        text: "I appreciate protecting expectations. A narrow, honest release story is easier to defend than a broad claim we cannot prove."
      },
      {
        speaker: "CS",
        state: "positive",
        text: "That helps me explain what managers will actually get now versus what waits for later."
      },
      {
        speaker: "QA",
        state: "concerned",
        text: "My concern is validation depth just became secondary. We still need evidence before the room calls this trustworthy."
      },
      {
        speaker: "SE",
        state: "concerned",
        text: "And the access story cannot be reduced to messaging. We need proof that the right people can see the right records."
      }
    ],
    strength: "Strong stakeholder expectation management.",
    riskArea:
      "QA and Security confidence dropped because validation evidence is not yet anchored.",
    nextAction:
      "Convert the tradeoff into a scoped validation checklist with named unresolved risks."
  },
  "release-readiness": {
    confidence: 78,
    sentiment: [
      { speaker: "DO", state: "positive" },
      { speaker: "QA", state: "concerned" },
      { speaker: "CS", state: "concerned" },
      { speaker: "PO", state: "concerned" },
      { speaker: "SE", state: "neutral" }
    ],
    messages: [
      {
        speaker: "DO",
        state: "positive",
        text: "This helps me understand deploy confidence and package readiness. It gives release review a concrete lane."
      },
      {
        speaker: "QA",
        state: "concerned",
        text: "Deploy confidence is not behavior confidence. I still need proof the Flow, list, and clearing paths work in the org."
      },
      {
        speaker: "CS",
        state: "concerned",
        text: "I care less about deployment mechanics than whether managers can trust the review path on release day."
      },
      {
        speaker: "PO",
        state: "concerned",
        text: "We need customer trust before speed. Release readiness has to include what users will experience, not only what can be deployed."
      }
    ],
    strength: "Strong release governance instinct.",
    riskArea:
      "Business confidence and behavioral validation are still under pressure.",
    nextAction:
      "Treat deploy validation as one signal, then run focused Scenario 001 smoke tests."
  },
  "regression-risk": {
    confidence: 80,
    sentiment: [
      { speaker: "QA", state: "positive" },
      { speaker: "PO", state: "concerned" },
      { speaker: "DO", state: "neutral" },
      { speaker: "SE", state: "neutral" },
      { speaker: "CS", state: "concerned" }
    ],
    messages: [
      {
        speaker: "QA",
        state: "positive",
        text: "That is a strong quality move. State transitions are where stale flags and false confidence usually show up."
      },
      {
        speaker: "PO",
        state: "concerned",
        text: "I support the rigor, but we need to protect the timeline. Regression scope has to stay tied to the release promise."
      },
      {
        speaker: "CS",
        state: "concerned",
        text: "Managers still need a clear answer on what they can trust first. Please do not bury the business ask under test breadth."
      },
      {
        speaker: "DO",
        state: "neutral",
        text: "If regression coverage is prioritized, I need the must-pass rows separated from nice-to-have exploration."
      }
    ],
    strength: "Strong risk-control and quality orientation.",
    riskArea:
      "Stakeholder confidence may dip if regression scope feels too broad for the release window.",
    nextAction:
      "Define must-pass transition tests and explicitly defer lower-priority regression exploration."
  },
  "qa-regression-matrix": {
    confidence: 86,
    sentiment: [
      { speaker: "AR", state: "positive" },
      { speaker: "DO", state: "positive" },
      { speaker: "PO", state: "concerned" },
      { speaker: "SE", state: "neutral" },
      { speaker: "CS", state: "neutral" }
    ],
    messages: [
      {
        speaker: "AR",
        state: "positive",
        text: "That gives the room a credible quality frame. A regression matrix will show which Case paths are release-critical and which can stay exploratory."
      },
      {
        speaker: "DO",
        state: "positive",
        text: "I can use that in release review if the must-pass rows stay separated from broader QA coverage."
      },
      {
        speaker: "PO",
        state: "concerned",
        text: "The approach is strong, but please keep it tied to the release promise. We cannot let every edge case become a blocker."
      },
      {
        speaker: "SE",
        state: "neutral",
        text: "Include visibility paths in the matrix so access confidence is not treated as a separate assumption."
      }
    ],
    strength: "Strong QA governance and regression framing.",
    riskArea: "Scope can expand if must-pass and exploratory coverage blur.",
    nextAction:
      "Define must-pass Case states, expected field outcomes, persona visibility, and evidence owner."
  },
  "qa-permission-edge-testing": {
    confidence: 84,
    sentiment: [
      { speaker: "SE", state: "positive" },
      { speaker: "SM", state: "positive" },
      { speaker: "AR", state: "neutral" },
      { speaker: "DO", state: "concerned" },
      { speaker: "PO", state: "concerned" }
    ],
    messages: [
      {
        speaker: "SE",
        state: "positive",
        text: "Good QA instinct. If a support manager cannot see the right fields and list view through normal access, the scenario is not release-ready."
      },
      {
        speaker: "SM",
        state: "positive",
        text: "That is the risk my team will feel first. I need confidence from the manager persona, not an admin walkthrough."
      },
      {
        speaker: "DO",
        state: "concerned",
        text: "If permission testing finds gaps late, I need a clear call on whether they block release or become documented follow-up."
      },
      {
        speaker: "PO",
        state: "concerned",
        text: "Keep the testing narrow enough that we still have a business-facing release answer."
      }
    ],
    strength: "Strong persona-based access validation.",
    riskArea:
      "Late access findings could create release ambiguity without ownership.",
    nextAction:
      "Test support-manager visibility with the scenario permission set and document any blocking access gaps."
  },
  "qa-negative-path-testing": {
    confidence: 88,
    sentiment: [
      { speaker: "AR", state: "positive" },
      { speaker: "SE", state: "positive" },
      { speaker: "CS", state: "positive" },
      { speaker: "PO", state: "neutral" },
      { speaker: "DO", state: "neutral" }
    ],
    messages: [
      {
        speaker: "AR",
        state: "positive",
        text: "That is a mature validation move. Negative paths will expose false confidence before stakeholders see it."
      },
      {
        speaker: "SE",
        state: "positive",
        text: "I like that this tests what should not happen, not only the happy path. That is where access and clearing assumptions usually fail."
      },
      {
        speaker: "CS",
        state: "positive",
        text: "This gives me more confidence that managers will not be chasing stale or incorrectly flagged Cases."
      },
      {
        speaker: "DO",
        state: "neutral",
        text: "As long as the negative cases are release-critical, I can support making them part of the gate."
      }
    ],
    strength: "Strong false-positive and stale-state risk control.",
    riskArea: "Negative testing still needs a bounded pass/fail definition.",
    nextAction:
      "Identify the exact negative Case states that must not appear as active high-risk work."
  },
  "qa-list-filter-validation": {
    confidence: 83,
    sentiment: [
      { speaker: "SM", state: "positive" },
      { speaker: "CS", state: "positive" },
      { speaker: "SE", state: "concerned" },
      { speaker: "AR", state: "neutral" },
      { speaker: "PO", state: "neutral" }
    ],
    messages: [
      {
        speaker: "SM",
        state: "positive",
        text: "That is the right operational lens. Managers will judge the whole release by whether the list shows current work they can act on."
      },
      {
        speaker: "CS",
        state: "positive",
        text: "If QA proves the list is focused and current, I can explain the release value clearly."
      },
      {
        speaker: "SE",
        state: "concerned",
        text: "I still need visibility evidence attached to the list test. A correct list is not enough if the wrong users can see it."
      },
      {
        speaker: "AR",
        state: "neutral",
        text: "Tie the list assertions back to the Flow outcomes so the UI validation and automation validation support each other."
      }
    ],
    strength: "Strong operational usability validation.",
    riskArea: "Access control and automation evidence still need linkage.",
    nextAction:
      "Validate list membership, manager visibility, and Flow-driven Case state in one evidence path."
  },
  "qa-evidence-reproducibility": {
    confidence: 87,
    sentiment: [
      { speaker: "DO", state: "positive" },
      { speaker: "AR", state: "positive" },
      { speaker: "SE", state: "positive" },
      { speaker: "PO", state: "neutral" },
      { speaker: "CS", state: "neutral" }
    ],
    messages: [
      {
        speaker: "DO",
        state: "positive",
        text: "Reproducible evidence is exactly what release review needs. It keeps confidence from depending on one person's walkthrough."
      },
      {
        speaker: "AR",
        state: "positive",
        text: "That also improves consulting quality. Another reviewer should be able to repeat the path and reach the same conclusion."
      },
      {
        speaker: "SE",
        state: "positive",
        text: "Make sure the evidence names the persona and access model. That prevents hidden admin assumptions from creeping back in."
      },
      {
        speaker: "PO",
        state: "neutral",
        text: "This is solid. Keep the evidence concise enough that stakeholders can understand what has and has not been proven."
      }
    ],
    strength: "Strong evidence discipline and review repeatability.",
    riskArea:
      "Evidence can become too technical unless the release claim stays clear.",
    nextAction:
      "Capture repeatable steps, expected outcomes, persona, and unresolved assumptions for each must-pass test."
  },
  "qa-release-smoke-coverage": {
    confidence: 85,
    sentiment: [
      { speaker: "DO", state: "positive" },
      { speaker: "PO", state: "positive" },
      { speaker: "AR", state: "neutral" },
      { speaker: "SM", state: "concerned" },
      { speaker: "SE", state: "neutral" }
    ],
    messages: [
      {
        speaker: "DO",
        state: "positive",
        text: "That is release-friendly. A smoke gate gives us a clear go/no-go signal without pretending it replaces deeper regression testing."
      },
      {
        speaker: "PO",
        state: "positive",
        text: "I can defend that with stakeholders if the smoke coverage maps directly to the release promise."
      },
      {
        speaker: "SM",
        state: "concerned",
        text: "Please make sure the smoke test includes the manager's actual review path. Otherwise it may pass while the field team still struggles."
      },
      {
        speaker: "AR",
        state: "neutral",
        text: "Add one automation-clearing path so the smoke test covers more than the initial high-risk creation moment."
      }
    ],
    strength: "Strong release-gate clarity.",
    riskArea: "Smoke coverage may miss operational confidence if too narrow.",
    nextAction:
      "Define smoke coverage for manager visibility, list accuracy, Flow precedence, and one clearing path."
  }
};

const INITIAL_MESSAGES = [
  {
    speaker: "CS",
    text: "We need support managers to see high-risk Cases before escalations slip. Can we get a focused, trustworthy review path ready for this release?"
  },
  {
    speaker: "PO",
    text: "We can move quickly if the release story is narrow, explainable, and tied to observable Case behavior."
  },
  {
    speaker: "SM",
    text: "My managers need a focused review path they can trust, not a list that mixes stale or already-closed work into active Case review."
  },
  {
    speaker: "SE",
    text: "Visibility also has to come from normal Case sharing and the scenario permission set, not hidden admin access."
  },
  {
    speaker: "DO",
    text: "If we can bound the validation path, I can support a narrow release review."
  }
];

export const ROLE_INITIAL_MESSAGES = {
  [TECHNICAL_ARCHITECT_ROLE_ID]: [
    ...INITIAL_MESSAGES,
    {
      speaker: "QA",
      text: "Before anyone calls this ready, I want evidence for precedence, clearing behavior, and list accuracy."
    },
    {
      speaker: "SIM",
      text: "You're representing the Technical Architect role. What validation lens do you want the room to anchor on first?"
    }
  ],
  [QA_LEAD_ROLE_ID]: [
    ...INITIAL_MESSAGES,
    {
      speaker: "AR",
      text: "From the architecture side, I need QA confidence across Flow behavior, list visibility, access boundaries, and release evidence."
    },
    {
      speaker: "SIM",
      text: "You're representing QA leadership for this release review. Where do you want validation confidence established first?"
    }
  ]
};

export const WAR_ROOM_METADATA = [
  {
    label: "Scenario",
    value: "Case escalation visibility"
  },
  {
    label: "Pressure",
    value: "High"
  },
  {
    label: "Release window",
    value: "Friday review"
  },
  {
    label: "Mode",
    value: "Local deterministic"
  }
];
