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
  learningNote
}) => {
  const profile = getProfile(speaker);

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
    title: "Demo scoring preview",
    total,
    dimensions,
    strength:
      runModel.selectedTeamReview?.strength ||
      runModel.selectedDecisionQuality?.primarySignal,
    evidenceGap:
      runModel.selectedDecisionQuality?.evidenceGap ||
      runModel.selectedTeamReview?.watchOut,
    nextAction:
      runModel.selectedCloseoutNote?.nextStep || runModel.completedRunNextAction
  };
};
