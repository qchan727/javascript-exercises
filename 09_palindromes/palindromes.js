const palindromes = function (s) {
   let str = "";
   const regex = /^[a-zA-Z]$/;
   const reg = /^[0-9]$/;
   s.split("").forEach((c) => {
      if (reg.test(c)) {
         str += c;
      } else if (regex.test(c)) {
         str += c.toLowerCase();
      }
   });
   const rev = str.split("").reverse();
   return rev.join("") === str;
};

// Do not edit below this line
module.exports = palindromes;
