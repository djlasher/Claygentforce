import { runRoleAgentTask } from "./deliveryRoomAgents";
import {
  executeLocalOrchestrationPlan,
  getTaskOutput
} from "./deliveryRoomAdapter";
import {
  buildOrchestrationPlan,
  summarizeOrchestrationPlan
} from "./deliveryRoomPlan";

export const createInitialRunState = () => ({
  selectedChoiceId: undefined,
  selectedFollowUpActionId: undefined,
  selectedChallengeResponseId: undefined
});

export const resetRunState = () => createInitialRunState();

export const selectLearnerChoice = (runState, choiceId) => ({
  ...runState,
  selectedChoiceId: choiceId,
  selectedFollowUpActionId: undefined,
  selectedChallengeResponseId: undefined
});

export const selectFollowUpAction = (runState, actionId) => ({
  ...runState,
  selectedFollowUpActionId: actionId,
  selectedChallengeResponseId: undefined
});

export const selectChallengeResponse = (runState, responseId) => ({
  ...runState,
  selectedChallengeResponseId: responseId
});

const buildChoiceButtons = (choices, selectedChoiceId) =>
  choices.map((choice) => ({
    ...choice,
    ariaPressed: choice.id === selectedChoiceId ? "true" : "false",
    cssClass:
      choice.id === selectedChoiceId
        ? "choice-button choice-button-selected"
        : "choice-button"
  }));

const buildFollowUpButtons = (actions, selectedFollowUpActionId) =>
  actions.map((action) => ({
    ...action,
    ariaPressed: action.id === selectedFollowUpActionId ? "true" : "false",
    cssClass:
      action.id === selectedFollowUpActionId
        ? "follow-up-button follow-up-button-selected"
        : "follow-up-button"
  }));

const buildChallengeResponseButtons = (
  responses,
  selectedChallengeResponseId
) =>
  responses.map((response) => ({
    ...response,
    ariaPressed: response.id === selectedChallengeResponseId ? "true" : "false",
    cssClass:
      response.id === selectedChallengeResponseId
        ? "challenge-response-button challenge-response-button-selected"
        : "challenge-response-button"
  }));

const buildDecisionQualityRows = (decisionQuality) => {
  if (!decisionQuality) {
    return [];
  }

  return [
    {
      label: "Signal",
      value: decisionQuality.primarySignal
    },
    {
      label: "Evidence gap",
      value: decisionQuality.evidenceGap
    },
    {
      label: "Reviewer lens",
      value: decisionQuality.reviewerLens
    },
    {
      label: "Future evaluation note",
      value: decisionQuality.futureEvaluationNote
    }
  ];
};

const buildSimulationPhases = (catalog, activePhaseId, completedPhaseIds) =>
  catalog.simulationPhases.map((phase) => {
    const isActive = phase.id === activePhaseId;
    const isComplete = completedPhaseIds.includes(phase.id);

    return {
      ...phase,
      ariaCurrent: isActive ? "step" : null,
      cssClass: `phase-step${isActive ? " phase-step-active" : ""}${
        isComplete ? " phase-step-complete" : ""
      }`
    };
  });

const buildSelectedChallengeResponseMessages = (
  activeChallengeResponse,
  taskOutputs
) => {
  if (!activeChallengeResponse) {
    return [];
  }

  return [
    {
      key: "challenge-response-learner",
      speaker: "You",
      role: "Learner",
      label: "Challenge response",
      type: "learnerChallengeResponse",
      cssClass: "chat-message chat-message-learner",
      text: activeChallengeResponse.learnerMessage
    },
    {
      key: "challenge-response-reaction",
      ...taskOutputs.challengeReaction
    }
  ];
};

const buildSelectedFollowUpChatMessages = ({
  activeFollowUpAction,
  selectedRolePushback,
  activeChallengeResponses,
  selectedChallengeResponseMessages,
  taskOutputs
}) => {
  if (!activeFollowUpAction) {
    return [];
  }

  const messages = [
    {
      key: "selected-follow-up-action",
      speaker: "You",
      role: "Learner",
      label: "Selected follow-up action",
      type: "learnerFollowUpAction",
      cssClass: "chat-message chat-message-learner",
      text: activeFollowUpAction.learnerMessage
    },
    {
      key: "final-delivery-response",
      ...taskOutputs.followUpResponse
    }
  ];

  if (!selectedRolePushback) {
    return messages;
  }

  return messages
    .concat([
      {
        key: "team-challenge",
        ...taskOutputs.rolePushbackMessage
      },
      {
        key: "challenge-response-prompt",
        speaker: "You",
        role: "Learner prompt",
        label: "Local static simulation",
        type: "challengePrompt",
        cssClass: "chat-message",
        text: "How do you respond to this challenge?",
        challengeResponses: activeChallengeResponses
      }
    ])
    .concat(selectedChallengeResponseMessages);
};

