import { RepositoryResponse, CompetitionsType } from '@/types'

export const SportsRepository = {
  getAll: async (): Promise<RepositoryResponse<CompetitionsType[]>> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/sports`)

    if (!response.ok) {
      return { data: null, error: 'Erro na requisição' }
    }

    const json = await response.json()

    if (!json.competitions) {
      return { data: null, error: 'Dados ausentes na resposta' }
    }

    return {
      data: json.competitions,
      error: null,
    }
  },
}
