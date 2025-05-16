export type CompetitionsInstancesType = {
  key: string
  name: string
  competitionKey: string
  startAt: string
  endAt: string
}

export type CompetitionsType = {
  key: string
  slug: string
  name: string
  shortName: string
  sport: string
  category: string
  competitionInstances: CompetitionsInstancesType[]
  newName?: string
}

export type SportsType = Pick<
  CompetitionsType,
  'key' | 'sport' | 'category' | 'newName'
>

export type SingleCompetition = Pick<
  CompetitionsType,
  'key' | 'name' | 'shortName' | 'category' | 'sport'
>

export type CurrentCompetition = {
  competitionKey: string
  name: string
}

export type ParticipantsOrderType = {
  home: ParticipantsType | undefined
  away: ParticipantsType | undefined
}

export type ParticipantsType = {
  key: string
  slug: string
  name: string
  shortName: string
  sport: string
}

export type InstancieType = {
  key: string
  name: string
  competitionKey: string
  startAt: string
  endAt: string
}

export type EventsProps = {
  name: string
  key: string
  lastFoundAt: string
  participant: string | null
  participantKey: string | null
  segment: string
  homeParticipantKey: string
  type: string
  startTime: string
  participants: ParticipantsType[]
  markets: Market[]
}

export type Outcome = {
  modifier: number
  payout: number
  type: string
  live: boolean
  source: string
  marketKey: string
  participant: null | {
    key: string
    slug: string
    name: string
    shortName: string
    sport: string
  }
}

export type Outcomes = {
  [source: string]: Outcome[]
}

export type Market = {
  key: string
  lastFoundAt: string
  outcomes: Outcomes[]
  participant: null | {
    key: string
    slug: string
    name: string
    shortName: string
    sport: string
  }
  participantKey: string | null
  segment: string
  type: string
}

export type RepositoryResponse<T> = { data: T | null; error: string | null }
