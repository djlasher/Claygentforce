const ACTIVE_ROLE_ID = "technical-architect";

const ROLE_OPTIONS = [
  {
    id: ACTIVE_ROLE_ID,
    title: "Technical Architect",
    description: "Lead the delivery-room path through architecture tradeoffs.",
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
    speaker: "PO",
    text: "We need manager visibility for high-risk Cases quickly, but the release still has to be explainable."
  },
  {
    speaker: "SM",
    text: "My team needs a focused list they can trust before escalations slip past us."
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
    speaker: "AR",
    text: "As Technical Architect, choose the first validation lens for the room."
  }
];

export const CHAT_DEMO_DELAYS = {
  message: 420,
  prompt: 560
};

export const getActiveRoleId = () => ACTIVE_ROLE_ID;

export const buildDemoRoleOptions = (selectedRoleId) =>
  ROLE_OPTIONS.map((role) => ({
    ...role,
    ariaPressed: role.id === selectedRoleId ? "true" : "false",
    cssClass: `demo-role-card${role.disabled ? " demo-role-card-disabled" : ""}${
      role.id === selectedRoleId ? " demo-role-card-selected" : ""
    }`
  }));

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
