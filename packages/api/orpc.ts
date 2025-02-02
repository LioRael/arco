import { headers } from 'next/headers'
import { ORPCError, os } from '@orpc/server'

import { auth, Session } from '@nouz/auth'
import { db } from '@nouz/db'

export type ORPCContext = {
  session?: Session['session']
  user?: Session['user']
  db: typeof db
}

export const pub = os
  .context<ORPCContext | undefined>()
  .use(async (_input, _context, meta) => {
    const session = await auth.api.getSession({
      headers: await headers(),
    })

    return meta.next({
      context: {
        db,
        session: session?.session,
        user: session?.user,
      },
    })
  })

export const authed = pub.use((_input, context, meta) => {
  if (!context.session || !context.user) {
    throw new ORPCError({
      code: 'UNAUTHORIZED',
    })
  }

  return meta.next({
    context: {
      session: context.session,
      user: context.user,
    },
  })
})

export const admin = authed.use((_input, context, meta) => {
  if (context.user.role !== 'admin') {
    throw new ORPCError({
      code: 'FORBIDDEN',
    })
  }

  return meta.next({})
})
