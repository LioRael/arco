import 'server-only'

import { cache } from 'react'
import { headers } from 'next/headers'

import {
  ContextType,
  createORPCContext,
  createRouterCaller,
  router,
} from '@nouz/api'

type RouterCaller = ReturnType<typeof createRouterCaller<typeof router>>
type RouterMethod = (...args: unknown[]) => Promise<unknown>

const createContext = cache(async () => {
  const heads = new Headers(await headers())
  heads.set('x-orpc-source', 'rsc')
  return createORPCContext(heads)
})

export const orpc = new Proxy(
  createRouterCaller({
    router,
    context: null as unknown as ContextType,
  }),
  {
    get(target: RouterCaller, prop: keyof RouterCaller) {
      const original = target[prop]

      if (typeof original !== 'function') {
        return original
      }

      return async (...args: unknown[]) => {
        const context = await createContext()
        const caller = createRouterCaller({ router, context })
        const method = caller[prop] as unknown as RouterMethod
        return method(...args)
      }
    },
  }
) as RouterCaller
