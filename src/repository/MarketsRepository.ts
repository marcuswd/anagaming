import { Market, RepositoryResponse } from '@/types'

export const MarketsRepository = {
  getOutcomes: async (
    marketKey: string,
  ): Promise<RepositoryResponse<Market[]>> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAPI_URL}/markets/${marketKey}/outcomes/latest`,
    )

    if (!response.ok) {
      return { data: null, error: 'Erro na requisição' }
    }

    const data = await response.json()

    if (!data) {
      return { data: null, error: 'Dados ausentes na resposta' }
    }

    return {
      data,
      error: null,
    }
  },
}
