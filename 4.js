//создание прототипа Прибор
function Device(name) {
  this.name = name;
}
Device.prototype.turnOn = function () {
  console.log("Your device is on");
};
Device.prototype.turnOff = function () {
  console.log("Your device is off");
};
//создание прототипа Печь, наследуемого от прототипа Прибор
function Oven(name, color) {
  this.name = name;
  this.color = color;
}

Oven.prototype = new Device();

Oven.prototype.getPrice = function (price) {
  console.log(`${this.name} costs ${price}RUB`);
};

//создание объекта Печь moulinex
let moulinex = new Oven("moulinex", "black");

//создание прототипа Телевизор, наследуемого от прототипа Прибор
function Tv(name, diagonal) {
  this.name = name;
  this.diagonal = diagonal;
}

Tv.prototype = new Device();

Tv.prototype.getDefinition = function (definition) {
  console.log(`${this.name} has ${definition}p`);
};

//создание объекта телевизор samsung
let samsung = new Tv("samsung", "32");

//проверка на наследование
moulinex.getPrice(500);
samsung.getDefinition(1080);
moulinex.turnOn();
samsung.turnOff();
