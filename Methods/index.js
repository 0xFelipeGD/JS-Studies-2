// Example 1: Object with methods for a person
const person = {
  name: "Felipe",
  age: 25,
  city: "São Paulo",

  // Method to introduce the person
  introduce() {
    console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`);
  },

  // Method to celebrate birthday
  birthday() {
    this.age++;
    console.log(`Feliz aniversário! Agora tenho ${this.age} anos.`);
  },
};

console.log("Example 1 - Person Object:");
console.log(person.age);
person.introduce();
person.birthday();
console.log(person.age);

// Example 2: Calculator object with methods
const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    return b !== 0 ? a / b : "Erro: divisão por zero";
  },
};

console.log("\nExample 2 - Calculator Object:");
console.log("5 + 3 =", calculator.add(5, 3));
console.log("10 - 4 =", calculator.subtract(10, 4));
console.log("6 * 7 =", calculator.multiply(6, 7));
console.log("15 / 3 =", calculator.divide(15, 3));

// Example 3: Car object with methods
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2023,
  speed: 0,

  accelerate(amount) {
    this.speed += amount;
    console.log(`Acelerando... Velocidade atual: ${this.speed} km/h`);
  },

  brake(amount) {
    this.speed = Math.max(0, this.speed - amount);
    console.log(`Freando... Velocidade atual: ${this.speed} km/h`);
  },

  getInfo() {
    return `${this.brand} ${this.model} (${this.year})`;
  },
};

console.log("\nExample 3 - Car Object:");
console.log("Carro:", car.getInfo());
car.accelerate(50);
car.accelerate(30);
car.brake(20);
car.brake(100);
