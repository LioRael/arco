import type React from 'react'

import { NouzFooter } from '@/components/nouz-footer'
import { NouzHeader } from '@/components/nouz-header'
import { NouzSmoothScroll } from '@/components/ui/nouz-smooth-scroll'

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NouzSmoothScroll>
      <NouzHeader />
      {children}
      <NouzFooter />
    </NouzSmoothScroll>
  )
}
