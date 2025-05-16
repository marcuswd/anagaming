'use Client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import LayoutContainer from '@/components/Container'
import UserMeta from '@/components/UserMeta'
import Logo from '@/components/Logo'
import Menu from '@/components/Menu'

export default function HeaderComponent() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/')
    },
  })
  return (
    <header className="bg-blue-950 border-b border-white">
      <LayoutContainer className="py-4 flex items-center gap-6">
        <Logo href="/" />
        <Menu />
        <UserMeta session={session} />
      </LayoutContainer>
    </header>
  )
}
