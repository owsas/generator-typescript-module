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
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
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
  }

  install() {
    this.installDependencies();
  }
};
