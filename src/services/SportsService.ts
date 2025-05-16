import { CompetitionsType, SportsType } from '@/types'
import _ from 'lodash'

export const SportsService = {
  filterUniqueSports(data: CompetitionsType[]): CompetitionsType[] {
    return _.uniqBy(data, (item) => item.sport)
  },

  fixSportsNames(data: SportsType[]): SportsType[] {
    return data.map((item) => {
      switch (item.sport) {
        case 'SOCCER':
          return {
            ...item,
            newName: 'Futebol',
          }
        case 'ICE_HOCKEY':
          return {
            ...item,
            newName: 'Hóquei no gelo',
          }
        case 'AUSTRALIAN_RULES_FOOTBALL':
          return {
            ...item,
            newName: 'Futebol Australiano',
          }
        case 'AMERICAN_FOOTBALL':
          return {
            ...item,
            newName: 'Futebol Americano',
          }

        case 'BASKETBALL':
          return {
            ...item,
            newName: 'Basquete',
          }

        case 'BASEBALL':
          return {
            ...item,
            newName: 'Beisebol',
          }

        case 'HANDBALL':
          return {
            ...item,
            newName: 'Handebol',
          }

        case 'LACROSSE':
          return {
            ...item,
            newName: 'Lacrosse',
          }

        default:
          return item
      }
    })
  },
}
