document.addEventListener("DOMContentLoaded", () => {
  const ExpenseForm = document.getElementById("expense-form");
  const ExpenseNameInput = document.getElementById("expense-name");
  const ExpenseAmountInput = document.getElementById("expense-amount");
  const ExpenseList = document.getElementById("expense-list");
  const TotalAmountDisplay = document.getElementById("total-amount");

  // 🔹 Load saved expenses from localStorage OR start empty
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateTotal();

  // 🔹 Display stored expenses on page load
  renderExpenses();

  // 🔹 Display total on page load
  updateTotal();

  // 🔹 Add expense submit event
  ExpenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = ExpenseNameInput.value.trim();
    const amount = parseFloat(ExpenseAmountInput.value.trim());

    // 🔹 Check user input is valid
    if (name !== "" && !isNaN(amount) && amount > 0) {
      // 🔹 Create expense object
      const newExpense = {
        id: Date.now(), // unique id
        name: name,
        amount: amount,
      };

      // 🔹 Add expense to list
      expenses.push(newExpense);

      // 🔹 Save to localStorage
      saveExpenseToLocalStorage();

      // 🔹 Re-render UI & update total
      renderExpenses();
      updateTotal();

      // 🔹 Clear input fields
      ExpenseNameInput.value = "";
      ExpenseAmountInput.value = "";
    }
  });

  // 🔹 Render all expenses to the UI
  function renderExpenses() {
    ExpenseList.innerHTML = "";

    expenses.forEach((i) => {
      const li = document.createElement("li");

      // 🔹 Expense row & remove button
      li.innerHTML = `
        ${i.name} - $ ${i.amount}
        <button class="remove-btn" data-id="${i.id}">Remove</button>
      `;

      ExpenseList.appendChild(li);
    });
  }

  // 🔹 Calculate total expense amount
  function calculateTotal() {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  // 🔹 Save list to localStorage
  function saveExpenseToLocalStorage() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  // 🔹 Display total amount in UI
  function updateTotal() {
    totalAmount = calculateTotal();
    TotalAmountDisplay.textContent = totalAmount.toFixed(2);
  }

  // 🔹 Remove item using Event Delegation
  ExpenseList.addEventListener("click", (e) => {
    // Check clicked item is button
    if (e.target.tagName === "BUTTON") {
      const expenseId = parseInt(e.target.getAttribute("data-id"));

      // 🔹 Filter out deleted item
      expenses = expenses.filter((expense) => expense.id !== expenseId);

      // 🔹 Update storage + UI
      saveExpenseToLocalStorage();
      renderExpenses();
      updateTotal();
    }
  });
});
