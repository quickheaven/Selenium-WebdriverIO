describe("Verify wether webdriveruniversity link on homepage work correctly", function () {
    it("check that the contact us buttons opens the contact us page", function (done) {
        return browser
            .setViewportSize({
                width: 1200,
                height: 800
            })
            .url('http://www.webdriveruniversity.com/')
            .getTitle().then(function (title) {
                console.log('Title is: ' + title);
            })
            .click('#contact-us')
            .pause(3000)
    });

    it("check that the login button opens the login page", function (done) {
        return browser
            .url('http://www.webdriveruniversity.com/')
            .click('#login-portal')
            .getTitle().then(function (title) {
                console.log('Title is: ' + title);
            })
            .pause(3000)
    });
});