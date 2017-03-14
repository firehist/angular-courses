import * as chai from 'chai';

// _

var expect = chai.expect;

xdescribe('about modules', () => {
  it('1-can import a class exported by the module', () => {
    var validator = new ZipCodeValidator();
    expect(validator.isAcceptable('12345')).to.be._;
  });

  it('2-can import a default export', () => {
    var validator = new Validator();
    expect(validator.isAcceptable('12345')).to.be._;
  });

  it('3-can rename imports', () => {
    var validator = new LettersValidator();
    expect(validator.isAcceptable('12345')).to.be._;
  });

  it('4-can import everything', () => {
    expect(validators.lettersRegexp.test('ABCDE')).to.be._;
    expect(validators.numberRegexp.test('12345')).to.be._;
  });
});
