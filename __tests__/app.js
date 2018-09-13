'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-typescript-module:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({});
  });

  it('creates files', () => {
    // A assert.file(['.gitignore']);
    assert.file(['yarn.lock']);
    assert.file(['package.json']);
    assert.file(['src/index.ts']);
    assert.file(['test/index.test.ts']);
    assert.file(['tsconfig.json']);
    assert.file(['tslint.json']);
  });
});
