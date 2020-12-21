require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['@shaharmor/eslint-config'],
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
