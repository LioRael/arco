'use client'

import type { Session } from '@nouz/auth'
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '@nouz/design-system/components/ui/sidebar'

import {
  NouzAccountDropdown,
  NouzAccountDropdownSidebarTrigger,
} from './ui/nouz-account-dropdown'

export function NouzNavUser({ session }: { session: Session | null }) {
  const { isMobile } = useSidebar()

  if (!session) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <NouzAccountDropdown session={session} isMobile={isMobile}>
          <NouzAccountDropdownSidebarTrigger session={session} />
        </NouzAccountDropdown>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
