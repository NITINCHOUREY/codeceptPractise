const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://myapp.com',
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      restart: false,
      windowSize: '1920x1680',
    }
  },
  include: {
    I: './steps_file.js'
  },
  "gherkin": {
    "features": "./automation/feature/test.feature",
    "steps": [
      "./automation/implementation/test.js"
    ]
  },
  bootstrap: null,
  mocha: {},
multiple:
{
  parallel:
  {
    chunks:2,
  }
},

  name: 'vsLearning',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
  },
  allure: {
    enabled: true
  }
  }
}