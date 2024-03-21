document.addEventListener("DOMContentLoaded", function () {
    const expensesDict = document.getElementById('expensesByCategory').getAttribute('data-expenses');
    const expensesData = JSON.parse(expensesDict);
    const userCurrency = document.getElementById('userCurrency').getAttribute('user-currency');

    const expenseData = {
        labels: Object.keys(expensesData),
        datasets: [{
            data: Object.values(expensesData),
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#E7E9ED", "#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#E7E9ED"]
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

    // Calculate total expenses
    const totalExpensesValue = Object.values(expensesData).reduce((acc, val) => acc + val, 0);

    // Display total expenses
    document.getElementById('totalExpenses').textContent = totalExpensesValue + userCurrency;

    window.updateExpensesByType = function () {
    const selectedExpenseType = document.getElementById('expenseTypeDropdown').value.toLowerCase();

    const expensesByTypeData = expensesData[selectedExpenseType] || 0;

    document.getElementById('expensesByType').textContent = selectedExpenseType.charAt(0).toUpperCase() + selectedExpenseType.slice(1) + ": " + expensesByTypeData + userCurrency;
    };
});