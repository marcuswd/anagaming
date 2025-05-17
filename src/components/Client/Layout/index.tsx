'use client'

import HeaderComponent from '@/components/Header'
import Sportbar from '@/components/SportBar'
import { SportsType } from '@/types'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

interface ClientTemplateProps {
  children: ReactNode
  initialCompetitions: SportsType[]
}

export function ClientTemplate({
  children,
  initialCompetitions,
}: ClientTemplateProps) {
  return (
    <SessionProvider>
      <HeaderComponent />
      <Sportbar initialCompetitions={initialCompetitions} />
      {children}
    </SessionProvider>
  )
}
