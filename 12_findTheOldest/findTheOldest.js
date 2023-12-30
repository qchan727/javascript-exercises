const findTheOldest = function (people) {
   return people.reduce((acc, obj) => {
      const dif = obj.yearOfDeath
         ? obj.yearOfDeath - obj.yearOfBirth
         : new Date().getFullYear() - obj.yearOfBirth;
      const prev = acc.yearOfDeath
         ? acc.yearOfDeath - acc.yearOfBirth
         : new Date().getFullYear() - acc.yearOfBirth;
      console.log(dif, prev);
      return dif > prev ? obj : acc;
   }, people[0]);
};

/*
 const people = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
   */

// Do not edit below this line
module.exports = findTheOldest;
