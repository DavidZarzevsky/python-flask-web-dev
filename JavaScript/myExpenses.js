document.addEventListener("DOMContentLoaded", function () {
    const expenseData = {
        labels: categories.map(function (category) {
            return dbCategories.get(category.categoryName).categoryName;
        }),
        datasets: [{
            data: dbExpenses.getAllExpensesByCategory().map(function (expense) {
                return expense.expenseAmount;
            }),
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#E7E9ED"],
        }]
    };
    const ctx = document.getElementById('myChart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'pie',
        data: expenseData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontSize: 14,
                    padding: 10,
                    boxWidth: 20,
                }
            },
        }
    });

    const totalExpensesValue = dbExpenses.getAllExpensesByCategory().reduce(function (total, expense) {
        return total + expense.expenseAmount;
    }, 0);

    // Display total expenses
    document.getElementById('totalExpenses').textContent = totalExpensesValue + "₪";

    // Function to update expenses by type based on the selected dropdown value
    window.updateExpensesByType = function () {
        const selectedExpenseType = document.getElementById('expenseTypeDropdown').value;

        const expensesByTypeData = {
            "Food": 0,
            "Transportation": 0,
            "Entertainment": 0,
            "Housing": 0,
            "Others": 0
        };

        dbExpenses.getAllExpensesByCategory().forEach(function (expense) {
            if (expense.expenseCategory === selectedExpenseType) {
                expensesByTypeData[selectedExpenseType] += expense.expenseAmount;
            }
        });
        document.getElementById('expensesByType').textContent = selectedExpenseType + ": " + expensesByTypeData[selectedExpenseType] + "₪";
    };
});


