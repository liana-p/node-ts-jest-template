# My Node Typescript template with Jest and Prettier

Simple empty node project template made for myself with typescript and jest unit tests.

- includes vscode workspace settings
- Uses [swc](https://swc.rs) for quick compilation and running of typescript code and tests
- Uses [prettier](https://prettier.io) for nice auto formatting of the code
- Uses [jest](https://jestjs.io) for unit tests

## Usage

- `yarn start`: Builds all ts files and runs `dist/index.js`
- `yarn build`: Builds ts files (no type checking, this is compilation only)
- `yarn typecheck`: Checks types
- `yarn test`: Runs jest unit tests
