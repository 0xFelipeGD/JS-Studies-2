/**
 * Geometric Calculator
 *
 * A JavaScript program that calculates the area of different geometric shapes.
 * The system provides an interactive menu interface with various calculation options.
 *
 * Features:
 * - Calculate area of triangle: base * height / 2
 * - Calculate area of rectangle: base * height
 * - Calculate area of square: side²
 * - Calculate area of trapezoid: (larger base + smaller base) * height / 2
 * - Calculate area of circle: pi * radius² (pi = 3.14159)
 * - Interactive menu system that continues until explicitly terminated
 *
 * Menu Options:
 * - "Triangle": Calculates the area of a triangle
 * - "Rectangle": Calculates the area of a rectangle
 * - "Square": Calculates the area of a square
 * - "Trapezoid": Calculates the area of a trapezoid
 * - "Circle": Calculates the area of a circle
 * - "Exit": Terminates the program
 *
 * The program uses functions to separate calculation procedures and maintains
 * a continuous loop, returning to the main menu after each calculation.
 *
 * @fileoverview Geometric shape area calculator
 * @author Felipe
 * @version 2.0.0
 */

// Constants
const MENU_OPTIONS = {
  TRIANGLE: "1",
  RECTANGLE: "2",
  SQUARE: "3",
  TRAPEZOID: "4",
  CIRCLE: "5",
  EXIT: "6",
};

const PI = Math.PI; // Usando o valor mais preciso de PI disponível no Math

/**
 * Calculates the area of a triangle
 * @param {number} base - The base of the triangle
 * @param {number} height - The height of the triangle
 * @returns {number} The calculated area
 */
function calculateTriangleArea(base, height) {
  return (base * height) / 2;
}

/**
 * Calculates the area of a rectangle
 * @param {number} base - The base of the rectangle
 * @param {number} height - The height of the rectangle
 * @returns {number} The calculated area
 */
function calculateRectangleArea(base, height) {
  return base * height;
}

/**
 * Calculates the area of a square
 * @param {number} side - The side length of the square
 * @returns {number} The calculated area
 */
function calculateSquareArea(side) {
  return calculateRectangleArea(side, side);
}

/**
 * Calculates the area of a trapezoid
 * @param {number} largeBase - The larger base of the trapezoid
 * @param {number} smallBase - The smaller base of the trapezoid
 * @param {number} height - The height of the trapezoid
 * @returns {number} The calculated area
 */
function calculateTrapezoidArea(largeBase, smallBase, height) {
  return ((largeBase + smallBase) * height) / 2;
}

/**
 * Calculates the area of a circle
 * @param {number} radius - The radius of the circle
 * @returns {number} The calculated area
 */
function calculateCircleArea(radius) {
  return PI * Math.pow(radius, 2);
}

/**
 * Builds and returns the menu string
 * @returns {string} The formatted menu text
 */
function buildMenu() {
  return `Geometric Calculator

Menu Options:
1. Triangle
2. Rectangle
3. Square
4. Trapezoid
5. Circle
6. Exit

Please enter your choice (1-6):`;
}

/**
 * Validates and parses user input to a number
 * @param {string} input - The user input string
 * @param {string} fieldName - The name of the field being validated
 * @returns {number|null} The parsed number or null if invalid
 */
function parseUserInput(input, fieldName) {
  const value = parseFloat(input);

  if (isNaN(value) || value <= 0) {
    alert(`Invalid input for ${fieldName}. Please enter a positive number.`);
    return null;
  }

  return value;
}

/**
 * Handles the triangle area calculation
 */
function handleTriangleCalculation() {
  const baseInput = prompt("Enter the base of the triangle:");
  const heightInput = prompt("Enter the height of the triangle:");

  const base = parseUserInput(baseInput, "base");
  const height = parseUserInput(heightInput, "height");

  if (base !== null && height !== null) {
    const area = calculateTriangleArea(base, height);
    alert(`The area of the triangle is: ${area.toFixed(2)}`);
  }
}

/**
 * Handles the rectangle area calculation
 */
function handleRectangleCalculation() {
  const baseInput = prompt("Enter the base of the rectangle:");
  const heightInput = prompt("Enter the height of the rectangle:");

  const base = parseUserInput(baseInput, "base");
  const height = parseUserInput(heightInput, "height");

  if (base !== null && height !== null) {
    const area = calculateRectangleArea(base, height);
    alert(`The area of the rectangle is: ${area.toFixed(2)}`);
  }
}

/**
 * Handles the square area calculation
 */
function handleSquareCalculation() {
  const sideInput = prompt("Enter the side of the square:");

  const side = parseUserInput(sideInput, "side");

  if (side !== null) {
    const area = calculateSquareArea(side);
    alert(`The area of the square is: ${area.toFixed(2)}`);
  }
}

/**
 * Handles the trapezoid area calculation
 */
function handleTrapezoidCalculation() {
  const largeBaseInput = prompt("Enter the larger base of the trapezoid:");
  const smallBaseInput = prompt("Enter the smaller base of the trapezoid:");
  const heightInput = prompt("Enter the height of the trapezoid:");

  const largeBase = parseUserInput(largeBaseInput, "larger base");
  const smallBase = parseUserInput(smallBaseInput, "smaller base");
  const height = parseUserInput(heightInput, "height");

  if (largeBase !== null && smallBase !== null && height !== null) {
    const area = calculateTrapezoidArea(largeBase, smallBase, height);
    alert(`The area of the trapezoid is: ${area.toFixed(2)}`);
  }
}

/**
 * Handles the circle area calculation
 */
function handleCircleCalculation() {
  const radiusInput = prompt("Enter the radius of the circle:");

  const radius = parseUserInput(radiusInput, "radius");

  if (radius !== null) {
    const area = calculateCircleArea(radius);
    alert(`The area of the circle is: ${area.toFixed(2)}`);
  }
}

/**
 * Main function that runs the calculator
 */
function runGeometricCalculator() {
  let userChoice;

  do {
    // Display menu and get user choice
    userChoice = prompt(buildMenu());

    // Handle user selection
    switch (userChoice) {
      case MENU_OPTIONS.TRIANGLE:
        handleTriangleCalculation();
        break;

      case MENU_OPTIONS.RECTANGLE:
        handleRectangleCalculation();
        break;

      case MENU_OPTIONS.SQUARE:
        handleSquareCalculation();
        break;

      case MENU_OPTIONS.TRAPEZOID:
        handleTrapezoidCalculation();
        break;

      case MENU_OPTIONS.CIRCLE:
        handleCircleCalculation();
        break;

      case MENU_OPTIONS.EXIT:
        alert("Exiting the Geometric Calculator. Goodbye!");
        break;

      default:
        alert("Invalid choice. Please select a valid option (1-6).");
    }
  } while (userChoice !== MENU_OPTIONS.EXIT);
}

// Initialize the calculator when the script loads
runGeometricCalculator();
