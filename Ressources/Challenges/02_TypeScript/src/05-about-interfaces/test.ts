import * as chai from 'chai';
var expect = chai.expect;

describe('about interfaces', () => {
  it('1-describes an object', () => {
    /** Ennoncé
    var person : _ = {
      firstName: 'John'
    };
    expect(person.firstName).to.equal( _ );
    */
    var person : {firstName: string} = {
      firstName: 'John'
    };
    expect(person.firstName).to.equal( 'John' );
  });

  it('2-should be possible to use it as a type', () => {
    /** Ennoncé
    // _

    var person: _ = {
      firstName: 'John'
    };
    expect(person.firstName).to.equal( _ );
    */
    interface IPerson {
      firstName: string;
    }

    var person: IPerson = {
      firstName: 'John'
    };
    expect(person.firstName).to.equal( 'John' );
  });

  it('3-can be extended', () => {
    /** Ennoncé
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
    */
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
    /** Ennoncé
    // _

    var person: _ = {
      firstName: 'John'
    };

    expect(person.firstName).to.equal( _ );
    expect(person.lastName).to.equal( _ );
    */
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

  it('5-can have readonly properties', () => {
    /** Ennoncé
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
    */
    interface IPerson {
      readonly firstName: string;
    }

    var error: boolean = false;
    var person: IPerson = {
      firstName: 'John'
    };

    try {
      person.firstName = 'Jane';
    } catch (e) {
      error = true;
    }

    expect(error).to.be.true;
    expect(person.firstName).to.equal( 'John' );
  });

  it('6-can describe maps', () => {
    /** Ennoncé
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
    */
    interface IPerson {
      readonly firstName: string;
    }

    interface IContacts {
      [key: string]: IPerson;
    }

    var contacts: IContacts = {
      johnId: {
        firstName: 'John'
      }
    };

    expect(contacts['johnId'].firstName).to.equal( 'John' );
  });

  it('7-readonly maps', () => {
    /** Ennoncé
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
    */
    interface IPerson {
      readonly firstName: string;
    }

    interface IContacts {
      readonly [key: string]: IPerson;
    }

    var error: boolean = false;
    var contacts: IContacts = {
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

    expect(error).to.be.true;
    expect(contacts['johnId'].firstName).to.equal( 'John' );
  });

  it('8-describes function', () => {
    /** Ennoncé
    interface IGreeter {
      (name: string): string;
    }

    var greet; // _

    expect(greet('John')).to.equal('Hello John');
    */
    interface IGreeter {
      (name: string): string;
    }

    var greet: IGreeter = (name: string) => {
      return `Hello ${name}`;
    };

    expect(greet('John')).to.equal('Hello John');
  });

  it('9-can have multiple signatures and properties', () => {
    /** Ennoncé
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
    */
    interface IGreeter {
      (firstName: string): string;
      (firstName: string, lastName: string): string;
      foo?: string;
    }

    var greet: IGreeter = (firstName: string, lastName?: string = "") => {
      if (lastName !== '') {
        lastName = ' ' + lastName;
      }
      return `Hello ${firstName}${lastName}`;
    };
    greet.foo = 'bar';

    expect(greet('John')).to.equal('Hello John');
    expect(greet('John', 'Doe')).to.equal('Hello John Doe');
    expect(greet.foo).to.equal('bar');
  });

  it('10-describes constructor', () => {
    /** Ennoncé
    interface IPerson {
      firstName: string;
    }

    interface IPersonConstructor {
      new (firstName: string): IPerson;
    }

    var Person; // _

    expect(new Person('John').firstName).to.equal('John');
    */
    interface IPerson {
      firstName: string;
    }

    interface IPersonConstructor {
      new (firstName: string): IPerson;
    }

    var Person: IPersonConstructor = class Person implements IPerson {
      constructor(public firstName: string) {}
    };

    expect(new Person('John').firstName).to.equal('John');
  });
});
