import { ORPCError, os } from '@orpc/server'

import { auth, Session } from '@nouz/auth'
import { db } from '@nouz/db'

export type ORPCContext = {
  session?: Session['session']
  user?: Session['user']
  db: typeof db
}

export const createORPCContext = async (headers: Headers) => {
  const session = await auth.api.getSession({
    headers,
  })

  return {
    session: session?.session,
    user: session?.user,
    db,
  }
}

export const pub = os.context<ORPCContext>().use((_input, _context, meta) => {
  const start = Date.now()

  meta.onFinish(() => {
    console.log(`[${meta.path.join('/')}] ${Date.now() - start}ms`)
  })
})

export const authed = pub.use((_input, context, _meta) => {
  if (!context.session || !context.user) {
    throw new ORPCError({
      code: 'UNAUTHORIZED',
    })
  }

  return {
    context: {
      ...context,
      session: context.session,
      user: context.user,
    },
  }
})

export const admin = authed.use((_input, context, _meta) => {
  if (context.user.role !== 'admin') {
    throw new ORPCError({
      code: 'FORBIDDEN',
    })
  }
})
