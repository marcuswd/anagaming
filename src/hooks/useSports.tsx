import { SportsService } from '@/services/SportsService'
import { CompetitionsType, SportsType } from '@/types'
import { useEffect, useState } from 'react'

export function useSports(listCompetitions: CompetitionsType[]) {
  const [sports, setSports] = useState<SportsType[]>()

  useEffect(() => {
    const filteredSports = SportsService.filterUniqueSports(listCompetitions)
    const fixedSportsNames = SportsService.fixSportsNames(filteredSports)
    setSports(fixedSportsNames)
  }, [listCompetitions])

  return {
    sports,
    setSports,
  }
}
