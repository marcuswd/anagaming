import { EventsController } from '@/controllers/EventsController'
import { CompetitionsType, EventsProps } from '@/types'
import { useCallback, useEffect, useState } from 'react'

export function useEvents(
  competitionKey: string[] | null,
  currentLeagues: CompetitionsType[] | null,
  eventKey: string | null,
) {
  const [events, setEvents] = useState<EventsProps[] | null>()
  const [singleEventByKey, setSingleEventsByKey] = useState<EventsProps[]>()
  const [allEventsByKey, setAllEventsByKey] = useState<EventsProps[]>()
  const [eventsBySport, setEventsBySports] = useState<EventsProps[]>()
  const [eventDetail, setEventDetail] = useState<EventsProps>()

  const getSingleEventByKey = useCallback(async () => {
    if (!competitionKey) throw new Error('Missing competition key')
    const { data, error } =
      await EventsController.singleEventByKey(competitionKey)

    if (error) {
      throw new Error(error)
    }

    if (data) {
      setSingleEventsByKey(data)
    }
  }, [competitionKey])

  const getAllEventByKeys = useCallback(async () => {
    if (!competitionKey) throw new Error('Missing competitionKey')
    const { data, error } =
      await EventsController.allEventByKeys(competitionKey)

    if (error) {
      throw new Error(error)
    }

    if (data) {
      setAllEventsByKey(data)
    }
  }, [competitionKey])

  const getEventsBySports = useCallback(async () => {
    if (!currentLeagues) throw new Error('Missing currentLeagues')
    const { data, error } =
      await EventsController.getEventsBySports(currentLeagues)

    if (error) {
      throw new Error(error)
    }

    if (data) {
      setEventsBySports(data)
    }
  }, [currentLeagues])

  const getEventDetail = useCallback(async () => {
    if (!eventKey) throw new Error('Missing eventKey')
    const { data, error } = await EventsController.getEventDetail(eventKey)

    if (error) {
      throw new Error(error)
    }

    if (data) {
      setEventDetail(data)
    }
  }, [eventKey])

  useEffect(() => {
    if (competitionKey && competitionKey.length > 0) getSingleEventByKey()
  }, [competitionKey, getSingleEventByKey])

  useEffect(() => {
    if (competitionKey && competitionKey.length > 0) getAllEventByKeys()
  }, [competitionKey, getAllEventByKeys])

  useEffect(() => {
    if (currentLeagues && currentLeagues.length > 0) getEventsBySports()
  }, [currentLeagues, getEventsBySports])

  useEffect(() => {
    if (eventKey) getEventDetail()
  }, [eventKey, getEventDetail])

  return {
    events,
    setEvents,
    singleEventByKey,
    getSingleEventByKey,
    allEventsByKey,
    getAllEventByKeys,
    eventsBySport,
    eventDetail,
    setEventDetail,
  }
}
