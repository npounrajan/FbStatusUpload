const { element, browser } = require("protractor")

var HomePage = function () {
    var homeIcon = element(by.xpath("//a[@aria-label='Home']"));
    var statusField = element(by.xpath('//span[contains(text(),"on your mind")]'));
    var statusValue = element(by.xpath('//div[contains(@aria-label,"on your mind")]'));
    var postButton = element(by.xpath('//span[contains(text(),"Post")]'));

    browser.waitForAngularEnabled(false);
    this.isLoggedInSuccefully = function () {
        expect(homeIcon.isDisplayed()).toBe(true);
    }

    this.clickStatusField = function () {
         statusField.click();
         browser.sleep(2000);
    }

    this.enterStatusValue = function (value) {
        statusValue.sendKeys(value);
    }

    this.clickPostButton = function(){
        postButton.click();
    }
};
module.exports = new HomePage();