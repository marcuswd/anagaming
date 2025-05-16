'use client'
import { SessionProvider } from 'next-auth/react'
import Login from '@/components/Login'

export default function Home() {
  return (
    <SessionProvider>
      <Login />
    </SessionProvider>
  )
}
