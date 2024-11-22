import type React from 'react'
import { headers } from 'next/headers'
import Link from 'next/link'

import { auth } from '@nouz/auth'
import { Button } from '@nouz/ui/button'
import { RainbowButton } from '@nouz/ui/rainbow-button'
import { Skeleton } from '@nouz/ui/skeleton'

import { api } from '@/lib/orpc/server'

export default async function HomePage() {
  // Fetch sponsors data from API in React Server Component (RSC)
  const sponsors = await api.sponsors.list(undefined)
  return (
    <main className="container">
      <Introduction>
        <IntroductionLeft>
          <IntroductionTitle>Welcome to Nouz</IntroductionTitle>
          <IntroductionDescription>
            Nouz is a modern, open-source stack for building web applications.
            It provides a complete toolkit including authentication, database
            integration, UI components, and developer tools to help you build
            production-ready applications faster and with best practices.
          </IntroductionDescription>
          <IntroductionActions>
            <GetStartedItem />
            <IntroductionActionLink href="/docs">
              <IntroductionAction
                className="h-11 rounded-xl px-6 text-base font-medium"
                variant="outline"
              >
                Documentation
              </IntroductionAction>
            </IntroductionActionLink>
          </IntroductionActions>
        </IntroductionLeft>
        <IntroductionRight>
          <IntroductionPreview />
        </IntroductionRight>
      </Introduction>
      <Sponsors>
        <SponsorsTitle>Sponsors</SponsorsTitle>
        <SponsorsDescription>
          Thank you to all our sponsors for their support!
        </SponsorsDescription>
        <SponsorsList>
          {sponsors.map((sponsor) => (
            <SponsorsListItem key={sponsor.url} href={sponsor.url}>
              {sponsor.name}
            </SponsorsListItem>
          ))}
        </SponsorsList>
      </Sponsors>
    </main>
  )
}

const Introduction = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-28 flex gap-x-12">{children}</div>
}

const IntroductionLeft = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full space-y-4 md:w-[55%]">{children}</div>
}

const IntroductionRight = ({ children }: { children: React.ReactNode }) => {
  return <div className="hidden w-[45%] items-center md:flex">{children}</div>
}

const IntroductionTitle = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-4xl font-bold">{children}</h1>
}

const IntroductionDescription = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <p className="text-lg text-muted-foreground">{children}</p>
}

const IntroductionActions = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-2 pt-4">{children}</div>
}

const IntroductionAction = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) => {
  return <Button {...props}>{children}</Button>
}

const IntroductionActionLink = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) => {
  return <Link {...props}>{children}</Link>
}

const IntroductionPreview = () => {
  return <Skeleton className="h-[240px] w-full" />
}

const GetStartedItem = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  return (
    <IntroductionActionLink href={session ? '/dashboard' : '/sign-in'}>
      <RainbowButton>{session ? 'Dashboard' : 'Get Started'}</RainbowButton>
    </IntroductionActionLink>
  )
}

const Sponsors = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-28 space-y-4">{children}</div>
}

const SponsorsTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-2xl font-bold">{children}</h2>
}

const SponsorsDescription = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-lg text-muted-foreground">{children}</p>
}

const SponsorsList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-4 md:grid-cols-4">
      {children}
    </div>
  )
}

const SponsorsListItem = ({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) => {
  return (
    <Link href={href}>
      <div className="flex h-20 cursor-pointer items-center justify-center rounded-lg bg-accent px-4 font-mono text-2xl font-medium text-accent-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground">
        {children}
      </div>
    </Link>
  )
}
