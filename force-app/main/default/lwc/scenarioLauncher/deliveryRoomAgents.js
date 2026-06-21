export const ROLE_AGENT_KEYS = {
  ARCHITECT: "architect",
  BUSINESS_ANALYST: "businessAnalyst",
  DEVOPS: "devOps",
  PRODUCT_OWNER: "productOwner",
  QA: "qa",
  SECURITY: "security",
  SIMULATOR: "simulator",
  SUPPORT_MANAGER: "supportManager"
};

const SPEAKER_AGENT_KEYS = {
  AR: ROLE_AGENT_KEYS.ARCHITECT,
  BA: ROLE_AGENT_KEYS.BUSINESS_ANALYST,
  DO: ROLE_AGENT_KEYS.DEVOPS,
  PO: ROLE_AGENT_KEYS.PRODUCT_OWNER,
  QA: ROLE_AGENT_KEYS.QA,
  SE: ROLE_AGENT_KEYS.SECURITY,
  SIM: ROLE_AGENT_KEYS.SIMULATOR,
  SM: ROLE_AGENT_KEYS.SUPPORT_MANAGER
};

const TASK_DEFAULTS = {
  produceInitialRoleFollowUp: {
    label: "Predefined response",
    type: "agentFollowUp",
    cssClass: "chat-message chat-message-response"
  },
  produceSimulationNote: {
    label: "Local coordinator task",
    type: "simulationNote",
    cssClass: "chat-message"
  },
  produceFollowUpResponse: {
    label: "Final predefined response",
    type: "finalResponse",
    cssClass: "chat-message chat-message-response"
  },
  produceRolePushback: {
    label: "Team Challenge",
    type: "teamChallenge",
    cssClass: "chat-message chat-message-response"
  },
  produceChallengeReaction: {
    label: "Delivery-room reaction",
    type: "challengeReaction",
    cssClass: "chat-message chat-message-response"
  }
};

const getAgentKeyForSource = (source) =>
  SPEAKER_AGENT_KEYS[source?.speaker] || ROLE_AGENT_KEYS.SIMULATOR;

const normalizeRoleMessage = (source, defaults = {}) => ({
  ...source,
  agentKey: getAgentKeyForSource(source),
  label: defaults.label,
  type: defaults.type,
  cssClass: defaults.cssClass
});

const buildRolePushbackMessageSource = (rolePushback = {}) => {
  const messageSource = { ...rolePushback };
  delete messageSource.challengeResponses;
  return messageSource;
};

// Deterministic local stand-in for future Agentforce/Data Cloud-backed role tasks.
export const runRoleAgentTask = ({ taskName, context = {} }) => {
  switch (taskName) {
    case "produceInitialRoleFollowUp":
      return normalizeRoleMessage(
        context.followUp,
        TASK_DEFAULTS.produceInitialRoleFollowUp
      );
    case "produceSimulationNote":
      return normalizeRoleMessage(
        {
          ...context.simulationNote,
          role: "Delivery Coordinator"
        },
        TASK_DEFAULTS.produceSimulationNote
      );
    case "produceFollowUpResponse":
      return normalizeRoleMessage(
        context.response,
        TASK_DEFAULTS.produceFollowUpResponse
      );
    case "produceRolePushback":
      return {
        ...context.rolePushback,
        agentKey: getAgentKeyForSource(context.rolePushback)
      };
    case "produceRolePushbackMessage": {
      const rolePushbackMessageSource = buildRolePushbackMessageSource(
        context.rolePushback
      );
      return {
        ...normalizeRoleMessage(
          rolePushbackMessageSource,
          TASK_DEFAULTS.produceRolePushback
        ),
        text: rolePushbackMessageSource.challenge,
        learningNote: `Risk if ignored: ${rolePushbackMessageSource.riskIfIgnored}`
      };
    }
    case "produceChallengeReaction":
      return normalizeRoleMessage(
        context.reaction,
        TASK_DEFAULTS.produceChallengeReaction
      );
    case "produceCloseoutNote":
      return context.closeoutNote;
    case "produceTeamReview":
      return context.teamReview;
    case "produceDecisionQuality":
      return context.decisionQuality;
    default:
      return context.source;
  }
};
