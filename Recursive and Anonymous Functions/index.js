// Examples of Recursive Functions
console.log("\nExample of Recursive Functions:");

// Factorial calculation
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5));

// Fibonacci sequence
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci of 7:", fibonacci(7));

// Sum of array elements
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

console.log("Sum of [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5]));

// Examples of Anonymous Functions
console.log("\nExample of Anonymous Functions:");

// Anonymous function assigned to variable
const greet = function (name) {
  return `Olá, ${name}!`;
};

console.log(greet("Felipe"));

// Anonymous function as callback
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log("Doubled numbers:", doubled);

// Arrow function (modern anonymous function)
const square = (x) => x * x;
console.log("Square of 6:", square(6));

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("Esta função anônima é executada imediatamente!");
})();

// Anonymous function with setTimeout
setTimeout(function () {
  console.log("Mensagem após 2 segundos");
}, 2000);
