let objWithoutProto = () => Object.create(null);

let a = objWithoutProto();

console.log(Object.getPrototypeOf(a));
