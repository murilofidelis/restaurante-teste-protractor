module.exports.config = {
  directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/*.spec.js'],
  baseUrl: 'http://localhost:4200/',
  //highlightDelay: 1,
  framework: 'jasmine2',
  capabilities: {
    'browserName': 'chrome'
  },
  suites: {
    restaurantes: 'specs/restaurantes.spec.js',
  },
  onPrepare() {
    browser.driver.manage().window().maximize();

  },
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

}
