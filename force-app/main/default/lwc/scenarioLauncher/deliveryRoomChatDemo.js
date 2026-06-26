const ACTIVE_ROLE_ID = "technical-architect";

export const DEFAULT_EXPANDED_ROLE_GROUP_IDS = ["core-delivery"];

const ROLE_GROUPS = [
  {
    id: "core-delivery",
    title: "Core Delivery Team",
    roles: [
      {
        id: ACTIVE_ROLE_ID,
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
        id: "qa-lead",
        title: "QA Lead",
        description: "Drive validation coverage and evidence confidence.",
        status: "Coming soon",
        disabled: true
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

const ROLE_PROFILES = {
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
    roleTitle: "Architecture Reviewer",
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

const CHOICE_SCORE_PROFILES = {
  "flow-precedence": [24, 23, 18, 21],
  "permission-visibility": [21, 22, 20, 20],
  "list-view-accuracy": [20, 22, 23, 19],
  "stakeholder-tradeoff": [19, 18, 25, 20],
  "release-readiness": [21, 20, 21, 25],
  "regression-risk": [23, 24, 18, 22]
};

const REACTION_LABELS = {
  positive: "Positive",
  concerned: "Concerned",
  blocked: "Blocked",
  neutral: "Neutral"
};

const CHOICE_REACTION_SCENARIOS = {
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
    text: "My managers need a focused list they can trust, not another queue that mixes stale or already-closed work into the review path."
  },
  {
    speaker: "QA",
    text: "Before anyone calls this ready, I want evidence for precedence, clearing behavior, and list accuracy."
  },
  {
    speaker: "SE",
    text: "Visibility also has to come from normal Case sharing and the scenario permission set, not hidden admin access."
  },
  {
    speaker: "DO",
    text: "If we can bound the validation path, I can support a narrow release review."
  },
  {
    speaker: "SIM",
    text: "You're representing the Technical Architect role. What validation lens do you want the room to anchor on first?"
  }
];

export const getMessageDelay = (message) =>
  Math.min(1500 + message.text.length * 25, 3500);

export const getPromptDelay = (messages) => {
  const finalMessage = messages[messages.length - 1];
  const textLength = finalMessage?.text?.length || 0;

  return Math.min(1800 + textLength * 6, 2500);
};

export const getActiveRoleId = () => ACTIVE_ROLE_ID;

const buildDemoRoleOption = (role, selectedRoleId) => ({
  ...role,
  ariaPressed: role.id === selectedRoleId ? "true" : "false",
  cssClass: `demo-role-card${role.disabled ? " demo-role-card-disabled" : ""}${
    role.id === selectedRoleId ? " demo-role-card-selected" : ""
  }`
});

export const buildDemoRoleGroups = (expandedGroupIds, selectedRoleId) =>
  ROLE_GROUPS.map((group) => {
    const isExpanded = expandedGroupIds.includes(group.id);

    return {
      ...group,
      ariaExpanded: isExpanded ? "true" : "false",
      isExpanded,
      toggleLabel: isExpanded ? "Hide" : "Show",
      roles: group.roles.map((role) =>
        buildDemoRoleOption(role, selectedRoleId)
      )
    };
  });

const getProfile = (speaker) => ROLE_PROFILES[speaker] || ROLE_PROFILES.SIM;

const normalizeMessage = ({
  key,
  speaker,
  text,
  type = "role",
  label = "Local demo message",
  learningNote,
  reactionState
}) => {
  const profile = getProfile(speaker);
  const reactionLabel = REACTION_LABELS[reactionState];

  return {
    key,
    type,
    speaker,
    displayName: profile.displayName,
    roleTitle: profile.roleTitle,
    initials: profile.initials,
    text,
    label,
    learningNote,
    hasReaction: Boolean(reactionLabel),
    reactionLabel,
    reactionCssClass: reactionLabel
      ? `demo-reaction-badge demo-reaction-${reactionState}`
      : "",
    cssClass: `demo-chat-message${
      type === "learner" ? " demo-chat-message-learner" : ""
    }`
  };
};

export const buildInitialDemoMessages = () =>
  INITIAL_MESSAGES.map((message, index) =>
    normalizeMessage({
      ...message,
      key: `demo-initial-${index}`
    })
  );

export const buildLearnerMessage = ({ key, text, label }) =>
  normalizeMessage({
    key,
    speaker: "You",
    text,
    type: "learner",
    label
  });

export const normalizeRunMessage = (message, keyPrefix) =>
  normalizeMessage({
    key: `${keyPrefix}-${message.key}`,
    speaker: message.speaker,
    text: message.text,
    type: message.type === "learnerChoice" ? "learner" : "role",
    label: message.label,
    learningNote: message.learningNote
  });

const buildReactionMessages = (choiceId) =>
  CHOICE_REACTION_SCENARIOS[choiceId]?.messages.map((message, index) =>
    normalizeMessage({
      ...message,
      key: `demo-reaction-${choiceId}-${index}`,
      reactionState: message.state,
      label: "War Room reaction"
    })
  );

export const buildChoicePrompt = (runModel) => {
  const learnerPrompt = runModel.chatPreviewMessages.find(
    (message) => message.choices
  );

  return {
    type: "choice",
    title: "What do you want to inspect first?",
    choices: learnerPrompt?.choices || []
  };
};

export const buildFollowUpPrompt = (runModel) => ({
  type: "followUp",
  title: "Which follow-up action do you take?",
  actions: runModel.activeFollowUpActions
});

export const buildChallengePrompt = (runModel) => ({
  type: "challenge",
  title: "How do you respond to the team challenge?",
  responses: runModel.activeChallengeResponses
});

export const buildMessagesAfterChoice = (runModel) =>
  buildReactionMessages(runModel.activeChoiceDetail?.id) ||
  runModel.selectedChatMessages
    .filter((message) =>
      ["agentFollowUp", "simulationNote"].includes(message.type)
    )
    .map((message) => normalizeRunMessage(message, "demo-choice"));

export const buildMessagesAfterFollowUp = (runModel) =>
  runModel.selectedFollowUpChatMessages
    .filter((message) =>
      ["finalResponse", "teamChallenge"].includes(message.type)
    )
    .map((message) => normalizeRunMessage(message, "demo-follow-up"));

export const buildMessagesAfterChallenge = (runModel) =>
  runModel.selectedChallengeResponseMessages
    .filter((message) => message.type === "challengeReaction")
    .map((message) => normalizeRunMessage(message, "demo-challenge"));

export const buildDemoScoreSummary = (runModel, runState) => {
  if (!runModel.hasCompletedRun) {
    return undefined;
  }

  const baseScores = CHOICE_SCORE_PROFILES[runState.selectedChoiceId] || [
    20, 20, 20, 20
  ];
  const reactionScenario =
    CHOICE_REACTION_SCENARIOS[runState.selectedChoiceId] || {};
  const targetedValidationBonus =
    runState.selectedChallengeResponseId?.includes("targeted-validation")
      ? 2
      : 0;
  const dimensions = [
    {
      label: "Decision quality",
      points: Math.min(25, baseScores[0] + targetedValidationBonus)
    },
    {
      label: "Evidence coverage",
      points: Math.min(25, baseScores[1] + targetedValidationBonus)
    },
    {
      label: "Stakeholder alignment",
      points: baseScores[2]
    },
    {
      label: "Release readiness",
      points: Math.min(25, baseScores[3] + targetedValidationBonus)
    }
  ];
  const total = dimensions.reduce(
    (sum, dimension) => sum + dimension.points,
    0
  );

  return {
    title: "War Room Assessment",
    total,
    confidenceLabel: "Overall Delivery Confidence",
    confidencePercent: reactionScenario.confidence || total,
    dimensions,
    sentiment: (reactionScenario.sentiment || []).map((item) => {
      const profile = getProfile(item.speaker);
      const reactionLabel = REACTION_LABELS[item.state];

      return {
        key: `${item.speaker}-${item.state}`,
        name: profile.roleTitle,
        person: profile.displayName,
        state: reactionLabel,
        cssClass: `demo-reaction-badge demo-reaction-${item.state}`
      };
    }),
    strength:
      reactionScenario.strength ||
      runModel.selectedTeamReview?.strength ||
      runModel.selectedDecisionQuality?.primarySignal,
    evidenceGap:
      reactionScenario.riskArea ||
      runModel.selectedDecisionQuality?.evidenceGap ||
      runModel.selectedTeamReview?.watchOut,
    nextAction:
      reactionScenario.nextAction ||
      runModel.selectedCloseoutNote?.nextStep ||
      runModel.completedRunNextAction
  };
};
