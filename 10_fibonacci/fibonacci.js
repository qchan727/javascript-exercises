const fibonacci = function (x) {
   if (x < 0) return "OOPS";
   if (Number(x) === 0) {
      return 0;
   } else if (Number(x) === 1) {
      return 1;
   } else {
      return fibonacci(Number(x) - 1) + fibonacci(Number(x) - 2);
   }
};

// Do not edit below this line
module.exports = fibonacci;
