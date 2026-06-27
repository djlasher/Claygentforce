import {
  CHOICE_REACTION_SCENARIOS,
  CHOICE_SCORE_PROFILES,
  QA_LEAD_ROLE_ID,
  QA_SCORE_PROFILES,
  REACTION_LABELS
} from "./deliveryRoomScenario001Data";
import {
  getParticipantProfile,
  isSpeakerAvailableForRole
} from "./deliveryRoomParticipants";

const getExecutiveIndicatorValue = (confidencePercent, sentiment) => {
  const concernCount = sentiment.filter((item) =>
    ["concerned", "blocked"].includes(item.state)
  ).length;
  const positiveCount = sentiment.filter(
    (item) => item.state === "positive"
  ).length;

  return {
    deliveryConfidence:
      confidencePercent >= 90
        ? "High"
        : confidencePercent >= 80
          ? "Stable"
          : confidencePercent >= 70
            ? "Moderate"
            : "Elevated risk",
    teamConsensus:
      positiveCount >= 3 && concernCount <= 1
        ? "Strong"
        : concernCount >= 3
          ? "Mixed"
          : "Developing",
    riskLevel:
      confidencePercent >= 85
        ? "Low"
        : confidencePercent >= 75
          ? "Moderate"
          : "High"
  };
};

export const buildDemoScoreSummary = (runModel, runState, roleId) => {
  const hasCompletedDemoRun =
    roleId === QA_LEAD_ROLE_ID
      ? Boolean(runState.selectedChallengeResponseId)
      : runModel.hasCompletedRun;

  if (!hasCompletedDemoRun) {
    return undefined;
  }

  const scoreProfiles =
    roleId === QA_LEAD_ROLE_ID ? QA_SCORE_PROFILES : CHOICE_SCORE_PROFILES;
  const baseScores = scoreProfiles[runState.selectedChoiceId] || [
    20, 20, 20, 20
  ];
  const reactionScenario =
    CHOICE_REACTION_SCENARIOS[runState.selectedChoiceId] || {};
  const targetedValidationBonus =
    runState.selectedChallengeResponseId?.includes("targeted-validation")
      ? 2
      : 0;
  const dimensionLabels =
    roleId === QA_LEAD_ROLE_ID
      ? [
          "Validation coverage",
          "Regression protection",
          "Evidence quality",
          "Test completeness"
        ]
      : [
          "Decision quality",
          "Evidence coverage",
          "Stakeholder alignment",
          "Release readiness"
        ];
  const dimensions = [
    {
      label: dimensionLabels[0],
      points: Math.min(25, baseScores[0] + targetedValidationBonus)
    },
    {
      label: dimensionLabels[1],
      points: Math.min(25, baseScores[1] + targetedValidationBonus)
    },
    {
      label: dimensionLabels[2],
      points: baseScores[2]
    },
    {
      label: dimensionLabels[3],
      points: Math.min(25, baseScores[3] + targetedValidationBonus)
    }
  ];
  const total = dimensions.reduce(
    (sum, dimension) => sum + dimension.points,
    0
  );
  const confidencePercent = reactionScenario.confidence || total;
  const sentiment = (reactionScenario.sentiment || []).filter((item) =>
    isSpeakerAvailableForRole(item.speaker, roleId)
  );
  const executiveIndicators = getExecutiveIndicatorValue(
    confidencePercent,
    sentiment
  );

  return {
    title: "War Room Assessment",
    total,
    confidenceLabel: "Overall Delivery Confidence",
    confidencePercent,
    executiveIndicators: [
      {
        label: "Delivery Confidence",
        value: executiveIndicators.deliveryConfidence
      },
      {
        label: "Team Consensus",
        value: executiveIndicators.teamConsensus
      },
      {
        label: "Risk Level",
        value: executiveIndicators.riskLevel
      }
    ],
    dimensions,
    sentiment: sentiment.map((item) => {
      const profile = getParticipantProfile(item.speaker, roleId);
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
