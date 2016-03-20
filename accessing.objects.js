/**
 * Created by priya on 20/3/16.
 */

var book={title:'ways to go', pages:280, bookmarks1:"page 20", 10:'serial number'};
console.log(book.title); //dot notation
console.log(book.pages);

console.log(book["title"]); //brackets notation
console.log(book['bookmarks'+1]); //this becomes bookmarks1
//console.log(book[title]); // error as title is a string
console.log(book[10]);
//console.log(book.10); //gives an error...
console.log(book['10']); //same as (book[10])
