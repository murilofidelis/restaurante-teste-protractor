/*const uuid = require('node-uuid');
const shortid = require('shortid');
var EC = protractor.ExpectedConditions;

class Helper {
  generateRandomString() {
    return uuid.v4();
    //String baseada na data e hora
    //  return uuid.v1();
  }
  generateRandomEmail() {
    return shortid.generate() + '@email.com';
  }
  //espera por um elemento na tela
  waitElementVisibility(element) {
    browser.wait(EC.visibilityOf(element), 5000);
  }
  waintPresenceOf(element) {
    var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to be present on the dom.
    browser.wait(EC.presenceOf(element), 5000);
  }
}
module.exports = Helper;
