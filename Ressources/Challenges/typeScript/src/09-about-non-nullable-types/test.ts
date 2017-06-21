import * as chai from 'chai';
var expect = chai.expect;

describe('about non nullable types', () => {

  function contains(searchString: string, collection: string[]) {
    return !!collection && collection.indexOf(searchString) > -1;
    //throw new Error('not implemented');
  }

  it('1-should work with undefined or null searchString', () => {
    expect(contains(undefined, [])).to.be.false;
    expect(contains(null, [])).to.be.false;
  });

  it('2-should work with undefined or null collection', () => {
    expect(contains('', undefined)).to.be.false;
    expect(contains('', null)).to.be.false;
  });

  it('3-should work with undefined or null collection items', () => {
    expect(contains('foo', [undefined, 'foo'])).to.be.true;
    expect(contains('foo', [null, 'foo'])).to.be.true;
  });
});
