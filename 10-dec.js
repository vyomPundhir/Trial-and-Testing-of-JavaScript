// 7;
// 2.5;
// above both are treated as Number values

// ("anurag");
// ('anurag');
// above both will be treated as String Values no matter they are inside "" or ''

// true -> 1   (loosly speaking not 100% correct but it means 1.)
// false -> 0  (loosly speaking not 100% correct but it means 0.)
// above both are Boolean values

// null;
// undefined;

// these above are called Empty values

// all the above discussed are called Prmitive values / PDT => becoz they store only One Single Value

// after primitive we will see Array and Object...arrays can shore more than one value. 

// [1, 2, 'Anurag', true, 'anurag',"Shivam","Swapnil"] -> we can have n number of types inside the arrays of javascript.
//  [1, 2, 'Anurag', true, 'anurag',"Shivam","Swapnil"]
//   0, 1,   2         3       4,      5,       6     =>   Index

// now we have a key-value pair..
// {
//     key:value;
// }
// the example of key-value pair is shown below:
// {
//     fname:anurag;
//     lname:tiwari;
// }

// All the abpve dicussed after PDT are  Non- primitive Data Types => becoz they Will store More than one value

// Varibales => means Place holder for value
// for example:
// let x = 25;
// var y = 25;
// const z ="anurag";

// const z = '59890000000000'; // the value of z will always remain constant
// let balance = 999999999; // this balance cannot be constant because balance keeps on changing.

// let firstname = 'Anurag';
// let lastname = 'Tiwari';
// const mobileno = 9978899788;

// console.log('MY First name  is ', firstname);//we can also use the '+' at the place of ','.
// console.log('My Last Name is', lastname);
// console.log(mobileno, firstname, lastname);

// Tempate Literal

// console.log(`My Current First Name is ${firstname} ${lastname} ${mobileno}`);

// Summary of the above:

// History
// Basic Pillar of an programming Language
// Values
// Data Types
// Difference between Primitive and non primitive Datatypes
// Console.log => How to print something on terminal
// Decalring Variable
// Tempalte Literal

// Operators

// Assignment Operator

// let x = 11;
// let y = 10;

// Arthimatic Operator
// +, -, *. /, (% => Remainder)
// let z = x + y;
// console.log(z);

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

// Comparison Op

// let abc = 10;
// let xyz = '10';

// console.log(abc > xyz);
// console.log(abc <= xyz);
// console.log(abc >= xyz);

// == or ===

// console.log(abc == xyz); //we should get a false becoz number and string are compared but we get true.
// console.log(abc === xyz); //with this === we get false showing that number and string cannot be compared..

// let y;
// //y=10;
// console.log(y); // this will give an output of undefined because y is not provided any value or y=10 is commented.

// const accno;
// accno = 5958900000;
// this will give us an error becoz the const accno has already got a garbage value which cannot be changed afterwards cause of const keyword.
 
// Conditions

let Standard = 7;

if (Standard == 1) {
    console.log('Room One');
} else if (Standard == 2) {
    console.log('Rome Two');
} else if (Standard == 3) {
    console.log('Room Number 3');
} else {
    console.log('You are Principal');
}
