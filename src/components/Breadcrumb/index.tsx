'use client' // Marca como Client Component

import { formatSportName } from '@/helpers/formatSportName'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href: string
}

export default function Breadcrumb() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join('/')}`
      const label = segment.replace(/[-]/g, ' ')
      return { label: label.charAt(0).toUpperCase() + label.slice(1), href }
    }),
  ]

  return (
    <nav aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex items-center">
        {breadcrumbItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              {formatSportName(item.label)}
            </Link>
            {index < breadcrumbItems.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
