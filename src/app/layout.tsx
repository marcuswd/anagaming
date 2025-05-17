import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/next'

const robotoFlex = Roboto_Flex({
  weight: ['100', '300', '500', '600', '800'],
  subsets: ['latin'],
  variable: '--font-roboto-flex',
})

export const metadata: Metadata = {
  title: 'Ana Gamming front end test',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${robotoFlex.className} antialiased bg-gray-100 md:min-h-screen h-full`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  )
}
