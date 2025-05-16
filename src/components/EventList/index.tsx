import { formatEventDateTime } from '@/utils/fomatDate'
import { EventsProps } from '@/types'
import Image from 'next/image'
import {
  awayParticipantHelper,
  homeParticipantHelper,
} from '@/helpers/eventDataHelper'
import Link from 'next/link'

export default function EventList({
  item,
  currentPage,
}: {
  item: EventsProps
  currentPage: string
}) {
  const { startTime, participants, homeParticipantKey } = item

  const homeParticipant = homeParticipantHelper(
    participants,
    homeParticipantKey,
  )

  const awayParticipant = awayParticipantHelper(
    participants,
    homeParticipantKey,
  )

  const { date, time } = formatEventDateTime(startTime)

  return (
    <div className="list-matchs__single grid grid-cols-[80px_55%_1fr] px-4 items-center hover:bg-green-50 transition">
      <div className="list-matchs__single__date text-center flex justify-center flex-col items-center">
        <p className="text-xs leading-4">{date}</p>
        <p className="leading-4">
          <strong>{time}</strong>
        </p>
      </div>

      <Link
        href={`${currentPage}/${item.key}`}
        className="list-matchs__single__participants ps-4 flex gap-2 flex-col"
      >
        <div className="flex items-center gap-3">
          <figure style={{ width: '16px' }}>
            <Image
              src={'/images/badge-home.png'}
              width={410}
              height={510}
              alt={homeParticipant?.name || ''}
            />
          </figure>
          {homeParticipant?.name}
        </div>
        <div className="flex items-center gap-3">
          <figure style={{ width: '16px' }}>
            <Image
              src={'/images/badge-away.png'}
              width={410}
              height={510}
              alt={awayParticipant?.name || ''}
            />
          </figure>

          {awayParticipant?.name}
        </div>
      </Link>

      <div className="list-matchs__odds flex justify-between">
        <p className="home border bg-white border-green-200 items-center flex flex-row gap-4 px-4 py-2 transition rounded-md hover:bg-green-100">
          <a href="#">
            <strong>2.92</strong> <span className="text-xs">ESPN</span>
          </a>
        </p>
        <p className="draw border bg-white border-green-200 items-center flex flex-row gap-4 px-4 py-2 transition rounded-md hover:bg-green-100">
          <a href="#">
            <strong>2.92</strong> <span className="text-xs">ESPN</span>
          </a>
        </p>
        <p className="visitant border bg-white border-green-200 items-center flex flex-row gap-4 px-4 py-2 transition rounded-md hover:bg-green-100">
          <a href="#">
            <strong>2.92</strong> <span className="text-xs">ESPN</span>
          </a>
        </p>
      </div>
    </div>
  )
}
