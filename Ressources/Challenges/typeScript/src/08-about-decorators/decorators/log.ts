export function logConstructor(constructor: Function) {
  console.info(`Create constructor ${constructor.name}`);
}

export function logMethod<T>(target: T, key: string, prop: PropertyDescriptor) {
  return {
    value: function (...args: any[]) {
      var a = args.map(arg => JSON.stringify(arg)).join();
      var result = prop.value.apply(this, args);
      var r = JSON.stringify(result);
      console.info(`Call: ${key}(${a}) => ${r}`);
      return result;
    }
  };
}