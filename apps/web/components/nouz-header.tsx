import type React from 'react'
import { headers } from 'next/headers'
import Link from 'next/link'
import { AppleIcon, BoxIcon, TerminalIcon } from 'lucide-react'

import { auth, type Session } from '@nouz/auth'
import { Button } from '@nouz/ui/button'
import ShimmerButton from '@nouz/ui/shimmer-button'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NouzNavigationMenuLink,
  NouzNavigationMenuRoot,
  NouzNavigationMenuTrigger,
} from '@/components/ui/nouz-navigation-menu'

import { HeaderWrapper } from './nouz-header.client'
import { NouzAccountDropdown } from './ui/nouz-account-dropdown'
import { NouzUserAvatar } from './ui/nouz-user-avatar'

export const NouzHeader = () => {
  return (
    <>
      <div className="h-12 sm:h-16" />
      <HeaderWrapper>
        <div className="flex w-full items-center justify-between">
          <NouzLogo />
          <NouzNavigationMenu />
          <NouzActions />
        </div>
      </HeaderWrapper>
    </>
  )
}

const NouzActions = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  return (
    <div className="hidden items-center gap-2 md:flex">
      {session ? (
        <>
          <Link href="/dashboard">
            <ShimmerButton className="h-8 px-3 text-sm" borderRadius="8px">
              Dashboard
            </ShimmerButton>
          </Link>
          <NouzAccountDropdown side="bottom" session={session} isMobile={false}>
            <NouzAccount session={session} />
          </NouzAccountDropdown>
        </>
      ) : (
        <>
          <Button
            size="sm"
            className="rounded-[8px] shadow-inner"
            variant="outline"
            asChild
          >
            <Link href="/sign-in">Login</Link>
          </Button>
          <Link href="/sign-up">
            <ShimmerButton className="h-8 px-3 text-sm" borderRadius="8px">
              Signup
            </ShimmerButton>
          </Link>
        </>
      )}
    </div>
  )
}

const NouzLogo = () => {
  return (
    <Link href="/">
      <h1 className="text-lg font-bold">
        <span className="font-mono text-primary">Nouz</span>
      </h1>
    </Link>
  )
}

const NouzNavigationMenu = () => {
  return (
    <NouzNavigationMenuRoot className="absolute left-1/2 hidden -translate-x-1/2 md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NouzNavigationMenuTrigger>Products</NouzNavigationMenuTrigger>
          <NavigationMenuContent asChild>
            <ProductsList>
              <ProductListItem>
                <ProductListItemIcon>
                  <BoxIcon />
                </ProductListItemIcon>
                <ProductListItemTitle>Product 1</ProductListItemTitle>
                <ProductListItemDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ProductListItemDescription>
              </ProductListItem>
              <ProductListItem>
                <ProductListItemIcon>
                  <TerminalIcon />
                </ProductListItemIcon>
                <ProductListItemTitle>Product 2</ProductListItemTitle>
                <ProductListItemDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ProductListItemDescription>
              </ProductListItem>
              <ProductListItem>
                <ProductListItemIcon>
                  <AppleIcon />
                </ProductListItemIcon>
                <ProductListItemTitle>Product 3</ProductListItemTitle>
                <ProductListItemDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ProductListItemDescription>
              </ProductListItem>
            </ProductsList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NouzNavigationMenuLink>Documentation</NouzNavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NouzNavigationMenuLink>Contact</NouzNavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NouzNavigationMenuRoot>
  )
}

const ProductsList = ({ children }: { children?: React.ReactNode }) => {
  return <div className="min-w-80 space-y-2 p-2">{children}</div>
}

const ProductListItem = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="group row-span-2 grid grid-cols-[auto_1fr] items-center rounded-md bg-transparent p-2 transition-colors ease-in-out hover:bg-sidebar-accent">
      {children}
    </div>
  )
}

const ProductListItemIcon = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="row-span-2 mr-4 flex size-16 items-center justify-center rounded-md bg-sidebar-accent p-2 transition-colors ease-in-out group-hover:bg-primary group-hover:text-primary-foreground">
      {children}
    </div>
  )
}

const ProductListItemTitle = ({ children }: { children?: React.ReactNode }) => {
  return <div className="text-sm font-medium">{children}</div>
}

const ProductListItemDescription = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  return <div className="text-sm text-sidebar-foreground">{children}</div>
}

const NouzAccount = ({ session }: { session: Session }) => {
  return (
    <NouzUserAvatar
      className="size-9 cursor-pointer"
      src={session.user.image}
    />
  )
}
