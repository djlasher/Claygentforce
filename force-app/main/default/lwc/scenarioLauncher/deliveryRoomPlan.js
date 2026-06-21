import { ROLE_AGENT_KEYS } from "./deliveryRoomAgents";

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

const ROLE_AGENT_KEYS_BY_ROLE = {
  Architect: ROLE_AGENT_KEYS.ARCHITECT,
  "Business Analyst": ROLE_AGENT_KEYS.BUSINESS_ANALYST,
  DevOps: ROLE_AGENT_KEYS.DEVOPS,
  "Product Owner": ROLE_AGENT_KEYS.PRODUCT_OWNER,
  QA: ROLE_AGENT_KEYS.QA,
  Security: ROLE_AGENT_KEYS.SECURITY,
  "Support Manager": ROLE_AGENT_KEYS.SUPPORT_MANAGER
};

const getAgentKeyForSource = (source) =>
  SPEAKER_AGENT_KEYS[source?.speaker] ||
  ROLE_AGENT_KEYS_BY_ROLE[source?.role] ||
  ROLE_AGENT_KEYS.SIMULATOR;

export const derivePlanStage = ({
  activeChoiceDetail,
  activeFollowUpAction,
  activeChallengeResponse
}) => {
  if (activeChallengeResponse) {
    return "challenge-selected";
  }

  if (activeFollowUpAction) {
    return "follow-up-selected";
  }

  if (activeChoiceDetail) {
    return "choice-selected";
  }

  return "not-started";
};

const buildTask = ({ id, stage, source, taskName, context, resultKey }) => ({
  id,
  stage,
  agentKey: getAgentKeyForSource(source),
  taskName,
  context,
  resultKey
});

export const buildOrchestrationPlan = ({
  activeChoiceDetail,
  activeFollowUpAction,
  selectedRolePushback,
  activeChallengeResponse
}) => {
  const tasks = [];
  const currentPlanStage = derivePlanStage({
    activeChoiceDetail,
    activeFollowUpAction,
    activeChallengeResponse
  });

  if (activeChoiceDetail) {
    tasks.push(
      buildTask({
        id: "initial-role-follow-up",
        stage: "choice-selected",
        source: activeChoiceDetail.followUp,
        taskName: "produceInitialRoleFollowUp",
        context: {
          followUp: activeChoiceDetail.followUp
        },
        resultKey: "initialRoleFollowUp"
      }),
      buildTask({
        id: "coordinator-guidance",
        stage: "choice-selected",
        source: activeChoiceDetail.simulationNote,
        taskName: "produceSimulationNote",
        context: {
          simulationNote: activeChoiceDetail.simulationNote
        },
        resultKey: "simulationNote"
      })
    );
  }

  if (activeFollowUpAction) {
    tasks.push(
      buildTask({
        id: "follow-up-response",
        stage: "follow-up-selected",
        source: activeFollowUpAction.response,
        taskName: "produceFollowUpResponse",
        context: {
          response: activeFollowUpAction.response
        },
        resultKey: "followUpResponse"
      }),
      buildTask({
        id: "role-pushback",
        stage: "follow-up-selected",
        source: activeFollowUpAction.rolePushback,
        taskName: "produceRolePushback",
        context: {
          rolePushback: activeFollowUpAction.rolePushback
        },
        resultKey: "rolePushback"
      }),
      buildTask({
        id: "team-challenge-message",
        stage: "follow-up-selected",
        source: selectedRolePushback,
        taskName: "produceRolePushbackMessage",
        context: {
          rolePushback: selectedRolePushback
        },
        resultKey: "rolePushbackMessage"
      }),
      buildTask({
        id: "team-review",
        stage: "follow-up-selected",
        source: activeFollowUpAction.teamReview,
        taskName: "produceTeamReview",
        context: {
          teamReview: activeFollowUpAction.teamReview
        },
        resultKey: "teamReview"
      }),
      buildTask({
        id: "decision-quality",
        stage: "follow-up-selected",
        source: activeFollowUpAction.rolePushback,
        taskName: "produceDecisionQuality",
        context: {
          decisionQuality: activeFollowUpAction.decisionQuality
        },
        resultKey: "decisionQuality"
      })
    );
  }

  if (activeChallengeResponse) {
    tasks.push(
      buildTask({
        id: "challenge-reaction",
        stage: "challenge-selected",
        source: activeChallengeResponse.reaction,
        taskName: "produceChallengeReaction",
        context: {
          reaction: activeChallengeResponse.reaction
        },
        resultKey: "challengeReaction"
      }),
      buildTask({
        id: "closeout-note",
        stage: "challenge-selected",
        source: activeChallengeResponse.reaction,
        taskName: "produceCloseoutNote",
        context: {
          closeoutNote: activeChallengeResponse.closeoutNote
        },
        resultKey: "closeoutNote"
      })
    );
  }

  return {
    stage: currentPlanStage,
    tasks
  };
};

export const summarizeOrchestrationPlan = (plan) =>
  plan.tasks.map(({ stage, agentKey, taskName, resultKey }) => ({
    stage,
    agentKey,
    taskName,
    resultKey
  }));
