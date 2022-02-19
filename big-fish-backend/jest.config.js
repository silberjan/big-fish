module.exports = {
  verbose: false,
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', '.'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/?(*.)(spec|test).(ts|js)?(x)'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/jestSetupAfterEnv.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
      diagnostics: {
        ignoreCodes: ['TS151001'],
      },
    },
  },
}
