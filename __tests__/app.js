'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-typescript-module:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      name: 'test-package'
    });
  });

  it('creates files', () => {
    assert.file(['package-lock.json']);
    assert.file(['package.json']);
    assert.file(['src/index.ts']);
    assert.file(['test/index.test.ts']);
    assert.file(['tsconfig.json']);
    assert.file(['tslint.json']);
  });

  it('creates private files', () => {
    assert.file(['.gitignore']);
    assert.file(['.vscode/settings.json']);
  });

  it('changes the package.json name', () => {
    assert.jsonFileContent('package.json', { name: 'test-package' });
  });

  it('changes the package.json version', () => {
    assert.jsonFileContent('package.json', { version: '0.0.1' });
  });

  it('sets the README name', () => {
    assert.fileContent('README.md', '# test-package');
  });
});
