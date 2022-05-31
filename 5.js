//создание класса прибор
class Device {
  constructor(name) {
    this.name = name;
  }
  turnOn() {
    console.log("Your device is on");
  }
  turnOff() {
    console.log("Your device is off");
  }
}
//создание класса печь, расширяющего класс прибор
class Oven extends Device {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
  getPrice(price) {
    console.log(`${this.name} costs ${price}RUB`);
  }
}
//создание класса телевизор, расширяющего класс прибор
class Tv extends Device {
  constructor(name, diagonal) {
    super(name);
    this.diagonal = diagonal;
  }
  getDefinition(definition) {
    console.log(`${this.name} has ${definition}p`);
  }
}
//создание обьектов-моделей
let moulinex = new Oven("moulinex", "black");
let samsung = new Tv("samsung", "32");

//проверка на наследование
moulinex.getPrice(500);
samsung.getDefinition(1080);
moulinex.turnOn();
samsung.turnOff();
