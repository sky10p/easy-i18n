module.exports = {
  branches: ['master'],

  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/npm', {npmPublish: true}],
    ['@semantic-release/changelog', {
      changelogFile: "CHANGELOG.md"
    }],
    ['@semantic-release/git', {
      assets: ["CHANGELOG.md", "package.json"],
      message:
        ":bookmark: Release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
    }],
    '@semantic-release/github',
  ],
};