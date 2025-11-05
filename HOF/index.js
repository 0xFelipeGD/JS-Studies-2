// Examples of map and filter
console.log("\nExamples of map and filter:");

// Example 1: map - Convert temperatures from Celsius to Fahrenheit
const celsius = [0, 10, 20, 30, 40];
const fahrenheit = celsius.map((temp) => (temp * 9) / 5 + 32);
console.log("Celsius:", celsius);
console.log("Fahrenheit:", fahrenheit);

// Example 1: filter - Get only even numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = nums.filter((num) => num % 2 === 0);
console.log("All numbers:", nums);
console.log("Even numbers:", evenNumbers);

// Example 2: map - Extract names from objects
const users = [
  { name: "Ana", age: 25 },
  { name: "Carlos", age: 30 },
  { name: "Maria", age: 22 },
];
const userNames = users.map((user) => user.name);
console.log("User names:", userNames);

// Example 2: filter - Get users older than 23
const olderUsers = users.filter((user) => user.age > 23);
console.log("Users older than 23:", olderUsers);

// Example 3: map - Add tax to prices
const prices = [100, 200, 300, 400];
const pricesWithTax = prices.map((price) => price * 1.15);
console.log("Original prices:", prices);
console.log("Prices with 15% tax:", pricesWithTax);

// Example 3: filter - Get words longer than 5 characters
const words = ["hello", "world", "javascript", "code", "programming"];
const longWords = words.filter((word) => word.length > 5);
console.log("All words:", words);
console.log("Words longer than 5 chars:", longWords);

// Examples of forEach
console.log("\nExamples of forEach:");

// Example 1: forEach - Print each item with index
const fruits = ["apple", "banana", "orange", "grape"];
console.log("Fruits list:");
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});

// Example 2: forEach - Calculate sum of array
const numbers = [5, 10, 15, 20, 25];
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
console.log("Numbers:", numbers);
console.log("Sum:", sum);

// Example 3: forEach - Modify object properties
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];
console.log("Products with discount:");
products.forEach((product) => {
  const discount = product.price * 0.1;
  console.log(`${product.name}: $${product.price} (Save $${discount})`);
});

// Examples of reduce
console.log("\nExamples of reduce:");

// Example 1: reduce - Calculate total sum
const values = [10, 20, 30, 40, 50];
const total = values.reduce((accumulator, current) => accumulator + current, 0);
console.log("Values:", values);
console.log("Total sum:", total);

// Example 2: reduce - Find maximum value
const scores = [85, 92, 78, 95, 88];
const maxScore = scores.reduce(
  (max, current) => (current > max ? current : max),
  scores[0]
);
console.log("Scores:", scores);
console.log("Maximum score:", maxScore);

// Example 3: reduce - Count occurrences
const letters = ["a", "b", "a", "c", "b", "a", "d", "b"];
const letterCount = letters.reduce((count, letter) => {
  count[letter] = (count[letter] || 0) + 1;
  return count;

  console.log("Letters:", letters);
  console.log("Letter count:", letterCount);
}, {});

// Examples of sort
console.log("\nExamples of sort:");

// Example 1: sort - Sort numbers in ascending order
const unsortedNumbers = [42, 15, 8, 23, 4, 16];
const sortedNumbers = [...unsortedNumbers].sort((a, b) => a - b);
console.log("Unsorted numbers:", unsortedNumbers);
console.log("Sorted numbers (ascending):", sortedNumbers);

// Example 2: sort - Sort strings alphabetically
const names = ["Zara", "Alice", "Michael", "Bob", "Diana"];
const sortedNames = [...names].sort();
console.log("Unsorted names:", names);
console.log("Sorted names (alphabetically):", sortedNames);

// Example 3: sort - Sort objects by property
const students = [
  { name: "John", grade: 85 },
  { name: "Emma", grade: 92 },
  { name: "Lucas", grade: 78 },
  { name: "Sophia", grade: 95 },
];
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log("Students sorted by grade (highest first):");
sortedByGrade.forEach((student) => {
  console.log(`${student.name}: ${student.grade}`);
});
