const { element, browser } = require("protractor");

var LoginPage = function () {
    var username = element(by.name('email'));
    var password = element(by.name('pass'));
    var signIn = element(by.name('login'));
    var homeIcon = element(by.xpath("//a[@aria-label='Facebook']"));
    browser.waitForAngularEnabled(false);

    this.get = function (url) {
        browser.get(url);
    };

    this.enterUname = function (name) {
        username.sendKeys(name);
    }
    this.enterPwd = function (pass) {
        password.sendKeys(pass);
    }

    this.clickLogin = function () {
       signIn.click();
       browser.sleep(3000);
    }
   
    this.isLoggedInSuccefully = function () {
      expect(homeIcon.isDisplayed()).toBe(true);
    } 
};
module.exports = new LoginPage();