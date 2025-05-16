import { RepositoryResponse, CompetitionsType } from '@/types'

export const CompetitionsRepository = {
  allCompetitions: async (): Promise<
    RepositoryResponse<CompetitionsType[]>
  > => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAPI_URL}/competitions`,
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

  competitionsBySport: async (): Promise<
    RepositoryResponse<CompetitionsType[]>
  > => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAPI_URL}/competitions`,
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
