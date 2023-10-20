const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
books.forEach((book)=> console.log(book.authorFirst+' '+book.authorLast+' wrote '+book.name+' in '+book.publishDate))
//Sort books from oldest to most recent
const by_age = books.filter((book) => {
age = 2023 - book.publishDate
})
//sort books alphabetically
const alphabetically = titles.sort()
console.log(alphabetically)
//Find who wrote War and Peace
const w_p = books.filter((book)=>{
  if (book.name === 'War and Peace')
    console.log(book.authorFirst + ' ' + book.authorLast + ' wrote War and Peace')
})
//how many books were written before 1900?
const before1900 = books.filter((year)=> year.publishDate < 1900)
console.log(before1900.length + ' books were written before 1900')
//was there at least one book published within the last 100 years?
const last100 = books.filter((year)=>{
  age = 2023 - year.publishDate
  if (age<100){console.log('There is at least one book published within the last 100 years')}
})
//was every book published within the last 100 years?
const within100 = books.filter((book)=> book.publishDate > 1923)
if(within100.length >= books.length){
  console.log('Every book was published within the last 100 years');
}  else if(within100.length < books.length){
  console.log('Not all the books were written within the last 100 years');
}
//print a list of books that "includes" the genre historical
const lh = []
const historical = books.forEach((book)=>{
  const includes = book.genre.includes('historical')
  if(includes === true){
    lh.push(' ' + book.name);
  }
})
console.log(lh + ' are all historical')

