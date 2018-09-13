# generator-typescript-module [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Generator for Typescript modules ready to be published to npm. This generator creates you a Typescript module, as it is specified in https://github.com/owsas/typescript-module-template

## Installation

First, install [Yeoman](http://yeoman.io) and generator-typescript-module using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-typescript-module
```

Then generate your new project:

```bash
yo typescript-module
```

## Updating template code
This module pulls the code from the Typescript Module Generator repo (https://github.com/owsas/typescript-module-template). Please,
do not update the code in `generators/app/typescript-module-template` directly. Instead, run 

```bash
sh sh/clone.sh
```

This will clone the `typescript-module-template` repository and update the code in `generators/app/typescript-module-template`

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Juan Camilo Guarín Peñaranda](http://owsas.com)


[npm-image]: https://badge.fury.io/js/generator-typescript-module.svg
[npm-url]: https://npmjs.org/package/generator-typescript-module
[travis-image]: https://travis-ci.org/owsas/generator-typescript-module.svg?branch=master
[travis-url]: https://travis-ci.org/owsas/generator-typescript-module
[daviddm-image]: https://david-dm.org/owsas/generator-typescript-module.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/owsas/generator-typescript-module
