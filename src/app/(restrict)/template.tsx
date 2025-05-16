'use client'
import HeaderComponent from '@/components/Header'
import Sportbar from '@/components/SportBar'
import { SessionProvider } from 'next-auth/react'
import { PropsWithChildren } from 'react'

export default function Template({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <HeaderComponent />
      <Sportbar />
      {children}
    </SessionProvider>
  )
}
