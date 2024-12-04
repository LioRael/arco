import type { Config } from 'tailwindcss'

import { config as preset } from '@nouz/tailwind-config/config'

const config = {
  content: preset.content,
  presets: [preset],
  theme: {
    extend: {
      container: {
        padding: '1rem',
        screens: {
          '2xl': '1024px',
        },
      },
    },
  },
} satisfies Config

export default config
