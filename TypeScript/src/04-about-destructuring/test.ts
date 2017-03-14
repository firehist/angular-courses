import * as chai from 'chai';
var expect = chai.expect;

xdescribe('about destructuring arrays', () => {
  it('1-should extract value from array', () => {
    let firstValue = [1];
    expect(firstValue).to.equal(1);
  });

  it('2-should swap two variables, in one operation', () => {
    let [x, y] = ['ax', 'why'];
    [x, y] = [x, y];
    expect([x, y]).to.eql(['why', 'ax']);
  });

  it('3-should count leading commas', () => {
    const all = ['ax', 'why', 'zet'];
    const [,z] = all;
    expect(z).to.equal('zet');
  });

  it('4-should extract from nested arrays', () => {
    const user = [['Some', 'One'], 23];
    const [firstName, surname, age] = user;

    expect(`${firstName} ${surname} = ${age} years`).to.equal('Some One = 23 years');
  });

  it('5-should chain assignments', () => {
    let c: number, d: number;
    let a, b = [c, d] = [1, 2];
    expect([a, b, c, d]).to.eql([1, 2, 1, 2]);
  });

  it('6-should work in for-of loop', () => {
    for (var [ a, b] of [[0, 1, 2]]) { }
    expect([a, b]).to.eql([1, 2]);
  });
});

describe('about destructuring objects', () => {
  it('1-should be simple', () => {
    const x = { x: 1 };
    expect(x).to.equal(1);
  });

  it('2-should find variables properties', () => {
    const magic = { first: 23, second: 42 };
    const {magic: second} = { magic };
    expect(second).to.equal(42);
  });

  it('3-should mix object and array', () => {
    const {z: [x]} = { z: [23, 42] };
    expect(x).to.equal(42);
  });

  it('4-should mix array and object', () => {
    const [, {lang}] = [null, [{ env: 'browser', lang: 'ES6' }]];
    expect(lang).to.equal('ES6');
  });

  it('5-should missing refs become undefined ?', () => {
    const {z} = { x: 1, z: 2 };
    expect(z).to.equal(undefined);
  });

  it('6-should destructure from builtins (string)', () => {
    const {substr} = 1;
    expect(substr).to.equal(String.prototype.substr);
  });
});
