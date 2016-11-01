# 02 - Start at the beginning

[Slide](https://goo.gl/OkUdLU)

The dev environment for a frontend application is a quite complicated.
Let's do that step-by-step.

## JavaScript Language Specification

JavaScript is an implement of the standard ECMAScript.

There is different version of ECMAScript:
- ES3 (12/1999)
- ES5 (12/2009)
- ES2015 (ES6 06/2015)
- ES2016 (ES7 06/2015)
- ESNext (always the next version)

Only ES3 and ES5 are fully compatible through all browsers.

ES2015 & ES2016 needs transpilation into ES5 to be fully compatible.

### Selecting a Language

*ES5*

Give access to all browser without transpilation but hard to maintain.

*ES6/7*

Lot of cool new feature: classes, let, arrow functions, etc.

*TypeScript*

- Full documentation support.
- Strong typed
- Nice IDE support
- Next ES features

## What is TypeScript?

- Open source language
    - Microsoft is under the hood
    - Large Open Source contribution
- Superset if Javascript
    - Typescript can compile mixed TypeScript & JavaScript
    - Types are *NOT REQUIRED*
- Transpiles to plain JavaScript
    - Allow to target ES3/ES5/ES2015/etc.
    - Gives a hudge maintainability codebase
- Strongly typed (TS type declarations files (*.d.ts)
- Class-based object-orientation

### Learn more

Online [Playground](http://www.typescriptlang.org/play/) allows you to see JS output.

[Learn TypeScript in 30 minutes](http://tutorialzine.com/2016/07/learn-typescript-in-30-minutes/)

## IDE

- Visual Studio
- Visual Studio Code
- Webstorm
- Atom
- Eclipse
- Sublim Text
- Others

### Visual Studio Code

[Key bindings](https://code.visualstudio.com/docs/customization/keybindings)

[Documentation](https://code.visualstudio.com/docs)

## Setting up your Angular Environment

### npm

- NPM = Node package manager
- Command line utility
- Installs libraries, packages and applications

[Website](https://www.npmjs.com/)

### Setting up an Angular 2 Application

1. Create an application folder
2. Add package definition and configuration files
    1. package.json (`npm init`)
    2. tslint.json
    3. tsconfig.json
    4. systemjs.config.js
3. Install the packages
    1. Angular Dependencies
    2. Dev dependencies
4. Create the app's Angular Module
5. Create the app's Angular Component
6. Create the main.ts file
7. Create the host Web page (index)

And do this steps it's time you'll bootstrap a project.

### Using tools to bootstrap application

Different choices

1. Following the official Angular [Quick Start](https://angular.io/docs/ts/latest/quickstart.html)
2. Download the official Angular [Quick Start](https://github.com/angular/quickstart)
3. Use [cli.angular.io](cli.angular.io)
4. Use sources into [CRM_starter](CRM_starter/README.md)

### Useful tools to debug

1. [Augury](https://augury.angular.io)
2. [Angular BatScanner](https://github.com/douglasduteil/angular-batscanner)