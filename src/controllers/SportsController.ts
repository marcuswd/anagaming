import { RepositoryResponse, SportsType } from '@/types'
import { SportsRepository } from '@/repository/SportsRepository'

export const SportsController = {
  allSports: async (): Promise<RepositoryResponse<SportsType[]>> => {
    try {
      const { data, error } = await SportsRepository.getAll()

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
