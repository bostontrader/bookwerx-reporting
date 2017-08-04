[![Build Status](https://travis-ci.org/bostontrader/bookwerx-reporting.svg?branch=master)](https://travis-ci.org/bostontrader/bookwerx-reporting)
[![Coverage Status](https://coveralls.io/repos/github/bostontrader/bookwerx-reporting/badge.svg?branch=master)](https://coveralls.io/github/bostontrader/bookwerx-reporting?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/bostontrader/bookwerx-reporting/badge.svg)](https://snyk.io/test/github/bostontrader/bookwerx-reporting)

# Welcome to bookwerx-reporting

## Introduction
The purpose of **bookwerx-reporting** is to provide an example of extracting information from a bookwerx-core server and presenting a variety of reports, graphs, and charts.

## Getting Started

npm install

npm test

npm start

Note: Be sure to quote the glob pattern in npm commands or you may have unpleasant surprises re: which files and directories it finds.  In particularly, globstar (**) can cause trouble.

## Dependencies

**bookwerx-reporting** uses React for the UI and hence requires:

* react
* react-dom

**bookwerx-reporting** also uses:

* bulma - For styling.


## devDependencies

**bookwerx-reporting** uses webpack and the weback development server.

* webpack
* webpack-dev-server

**bookwerx-reporting** uses ES2015 source code as well as a few additional fancy language features.  We have chosen babel for our transpiling needs. This gives rise to the need to use:

* babel-core
* babel-loader - Webpack needs this to connect to babel.
* babel-preset-es2015 - Need this generally for ES2015 syntax.
* babel-preset-react - Need this in order to use JSX syntax.
* babel-preset-stage-0 - Random bits of new ES syntax.

We use Webpack, sass, and scss, so we need a blizzard of loaders for all this:

* css-loader
* file-loader
* node-sass
* postcss-loader
* sass-loader
* style-loader

For testing we use Ava and nyc for test coverage reporting so we therefore need:

* ava
* nyc
