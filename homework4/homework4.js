// Exercise 1. University
class University {
  constructor(techers = [], students = []) {
    this.techers = techers;
    this.students = students;
  }
  addMember() {}
  removeMember() {}
  startLesson() {
    this.techers.forEach((teacher) => (teacher.energy -= 5));
    this.students.forEach((student) => (student.energy -= 2));
  }
}

class UniversityMember {
  constructor(name, age, role, energy = 24) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.energy = energy;
  }
  info() {
    return {
      name: this.name,
      age: this.age,
      role: this.role,
      energy: this.energy,
    };
  }
}

class Teacher extends UniversityMember {}

class Student extends UniversityMember {}

let t1 = new Teacher("John", 30, "teacher", 20);
let s1 = new Student("Ann", 20, "student", 25);
let members = new University([t1], [s1]);
//members.startLesson();
//console.log(t1.info());
//console.log(s1.info());

//Exercise 2. CoffeeShop
function CoffeeShop() {
  this.name = "coffee house";
  this.menu = [
    { name: "tea", type: "drink", price: 50 },
    { name: "biscuit", type: "food", price: 80 },
    { name: "ice-cream", type: "food", price: 70 },
    { name: "coffee", type: "drink", price: 60 },
  ];
  this.orders = [];
  this.addOrder = function (item) {
    let availableItems = this.menu.map((item) => item.name);
    let index = availableItems.indexOf(item);
    if (index !== -1) {
      this.orders.push(this.menu[index]);
    } else {
      console.log('"This item is currently unavailable!"');
    }
  };
  this.fulfillOrder = function () {
    if (this.orders.length !== 0) {
      return "The item is ready!";
    }
    return "All orders have been fulfilled!";
  };
  this.listOrders = function () {
    return this.orders;
  };
  this.dueAmount = function () {
    return this.orders.reduce((aggr, val) => {
      return aggr + val.price;
    }, 0);
  };
  this.cheapestItem = function () {
    let priceArray = this.menu.map((item) => item.price);
    let cheapestPrice = Math.min(...priceArray);
    let index = priceArray.indexOf(cheapestPrice);
    return this.menu[index].name;
  };
  this.drinksOnly = function () {
    return this.menu
      .filter((item) => item.type === "drink")
      .map((item) => item.name);
  };
  this.foodOnly = function () {
    return this.menu
      .filter((item) => item.type === "food")
      .map((item) => item.name);
  };
}

let coffeShop = new CoffeeShop();

//coffeShop.addOrder("oarnge");
//console.log(coffeShop.orders);

//coffeShop.addOrder("tea");
//console.log(coffeShop.orders);

//console.log(coffeShop.fulfillOrder());

//console.log(coffeShop.listOrders());

//console.log(coffeShop.dueAmount());

//console.log(coffeShop.cheapestItem());

//console.log(coffeShop.drinksOnly());

//console.log(coffeShop.foodOnly());

// Exercise 3 Abstract class
function Abtract() {
  if (this.constructor === Abtract) {
    throw new Error(
      "you can't create an instance with this class, you can only extend from it."
    );
  }
}

//Exercise 4. Class hierarchy
class Character {
  constructor(args) {
    if (args.name.length >= 2 && args.name.length <= 10) {
      this.name = args.name;
    } else {
      throw new Error("invalid data");
    }
    if (
      args.type === "bowman" ||
      args.type === "swordsman" ||
      args.type === "magician" ||
      args.type === "demon" ||
      args.type === "undead" ||
      args.type === "zombie"
    ) {
      this.type = args.type;
    } else {
      throw new Error("invalid data");
    }
    this.health = 100;
    this.level = 1;
  }
  levelUp() {
    if (this.health !== 0) {
      this.level++;
      this.attack = (this.attack * 120) / 100;
      this.defense = (this.defense * 120) / 100;
      this.health = 100;
    } else {
      throw new Error("(you cannot increase the level of the deceased");
    }
  }
  damage(points) {
    this.health -= points * (1 - this.defense / 100);
    if (this.health <= 0) {
      this.health = 0;
      this.level = 0;
      this.attack = 0;
      this.defense = 0;
    }
  }
}

