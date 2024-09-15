const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, val) => acc + val, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, val) => acc * val, 1);
};

const power = function (num, power) {
  return Math.pow(num, power);
};

const factorial = function (fac) {
  const factorialArray = [];
  for (let i = 1; i <= fac; i++) {
    factorialArray.push(i);
  }
  return factorialArray.reduce((acc, val) => acc * val, 1);
};
factorial(2);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
