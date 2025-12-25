// 1st Challenge: Basic Function
function makeTea(typeOfTea) {
  console.log(`Making ${typeOfTea}`);
  return;
}

// makeTea("green tea");

// 2nd Challenge: Nested Function
function orderTea(typeOfTea) {
  function ConfirmOrder() {
    console.log(`Order confirmed: ${typeOfTea}`);
    return;
  }
  ConfirmOrder();
  return;
}

// orderTea("black tea");

// 3rd Challenge: Function with Parameters and Return Value
const calculateTotal = (price, Quantity) => {
  let totalCost = price * Quantity;
  console.log(`Total Cost: ${totalCost}`);
  return 0;
};

// calculateTotal(5, 3);

// 4th Challenge: Higher Order Function
function makeTea1(typeOfTea) {
  return `makeTea : ${typeOfTea}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let order = processTeaOrder(makeTea1);
// console.log(order);

// 5th Challenge: Nested Function
function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let teaMaker = createTeaMaker();
let result = teaMaker("green tea");
// console.log(result);
