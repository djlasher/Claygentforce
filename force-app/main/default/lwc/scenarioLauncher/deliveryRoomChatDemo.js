import {
  CHOICE_REACTION_SCENARIOS,
  PLAYABLE_ROLE_IDS,
  QA_CHALLENGE_RESPONSES,
  QA_FOLLOW_UP_ACTIONS,
  QA_LEAD_ROLE_ID,
  REACTION_LABELS,
  ROLE_CHOICE_PROMPTS,
  ROLE_GROUPS,
  ROLE_INITIAL_MESSAGES,
  TECHNICAL_ARCHITECT_ROLE_ID,
  WAR_ROOM_METADATA
} from "./deliveryRoomScenario001Data";
import {
  getParticipantProfile,
  isSpeakerAvailableForRole
} from "./deliveryRoomParticipants";

export { buildDemoScoreSummary } from "./deliveryRoomAssessment";
export { DEFAULT_EXPANDED_ROLE_GROUP_IDS } from "./deliveryRoomScenario001Data";

export const getMessageDelay = (message) =>
  Math.min(1500 + message.text.length * 25, 3500);

export const getPromptDelay = (messages) => {
  const finalMessage = messages[messages.length - 1];
  const textLength = finalMessage?.text?.length || 0;

  return Math.min(1800 + textLength * 6, 2500);
};

export const getActiveRoleId = () => TECHNICAL_ARCHITECT_ROLE_ID;

export const isPlayableRoleId = (roleId) => PLAYABLE_ROLE_IDS.includes(roleId);

export const getWarRoomMetadata = () => WAR_ROOM_METADATA;

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

const buildChoiceButtons = (choices) =>
  choices.map((choice) => ({
    ...choice,
    ariaPressed: "false",
    cssClass: "choice-button"
  }));

const buildActionButtons = (actions) =>
  actions.map((action) => ({
    ...action,
    ariaPressed: "false",
    cssClass: "follow-up-button"
  }));

const buildChallengeButtons = (responses) =>
  responses.map((response) => ({
    ...response,
    ariaPressed: "false",
    cssClass: "challenge-response-button"
  }));

const ensureSentence = (text) => {
  if (!text) {
    return "";
  }

  return /[.!?]$/.test(text) ? text : `${text}.`;
};

const sentenceCase = (text) => {
  if (!text) {
    return "";
  }

  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
};

const formatLearnerDecisionText = (text) => {
  if (!text || text.startsWith("Decision:")) {
    return ensureSentence(text);
  }

  if (text.startsWith("I would ")) {
    return ensureSentence(`Decision: ${sentenceCase(text.slice(8))}`);
  }

  if (text.startsWith("I want to ")) {
    return ensureSentence(`Decision: ${sentenceCase(text.slice(10))}`);
  }

  return ensureSentence(`Decision: ${text}`);
};

const filterAvailableMessages = (messages, roleId) =>
  messages.filter((message) =>
    isSpeakerAvailableForRole(message.speaker, roleId)
  );

const getRunMessageReactionState = (message) => {
  if (message.reactionState || message.state) {
    return message.reactionState || message.state;
  }

  if (
    message.type === "finalResponse" ||
    message.type === "challengeReaction"
  ) {
    return "positive";
  }

  if (message.type === "teamChallenge") {
    return "concerned";
  }

  return undefined;
};

