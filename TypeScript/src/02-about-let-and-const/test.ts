import * as chai from 'chai';
var expect = chai.expect;

describe('about let and const', () => {
  it('1-should be only available in a if block scope', () => {
    var myVar: number = 1;
    let myLet: number = 2;

    if (true) {
      var myVar: number = 3;
      let myLet: number = 4;
    }

    expect(myVar).to.equal( 3 );
    expect(myLet).to.equal( 2 );
  });

  it('2-should be only available in a for block scope', () => {
    let forLet: number = 0;

    for (var forVar = 0; forVar < 10; forVar++) {
      for (let forLet = 0; forLet < 10; forLet++) {
        //do something
      }
    }
    expect(forVar).to.equal( 10 );
    expect(forLet).to.equal( 0 );
  });

  it('3-should solves some async issues', (done) => {
    var varStack: number[] = [];
    var letStack: number[] = [];
    for (var forVar = 0; forVar < 3; forVar++) {
      setTimeout(() => varStack.push(forVar));
    }

    for (let forLet = 0; forLet < 3; forLet++) {
      setTimeout(() => letStack.push(forLet));
    }

    setTimeout(() => {
      expect(varStack).to.eql( [ 3, 3, 3 ] );
      expect(letStack).to.eql( [ 0, 1, 2 ] );
      done();
    });
  });

  it('4-should be constant references not values', () => {
    const myConstArray: number[] = [];
    const myConstObject: any = {};
    let error = false;

    try {
      myConstArray.push(1);
      myConstObject.key = 'value';
    }
    catch (e) {
      error = true;
    }

    expect(error).to.be.false;
    expect(myConstObject.key).to.equal( 'value' );
  });
});
