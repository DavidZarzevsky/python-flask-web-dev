document.addEventListener("DOMContentLoaded", function () {
    const expenseData = {
        labels: ["Housing", "Food", "Transportation", "Entertainment", "Others"],
        datasets: [{
            data: [20, 25, 15, 10, 30], // Replace
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

    const totalExpensesValue = 1769;

    // Display total expenses
    document.getElementById('totalExpenses').textContent = totalExpensesValue;

    // Function to update expenses by type based on the selected dropdown value
    window.updateExpensesByType = function () {
        const selectedExpenseType = document.getElementById('expenseTypeDropdown').value;

        // Sample expenses by type data (replace this with your actual data)
        const expensesByTypeData = {
            all: "All Expenses: $1769",
            housing: "Housing Expenses: $200",
            food: "Food Expenses: $250",
            transportation: "Transportation Expenses: $150",
            entertainment: "Entertainment Expenses: $100",
            others: "Others Expenses: $300"
        };

        // Display expenses by type
        document.getElementById('expensesByType').textContent = expensesByTypeData[selectedExpenseType];
    };
});


