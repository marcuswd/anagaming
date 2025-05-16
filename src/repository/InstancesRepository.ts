import { CompetitionsType, RepositoryResponse } from '@/types'

export const InstancesRepository = {
  allInstances: async (currentCompetiton: {
    competitionKey: string
  }): Promise<RepositoryResponse<CompetitionsType[]>> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAPI_URL}/competitions/${currentCompetiton?.competitionKey}/instances`,
    )

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
