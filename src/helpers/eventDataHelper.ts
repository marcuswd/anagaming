import { ParticipantsType } from '@/types'
import _ from 'lodash'

const homeParticipantHelper = (
  participants: ParticipantsType[],
  homeParticipantKey: string,
): ParticipantsType | undefined => {
  return _.find(participants, function (participant) {
    return participant.key === homeParticipantKey
  })
}

const awayParticipantHelper = (
  participants: ParticipantsType[],
  homeParticipantKey: string,
): ParticipantsType | undefined => {
  return _.find(participants, function (participant) {
    return participant.key != homeParticipantKey
  })
}

export { homeParticipantHelper, awayParticipantHelper }