class Bowman extends Character {
  constructor(args) {
    super(args);
    this.attack = 25;
    this.defense = 25;
  }
}
class Swordsman extends Character {
  constructor(args) {
    super(args);
    this.attack = 40;
    this.defense = 10;
  }
}
class Magician extends Character {
  constructor(args) {
    super(args);
    this.attack = 10;
    this.defense = 40;
  }
}
class Demon extends Character {
  constructor(args) {
    super(args);
    this.attack = 10;
    this.defense = 40;
  }
}
class Undead extends Character {
  constructor(args) {
    super(args);
    this.attack = 25;
    this.defense = 25;
  }
}
class Zombie extends Character {
  constructor(args) {
    super(args);
    this.attack = 40;
    this.defense = 10;
  }
}

let bowman = new Bowman({
  name: "Bow",
  type: "bowman",
});

bowman.levelUp();
//console.log(bowman);

bowman.damage(20);
//console.log(bowman);

//Exercise 5. OOP Structure
class City {
  constructor(buildings) {
    this.buildings = buildings;
  }
}
class Building {
  constructor(name, cars) {
    this.name = name;
    this.cars = cars;
  }
}
class Hospital extends Building {}
class PoliceDepartment extends Building {}
class Car {
  constructor(name) {
    this.name = name;
  }
}
class PoliceCar extends Car {}
class AmbulanceCar extends Car {}

let hospital1 = new Hospital("hospital 1");
let hospital2 = new Hospital("hospital 2");
let policeDep = new PoliceDepartment("police department");
let city = new City();
city.buildings = [hospital1, hospital2, policeDep];
//console.log(city.buildings);

let polieCar1 = new PoliceCar("police car 1");
let polieCar2 = new PoliceCar("police car 2");
let ambulanceCar1 = new AmbulanceCar("ambulance car 1");
let ambulanceCar2 = new AmbulanceCar("ambulance car 1");
hospital1.cars = [ambulanceCar1, ambulanceCar2];
policeDep.cars = [polieCar1, polieCar2];
let building = new Building();
building.cars = [polieCar1, polieCar2, ambulanceCar1, ambulanceCar2];
//console.log(building.cars);

//Exercise 6. TV Class
class TV {
  constructor(brand, channel = 1, volume = 50) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
  }
  volumeIncrease() {
    if (this.volume < 100) {
      this.volume++;
    }
  }
  volumeDecrease() {
    if (this.volume > 0) {
      this.volume--;
    }
  }
  setChannel(num) {
    if (num > 0 && num <= this.channel) {
      this.channel = num;
    }
  }
  reset() {
    let { channel, volume } = new TV(this.brand);
    this.channel = channel;
    this.volume = volume;
  }
  info() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
  }
}

let tv = new TV("panasonic", 20, 30);

//Exercise 7. Shopping Card
class ShoppingCard {
  constructor(products = []) {
    this.products = products;
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    this.products = this.products.filter((p) => p.name !== product);
  }

  totalPrice() {
    let price = this.products.reduce((aggr, val) => {
      return aggr + val.price * val.quantity;
    }, 0);
    if (this.products.length >= 5) {
      price = (price * 90) / 100;
    }
    this.products.forEach((product) => {
      if (product.quantity >= 3) {
        price -= Math.floor(product.quantity / 3) * product.price;
      }
    });
    return price;
  }

  replace(productName, replacementProduct) {
    let nameArray = this.products.map((product) => product.name);
    let index = nameArray.indexOf(productName);
    this.products[index] = {
      name: replacementProduct.name,
      price: replacementProduct.price,
      quantity: replacementProduct.quantity,
    };
  }
}

let card = new ShoppingCard([
  { name: "bread", price: 10, quantity: 3 },
  { name: "cheese", price: 40, quantity: 1 },
  { name: "jacket", price: 200, quantity: 1 },
  { name: "pen", price: 5, quantity: 6 },
  { name: "bag", price: 150, quantity: 2 },
]);
