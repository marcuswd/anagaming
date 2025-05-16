'use client'
import Breadcrumb from '@/components/Breadcrumb'
import LayoutContainer from '@/components/Container'
import {
  awayParticipantHelper,
  homeParticipantHelper,
} from '@/helpers/eventDataHelper'
import { ParticipantsOrderType } from '@/types'
import { formatEventDateTime } from '@/utils/fomatDate'
import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { useEvents } from '@/hooks/useEvents'
import { useParams } from 'next/navigation'

export default function DetailOddPage() {
  const params = useParams()
  const { competitionKey } = params

  const { eventDetail } = useEvents(
    null,
    null,
    competitionKey ? competitionKey.toString() : null,
  )

  const { participants, startTime, homeParticipantKey } = useMemo(() => {
    if (!eventDetail) {
      return {
        participants: undefined,
        startTime: '',
        homeParticipantKey: undefined,
      }
    }
    return {
      participants: eventDetail.participants,
      startTime: eventDetail.startTime,
      homeParticipantKey: eventDetail.homeParticipantKey,
    }
  }, [eventDetail])

  const [participantsOrder, setOrderParticipants] =
    useState<ParticipantsOrderType>()

  useEffect(() => {
    if (participants && homeParticipantKey) {
      const homeParticipantData = homeParticipantHelper(
        participants,
        homeParticipantKey,
      )

      const awayParticipantData = awayParticipantHelper(
        participants,
        homeParticipantKey,
      )

      setOrderParticipants({
        home: homeParticipantData,
        away: awayParticipantData,
      })
    }
  }, [homeParticipantKey, participants, eventDetail])

  const { date, time } = formatEventDateTime(startTime)

  return (
    <>
      <header>
        <LayoutContainer>
          <Breadcrumb />
        </LayoutContainer>
      </header>
      <LayoutContainer className="grid grid-cols-[350px_1fr] gap-3 mt-5">
        <aside>
          <h2 className="mb-3 uppercase font-semibold text-gray-500">
            Competições
          </h2>
        </aside>
        <section>
          <div className="border border-gray-300 bg-gray-200 py-5 px-5 text-center">
            <header>
              <h2 className="mb-3 uppercase font-semibold text-gray-500">
                Nome da Liga
              </h2>

              <p className="text-xs font-semibold">
                {date} - {time}
              </p>

              <div className="participants flex flex-row justify-around text-lg">
                <div className="flex gap-3 flex-col items-center text-xl">
                  <figure style={{ width: '24px' }}>
                    <Image
                      src={'/images/badge-home.png'}
                      width={410}
                      height={510}
                      alt={participantsOrder?.home?.name || ''}
                    />
                  </figure>
                  {participantsOrder?.home?.name}
                </div>
                <div className="flex gap-3 flex-col items-center text-xl">
                  <figure style={{ width: '24px' }}>
                    <Image
                      src={'/images/badge-away.png'}
                      width={410}
                      height={510}
                      alt={participantsOrder?.away?.name || ''}
                    />
                  </figure>
                  {participantsOrder?.away?.name}
                </div>
              </div>
            </header>
          </div>
        </section>
      </LayoutContainer>
    </>
  )
}
