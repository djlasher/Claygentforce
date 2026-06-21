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

const normalizeRoleMessage = (source, defaults = {}, agentKey) => ({
  ...source,
  agentKey: agentKey || getAgentKeyForSource(source),
  label: defaults.label,
  type: defaults.type,
  cssClass: defaults.cssClass
});

const buildRolePushbackMessageSource = (rolePushback = {}) => {
  const messageSource = { ...rolePushback };
  delete messageSource.challengeResponses;
  return messageSource;
};

const inferAgentKeyFromContext = (context = {}) =>
  getAgentKeyForSource(
    context.followUp ||
      context.simulationNote ||
      context.response ||
      context.rolePushback ||
      context.reaction ||
      context.source
  );

const commonRoleAgentHandlers = {
  produceInitialRoleFollowUp: ({ context, agentKey }) =>
    normalizeRoleMessage(
      context.followUp,
      TASK_DEFAULTS.produceInitialRoleFollowUp,
      agentKey
    ),
  produceFollowUpResponse: ({ context, agentKey }) =>
    normalizeRoleMessage(
      context.response,
      TASK_DEFAULTS.produceFollowUpResponse,
      agentKey
    ),
  produceRolePushback: ({ context, agentKey }) => ({
    ...context.rolePushback,
    agentKey
  }),
  produceRolePushbackMessage: ({ context, agentKey }) => {
    const rolePushbackMessageSource = buildRolePushbackMessageSource(
      context.rolePushback
    );

    return {
      ...normalizeRoleMessage(
        rolePushbackMessageSource,
        TASK_DEFAULTS.produceRolePushback,
        agentKey
      ),
      text: rolePushbackMessageSource.challenge,
      learningNote: `Risk if ignored: ${rolePushbackMessageSource.riskIfIgnored}`
    };
  },
  produceChallengeReaction: ({ context, agentKey }) =>
    normalizeRoleMessage(
      context.reaction,
      TASK_DEFAULTS.produceChallengeReaction,
      agentKey
    ),
  produceCloseoutNote: ({ context }) => context.closeoutNote,
  produceTeamReview: ({ context }) => context.teamReview,
  produceDecisionQuality: ({ context }) => context.decisionQuality
};

const coordinatorAgentHandlers = {
  ...commonRoleAgentHandlers,
  produceSimulationNote: ({ context, agentKey }) =>
    normalizeRoleMessage(
      {
        ...context.simulationNote,
        role: "Delivery Coordinator"
      },
      TASK_DEFAULTS.produceSimulationNote,
      agentKey
    )
};

const createLocalRoleAgent = (handlers = {}) => ({
  ...commonRoleAgentHandlers,
  ...handlers
});

const LOCAL_ROLE_AGENTS = {
  [ROLE_AGENT_KEYS.ARCHITECT]: createLocalRoleAgent(),
  [ROLE_AGENT_KEYS.BUSINESS_ANALYST]: createLocalRoleAgent(),
  [ROLE_AGENT_KEYS.DEVOPS]: createLocalRoleAgent(),
  [ROLE_AGENT_KEYS.PRODUCT_OWNER]: createLocalRoleAgent(),
  [ROLE_AGENT_KEYS.QA]: createLocalRoleAgent(),
  [ROLE_AGENT_KEYS.SECURITY]: createLocalRoleAgent(),
  [ROLE_AGENT_KEYS.SIMULATOR]: createLocalRoleAgent(coordinatorAgentHandlers),
  [ROLE_AGENT_KEYS.SUPPORT_MANAGER]: createLocalRoleAgent()
};

const runFallbackTask = ({ context = {} }) =>
  context.source || context.response || context.followUp || {};

export const runRoleAgentTask = ({ agentKey, taskName, context = {} }) => {
  const resolvedAgentKey = agentKey || inferAgentKeyFromContext(context);
  const roleAgent =
    LOCAL_ROLE_AGENTS[resolvedAgentKey] ||
    LOCAL_ROLE_AGENTS[ROLE_AGENT_KEYS.SIMULATOR];
  const taskHandler = roleAgent[taskName];

  if (!taskHandler) {
    return runFallbackTask({ context });
  }

  return taskHandler({
    context,
    agentKey: resolvedAgentKey
  });
};
