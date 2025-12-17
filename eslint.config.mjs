import obsidianmd from 'eslint-plugin-obsidianmd';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  {
    plugins: {
      obsidianmd,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
      'obsidianmd/ui/sentence-case': 'warn',
    },
  },
];
