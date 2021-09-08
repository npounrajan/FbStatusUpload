var loginPage = require("../pages/LoginPage");
var homePage = require("../pages/Homepage")
var td = require("../testdata/data.json");

describe('Verify User can able to upload Status in FB', function () {
    it('Load the FB Url and provide the Credentials', function () {
        loginPage.get(td.url);
        loginPage.enterUname(td.username);
        loginPage.enterPwd(td.password);
        loginPage.clickLogin();
        loginPage.isLoggedInSuccefully();      
    })

    it('Post a new Status in the wall', function () {
        homePage.clickStatusField();
        homePage.enterStatusValue(td.statusMsg); 
    })
});