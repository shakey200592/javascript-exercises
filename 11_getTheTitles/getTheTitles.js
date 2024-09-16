const getTheTitles = function (books) {
  let titles = [];
  books.forEach((element) => {
    titles.push(element.title);
  });
  return titles;
};

const book = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

console.log(getTheTitles(book));

// Do not edit below this line
module.exports = getTheTitles;
