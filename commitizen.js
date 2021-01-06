module.exports = {
    types: [
        {
            value: 'build',
            name: 'build: Build the project or change external dependencies',
        },
        { value: 'ci', name: 'ci: Setting up CI and working with scripts' },
        { value: 'docs', name: 'docs: Documentation update' },
        { value: 'feat', name: 'feat: Adding new functionality' },
        { value: 'fix', name: 'fix: Error correction' },
        {
            value: 'perf',
            name: 'perf: Changes to improve performance',
        },
        {
            value: 'refactor',
            name: 'refactor:  Code changes without fixing bugs or adding new features',
        },
        { value: 'revert', name: 'revert: Rollback to previous commits' },
        {
            value: 'style',
            name: 'style: Codestyle edits (tabs, indents, periods, commas, etc.)',
        },
        { value: 'test', name: 'test: Adding tests' },
    ],

    // Scopes. It characterizes the piece of code affected by the changes
    scopes: [
        { name: 'components' },
        { name: 'containers' },
        { name: 'localization' },
        { name: 'store' },
        { name: 'reducers' },
        { name: 'effects' },
        { name: 'selectors' },
        { name: 'middlewares' },
    ],

    // Ability to set a special AREA for a specific commit type (example for 'fix')
    /*
  scopeOverrides: {
    fix: [
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */

    // Let's change the default questions
    messages: {
        type: 'What changes are you making?',
        scope: '\nSelect the AREA you changed (optional):',
        // СAsk if allowCustomScopes is true
        customScope: 'Enter your SCOPE:',
        subject: 'Write a SHORT description in IMMEDIATE mood:\n',
        body: 'Write a DETAILED description (optional). Use "|" for a new line:\n',
        breaking: 'BREAKING CHANGES List (optional):\n',
        footer: 'Place for metadata (tickets and links). For example: SECRETMRKT-700, SECRETMRKT-800:\n',
        confirmCommit: 'You are satisfied with the resulting commit',
    },

    // Let's resolve our own SCOPE
    allowCustomScopes: true,

    // Ban on Breaking Changes
    allowBreakingChanges: false,

    // Footer prefix
    footerPrefix: 'META: ',

    // limit subject length
    subjectLimit: 72,
};
