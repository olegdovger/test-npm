var assert = require('chai').assert;
var Person = require('../src/person.es6');

describe('Simple test', () => {
  it('numbers are equal', () => {
    assert.equal(42, 42);
  });


  it('Person name check', () => {
    let user = new Person('Oleg Dovger');

    assert(user.fullName, 'Oleg Dovger');
  });
});