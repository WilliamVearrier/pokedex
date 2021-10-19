module.exports =
  // This will disable most lint rules when doing 'npm start' so it's easier to do development
  (process.env.NODE_ENV === 'development' && {
    extends: ['react-app'],
    plugins: ['sonarjs'],
    rules: {
      'react-hooks/rules-of-hooks': 0,
      'sonarjs/no-duplicate-string': 0,
      '@typescript-eslint/no-use-before-define': 0,
      '@typescript-eslint/no-unused-vars': 0
    }
  }) || {
    extends: [
      'react-app',
      'react-app/jest',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:prettier/recommended',
      'plugin:sonarjs/recommended',
      'plugin:testing-library/react',
      'plugin:jest-dom/recommended'
    ],
    plugins: ['react', '@typescript-eslint', 'prettier', 'sonarjs', 'testing-library', 'jest-dom'],
    env: {
      browser: true,
      jasmine: true,
      jest: true,
      node: true,
      es6: true
    },
    rules: {
      'prettier/prettier': ['error', { singleQuote: true }],
      '@typescript-eslint/explicit-function-return-type': 0,
      'no-console': 2,
      'sonarjs/no-duplicate-string': 2,
      'sonarjs/cognitive-complexity': 2,
      'no-lonely-if': 2,
      'no-new-wrappers': 2,
      'no-new-object': 2,
      'no-self-compare': 2,
      'require-await': 2,
      'object-shorthand': 2,
      'react/self-closing-comp': 2,
      'react/jsx-boolean-value': 2,
      'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
      yoda: ['error', 'never', { exceptRange: true }],
      'testing-library/prefer-explicit-assert': ['error', { assertion: 'toBeInTheDocument' }],
      'testing-library/no-manual-cleanup': 1,
      'testing-library/no-render-in-setup': 1,
      'testing-library/prefer-screen-queries': 1,
      'testing-library/prefer-presence-queries': 2,
      'testing-library/prefer-wait-for': 2,
      'testing-library/no-wait-for-snapshot': 2,
      'testing-library/no-wait-for-empty-callback': 2,
      '@typescript-eslint/explicit-module-boundary-types': 0
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'detect'
      }
    },
    parser: '@typescript-eslint/parser'
  };
