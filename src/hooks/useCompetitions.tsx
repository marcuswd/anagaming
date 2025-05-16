import { CompetitionsController } from '@/controllers/CompetitionsController'
import { CompetitionsServices } from '@/services/CompetitionsService'
import { CompetitionsType, EventsProps } from '@/types'
import { useCallback, useEffect, useState } from 'react'

export function useCompetitions(sportName?: string) {
  const [listCompetitions, setListCompetitions] = useState<CompetitionsType[]>(
    [],
  )

  const [eventsByCompetition, setEventsByCompetition] = useState<
    Record<string, EventsProps[]>
  >({})

  const [listCompetitionsBySport, setListCompetitionsBySport] =
    useState<CompetitionsType[]>()

  const fetchCompetitions = async () => {
    const { data, error } = await CompetitionsController.allCompetitions()

    if (data) {
      setListCompetitions(data)
    }

    if (error) {
      throw new Error(error)
    }
  }

  const getCompetitionsBySport = useCallback(async () => {
    if (!sportName) throw new Error('Erro ao carregar o sportName')
    const competitionsBySportData =
      CompetitionsServices.filterCompetitionsBySportName(
        listCompetitions,
        sportName,
      )

    setListCompetitionsBySport(competitionsBySportData)
  }, [listCompetitions, sportName])

  useEffect(() => {
    try {
      fetchCompetitions()
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error fetching tasks: ${error.message}`)
      }
    }
  }, [])

  useEffect(() => {
    getCompetitionsBySport()
  }, [sportName, getCompetitionsBySport])

  useEffect(() => {
    if (listCompetitions.length > 0) {
      getCompetitionsBySport()
    }
  }, [listCompetitions, getCompetitionsBySport])

  return {
    listCompetitions,
    setListCompetitions,
    listCompetitionsBySport,
    eventsByCompetition,
    setEventsByCompetition,
  }
}
