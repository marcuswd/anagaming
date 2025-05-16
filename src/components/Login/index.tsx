import { signIn } from 'next-auth/react'
import LayoutContainer from '@/components/Container'
import { KeyIcon, LinkIcon } from '@heroicons/react/16/solid'
import Logo from '@/components/Logo'
import { useState } from 'react'

export default function Login() {
  const [loading, setLoading] = useState(false)
  return (
    <LayoutContainer className="flex flex-col md:min-h-lvh h-fit md:justify-center items-center pt-8 md:pt-0">
      <div className="box-login py-12 px-6 md:w-4/12 w:10/12 md:justify-center text-center bg-white rounded-xl border border-gray-200 shadow-2xl">
        <Logo />
        <h1 className="font-light text-gray-600 text-2xl uppercase flex items-center gap-3 justify-center">
          <KeyIcon width={32} /> Acesse sua conta
        </h1>
        <p>Você precisa se autenticar para usar nossa plataforma.</p>

        <button
          onClick={() => {
            setLoading(true)
            signIn('github', {
              callbackUrl: '/home',
            })
          }}
          className="cursor-pointer text-sm bg-gradient-to-bl bg-blue-900 hover:bg-blue-800 py-3 px-6 rounded-sm text-white flex gap-3 mx-auto my-6 transition disabled:bg-gray-500 disabled:pointer-events-none"
          aria-label="Entrar com o Github"
          disabled={loading}
        >
          {loading ? (
            'Redirecionando...'
          ) : (
            <>
              <LinkIcon width={20} /> Entrar com o Github
            </>
          )}
        </button>

        <p className="text-xs text-gray-700 leading-5">
          A <strong className="italic">Ana Bet</strong> é uma plataforma
          destinada a maiores de 18 anos.
          <br /> Ao efetuar o login eu afirmo ter 18 anos ou mais
        </p>
      </div>
    </LayoutContainer>
  )
}
