import { pub } from '../orpc'
import { listSponsors } from './sponsors'

export const router = pub.router({
  sponsors: pub.tags('Sponsors').prefix('/sponsors').router({
    list: listSponsors,
  }),
})
