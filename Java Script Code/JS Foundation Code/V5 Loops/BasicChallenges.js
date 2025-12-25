// 1st challenge: Calculate the sum of numbers from 1 to 15 using a while loop.
let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
// console.log("Sum is : " + sum);

// 2nd challenge: Create a countdown from 5 to 1 and store the numbers in an array using a while loop.
let j = 5;
let arr = [];
while (j > 0) {
  //   console.log("Countdown: " + j);
  arr.push(j);
  j--;
}

// console.log(arr);

// 3rd challenge: Prompt the user to enter types of tea until they type "stop", storing each type in an array using a do...while loop.
// let teaCollection = [];
// let tea;
// do {
//   tea = prompt(
//     "Enter a type of tea to add to your collection (or type 'stop' to finish):"
//   );
//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");
// console.log("Your tea collection: " + teaCollection);

// 4th challenge: Use a do...while loop to calculate the sum of numbers from 0 to 3.
let sum2 = 0;
let j2 = 0;
do {
  sum2 += j2;
  j2++;
} while (j2 < 4);

// console.log(sum2);

// 5th challenge: Given an array of numbers, create a new array that contains each number doubled using a for loop.
let arr1 = [2, 4, 6];
let arr2 = [];

for (let index = 0; index < arr1.length; index++) {
  let ele = 2 * arr1[index];
  arr2.push(ele);
}
// console.log(arr2);

// 6th challenge: Iterate through an array of city names, printing each name and storing them in a new array using a for loop.
let arr3 = ["Peris", "new york", "Tokyo", "London"];
let arr4 = [];

for (let index = 0; index < arr3.length; index++) {
  let ele = arr3[index];
  console.log(ele);
  arr4.push(ele);
}
console.log(arr4);
