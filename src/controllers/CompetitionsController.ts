import { CompetitionsRepository } from '@/repository/CompetitionsRepository'
import { CompetitionsServices } from '@/services/CompetitionsService'
import { CompetitionsType, RepositoryResponse } from '@/types'

export const CompetitionsController = {
  allCompetitions: async (): Promise<
    RepositoryResponse<CompetitionsType[]>
  > => {
    try {
      const { data, error } = await CompetitionsRepository.allCompetitions()

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

  // Ligas
  competitionsBySportName: async (
    sport: string,
  ): Promise<RepositoryResponse<CompetitionsType[]>> => {
    try {
      const { data, error } = await CompetitionsRepository.competitionsBySport()

      if (!data) {
        return { data: null, error: error }
      }

      const competitionsBySportName =
        CompetitionsServices.filterCompetitionsBySportName(data, sport)

      return { data: competitionsBySportName, error: null }
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
