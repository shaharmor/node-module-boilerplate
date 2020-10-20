import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest/utils';
import * as tsConfig from './tsconfig.json';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths, { prefix: '<rootDir>/' }),
};

// eslint-disable-next-line import/no-default-export
export default config;
