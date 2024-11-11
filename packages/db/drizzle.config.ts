import type { Config } from 'drizzle-kit'

import { env } from '@nouz/env/web/server'

export default {
  dialect: 'postgresql',
  schema: './src/schema/index.ts',
  out: './drizzle',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
} satisfies Config
