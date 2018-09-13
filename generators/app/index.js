'use strict';
const Generator = require('yeoman-generator');
const path = require('path');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      // eslint-disable-next-line
      yosay(`Welcome to the fantastic ${chalk.red('generator-typescript-module')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname // Default to current folder name
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      path.join(__dirname, 'typescript-module-template'),
      this.destinationPath('.')
    );

    this.fs.copy(
      path.join(__dirname, 'typescript-module-template', '.gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      path.join(__dirname, 'typescript-module-template', '.vscode', 'settings.json'),
      this.destinationPath('.vscode/settings.json')
    );

    // Create the Readme
    this.fs.copyTpl(
      path.join(__dirname, 'templates', 'README.md'),
      this.destinationPath('README.md'),
      { name: this.props.name }
    );

    // Change package json name
    const packageJSON = this.fs.readJSON('package.json');
    packageJSON.name = this.props.name;
    packageJSON.version = '0.0.1';
    this.fs.writeJSON('package.json', packageJSON, null, 2);
  }

  install() {
    this.installDependencies();
  }
};
