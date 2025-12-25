// Example 1 : change paragraph on click
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph is Changed !";
  });

//   Example 2 : HighlightFirstCity
document
  .getElementById("HighlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    let target = citiesList.firstElementChild;
    target.classList.toggle("highlight");
    target.style.width = "10%";
    target.style.margin = "10px auto";
    target.style.borderRadius = "4px";
  });

//   Example 3 : to change the Order
document.getElementById("changeOrder").addEventListener("click", function () {
  let odr = document.getElementById("coffeeType");
  odr.style.toggle;
  odr.textContent = "Espresso";
  odr.style.backgroundColor = "gray";
  odr.style.padding = "3px";
  odr.style.color = "white";
  odr.style.borderRadius = "7px";
  odr.style.fontWeight = "bold";
  odr.style.margin = "5px";
});

// Example 4 : Inserting and Creating New items
document.getElementById("addNewItem").addEventListener("click", function () {
  let toAdd = document.createElement("li");
  toAdd.textContent = "Eggs";
  let target = document.getElementById("ShoppingList");
  target.appendChild(toAdd);
});

// Example 5 : Removing the DOM Elements
document
  .getElementById("RemoveLastTask")
  .addEventListener("click", function () {
    let target = document.getElementById("taskList");
    target.lastElementChild.remove();
  });

//   Example 6 : Events Handeling
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("ChaiCode");
  });

//   Example 7 : Event Delegation
document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You Selected : " + event.target.textContent);
  }
});

// Example 8 : Form Handeling
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("FeedbackInput").value;
    let target = document.getElementById("feedbackDisplay");
    target.textContent = `Your Feedback is : ${feedback}`;
    target.style.backgroundColor = "blue";
    target.style.color = "white";
    target.style.fontWeight = "bold";
    target.style.padding = "5px";
    target.style.width = "25%";
    target.style.margin = "10px auto";
    target.style.borderRadius = "4px";
  });

//   Example 9 : DOM Status
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded...";
});

// Example 10 : CSS Classes Manipulation
document
  .getElementById("toggleHighLight")
  .addEventListener("click", function () {
    let description = document.getElementById("descriptionText");
    description.classList.toggle("highlight");
    description.style.width = "15%";
    description.style.margin = "10px auto";
  });
