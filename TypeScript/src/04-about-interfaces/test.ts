import * as chai from 'chai';
var expect = chai.expect;

xdescribe('about interfaces', () => {
  it('1-describes an object', () => {
    var person : _ = {
      firstName: 'John'
    };
    expect(person.firstName).to.equal( _ );
  });

  it('2-should be possible to use it as a type', () => {
    // _

    var person: _ = {
      firstName: 'John'
    };
    expect(person.firstName).to.equal( _ );
  });

  it('3-can be extended', () => {
    interface IAnimal {
      gender: string;
    }

    // _

    var person: _ = {
      gender: 'male',
      firstName: 'John'
    };
    expect(person.gender).to.equal( _ );
    expect(person.firstName).to.equal( _ );
  });

  it('4-can have optional properties', () => {
    // _

    var person: _ = {
      firstName: 'John'
    };

    expect(person.firstName).to.equal( _ );
    expect(person.lastName).to.equal( _ );
  });

  it('5-can have readonly properties', () => {
    // _

    var error: boolean = false;
    var person: _ = {
      firstName: 'John'
    };

    try {
      person.firstName = 'Jane';
    }
    catch (e) {
      error = true;
    }

    expect(error).to.be._;
    expect(person.firstName).to.equal( _ );
  });

  it('6-can describe maps', () => {
    interface IPerson {
      readonly firstName: string;
    }

    // _

    var contacts: _ = {
      johnId: {
        firstName: 'John'
      }
    };

    expect(contacts['johnId'].firstName).to.equal( _ );
  });

  it('7-readonly maps', () => {
    interface IPerson {
      readonly firstName: string;
    }

    // _

    var error: boolean = false;
    var contacts: _ = {
      johnId: {
        firstName: 'John'
      }
    };

    try {
      contacts['johnId'].firstName = 'Jane';
    }
    catch (e) {
      error = true;
    }

    expect(error).to.be._;
    expect(contacts['johnId'].firstName).to.equal( _ );
  });

  it('8-describes function', () => {
    interface IGreeter {
      (name: string): string;
    }

    var greet; // _

    expect(greet('John')).to.equal('Hello John');
  });

  it('9-can have multiple signatures and properties', () => {
    interface IGreeter {
      (firstName: string): string;
      (firstName: string, lastName: string): string;
      foo?: string;
    }

    var greet; // _
    // _

    expect(greet('John')).to.equal('Hello John');
    expect(greet('John', 'Doe')).to.equal('Hello John Doe');
    expect(greet.foo).to.equal('bar');
  });

  it('10-describes constructor', () => {
    interface IPerson {
      firstName: string;
    }

    interface IPersonConstructor {
      new (firstName: string): IPerson;
    }

    var Person; // _

    expect(new Person('John').firstName).to.equal('John');
  });
});