const normalizeMessage = ({
  key,
  speaker,
  text,
  type = "role",
  label = "Local demo message",
  learningNote,
  reactionState,
  learnerRoleId
}) => {
  const profile = getParticipantProfile(speaker, learnerRoleId);
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

export const buildInitialDemoMessages = (roleId = getActiveRoleId()) =>
  filterAvailableMessages(
    ROLE_INITIAL_MESSAGES[roleId] || ROLE_INITIAL_MESSAGES[getActiveRoleId()],
    roleId
  ).map((message, index) =>
    normalizeMessage({
      ...message,
      key: `demo-initial-${index}`,
      learnerRoleId: roleId
    })
  );

export const buildLearnerMessage = ({ key, text, label, roleId }) =>
  normalizeMessage({
    key,
    speaker: "You",
    text: formatLearnerDecisionText(text),
    type: "learner",
    label,
    learnerRoleId: roleId
  });

export const normalizeRunMessage = (
  message,
  keyPrefix,
  roleId = getActiveRoleId()
) =>
  normalizeMessage({
    key: `${keyPrefix}-${message.key}`,
    speaker: message.speaker,
    text: message.text,
    type: message.type === "learnerChoice" ? "learner" : "role",
    label: message.label,
    learningNote: message.learningNote,
    reactionState: getRunMessageReactionState(message),
    learnerRoleId: roleId
  });

const buildReactionMessages = (choiceId, roleId = getActiveRoleId()) => {
  const reactionScenario = CHOICE_REACTION_SCENARIOS[choiceId];

  if (!reactionScenario) {
    return undefined;
  }

  return filterAvailableMessages(reactionScenario.messages, roleId).map(
    (message, index) =>
      normalizeMessage({
        ...message,
        key: `demo-reaction-${choiceId}-${index}`,
        reactionState: message.state,
        label: "War Room reaction",
        learnerRoleId: roleId
      })
  );
};

const findById = (items, itemId) => items.find((item) => item.id === itemId);

const getRoleChoiceConfig = (roleId) =>
  ROLE_CHOICE_PROMPTS[roleId] || ROLE_CHOICE_PROMPTS[getActiveRoleId()];

export const getDemoChoiceLearnerMessage = (roleId, choiceId, runModel) => {
  const roleChoice = findById(getRoleChoiceConfig(roleId).choices, choiceId);

  return (
    roleChoice?.learnerMessage || runModel.activeChoiceDetail?.learnerMessage
  );
};

export const getDemoFollowUpActionLearnerMessage = (
  roleId,
  runModel,
  actionId
) => {
  if (roleId === QA_LEAD_ROLE_ID) {
    return findById(QA_FOLLOW_UP_ACTIONS, actionId)?.learnerMessage;
  }

  return runModel.activeFollowUpAction?.learnerMessage;
};

export const getDemoChallengeResponseLearnerMessage = (
  roleId,
  runModel,
  responseId
) => {
  if (roleId === QA_LEAD_ROLE_ID) {
    return findById(QA_CHALLENGE_RESPONSES, responseId)?.learnerMessage;
  }

  return runModel.activeChallengeResponse?.learnerMessage;
};

export const buildChoicePrompt = (runModel, roleId = getActiveRoleId()) => {
  const rolePrompt = getRoleChoiceConfig(roleId);

  return {
    type: "choice",
    title: rolePrompt.title,
    choices: buildChoiceButtons(rolePrompt.choices)
  };
};

export const buildFollowUpPrompt = (runModel, roleId = getActiveRoleId()) => {
  const actions =
    roleId === QA_LEAD_ROLE_ID
      ? buildActionButtons(QA_FOLLOW_UP_ACTIONS)
      : runModel.activeFollowUpActions;

  return {
    type: "followUp",
    title: "Which follow-up action do you take?",
    actions
  };
};

export const buildChallengePrompt = (runModel, roleId = getActiveRoleId()) => {
  const responses =
    roleId === QA_LEAD_ROLE_ID
      ? buildChallengeButtons(QA_CHALLENGE_RESPONSES)
      : runModel.activeChallengeResponses;

  return {
    type: "challenge",
    title: "How do you respond to the team challenge?",
    responses
  };
};

export const buildMessagesAfterChoice = (
  runModel,
  roleId = getActiveRoleId(),
  choiceId = runModel.activeChoiceDetail?.id
) =>
  buildReactionMessages(choiceId, roleId) ||
  runModel.selectedChatMessages
    .filter((message) =>
      ["agentFollowUp", "simulationNote"].includes(message.type)
    )
    .map((message) => normalizeRunMessage(message, "demo-choice", roleId));

export const buildMessagesAfterFollowUp = (
  runModel,
  roleId = getActiveRoleId()
) => {
  if (roleId === QA_LEAD_ROLE_ID) {
    return [
      normalizeMessage({
        key: "demo-follow-up-qa-architecture",
        speaker: "AR",
        text: "That gives architecture a usable QA gate. Keep the evidence tied to the exact Case behavior and persona assumptions we are releasing.",
        reactionState: "positive",
        label: "War Room follow-up",
        learnerRoleId: roleId
      }),
      normalizeMessage({
        key: "demo-follow-up-qa-product",
        speaker: "PO",
        text: "I can support that if the release-review language stays crisp: what passed, what remains at risk, and who owns the next step.",
        reactionState: "concerned",
        label: "War Room follow-up",
        learnerRoleId: roleId
      })
    ];
  }

  return runModel.selectedFollowUpChatMessages
    .filter((message) =>
      ["finalResponse", "teamChallenge"].includes(message.type)
    )
    .map((message) => normalizeRunMessage(message, "demo-follow-up", roleId));
};

export const buildMessagesAfterChallenge = (
  runModel,
  roleId = getActiveRoleId()
) => {
  if (roleId === QA_LEAD_ROLE_ID) {
    return [
      normalizeMessage({
        key: "demo-challenge-qa-closeout",
        speaker: "SIM",
        text: "That is a credible QA closeout. The room now has a bounded validation claim, an evidence standard, and a named path for unresolved release risk.",
        reactionState: "positive",
        label: "War Room closeout",
        learnerRoleId: roleId
      })
    ];
  }

  return runModel.selectedChallengeResponseMessages
    .filter((message) => message.type === "challengeReaction")
    .map((message) => normalizeRunMessage(message, "demo-challenge", roleId));
};
