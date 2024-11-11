import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { admin } from 'better-auth/plugins'

import { db } from '@nouz/db'
import { env } from '@nouz/env/web/server'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [admin()],
  trustedOrigins: ['better-auth://', 'exp://', env.BETTER_AUTH_URL].filter(
    Boolean
  ) as string[],
})
