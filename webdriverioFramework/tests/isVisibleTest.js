beforeEach(function () {
    browser.url("/Hidden-Elements/index.html");
})

describe('Test whether hidden elements exist', function () {
    it('Button display is set to non display but still exists in html dom therefore should return true', function (done) {
        var isVisible = browser.isVisible('#not-displayed');
        console.log(isVisible);
        expect(isVisible).to.equal(false);
    });

    it('Button display is set to visibility hidden but still exists in html dom therefore should return true', function (done) {
        var isVisible = browser.isVisible('#visibility-hidden');
        console.log(isVisible);
        expect(isVisible).to.equal(false);
    });

    it('Button display is set to zero opacity but still exists in html dom therefore should return true', function (done) {
        var isVisible = browser.isVisible('#zero-opacity');
        console.log(isVisible);
        expect(isVisible).to.equal(false);
    });

    it('Header text is visible and exists in the html dom therefore should return true', function (done) {
        var isEnabled = browser.isExisting('h1');
        console.log(isEnabled);
        expect(isEnabled).to.equal(true);
    });
});