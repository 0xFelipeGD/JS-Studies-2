// Array Examples in JavaScript

// 1. Creating Arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];
const empty = [];

// 2. Accessing Elements
console.log("First fruit:", fruits[0]); // apple
console.log("Last fruit:", fruits[fruits.length - 1]); // orange

// 3. Adding Elements
fruits.push("grape"); // Add to end
fruits.unshift("mango"); // Add to beginning
console.log("After adding:", fruits);

// 4. Removing Elements
const lastFruit = fruits.pop(); // Remove from end
const firstFruit = fruits.shift(); // Remove from beginning
console.log("Removed:", lastFruit, firstFruit);

// 5. Array Methods
const doubledNumbers = numbers.map((num) => num * 2);
const evenNumbers = numbers.filter((num) => num % 2 === 0);
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log("Doubled:", doubledNumbers);
console.log("Even numbers:", evenNumbers);
console.log("Sum:", sum);

// 6. Finding Elements
const foundFruit = fruits.find((fruit) => fruit.startsWith("a"));
const appleIndex = fruits.indexOf("apple");
const hasOrange = fruits.includes("orange");

console.log("Found fruit:", foundFruit);
console.log("Apple index:", appleIndex);
console.log("Has orange:", hasOrange);

// 7. Iterating Arrays
console.log("Using forEach:");
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

console.log("Using for...of:");
for (const fruit of fruits) {
  console.log(fruit);
}

// 8. Array Manipulation
const sortedFruits = [...fruits].sort();
const reversedNumbers = [...numbers].reverse();
const slicedArray = fruits.slice(1, 3);

console.log("Sorted fruits:", sortedFruits);
console.log("Reversed numbers:", reversedNumbers);
console.log("Sliced array:", slicedArray);

// 9. Multi-dimensional Arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Matrix element:", matrix[1][2]); // 6

// 10. Array Destructuring
const [first, second, ...rest] = fruits;
console.log("Destructured:", { first, second, rest });

// 11. Array.splice() - Add, remove, or replace elements
const sampleArray = ["a", "b", "c", "d", "e"];
console.log("Original array:", sampleArray);

// Remove 2 elements starting at index 1
const removed = sampleArray.splice(1, 2);
console.log("After removing 2 elements:", sampleArray);
console.log("Removed elements:", removed);

// Add elements at index 1
sampleArray.splice(1, 0, "x", "y");
console.log("After adding elements:", sampleArray);

// Replace elements (remove 1, add 2)
sampleArray.splice(2, 1, "caixa", "ns");
console.log("After replacing:", sampleArray);

// 12. Traditional for loop example
console.log("Using traditional for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(`Index ${i}: ${numbers[i]}`);
}
