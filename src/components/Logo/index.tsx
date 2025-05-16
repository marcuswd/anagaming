import Link from 'next/link'

interface LogoProps {
  href?: string
}

export default function Logo({ href }: LogoProps) {
  const logoContent = (
    <h1 className="text-2xl uppercase text-gray-200 font-extrabold italic">
      Ana Bet
    </h1>
  )

  if (href) {
    return <Link href={href}>{logoContent}</Link>
  }

  return logoContent
}
