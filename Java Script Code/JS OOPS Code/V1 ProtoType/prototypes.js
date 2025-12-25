let computer = { cpu: 12 };
let lenovo = { screen: "HD" };
let tomHardWare = {};

// console.log(computer);

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(tesla);
