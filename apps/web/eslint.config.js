import next from '@nouz/eslint/next.js'

export default [
  {
    ignores: ['dist', 'node_modules', '.next/', 'out/', 'postcss.config.mjs'],
  },
  ...next,
]
