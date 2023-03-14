module.exports = {
    branches: ['master'], // nombre de la rama de git donde se hace la publicación
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/npm',
      '@semantic-release/changelog',
      '@semantic-release/github',
    ],
  };