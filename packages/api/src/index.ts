import { createORPCContext } from './orpc'

export { router } from './router'
export { createRouterCaller } from '@orpc/server'
export { createFetchHandler } from '@orpc/server/fetch'
export { createORPCContext } from './orpc'

export type ContextType = Awaited<ReturnType<typeof createORPCContext>>
