import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  verbose: true,
  preset: 'ts-jest',
  modulePathIgnorePatterns: ['<rootDir>/dist/']
}

export default jestConfig