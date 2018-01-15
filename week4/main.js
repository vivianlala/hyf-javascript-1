'use strict' 
//1.  Open a new js file and start by declaring an array that contains 10 strings.
//  These strings should be of book titles you have read (or made up) and be lowercase without spaces or special 
//  characters so that you can use these later as Id's.
//  (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).
var bookArray = ['the_dragon_of_fortune','the_kingdom_of_fantasy','the_ship_of_secrets','the_enchanted_charms',
                'the_quest_for_paradise','christmas_catastrophe','the_curse_of_the_cheese_pyramid ' , ' the_volcano_of_fire' ,
                 'lost_treasure_of_the_emerald_eye', "the_wizard's_wand"];

/*2.. Create a basic html file called index.html and use it to load the js file, confirm the console.log show the array. 
(This is for debugging and making sure everything is in order. Delete it later when you're done :))  */
console.log(bookArray);

/*3..Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop. */
let lis = document.getElementById("bookId");
function bookReader(book){
    var i; 
    for(i=0; i<bookArray.length; i++){
        
        
    }
}

/*  Make an object containing information for each book. Each item (object) in this object should have the book ID 
you thought up in point 1 as a key,
and it should have at least the following fields: title, language and author. */

let book1 = {
  title : 'The Dragon of fortune', 
  language : 'English',
  author: 'Geronimo Stilton'};
console.log(book1);

let book2 = {
  title : 'Lost Treasure of the Emerald Eye',
  language : 'English', 
   author: 'Geronimo Stilton'};
console.log(book2);

let book3 = { 
  title : 'The Kingdom of Fantasy',
  language : 'English', 
   author: 'Geronimo Stilton'};
console.log(book3);

let book4 = { 
  title : 'The Ship of Secrets',
  language: 'English', 
    author: 'Geronimo Stilton'};
console.log(book4);

let book5 = { 
  title: 'The Enchanted Charms', 
  language: 'English', 
    author: 'Geronimo Stilton'};
console.log(book5);

let book6 = { 
  title: 'The Quest for Paradise', 
  language: 'English',
  author: 'Geronimo Stilton'};
console.log(book6);

let book7 = { 
  title: 'Christmas Catastrophe',
  language: 'English', 
    author: 'Geronimo Stilton'};

console.log(book7);

let book8 = { 
  title: 'The Curse of the Cheese Pyramid ',
  language: 'English', 
    author: 'Geronimo Stilton'};

console.log(book8);

let book9 = { 
  title: ' The Volcano of Fire',
  language: 'English', 
    author: 'Geronimo Stilton'};

console.log(book9);

let book10 = { 
  title: "The Wizard's Wand",
  language: 'English',
  author: 'Geronimo Stilton'};
  console.log(book10);  