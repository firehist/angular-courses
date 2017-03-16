import * as chai from 'chai';
var expect = chai.expect;

describe.only('about interfaces', () => {
  it('1-describes an object', () => {
    var person : {firstName: string} = {
      firstName: 'John'
    };
    expect(person.firstName).to.equal( 'John' );
  });

  it('2-should be possible to use it as a type', () => {
    interface IPerson {
      firstName: string;
    }
    var person: IPerson = {
      firstName: 'John'
    };
    expect(person.firstName).to.equal( 'John' );
  });

  it('3-can be extended', () => {
    interface IAnimal {
      gender: string;
    }
    interface IPerson extends IAnimal {
      firstName: string;
    }
    var person: IPerson = {
      gender: 'male',
      firstName: 'John'
    };
    expect(person.gender).to.equal( 'male' );
    expect(person.firstName).to.equal( 'John' );
  });

  it('4-can have optional properties', () => {
    interface IPerson {
      firstName: string;
      lastName?: string;
    }
    var person: IPerson = {
      firstName: 'John'
    };

    expect(person.firstName).to.equal( 'John' );
    expect(person.lastName).to.equal( undefined );
  });

  it.only('5-can have readonly properties', () => {
    // _
    interface IPerson {
      readonly firstName: string;
    }
    var error: boolean = false;
    var person: IPerson = {
      firstName: 'John'
    };

    try {
      person.firstName = 'Jane';
    }
    catch (e) {
      error = true;
    }

    expect(error).to.be.false;
    expect(person.firstName).to.equal( 'Jane' );
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
