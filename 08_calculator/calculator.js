const add = function (a, b) {
   return a + b;
};

const subtract = function (a, b) {
   return a - b;
};

const sum = function (arr) {
   return arr.reduce((acc, x) => acc + x, 0);
};

const multiply = function (arr) {
   return arr.reduce((acc, x) => acc * x, 1);
};

const power = function (a, b) {
   let ans = 1;
   for (let i = 0; i < b; i++) {
      ans *= a;
   }
   return ans;
};

const factorial = function (x) {
   let ans = 1;
   for (let i = 1; i <= x; i++) {
      ans *= i;
   }
   return ans;
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
