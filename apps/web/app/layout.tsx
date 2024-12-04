import type React from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'

import { Toaster } from '@nouz/design-system/components/ui/sonner'

import { ORPCProvider } from '@/lib/orpc/react'

export const metadata: Metadata = {
  title: 'Create Nouz App',
  description: 'A starter for building apps with Nouz',
}

const geistSans = localFont({
  src: '../../../packages/assets/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: '../../../packages/assets/fonts/GeistVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${geistSans.variable} antialiased`}
      >
        <ORPCProvider>{children}</ORPCProvider>
        <Toaster />
      </body>
    </html>
  )
}