const buildSelectedChatMessages = ({
  activeChoiceDetail,
  activeFollowUpActions,
  selectedFollowUpChatMessages,
  taskOutputs
}) => {
  if (!activeChoiceDetail) {
    return [];
  }

  return [
    {
      key: "selected-learner-choice",
      speaker: "You",
      role: "Learner",
      label: "Selected choice",
      type: "learnerChoice",
      cssClass: "chat-message chat-message-learner",
      text: activeChoiceDetail.learnerMessage
    },
    {
      key: "selected-follow-up",
      ...taskOutputs.initialRoleFollowUp
    },
    {
      key: "selected-simulation-note",
      ...taskOutputs.simulationNote
    },
    {
      key: "follow-up-action-prompt",
      speaker: "SIM",
      role: "Follow-up prompt",
      label: "Local static simulation",
      type: "followUpPrompt",
      cssClass: "chat-message",
      text: "Which follow-up action would you take?",
      followUpActions: activeFollowUpActions
    }
  ].concat(selectedFollowUpChatMessages);
};

export const buildRunModel = (runState, catalog) => {
  const session = catalog.simulationSession;
  const activeChoiceDetail = catalog.learnerChoiceDetails.find(
    (choice) => choice.id === runState.selectedChoiceId
  );
  const activeFollowUpAction = activeChoiceDetail?.followUpActions.find(
    (action) => action.id === runState.selectedFollowUpActionId
  );
  const plannedRolePushback = activeFollowUpAction?.rolePushback;
  const activeChallengeResponse = plannedRolePushback?.challengeResponses.find(
    (response) => response.id === runState.selectedChallengeResponseId
  );
  const orchestrationPlan = buildOrchestrationPlan({
    activeChoiceDetail,
    activeFollowUpAction,
    selectedRolePushback: plannedRolePushback,
    activeChallengeResponse
  });
  const agentTaskResults = executeLocalOrchestrationPlan({
    plan: orchestrationPlan,
    runRoleAgentTask
  });
  const taskOutputs = {
    initialRoleFollowUp: getTaskOutput(agentTaskResults, "initialRoleFollowUp"),
    simulationNote: getTaskOutput(agentTaskResults, "simulationNote"),
    followUpResponse: getTaskOutput(agentTaskResults, "followUpResponse"),
    rolePushback: getTaskOutput(agentTaskResults, "rolePushback"),
    rolePushbackMessage: getTaskOutput(agentTaskResults, "rolePushbackMessage"),
    teamReview: getTaskOutput(agentTaskResults, "teamReview"),
    decisionQuality: getTaskOutput(agentTaskResults, "decisionQuality"),
    challengeReaction: getTaskOutput(agentTaskResults, "challengeReaction"),
    closeoutNote: getTaskOutput(agentTaskResults, "closeoutNote")
  };
  const selectedRolePushback = taskOutputs.rolePushback;

  const hasSelectedChoice = Boolean(runState.selectedChoiceId);
  const hasSelectedFollowUpAction = Boolean(runState.selectedFollowUpActionId);
  const hasSelectedChallengeResponse = Boolean(activeChallengeResponse);
  const selectedChoiceLabel = activeChoiceDetail?.label || session.defaultFocus;
  const selectedFollowUpActionLabel = activeFollowUpAction?.label;
  const currentSimulationPhase = hasSelectedChallengeResponse
    ? session.reviewCompletePhase
    : hasSelectedFollowUpAction
      ? session.challengeResponsePhase
      : hasSelectedChoice
        ? session.followUpActionPhase
        : session.decisionPhase;
  const activePhaseId = hasSelectedChallengeResponse
    ? session.activePhaseAfterChallengeResponse
    : hasSelectedFollowUpAction
      ? session.activePhaseDuringChallenge
      : hasSelectedChoice
        ? session.activePhaseAfterChoice
        : session.activePhaseBeforeChoice;
  const completedPhaseIds = hasSelectedChallengeResponse
    ? session.completedAfterChallengeResponse
    : hasSelectedFollowUpAction
      ? session.completedDuringChallenge
      : hasSelectedChoice
        ? session.completedAfterChoice
        : session.completedBeforeChoice;
  const currentFocusLabel = hasSelectedChallengeResponse
    ? selectedFollowUpActionLabel
    : hasSelectedFollowUpAction
      ? session.challengePendingFocus
      : selectedChoiceLabel;
  const selectedEvidence = activeChoiceDetail?.validationEvidence;
  const selectedOutcome = activeFollowUpAction?.outcome;
  const selectedDecisionQuality = taskOutputs.decisionQuality;
  const selectedValidationChecklist =
    activeFollowUpAction?.validationChecklist || [];
  const selectedTeamReview = taskOutputs.teamReview;
  const selectedCloseoutNote = taskOutputs.closeoutNote;
  const activeFollowUpActions = activeChoiceDetail
    ? buildFollowUpButtons(
        activeChoiceDetail.followUpActions,
        runState.selectedFollowUpActionId
      )
    : [];
  const activeChallengeResponses = selectedRolePushback
    ? buildChallengeResponseButtons(
        selectedRolePushback.challengeResponses,
        runState.selectedChallengeResponseId
      )
    : [];
  const selectedChallengeResponseMessages =
    buildSelectedChallengeResponseMessages(
      activeChallengeResponse,
      taskOutputs
    );
  const selectedFollowUpChatMessages = buildSelectedFollowUpChatMessages({
    activeFollowUpAction,
    selectedRolePushback,
    activeChallengeResponses,
    selectedChallengeResponseMessages,
    taskOutputs
  });
  const sessionResultRows = activeFollowUpAction
    ? [
        {
          label: "First decision",
          value: activeChoiceDetail?.label
        },
        {
          label: "Follow-up action",
          value: selectedFollowUpActionLabel
        }
      ]
    : [];
  const completedRunNextAction =
    selectedCloseoutNote?.nextStep ||
    selectedDecisionQuality?.evidenceGap ||
    selectedValidationChecklist[0];

  return {
    activeChallengeResponse,
    activeChallengeResponses,
    activeChoiceDetail,
    activeFollowUpAction,
    activeFollowUpActions,
    activePhaseId,
    chatPreviewMessages: catalog.chatPreviewMessages.map((message) => {
      if (!message.choices) {
        return message;
      }

      return {
        ...message,
        choices: buildChoiceButtons(message.choices, runState.selectedChoiceId)
      };
    }),
    completedPhaseIds,
    completedRunNextAction,
    completedRunSummaryRows: hasSelectedChallengeResponse
      ? [
          {
            label: "Selected decision",
            value: activeChoiceDetail?.label
          },
          {
            label: "Follow-up action",
            value: selectedFollowUpActionLabel
          },
          {
            label: "Challenge response",
            value: activeChallengeResponse?.label
          },
          {
            label: "Next validation action",
            value: completedRunNextAction
          }
        ]
      : [],
    currentFocusLabel,
    currentSimulationPhase,
    decisionQualityRows: buildDecisionQualityRows(selectedDecisionQuality),
    hasCompletedRun: hasSelectedChallengeResponse,
    hasSelectedChallengeResponse,
    hasSelectedChoice,
    hasSelectedCloseoutNote: Boolean(selectedCloseoutNote),
    hasSelectedDecisionQuality: Boolean(selectedDecisionQuality),
    hasSelectedEvidence: Boolean(selectedEvidence),
    hasSelectedEvidenceBeforeCompletion:
      Boolean(selectedEvidence) && !hasSelectedFollowUpAction,
    hasSelectedFollowUpAction,
    hasSelectedOutcome: Boolean(selectedOutcome),
    hasSelectedRolePushback: Boolean(selectedRolePushback),
    hasSelectedTeamReview: Boolean(selectedTeamReview),
    hasSelectedValidationChecklist: selectedValidationChecklist.length > 0,
    hasSessionResult: sessionResultRows.length > 0,
    hasStartedRun:
      hasSelectedChoice ||
      hasSelectedFollowUpAction ||
      hasSelectedChallengeResponse,
    selectedChallengeResponseLabel: activeChallengeResponse?.label,
    selectedChallengeResponseMessages,
    selectedChoiceLabel,
    selectedCloseoutNote,
    selectedDecisionLabel: activeChoiceDetail?.label,
    selectedDecisionQuality,
    selectedEvidence,
    selectedFollowUpActionLabel,
    selectedFollowUpChatMessages,
    selectedOutcome,
    selectedRolePushback,
    selectedTeamReview,
    selectedValidationChecklist,
    selectedChatMessages: buildSelectedChatMessages({
      activeChoiceDetail,
      activeFollowUpActions,
      selectedFollowUpChatMessages,
      taskOutputs
    }),
    agentTaskResults,
    agentTaskSummary: summarizeOrchestrationPlan(orchestrationPlan),
    currentPlanStage: orchestrationPlan.stage,
    executedTaskCount: Object.keys(agentTaskResults).length,
    orchestrationPlan,
    sessionResultRows,
    simulationPhases: buildSimulationPhases(
      catalog,
      activePhaseId,
      completedPhaseIds
    ),
    simulationSessionSummary: [
      {
        label: "Scenario",
        value: session.scenario
      },
      {
        label: "Mode",
        value: session.mode
      },
      {
        label: "Phase",
        value: currentSimulationPhase
      },
      {
        label: "Current focus",
        value: currentFocusLabel
      }
    ]
  };
};
