import { HeartIcon, HomeIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'

export default function Menu() {
  return (
    <nav className="flex gap-6 border-s border-blue-700 pl-6 ml-3">
      <Link
        className="text-white font-semibold hover:text-blue-200 flex gap-2"
        prefetch
        href="/"
      >
        <HomeIcon width={22} /> Home
      </Link>
      <Link
        className="text-blue-900 font-semibold hover:text-blue-200 flex gap-2 pointer-events-none cursor-not-allowed"
        prefetch
        href=""
      >
        <HeartIcon width={22} /> Meus Favoritos
      </Link>
    </nav>
  )
}
