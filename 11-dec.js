// Conditions
//  If Else
//  Switch case
//  Ternary OPerator/ternary Conditions

// let rating =8;

// if(rating==5)
// {
//   console.log("5 stars");
// }
// else if(rating==4)
// {
//   console.log("4 Stars");
// }
// else if(rating==3)
// {
//   console.log("3 Stars");
// }
// else{
//   console.log("I am else");
// }

// Switch Case
// let user = "Admin";
// switch (user) {
//   case 'Admin':
//     console.log('Redirect him/her to the Admin Page');
//     break;
//   case "Mentor":
//     console.log("Redirect him/her to the Mentor Dashboard");
//     break;

//   default:
//     console.log("Im simple user")
// }
// Ternary operator/Ternary Condition
// condition?True:False
// let raining =true;
// raining ? console.log("It's raining") : console.log("Its not raining");
// array
// let name = ["anirudh","anurag", "shubham","bishal","pooja","santosh","prajwal","Monika","pritam"];
// console.log(name);
// console.log(name[6]);
// objects
// let bankacc={
//   firstname:"vyom",
//   lastname:"pundhir",
//   mobileno:8445198500,
//   balance:1000000
// }
// console.log(bankacc);
// console.log(bankacc.mobileno)
// date and math
// const now = new Date();
// // console.log(now);
// console.log(now.toString());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getTime());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// math
// const pi=Math.PI;
// console.log(pi);
// console.log(Math.round(pi));
// console.log(Math.round(9.4));
// console.log(Math.round(9.8));
// console.log(Math.round(9.5));

// min & max
// console.log(Math.min(10,1,3,2,5));
// console.log(Math.max(10,1,3,2,5));

// Random
// console.log(Math.random()); //always gives values from 0 to 0.9999999999
// console.log(Math.random()*50);

// power
// console.log(Math.pow(3,3));

// logarithm
// console.log(Math.log(2));
// sine
// console.log(Math.sin(90));
// loops
// do while, while, for
let i=6;
do{
  console.log("value of i is :", i);
  i++;
}
while(i<=5);


let j=6;
while(j<=5){
  console.log('val of j is ',j);
  j++;
}
// for
for(let i=0;i<=10;i++){
  console.log(`${i}*${i}=${i*i}`);
}