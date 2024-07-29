module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
  ],
  rules: {
    'no-unused-vars': 'error', // Default rule
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: process.env.CI ? {
        'no-unused-vars': 'warn', // Change to 'warn' in CI environment
      } : {}
    }
  ]
};
