import type React from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'

import { Toaster } from '@nouz/ui/sonner'

import { TRPCReactProvider } from '@/lib/trpc/react'

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
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Toaster />
      </body>
    </html>
  )
}
