import { auth, toNextJsHandler } from '@nouz/auth'

export const { GET, POST } = toNextJsHandler(auth.handler)
