import type React from 'react'
import { headers } from 'next/headers'

import { auth } from '@nouz/auth'
import { SidebarInset, SidebarProvider } from '@nouz/ui/sidebar'

import { NouzSidebar } from '@/components/nouz-sidebar'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  return (
    <>
      <SidebarProvider>
        <NouzSidebar session={session} />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </>
  )
}
