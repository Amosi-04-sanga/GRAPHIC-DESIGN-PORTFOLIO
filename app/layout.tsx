import TopNavbar from '@/components/shared/TopNavbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Graphic designers',
  description: 'proficient graphic designers from DSM Tz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TopNavbar/>
        {children}
      </body>
    </html>
  )
}
