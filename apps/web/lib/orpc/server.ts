import 'server-only'

import { cache } from 'react'
import { headers } from 'next/headers'

import { createORPCContext, createRouterCaller, router } from '@nouz/api'

const createContext = cache(async () => {
  const heads = new Headers(await headers())
  heads.set('x-orpc-source', 'rsc')

  return createORPCContext(heads)
})

export const api = createRouterCaller({
  router,
  context: await createContext(),
})
