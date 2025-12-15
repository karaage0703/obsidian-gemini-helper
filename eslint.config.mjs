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
      'obsidianmd/ui/sentence-case': ['warn', {
        acronyms: [
          'RAG', 'API', 'HTTP', 'HTTPS', 'URL', 'DNS', 'TCP', 'IP', 'SSH', 'TLS',
          'SSL', 'FTP', 'SFTP', 'SMTP', 'JSON', 'XML', 'HTML', 'CSS', 'PDF', 'CSV',
          'YAML', 'SQL', 'PNG', 'JPG', 'JPEG', 'GIF', 'SVG', '2FA', 'MFA', 'OAuth',
          'JWT', 'LDAP', 'SAML', 'SDK', 'IDE', 'CLI', 'GUI', 'CRUD', 'REST', 'SOAP',
          'CPU', 'GPU', 'RAM', 'SSD', 'USB', 'UI', 'OK', 'RSS', 'S3', 'WebDAV', 'ID',
          'UUID', 'GUID', 'SHA', 'MD5', 'ASCII', 'UTF-8', 'UTF-16', 'DOM', 'CDN',
          'FAQ', 'AI', 'ML'
        ],
        brands: ['Obsidian', 'Markdown', 'JavaScript', 'TypeScript'],
        ignoreWords: ['Japanese', 'English', 'IDs', 'Google'],
        ignoreRegex: ['e\\.g\\.'],
      }],
    },
  },
];
