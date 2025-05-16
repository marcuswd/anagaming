import { EventsRepository } from '@/repository/EventsRepository'
import { CompetitionsType, EventsProps, RepositoryResponse } from '@/types'

export const EventsController = {
  singleEventByKey: async (
    competitionKey: string[],
  ): Promise<RepositoryResponse<EventsProps[]>> => {
    try {
      const { data, error } =
        await EventsRepository.singleEventByKey(competitionKey)

      if (!data) {
        return { data: null, error: error }
      }

      return { data, error: null }
    } catch (err) {
      return {
        data: null,
        error:
          err instanceof Error
            ? `Erro na requisição ${err.message}.`
            : `Ocorreu um erro desconhecido na requisição.`,
      }
    }
  },

  allEventByKeys: async (
    competitionKey: string[],
  ): Promise<RepositoryResponse<EventsProps[]>> => {
    try {
      const { data, error } =
        await EventsRepository.allEventByKeys(competitionKey)

      if (!data) {
        return { data: null, error: error }
      }

      return { data, error: null }
    } catch (err) {
      return {
        data: null,
        error:
          err instanceof Error
            ? `Erro na requisição ${err.message}.`
            : `Ocorreu um erro desconhecido na requisição.`,
      }
    }
  },

  getEventsBySports: async (
    currentLegues: CompetitionsType[],
  ): Promise<RepositoryResponse<EventsProps[]>> => {
    try {
      const { data, error } =
        await EventsRepository.getEventsBySports(currentLegues)

      if (!data) {
        return { data: null, error: error }
      }

      return { data, error: null }
    } catch (err) {
      return {
        data: null,
        error:
          err instanceof Error
            ? `Erro na requisição ${err.message}.`
            : `Ocorreu um erro desconhecido na requisição.`,
      }
    }
  },

  getEventDetail: async (
    eventKey: string,
  ): Promise<RepositoryResponse<EventsProps>> => {
    try {
      const { data, error } = await EventsRepository.getEventDetail(eventKey)

      if (!data) {
        return { data: null, error: error }
      }

      return { data, error: null }
    } catch (err) {
      return {
        data: null,
        error:
          err instanceof Error
            ? `Erro na requisição ${err.message}.`
            : `Ocorreu um erro desconhecido na requisição.`,
      }
    }
  },
}
