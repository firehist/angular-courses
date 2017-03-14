import * as chai from 'chai';
var expect = chai.expect;

describe('about classes', () => {
  function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => Object
        .getOwnPropertyNames(baseCtor.prototype)
        .forEach(name => derivedCtor.prototype[name] = baseCtor.prototype[name]));
  }

  it('1-your first class', () => {
    class SuperHero {
      constructor(private prenom: string, private nom: string){}
      talk(): string{
        return 'My favourite saying is : Hi my name is ' + this.prenom + ' ' + this.nom;
      }
    }
   // _

    var hero = new SuperHero('Bruce', 'Wayne');
    expect(hero.talk()).to.equal('My favourite saying is : Hi my name is Bruce Wayne');
  });

  it('2-you can use getter and setters', () => {
    class Person {

      private _fullname: string;


      constructor(private prenom: string, private nom: string ){
        this._fullname =   this.prenom + ' ' + this.nom;

      }

      get fullName(): string {

        return this._fullname;
      }
      set fullName(nom_concatene: string){
        this._fullname = nom_concatene;
      }

    } // _

    var person = new Person('John', 'Doe');
    expect(person.fullName).to.equal('John Doe');
    person.fullName = 'Jane Doe';
    expect(person.fullName).to.equal('Jane Doe');
  });

  it('3-implement an interface', () => {
    interface IDeveloper {
      favouriteLanguage: string;
      sayHi(): string;
    }

    class Developer implements IDeveloper{

      constructor(private developer: string){};

      sayHi(): string{
        return 'Hello my favourite language is ' + this.developer;
      }
     } // _

    var developer: IDeveloper = new Developer('TypeScript');
    expect(developer.sayHi()).to.equal('Hello my favourite language is TypeScript');
  });

  it('4-extend an other class', () => {
    class SuperHero {
      public name: string;
      public ability: string;
      constructor(name: string, ability: string) {
        this.name = name;
        this.ability = ability;
      }
      public talk() {
        return `I fight against evil with ${this.ability}`;
      }
    }

    class Sidekick extends SuperHero{

      constructor(name: string, ability: string, private hero: SuperHero) {
        super (name, ability);

      }

      public talk(){
        return super.talk()+' and my master is ' + this.hero.name;
      }

    } // _

    var batman = new SuperHero('Batman', 'Martial arts');
    var robin = new Sidekick('Robin', 'Stick', batman);
    expect(robin.talk()).to.equal('I fight against evil with Stick and my master is Batman');
  });

  it('5-share methods like in pure JS', () => {
    class Developer {
      public favouriteLanguage: string;

      constructor(favouriteLanguage: string) {
        this.favouriteLanguage = favouriteLanguage;
      }

      public sayHi() {
        return `Hello my favourite language is ${this.favouriteLanguage}`;
      }
    }

    var developer = new Developer('JavaScript');
    expect(developer.sayHi.call({favouriteLanguage: "TypeScript"})).to.equal('Hello my favourite language is TypeScript');
  });

  it('6-mix it NOT TODO', () => {
    class BackDeveloper {
      public static languages = ['CSharp'];
      public writeCSharp() {
        return true;
      }
    }

    class FrontDeveloper {
      public static languages = ['JavaScript', 'TypeScript'];
      public writeTypeScript() {
        return true;
      }
      public writeJavaScript() {
        return true;
      }
    }

    class FullStackDeveloper {
      public talk(){
        if (this.writeCSharp) {
            return 'Hello I\'m a BackDeveloper and I know CSharp'
        } else if (this.writeJavaScript) {
          return 'Hello I\'m a FrontDeveloper and I know JavaScript and TypeScript';
        } else {
          return 'Hello I\'m a FullStackDeveloper and I know CSharp and JavaScript and TypeScript'
        }
      }
    } // _

    var developer = new FullStackDeveloper();
    expect(developer.talk())
      .to.equal('Hello I\'m a FullStackDeveloper and I know CSharp and JavaScript and TypeScript');
    expect(developer.talk.call(new BackDeveloper()))
      .to.equal('Hello I\'m a BackDeveloper and I know CSharp');
    expect(developer.talk.call(new FrontDeveloper()))
      .to.equal('Hello I\'m a FrontDeveloper and I know JavaScript and TypeScript');
  });
});
