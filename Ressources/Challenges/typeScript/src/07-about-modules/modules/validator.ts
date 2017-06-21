export interface IValidator {
  isAcceptable(s: string): boolean;
}

export const numberRegexp = /^[0-9]+$/;

export const lettersRegexp = /^[A-Za-z]+$/;

class ZipCodeValidator implements IValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}

class LettersValidator implements IValidator {
  isAcceptable(s: string) {
    return lettersRegexp.test(s);
  }
}

export {
  ZipCodeValidator,
  LettersValidator as LettersOnlyValidator
};

export default class Validator implements IValidator {
  isAcceptable(s: string) {
    if (isNaN(parseInt(s, 10))) {
      return lettersRegexp.test(s);
    }
    return numberRegexp.test(s);
  }
}
