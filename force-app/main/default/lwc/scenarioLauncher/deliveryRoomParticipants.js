import {
  LEARNER_PROFILES,
  NPC_ROLE_OWNERSHIP,
  ROLE_PROFILES,
  TECHNICAL_ARCHITECT_ROLE_ID
} from "./deliveryRoomScenario001Data";

export const getParticipantProfile = (
  speaker,
  learnerRoleId = TECHNICAL_ARCHITECT_ROLE_ID
) => {
  if (speaker === "You") {
    return (
      LEARNER_PROFILES[learnerRoleId] ||
      LEARNER_PROFILES[TECHNICAL_ARCHITECT_ROLE_ID]
    );
  }

  return ROLE_PROFILES[speaker] || ROLE_PROFILES.SIM;
};

export const isSpeakerAvailableForRole = (speaker, learnerRoleId) => {
  if (speaker === "You") {
    return true;
  }

  return NPC_ROLE_OWNERSHIP[speaker]?.ownedRoleId !== learnerRoleId;
};
