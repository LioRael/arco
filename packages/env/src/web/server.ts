import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import { sharedEnv } from '../shared'
import { env as dbEnv } from './db'

export const env = createEnv({
  extends: [sharedEnv, dbEnv],
  server: {
    BETTER_AUTH_SECRET: z.string(),
    BETTER_AUTH_URL: z.string().url().optional(),
  },
  shared: {
    PORT: z.coerce.number().default(3000),
  },
  experimental__runtimeEnv: {
    PORT: process.env.PORT,
  },
  emptyStringAsUndefined: true,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})
