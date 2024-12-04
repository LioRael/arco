import 'dotenv/config'

import { drizzle } from 'drizzle-orm/node-postgres'

import { env } from '@nouz/env/web/server'

import * as schema from './schema'

export const db = drizzle(env.DATABASE_URL, {
  schema,
})

export { schema }
