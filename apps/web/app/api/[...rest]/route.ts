import { createFetchHandler, createORPCContext, router } from '@nouz/api'

const handler = createFetchHandler({
  router,
  serverless: true,
})

async function handleRequest(request: Request) {
  const context = await createORPCContext(request.headers)

  return handler({
    request,
    prefix: '/api',
    context,
  })
}

export const GET = handleRequest
export const POST = handleRequest
export const PUT = handleRequest
export const DELETE = handleRequest
export const PATCH = handleRequest
