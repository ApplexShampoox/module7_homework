let a = { name: "peter", surname: "smith", age: 33 };

function keysAndValues(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key);
      console.log(obj[key]);
    }
  }
}
keysAndValues(a);
