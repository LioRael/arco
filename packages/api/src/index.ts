import { sponsorsRouter } from './router/sponsors'
import { createCallerFactory, createRouter } from './trpc'

export const appRouter = createRouter({
  sponsors: sponsorsRouter,
})

export type AppRouter = typeof appRouter

export const createCaller = createCallerFactory(appRouter)

export { createTRPCContext } from './trpc'
export { fetchRequestHandler } from '@trpc/server/adapters/fetch'

export type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
