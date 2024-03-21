//get user from local storage
document.addEventListener("DOMContentLoaded", function () {
    const addExpenseForm = document.getElementById("add-expense-form");
    if (addExpenseForm) {
        addExpenseForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const expenseName = document.getElementById("expense-category").value.trim();
            const expenseAmount = document.getElementById("expense-amount").value.trim();
            if (expenseName === '' || expenseAmount === '' || expenseAmount === '0' || expenseAmount < 0) {
                alert("Please fill out all fields and the amount should be positive.");
                return;
            }
            addExpenseForm.submit();
        });
    } else {
        console.error("Element with ID 'add-expense-form' not found.");
    }
});