import * as chai from 'chai';
var expect = chai.expect;

xdescribe('about lambdas', () => {
  it('1-is less verbose', () => {
    var myFirstLambda = _ ;
    expect(myFirstLambda()).to.equal('Hello World !!');
  });

  it('2-can be used as a filter', () => {
    var collection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var odd = collection.filter( _ );
    expect(odd).to.eql([1, 3, 5, 7, 9]);
  });

  it('3-can be used as a reducer', () => {
    var collection = [1, 2, 3, 4];
    var result = collection.reduce( _ );
    expect(result).to.equal(24);
  });

  it('4-can keep this', (done) => {
    class LazyCall {
      public response: string | null;
      public makeCall() {
        this.response = null;
        setTimeout(function() { //_
          this.response = 'Done';
        });
      }
    }

    var lazy = new LazyCall();
    lazy.makeCall();
    setTimeout(() => {
      expect(lazy.response).to.equal('Done');
      done();
    });
  });

  it('5-should be binded', (done) => {
    class LazyResource {
      public response: string;
      constructor() {
        setTimeout(this._storeResponse); //_
      }
      private _storeResponse(result: string) {
        this.response = result;
      }
    }

    var lazy = new LazyResource();
    setTimeout(() => {
      expect(lazy.response).to.equal('Done');
      done();
    });
  });

  it('6-can be used with caution on patch', () => {
    var MyApp = {
      Services: {
        Utils: {
          _constantFoo : 'Bar',
          isStringFooBar: function(s: string) {
            return !!~s.indexOf(this._constantFoo);
          }
        }
      }
    };

    var originalTester = MyApp.Services.Utils.isStringFooBar;

    MyApp.Services.Utils.isStringFooBar = (s: string, ...args: any[]) => {
      if (s !== 'bar') {
        return originalTester.apply(this, [s, ...args]); //_
      }
      return true;
    };

    expect(MyApp.Services.Utils.isStringFooBar('foo')).to.be.false;
    expect(MyApp.Services.Utils.isStringFooBar('bar')).to.be.true;
    expect(MyApp.Services.Utils.isStringFooBar('fooBar')).to.be.true;
  });
});
