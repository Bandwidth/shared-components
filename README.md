# bandwidth-shared-components
Shared Component Library for Bandwidth React Apps

## Inspecting the components

Clone this repo anywhere you like. Run `npm i` to install dependencies. Then run `npm start` and navigate to `http://localhost:3000`. Hopefully you see the Pristine component testing UI.

## How to use

Clone this repo as a Git submodule in your project. Add the local `node_modules` folder to your Webpack config's modules directories, or just install any of the dependencies listed in `package.json` in your root `package.json` as requirements. Then, reference the components contained in `components` as if they were components managed by your app. As long as you've got Babel set up to transpile ES6/7, things should work.
