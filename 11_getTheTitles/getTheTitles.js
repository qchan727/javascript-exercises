const getTheTitles = function (books) {
   return books.map((obj) => {
      return obj.title;
   });
};

/*
const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
*/
// Do not edit below this line
module.exports = getTheTitles;
