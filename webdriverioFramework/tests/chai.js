var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var actual = 2;
var expected = 2;

assert.equal(actual, expected);
expect(actual).to.equal(expected);
actual.should.equal(expected);

// run only this chai.js
// npm test -- --spec=tests/chai.js