// Challenge 1: Break on Chai
let arr = ["green tea", "black tea", "chai", "oolong tea"];
let brr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== "chai") {
    brr.push(arr[i]);
  } else {
    break;
  }
}
// console.log(brr);

// Challenge 2: Continue on Paris
let arr1 = ["London", "New York", "paris", "Berlin"];
let brr1 = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== "paris") {
    brr1.push(arr1[i]);
  } else {
    continue;
  }
}
// console.log(brr1);

// Challenge 3: Break on 4
let arr2 = [1, 2, 3, 4, 5];
let brr2 = [];

for (const i of arr2) {
  if (i !== 4) {
    brr2.push(i);
  } else {
    break;
  }
}

// console.log(arr2);
// console.log(brr2);

// Challenge 4: Continue on Herbal Tea forof
let arr3 = ["chai", "green tea", "herbal tea", "black tea"];
let brr3 = [];

for (const i of arr3) {
  if (i !== "herbal tea") {
    brr3.push(i);
  } else {
    continue;
  }
}

// console.log(brr3);

// Challenge 5: Break on Berlin
let cityPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let key = [];

for (const i in cityPopulation) {
  if (i !== "Berlin") {
    key[i] = cityPopulation[i];
  } else {
    break;
  }
}

// console.log(key);

// Challenge 6: Continue on Small Cities forin
let worldPopulation = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = [];

for (const i in worldPopulation) {
  if (worldPopulation[i] > 3000000) {
    largeCities[i] = worldPopulation[i];
  } else {
    continue;
  }
}
// console.log(largeCities);

// Challenge 7: Break on Chai forEach forEach
let arr4 = ["earl grey", "green tea", "chai", "oolong tea"];
let brr4 = [];

arr4.forEach(function (i) {
  if (i !== "chai") {
    brr4.push(i);
  } else {
    return;
  }
});

// console.log(brr4);

// Challenge 8: Continue on Sydney forEach
let arr5 = ["Berlin", "Tokyo", "Sydney", "Paris"];
let brr5 = [];

arr5.forEach(function (i) {
  if (i !== "Sydney") {
    brr5.push(i);
  } else {
    return;
  }
});

// console.log(brr5);

// Challenge 9: Break on 7 for loop
let arr6 = [2, 5, 7, 9];
let brr6 = [];

for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] !== 7) {
    let val = arr6[i] * 2;
    brr6.push(val);
  } else {
    continue;
  }
}

// console.log(brr6);

// Challenge 10: Continue on Length > 10 forof
let arr7 = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let brr7 = [];

for (const i of arr7) {
  if (i.length <= 10) {
    brr7.push(i);
  } else {
    continue;
  }
}

// console.log(brr7);
