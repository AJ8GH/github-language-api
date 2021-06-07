# GitHub Favourite Languages API

[![Build Status](https://travis-ci.com/AJ8GH/github-language-api.svg?branch=main)](https://travis-ci.com/AJ8GH/github-language-api)
[![codecov](https://codecov.io/gh/AJ8GH/github-language-api/branch/main/graph/badge.svg?token=Jotushbsqm)](https://codecov.io/gh/AJ8GH/github-language-api)
[![BCH compliance](https://bettercodehub.com/edge/badge/AJ8GH/github-language-api?branch=main)](https://bettercodehub.com/results/AJ8GH/github-language-api)
[![Maintainability](https://api.codeclimate.com/v1/badges/e5c21864eb7f6e201b64/maintainability)](https://codeclimate.com/github/AJ8GH/github-language-api/maintainability)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
 <a href="https://standardjs.com" style="float: right; padding: 0 0 20px 20px;"><img src="https://cdn.rawgit.com/feross/standard/master/sticker.svg" alt="Standard JavaScript" width="100" align="right"></a>

App to determine the favourite proramming languages of a GitHub user, using the public GitHub API

[Deployed App](#deployed-app) | [Getting Started](#getting-started) | [Running Tests](#running-tests) | [Usage](#using-the-app) | [Dependencies](#dependencies) | [User Stories](https://github.com/AJ8GH/github-language-api/blob/main/user-stories.md)

## Deployed app

You can use the deployed application here: https://github-language-analyser.herokuapp.com/

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

Then head to localhost in your browser at port 3000, or [click here](http://localhost:3000/)

## Running tests

I've used Mocha for unit tests and Cypress for integration tests.

### Mocha

Unit tests can be run from the project root with:

```shell
npm test
```

You will need to ensure the server is not running locally when running the Mocha test suite or you will get an error, since mocha also runs the `app.test.js` file, which tests the connection to the server.

### Cypress

To run the Cypress test suite, first start the server:

```shell
npm start
```

Then, with the server still running:

```shell
npm run cy
```

## Design

### Edge cases

* Null language repos
* Null username input
* Incorrect username input
* No repos under user
* API down

## Using the app

## Dependencies

* `"c8": "^7.7.2"`
* `"chai": "^4.3.4"`
* `"chai-http": "^4.3.0"`
* `"cypress": "^7.4.0"`
* `"eslint": "^7.28.0"`
* `"eslint-config-standard": "^16.0.3"`
* `"eslint-plugin-cypress": "^2.11.3"`
* `"eslint-plugin-import": "^2.23.4"`
* `"eslint-plugin-node": "^11.1.0"`
* `"eslint-plugin-promise": "^5.1.0"`
* `"express": "^4.17.1"`
* `"mocha": "^8.4.0"`
* `"nyc": "^15.1.0"`
* `"wait-on": "^5.3.0"`
