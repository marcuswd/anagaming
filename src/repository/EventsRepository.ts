import { CompetitionsType, EventsProps, RepositoryResponse } from '@/types'

export const EventsRepository = {
  singleEventByKey: async (
    competitionKey: string[],
  ): Promise<RepositoryResponse<EventsProps[]>> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAPI_URL}/competitions/${competitionKey}/events`,
    )

    if (!response.ok) {
      return { data: null, error: `Erro na requisição ${response.statusText}` }
    }

    const { data } = await response.json()

    if (!data) {
      return { data: null, error: 'Dados ausentes na resposta' }
    }

    return {
      data,
      error: null,
    }
  },

  allEventByKeys: async (
    eventsKeys: string[],
  ): Promise<RepositoryResponse<EventsProps[]>> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAPI_URL}/competitions/events/${eventsKeys}`,
    )

    if (!response.ok) {
      return { data: null, error: 'Erro na requisição' }
    }

    const { events } = await response.json()

    if (!events) {
      return { data: null, error: 'Dados ausentes na resposta' }
    }

    return {
      data: events,
      error: null,
    }
  },

  getEventsBySports: async (
    currentLegues: CompetitionsType[],
  ): Promise<RepositoryResponse<EventsProps[]>> => {
    try {
      const allEvents: EventsProps[] = []

      const eventPromises = currentLegues.map(async ({ key }) => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAPI_URL}/competitions/${key}/events`,
        )

        if (!response.ok) {
          throw new Error(`Erro na requisição para competição ${key}`)
        }

        const { data } = await response.json()
        return data || []
      })

      const eventsResults = await Promise.all(eventPromises)

      eventsResults.forEach((events) => {
        allEvents.push(...events)
      })

      return {
        data: allEvents,
        error: null,
      }
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Erro desconhecido',
      }
    }
  },

  getEventDetail: async (
    eventKey: string,
  ): Promise<RepositoryResponse<EventsProps>> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXTAPI_URL}/events/${eventKey}`,
      )

      if (!response.ok) {
        return { data: null, error: 'Erro na requisição' }
      }

      const { data } = await response.json()

      if (!data) {
        return { data: null, error: 'Dados ausentes na resposta' }
      }

      return {
        data,
        error: null,
      }
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Erro desconhecido',
      }
    }
  },
}
