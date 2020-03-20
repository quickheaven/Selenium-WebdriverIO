describe("Verify wether webdriveruniversity link on homepage work correctly", function () {
    it("check that the contact us buttons opens the contact us page", function (done) {

        browser.setViewportSize({
            width: 1200,
            height: 800
        })
        browser.url('/')
        var title = browser.getTitle();
        expect(title).to.equal('WebDriverUniversity.com');
        console.log('Title is: ' + title);
        browser.debug();
        browser.click('#contact-us')
        browser.pause(3000)
    });

    it("check that the login button opens the login page", function (done) {
        return browser
        browser.url('/')
        browser.click('#login-portal')
        var title = browser.getTitle();
        title.should.equal(title, 'WebDriverUniversity.com');
        console.log('Title is: ' + title);
        browser.pause(3000)
    });
});