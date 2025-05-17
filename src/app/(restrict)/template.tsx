import { SportsController } from '@/controllers/SportsController'
import { ClientTemplate } from '@/components/Client/Layout'
import { ReactNode } from 'react'

export const revalidate = 86400

export default async function Template({ children }: { children: ReactNode }) {
  const { data: initialCompetitions, error } =
    await SportsController.getStaticSports()

  if (error) {
    return <ClientTemplate initialCompetitions={[]}>{children}</ClientTemplate>
  }

  return (
    <ClientTemplate initialCompetitions={initialCompetitions || []}>
      {children}
    </ClientTemplate>
  )
}
