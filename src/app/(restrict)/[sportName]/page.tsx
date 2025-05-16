'use client'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import _ from 'lodash'

import Breadcrumb from '@/components/Breadcrumb'
import LayoutContainer from '@/components/Container'
import { useCompetitions } from '@/hooks/useCompetitions'
import { CompetitionsType } from '@/types'
import { useEvents } from '@/hooks/useEvents'
import EventList from '@/components/EventList'

export default function SportsPage() {
  const params = useParams()

  const [currentLegues, setCurrentLegues] = useState<CompetitionsType[]>()
  const [currentPage, setCurrentPage] = useState<string>('')
  const { listCompetitions } = useCompetitions(currentPage)

  const filterCompetitions = (
    competitions: CompetitionsType[],
    currentPage: string,
  ) => {
    if (!competitions || !currentPage) return []
    return _.filter(
      competitions,
      (competition) => competition.sport === currentPage,
    )
  }

  const getAllCompetitions = (currentLegues: CompetitionsType[]) => {
    return currentLegues.map((competition) => competition.key)
  }

  const competitionGroupMemo: string[] = useMemo(() => {
    return getAllCompetitions(currentLegues || [])
  }, [currentLegues])

  const currentLeguesMemo = useMemo(() => {
    return filterCompetitions(listCompetitions, currentPage)
  }, [listCompetitions, currentPage])

  const { sportName } = params

  useEffect(() => {
    if (currentLeguesMemo && currentLeguesMemo.length > 0) {
      setCurrentLegues(currentLeguesMemo)
    }
  }, [currentLeguesMemo])

  useEffect(() => {
    if (sportName) {
      const newSportname = sportName.toLocaleString().toUpperCase()
      setCurrentPage(newSportname)
    }
  }, [sportName, currentLegues, competitionGroupMemo, currentLeguesMemo])

  const { eventsBySport } = useEvents([], currentLegues)

  return (
    <>
      <header>
        <LayoutContainer>
          <Breadcrumb />
        </LayoutContainer>
      </header>

      <LayoutContainer className="mt-5 grid grid-cols-[400px_1fr]">
        <aside>
          <h2 className="mb-3 uppercase font-semibold text-gray-500">Ligas</h2>

          {currentLegues && (
            <ul>
              {currentLegues.map((competition) => {
                return <li key={competition.key}>{competition.name}</li>
              })}
            </ul>
          )}
        </aside>

        <section>
          <h2 className="mb-3 uppercase font-semibold text-gray-500">
            Lista de Eventos
            <div className="list-matchs mt-5">
              {eventsBySport?.map((singleEvent) => {
                return (
                  <EventList
                    currentPage={currentPage.toLocaleLowerCase()}
                    key={singleEvent.key}
                    item={singleEvent}
                  />
                )
              })}
            </div>
          </h2>
        </section>
      </LayoutContainer>
    </>
  )
}
