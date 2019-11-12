exports.config = {
  tests: './e2e/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'sample-codeceptjs'
}