import { EventsProps } from '@/types'
import _ from 'lodash'

export const EventsService = {
  filterByKey(data: EventsProps[], key: string): EventsProps[] {
    return _.filter(data, (item) => item.key === key)
  },
}
