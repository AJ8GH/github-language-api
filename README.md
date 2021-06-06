# GitHub Favourite Languages API

[![Build Status](https://travis-ci.com/AJ8GH/github-language-api.svg?branch=main)](https://travis-ci.com/AJ8GH/github-language-api)
[![codecov](https://codecov.io/gh/AJ8GH/github-language-api/branch/main/graph/badge.svg?token=Jotushbsqm)](https://codecov.io/gh/AJ8GH/github-language-api)
[![BCH compliance](https://bettercodehub.com/edge/badge/AJ8GH/github-language-api?branch=main)](https://bettercodehub.com/)
[![Maintainability](https://api.codeclimate.com/v1/badges/e5c21864eb7f6e201b64/maintainability)](https://codeclimate.com/github/AJ8GH/github-language-api/maintainability)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
 <a href="https://standardjs.com" style="float: right; padding: 0 0 20px 20px;"><img src="https://cdn.rawgit.com/feross/standard/master/sticker.svg" alt="Standard JavaScript" width="100" align="right"></a>

App to determine the favourite proramming languages of a GitHub user, using the public GitHub API

[Getting Started](#getting-started) | [Running Tests](#running-tests) | [Usage](#using-the-app) | [Dependencies](#dependencies) | [User Stories](https://github.com/AJ8GH/github-language-api/blob/main/user-stories.md)

## Getting started

Clone this repository:

```shell
git@github.com:AJ8GH/github-language-api.git
```

Navigate to the root of the project and install the development dependencies:

```shell
cd github-language-api
npm i
```

To run the app locally, start the server:

```shell
npm start
```

Then head to localhost in your browser, on port 3000, or [click here](http://localhost:3000/)

## Running tests

Unit tests are written with Mocha, while integration tests are written with Cypress.

### Mocha

Unit tests can be run from the project root with:

```shell
npm test
```

You will need to ensure the server is not running locally when running the Mocha test suite or you will get an error, since mocha also runs the `app.test.js` file, which tests the connection to the server.

### Cypress

To run The Cypress test suite, first start the server:

```shell
npm start
```

Then in a different terminal, run:

```shell
npm run cy
```

To launch the headed browser and GUI, run:

```shell
npx cypress open
```

## Using the app

## Dependencies
