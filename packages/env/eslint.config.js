import library from '@nouz/eslint-config/library.js'

export default [
  ...library,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // We disable this rule in this package because turbo can't find the turbo.json files of the apps to know that we are actually passing through env vars there.
      'turbo/no-undeclared-env-vars': 'off',
    },
  },
]
