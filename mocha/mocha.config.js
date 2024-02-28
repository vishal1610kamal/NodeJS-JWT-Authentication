module.exports = {
  require: 'ts-node/register', // This allows Mocha to run TypeScript directly
  spec: './src/**/*.spec.ts', // Pattern to find test files
  timeout: 5000, // Set test timeout
  exit: true // Instructs Mocha to forcibly shut down after tests are complete
};
