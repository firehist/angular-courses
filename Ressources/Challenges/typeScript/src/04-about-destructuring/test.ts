import * as chai from 'chai';
var expect = chai.expect;

describe('about destructuring arrays', () => {
  it('1-should extract value from array', () => {
    /** Ennoncé
    let firstValue = [1]; // _
    expect(firstValue).to.equal(1);
    */
    let [firstValue] = [1];
    expect(firstValue).to.equal(1);
  });

  it('2-should swap two variables, in one operation', () => {
    /** Ennoncé
    let [x, y] = ['ax', 'why'];
    [x, y] = [x, y];
    expect([x, y]).to.eql(['why', 'ax']); // _
    */
    let [x, y] = ['ax', 'why'];
    [x, y] = [x, y];
    expect([x, y]).to.eql(['ax', 'why']);
  });

  it('3-should count leading commas', () => {
    /** Ennoncé
    const all = ['ax', 'why', 'zet'];
    const [,z] = all;
    expect(z).to.equal('zet'); // _
    */
    const all = ['ax', 'why', 'zet'];
    const [,z] = all;
    expect(z).to.equal('why');
  });

  it('4-should extract from nested arrays', () => {
    /** Ennoncé
    const user = [['Some', 'One'], 23];
    const [firstName, surname, age] = user; // _

    expect(`${firstName} ${surname} = ${age} years`).to.equal('Some One = 23 years');
    */
    const user = [['Some', 'One'], 23];
    const [[firstName, surname], age]: any = user;

    expect(`${firstName} ${surname} = ${age} years`).to.equal('Some One = 23 years');
  });

  it('5-should chain assignments', () => {
    /** Ennoncé
    let c: number, d: number;
    let a, b = [c, d] = [1, 2];
    expect([a, b, c, d]).to.eql([1, 2, 1, 2]); // _
    */
    let c: number, d: number;
    let a, b = [c, d] = [1, 2];
    expect([a, b, c, d]).to.eql([undefined, [1, 2], 1, 2]);
  });

  it('6-should work in for-of loop', () => {
    /** Ennoncé
    for (var [ a, b] of [[0, 1, 2]]) { }
    expect([a, b]).to.eql([1, 2]); // _
    */
    for (var [ a, b] of [[0, 1, 2]]) { }
    expect([a, b]).to.eql([0, 1]);
  });
});

describe('about destructuring objects', () => {
  it('1-should be simple', () => {
    /** Ennoncé
    const x = { x: 1 }; // _
    expect(x).to.equal(1);
    */
    const {x} = { x: 1 };
    expect(x).to.equal(1);
  });

  it('2-should find variables properties', () => {
    /** Ennoncé
    const magic = { first: 23, second: 42 };
    const {magic: second} = { magic }; // _
    expect(second).to.equal(42);
    */
    const magic = { first: 23, second: 42 };
    const {magic: {second}} = { magic };
    expect(second).to.equal(42);
  });

  it('3-should mix object and array', () => {
    /** Ennoncé
    const {z: [x]} = { z: [23, 42] };
    expect(x).to.equal(42); // _
    */
    const {z: [x]} = { z: [23, 42] };
    expect(x).to.equal(23);
  });

  it('4-should mix array and object', () => {
    /** Ennoncé
    const [, {lang}] = [null, [{ env: 'browser', lang: 'ES6' }]]; // _
    expect(lang).to.equal('ES6');
    */
    const [, [{lang}]]: any = [null, [{env: 'browser', lang: 'ES6' }]];
    expect(lang).to.equal('ES6');
  });

  it('5-should missing refs become undefined ?', () => {
    /** Ennoncé
    const {z} = { x: 1, z: 2 }; // _
    expect(z).to.equal(undefined);
    */
    const {z}: any = { x: 1, y: 2 };
    expect(z).to.equal(undefined);
  });

  it('6-should destructure from builtins (string)', () => {
    /** Ennoncé
    const {substr} = 1; // _
    expect(substr).to.equal(String.prototype.substr);
    */
    const {substr} = '1';
    expect(substr).to.equal(String.prototype.substr);
  });
});
