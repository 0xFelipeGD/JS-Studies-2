// Object Examples in JavaScript

// 1. Creating Objects
const person = {
  name: "John",
  age: 30,
  city: "New York",
  isEmployed: true,
};

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "blue",
};

const empty = {};

// 2. Accessing Object Properties
console.log("Person name:", person.name); // Dot notation
console.log("Car brand:", car["brand"]); // Bracket notation
console.log("Person age:", person.age);

// 3. Adding/Modifying Properties
person.email = "john@email.com"; // Add new property
person.age = 31; // Modify existing property
car["mileage"] = 15000;
console.log("Updated person:", person);

// 4. Removing Properties
delete person.isEmployed;
console.log("After deletion:", person);

// 5. Object Methods
const calculator = {
  x: 10,
  y: 5,
  add() {
    return this.x + this.y;
  },
  multiply: function () {
    return this.x * this.y;
  },
};

console.log("Sum:", calculator.add());
console.log("Product:", calculator.multiply());

// 6. Object.keys(), Object.values(), Object.entries()
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

console.log("Keys:", keys);
console.log("Values:", values);
console.log("Entries:", entries);

// 7. Iterating Objects
console.log("Using for...in:");
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

console.log("Using Object.entries():");
for (const [key, value] of Object.entries(car)) {
  console.log(`${key}: ${value}`);
}

// 8. Map Examples
const userMap = new Map();

// Adding entries to Map
userMap.set("user1", { name: "Alice", age: 25 });
userMap.set("user2", { name: "Bob", age: 30 });
userMap.set("user3", { name: "Charlie", age: 35 });

console.log("Map size:", userMap.size);

// Accessing Map values
console.log("User1:", userMap.get("user1"));

// Check if key exists
console.log("Has user2:", userMap.has("user2"));

// Iterating Map
console.log("Iterating Map with forEach:");
userMap.forEach((value, key) => {
  console.log(`${key}:`, value);
});

console.log("Iterating Map with for...of:");
for (const [key, value] of userMap) {
  console.log(`${key}: ${value.name} (${value.age})`);
}

// 9. Map keys() and values()
console.log("Map keys:", Array.from(userMap.keys()));
console.log("Map values:", Array.from(userMap.values()));

// 10. Object Destructuring
const { name, age, city } = person;
console.log("Destructured:", { name, age, city });

const { brand: carBrand, model: carModel } = car;
console.log("Renamed destructured:", { carBrand, carModel });

// 11. Nested Objects
const company = {
  name: "Tech Corp",
  employees: {
    john: { position: "Developer", salary: 80000 },
    jane: { position: "Designer", salary: 75000 },
  },
  location: {
    address: "123 Main St",
    city: "San Francisco",
    coordinates: { lat: 37.7749, lng: -122.4194 },
  },
};

console.log("John's position:", company.employees.john.position);
console.log("Office coordinates:", company.location.coordinates);

// 12. Converting between Map and Object
const obj = { a: 1, b: 2, c: 3 };
const mapFromObj = new Map(Object.entries(obj));
console.log("Map from object:", mapFromObj);

const objFromMap = Object.fromEntries(userMap);
console.log("Object from map:", objFromMap);

// 13. Map with different key types
const mixedMap = new Map();
mixedMap.set(1, "number key");
mixedMap.set("1", "string key");
mixedMap.set(true, "boolean key");
mixedMap.set(person, "object key");

console.log("Mixed map entries:");
for (const [key, value] of mixedMap) {
  console.log(typeof key, key, "->", value);
}

// 14. Deleting from Map
userMap.delete("user2");
console.log("After deleting user2:", userMap.size);

// Clear all Map entries
const tempMap = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log("Temp map before clear:", tempMap.size);
tempMap.clear();
console.log("Temp map after clear:", tempMap.size);
