import React from 'react'

import {
  NavigationMenuLink,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from '@nouz/design-system/components/ui/navigation-menu'
import { cn } from '@nouz/design-system/utils/cn'

export {
  NavigationMenu,
  NavigationMenuRoot,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@nouz/design-system/components/ui/navigation-menu'

const NouzNavigationMenuRoot = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuRoot>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuRoot>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuRoot
    ref={ref}
    className={cn(
      'relative z-10 flex max-w-max flex-1 items-center justify-center',
      className
    )}
    {...props}
  >
    {children}
    <NouzNavigationViewport />
  </NavigationMenuRoot>
))
NouzNavigationMenuRoot.displayName = 'NouzNavigationMenuRoot'

const NouzNavigationViewport = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuViewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuViewport>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuViewport
    ref={ref}
    className={cn('border-none', className)}
    {...props}
  >
    {children}
  </NavigationMenuViewport>
))
NouzNavigationViewport.displayName = NavigationMenuViewport.displayName

const NouzNavigationMenuTrigger = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuTrigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuTrigger>
>(({ children, className, ...props }, ref) => {
  return (
    <NavigationMenuTrigger
      ref={ref}
      className={cn('bg-transparent', className)}
      {...props}
    >
      {children}
    </NavigationMenuTrigger>
  )
})
NouzNavigationMenuTrigger.displayName = NavigationMenuTrigger.displayName

const NouzNavigationMenuLink = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuLink>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuLink>
>(({ children, className, ...props }, ref) => {
  return (
    <NavigationMenuLink
      ref={ref}
      className={cn(navigationMenuTriggerStyle(), 'bg-transparent', className)}
      {...props}
    >
      {children}
    </NavigationMenuLink>
  )
})
NouzNavigationMenuLink.displayName = NavigationMenuLink.displayName

export {
  NouzNavigationMenuRoot,
  NouzNavigationMenuTrigger,
  NouzNavigationMenuLink,
}
