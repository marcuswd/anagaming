import { SportsService } from '@/services/SportsService'
import { ApiOptions } from '@/utils/api'

export class SportsController {
  static async getStaticSports() {
    try {
      const response = await fetch(
        `${process.env.SPORTSBOOK_API_URL}/v0/competitions`,
        {
          cache: 'force-cache',
          ...ApiOptions,
        },
      )

      if (!response.ok) {
        const text = await response.text()
        throw new Error(`Erro na API: ${response.status} - ${text}`)
      }

      const { competitions } = await response.json()

      const filteredSports = SportsService.filterUniqueSports(competitions)
      const fixedSportsNames = SportsService.fixSportsNames(filteredSports)

      return {
        data: fixedSportsNames,
        error: null,
      }
    } catch (err) {
      return {
        data: null,
        error: err,
      }
    }
  }
}
