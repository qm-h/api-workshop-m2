import type {Config} from 'jest';

const config: Config = {
    verbose: true,
    testEnvironment: "node",
    preset: 'ts-jest',
    testMatch: ['**/*.spec.ts'],
    moduleFileExtensions: ['ts', 'js', 'json'],
    coveragePathIgnorePatterns: ['node_modules'],
    coverageDirectory: 'coverage',
};

export default config;