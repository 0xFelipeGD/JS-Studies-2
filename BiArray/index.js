// Bi-Dimensional Array Examples in JavaScript

// 1. Creating 2D Arrays
const matrix3x3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const studentGrades = [
  ["Alice", 85, 92, 78],
  ["Bob", 90, 88, 95],
  ["Charlie", 76, 82, 89],
];

const gameBoard = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"],
];

// Creating empty 2D array
const rows = 3,
  cols = 4;
const empty2D = Array(rows)
  .fill()
  .map(() => Array(cols).fill(0));

// 2. Accessing Elements
console.log("Matrix element [1][2]:", matrix3x3[1][2]); // 6
console.log("Student Bob's second grade:", studentGrades[1][2]); // 88
console.log("Game board center:", gameBoard[1][1]); // X

// 3. Modifying Elements
matrix3x3[0][0] = 10;
studentGrades[2][3] = 95;
console.log("Modified matrix:", matrix3x3);
console.log("Charlie's updated grade:", studentGrades[2][3]);

// 4. Adding Rows
matrix3x3.push([10, 11, 12]);
studentGrades.push(["Diana", 88, 91, 87]);
console.log("Matrix with new row:", matrix3x3);

// 5. Adding Columns (to each row)
matrix3x3.forEach((row) => row.push(0));
console.log("Matrix with new column:", matrix3x3);

// 6. Iterating Through 2D Arrays
console.log("Using nested for loops:");
for (let i = 0; i < matrix3x3.length; i++) {
  for (let j = 0; j < matrix3x3[i].length; j++) {
    console.log(`[${i}][${j}]: ${matrix3x3[i][j]}`);
  }
}

console.log("Using forEach:");
studentGrades.forEach((student, rowIndex) => {
  console.log(`Student ${rowIndex + 1}:`);
  student.forEach((value, colIndex) => {
    if (colIndex === 0) {
      console.log(`  Name: ${value}`);
    } else {
      console.log(`  Grade ${colIndex}: ${value}`);
    }
  });
});

// 7. 2D Array Methods
console.log("Flattening 2D array:");
const flattened = matrix3x3.flat();
console.log("Flattened:", flattened);

// Calculate sum of all elements
const totalSum = matrix3x3.flat().reduce((sum, num) => sum + num, 0);
console.log("Total sum:", totalSum);

// 8. Searching in 2D Arrays
function findElement(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

const position = findElement(matrix3x3, 5);
console.log("Position of 5:", position);

// 9. Matrix Operations
function transposeMatrix(matrix) {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]));
}

const transposed = transposeMatrix([
  [1, 2, 3],
  [4, 5, 6],
]);
console.log("Transposed matrix:", transposed);

// 10. Creating Identity Matrix
function createIdentityMatrix(size) {
  return Array(size)
    .fill()
    .map((_, i) =>
      Array(size)
        .fill()
        .map((_, j) => (i === j ? 1 : 0))
    );
}

const identity = createIdentityMatrix(3);
console.log("Identity matrix:", identity);

// 11. Row and Column Operations
function getRow(matrix, rowIndex) {
  return matrix[rowIndex];
}

function getColumn(matrix, colIndex) {
  return matrix.map((row) => row[colIndex]);
}

console.log("Row 1:", getRow(matrix3x3, 1));
console.log("Column 2:", getColumn(matrix3x3, 2));

// 12. Matrix Addition
function addMatrices(matrix1, matrix2) {
  return matrix1.map((row, i) => row.map((val, j) => val + matrix2[i][j]));
}

const matrixA = [
  [1, 2],
  [3, 4],
];
const matrixB = [
  [5, 6],
  [7, 8],
];
const sum = addMatrices(matrixA, matrixB);
console.log("Matrix addition result:", sum);

// 13. Find min/max in 2D array
function findMinMax(matrix) {
  const flattened = matrix.flat();
  return {
    min: Math.min(...flattened),
    max: Math.max(...flattened),
  };
}

const minMax = findMinMax(matrix3x3);
console.log("Min/Max values:", minMax);

// 14. Rotating Matrix 90 degrees clockwise
function rotateMatrix90(matrix) {
  const n = matrix.length;
  return Array(n)
    .fill()
    .map((_, i) =>
      Array(n)
        .fill()
        .map((_, j) => matrix[n - 1 - j][i])
    );
}

const rotated = rotateMatrix90([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log("Rotated 90° clockwise:", rotated);
