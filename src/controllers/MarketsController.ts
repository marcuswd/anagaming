import { MarketsRepository } from '@/repository/MarketsRepository'
import { Market, RepositoryResponse } from '@/types'

export const MarketsController = {
  getLatestOutcomes: async (
    marketKey: string,
  ): Promise<RepositoryResponse<Market[]>> => {
    try {
      const { data, error } = await MarketsRepository.getOutcomes(marketKey)

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
