import { CompetitionsInstancesType, CompetitionsType } from '@/types'
import _ from 'lodash'

export const CompetitionsServices = {
  filterCompetitionsBySportName(
    data: CompetitionsType[],
    currentCategory: string,
  ): CompetitionsType[] {
    return _.filter(data, (item) => item.sport === currentCategory)
  },

  filterCompetitionByInstanceKey(
    data: CompetitionsInstancesType[],
    competitionInstanceKey: string,
  ): CompetitionsInstancesType[] {
    return _.filter(data, (item) => item.key === competitionInstanceKey)
  },
}
