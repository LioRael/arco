import { CaretSortIcon, ComponentPlaceholderIcon } from '@radix-ui/react-icons'
import { Bell, LogOut, Sparkles, UserIcon } from 'lucide-react'

import type { Session } from '@nouz/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@nouz/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@nouz/ui/dropdown-menu'
import { SidebarMenuButton } from '@nouz/ui/sidebar'

import { AccountItem } from '../nouz-account-dialog'
import { SignOutButton } from '../sign-out-button'

interface NouzAccountDropdownProps {
  session: Session
  isMobile: boolean
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
}

const NouzAccountDropdown = ({
  session,
  isMobile,
  children,
  side,
}: NouzAccountDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side={side ? side : isMobile ? 'bottom' : 'right'}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="size-8 rounded-lg">
              <AvatarImage src={session.user.image} alt={session.user.name} />
              <AvatarFallback className="rounded-lg">
                <UserIcon />
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                {session.user.name}
              </span>
              <span className="truncate text-xs">{session.user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Sparkles />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <AccountItem />
          <DropdownMenuItem>
            <ComponentPlaceholderIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <SignOutButton asChild>
          <DropdownMenuItem>
            <LogOut />
            Log out
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const NouzAccountDropdownSidebarTrigger = ({
  session,
  ...props
}: React.ComponentProps<typeof SidebarMenuButton> & { session: Session }) => {
  return (
    <SidebarMenuButton
      size="lg"
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      {...props}
    >
      <Avatar className="size-8 rounded-lg">
        <AvatarImage src={session.user.image} alt={session.user.name} />
        <AvatarFallback className="rounded-lg">
          <UserIcon />
        </AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">{session.user.name}</span>
        <span className="truncate text-xs">{session.user.email}</span>
      </div>
      <CaretSortIcon className="ml-auto size-4" />
    </SidebarMenuButton>
  )
}

export { NouzAccountDropdown, NouzAccountDropdownSidebarTrigger }
