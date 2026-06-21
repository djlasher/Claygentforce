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

const buildTask = ({ id, source, taskName, context, resultKey }) => ({
  id,
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

  if (activeChoiceDetail) {
    tasks.push(
      buildTask({
        id: "initial-role-follow-up",
        source: activeChoiceDetail.followUp,
        taskName: "produceInitialRoleFollowUp",
        context: {
          followUp: activeChoiceDetail.followUp
        },
        resultKey: "initialRoleFollowUp"
      }),
      buildTask({
        id: "simulation-note",
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
        source: activeFollowUpAction.response,
        taskName: "produceFollowUpResponse",
        context: {
          response: activeFollowUpAction.response
        },
        resultKey: "followUpResponse"
      }),
      buildTask({
        id: "role-pushback",
        source: activeFollowUpAction.rolePushback,
        taskName: "produceRolePushback",
        context: {
          rolePushback: activeFollowUpAction.rolePushback
        },
        resultKey: "rolePushback"
      }),
      buildTask({
        id: "team-challenge-message",
        source: selectedRolePushback,
        taskName: "produceRolePushbackMessage",
        context: {
          rolePushback: selectedRolePushback
        },
        resultKey: "rolePushbackMessage"
      }),
      buildTask({
        id: "team-review",
        source: activeFollowUpAction.teamReview,
        taskName: "produceTeamReview",
        context: {
          teamReview: activeFollowUpAction.teamReview
        },
        resultKey: "teamReview"
      }),
      buildTask({
        id: "decision-quality",
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
        source: activeChallengeResponse.reaction,
        taskName: "produceChallengeReaction",
        context: {
          reaction: activeChallengeResponse.reaction
        },
        resultKey: "challengeReaction"
      }),
      buildTask({
        id: "closeout-note",
        source: activeChallengeResponse.reaction,
        taskName: "produceCloseoutNote",
        context: {
          closeoutNote: activeChallengeResponse.closeoutNote
        },
        resultKey: "closeoutNote"
      })
    );
  }

  return tasks;
};

export const executeOrchestrationPlan = ({ plan, runRoleAgentTask }) =>
  plan.reduce(
    (results, task) => ({
      ...results,
      [task.resultKey]: runRoleAgentTask({
        agentKey: task.agentKey,
        taskName: task.taskName,
        context: task.context
      })
    }),
    {}
  );
