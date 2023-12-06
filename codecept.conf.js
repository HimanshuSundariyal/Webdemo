//const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
//setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:3000/',
      show: true,
      browser: 'chromium',
      waitForNavigation: "networkidle0",
    }
  },
  include: {
    I: './steps_file.js',
    // ImagesPage: './tests/pages/checkImg.page.js',
    // HoverPage: './tests/pages/hover.page.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'webAppDemoTesting',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}