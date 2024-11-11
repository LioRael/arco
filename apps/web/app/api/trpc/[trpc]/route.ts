import type { NextRequest } from 'next/server'

import { appRouter, createTRPCContext, fetchRequestHandler } from '@nouz/api'
import { env } from '@nouz/env/web/server'

const createContext = async (req: NextRequest) => {
  return await createTRPCContext({
    headers: req.headers,
  })
}

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => createContext(req),
    onError: ({ path, error }) => {
      if (env.NODE_ENV === 'development') {
        console.error(
          `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`
        )
      }
    },
  })

export { handler as GET, handler as POST }
