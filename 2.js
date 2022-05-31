let a = {};
a.name = "peter";
a.surname = "smith";
a.age = 33;

function func(obj, property) {
  return obj.hasOwnProperty(property);
}

console.log(func(a, "name"));
