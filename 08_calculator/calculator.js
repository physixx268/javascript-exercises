const add = function (sum1, sum2) {
  let res = sum1 + sum2;

  return res;
};

const subtract = function (sum1, sum2) {
  let res = sum1 - sum2;

  return res;
};

const sum = function (arr) {
  const res = arr.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  return res;
};

const multiply = function (arr) {
  const res = arr.reduce((accumulator, value) => {
    return accumulator * value;
  }, 1);
  return res;
};

const power = function (sum1, sum2) {
  let res = Math.pow(sum1, sum2);
  return res;
};

const factorial = function (n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
