import Image from 'next/image'
import LayoutContainer from '@/components/Container'
import { useCompetitions } from '@/hooks/useCompetitions'
import { useSports } from '@/hooks/useSports'
import { SportsType } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sportbar() {
  const { listCompetitions } = useCompetitions()
  const { sports } = useSports(listCompetitions)

  const pathname = usePathname()
  const pathname_active = pathname.replace('/', '')
  return (
    <nav className="py-3 flex gap-3 mb-5 bg-gray-100 border-b border-gray-300">
      <LayoutContainer>
        <ul className="flex items-center justify-between gap-3 w-full overflow-scroll md:overflow-auto">
          {sports &&
            sports.map((item: SportsType) => {
              const slug = item.sport.toLocaleLowerCase()
              return (
                <li key={item.key}>
                  <Link
                    href={slug}
                    className={`md:w-auto w-50 leading-5 transition flex items-center gap-3 py-2 px-5 rounded-full font-semibold text-xs uppercase ${pathname_active.includes(slug) ? 'bg-blue-600 text-white cursor-default' : 'bg-gray-200 border-1 border-gray-300 hover:text-blue-600 hover:border-blue-600'}`}
                  >
                    <figure style={{ width: '24px' }}>
                      <Image
                        src={`/images/${item.sport}.png`}
                        width={410}
                        height={510}
                        alt={item.newName || item.sport}
                        className={`${pathname_active.includes(slug) ? 'invert' : ''}`}
                      />
                    </figure>
                    {item.newName}
                  </Link>
                </li>
              )
            })}
        </ul>
      </LayoutContainer>
    </nav>
  )
}
