import Image from 'next/image'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'

export default function UserMeta({ session }: { session: Session | null }) {
  return (
    <div className="text-white flex ms-auto">
      <ol className="flex gap-3 items-center">
        {session?.user && (
          <li className="border-r border-gray-200 pr-3 flex items-center gap-3">
            {session.user?.image && (
              <figure className="w-10 rounded-full overflow-hidden">
                <Image
                  src={session.user.image}
                  width={460}
                  height={460}
                  alt={session.user.name ?? ''}
                />
              </figure>
            )}
            <p className="text-sm m-0">
              Bem vindo,
              <br /> {session.user.name}
            </p>
          </li>
        )}

        <li>
          <button
            onClick={() => signOut()}
            className="cursor-pointer text-sm bg-gradient-to-bl bg-blue-900 hover:bg-blue-800 py-1 px-3 rounded-sm"
          >
            Sair
          </button>
        </li>
      </ol>
    </div>
  )
}
