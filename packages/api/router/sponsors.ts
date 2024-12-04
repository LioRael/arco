import { z } from 'zod'

import { pub } from '../orpc'

const sponsors = [
  {
    name: 'Google',
    url: 'https://google.com',
  },
  {
    name: 'Vercel',
    url: 'https://vercel.com',
  },
  {
    name: 'Tencent',
    url: 'https://tencent.com',
  },
  {
    name: 'Alibaba',
    url: 'https://alibaba.com',
  },
  {
    name: 'Stripe',
    url: 'https://stripe.com',
  },
  {
    name: 'Meta',
    url: 'https://meta.com',
  },
  {
    name: 'Amazon',
    url: 'https://amazon.com',
  },
  {
    name: 'Apple',
    url: 'https://apple.com',
  },
]

const sponsorsSchema = z.array(
  z.object({
    name: z.string(),
    url: z.string(),
  })
)

const listSponsors = pub
  .route({
    method: 'GET',
    path: '/sponsors',
    summary: 'Get a list of sponsors',
  })
  .output(sponsorsSchema)
  .func(() => sponsors)

export { listSponsors }
