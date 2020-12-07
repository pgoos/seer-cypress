# Test Automation Project

Test automation project for UI end-to-end testing of SEER app. It uses [Cypress.io](https://cypress.io) library (that has Mocha test runner and Chai assertions built in)

## Installation

1. Install node.js
2. Install dependencies

```bash
npm install
```

3. Prepare `cypress.json` file based on `test.cypress.json` template (for `CI/CD` setup, declare `env {}` section content as *environment variables* prefixed with `CYPRESS_` or `cypress_`

## Usage

```bash
npm run e2e
```

## Contributing
Pull requests are welcome. Always test your changes locally before making a PR