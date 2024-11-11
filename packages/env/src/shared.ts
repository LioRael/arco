import { createEnv } from '@t3-oss/env-nextjs'
import { render, vercel } from '@t3-oss/env-nextjs/presets'
import { z } from 'zod'

export const sharedEnv = createEnv({
  extends: [vercel(), render()],
  shared: {
    NODE_ENV: z.enum(['development', 'test', 'production']).optional(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
})
