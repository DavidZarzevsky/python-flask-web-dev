const users = [
    {
        email: "adam-david@gmail.com",
        password: "12345678",
        firstName: "David",
        lastName: "Adam",
        gender: "male",
        dateOfBirth: "01/01/1990",
        currency: "ILS"
    }
];

const dbUsers = {
    users: {
        get: function(email, password) {
            return users.find(function(user) {
                return user.email === email && user.password === password;
            });
        }
    }
};

window.dbUsers = dbUsers;

// Write json of expenses
const expenses = [
    {
        expenseCategory: "Food",
        expenseAmount: 100,
        expenseDate: "02/02/2021"
    },
    {
        expenseCategory: "Transportation",
        expenseAmount: 200,
        expenseDate: "03/02/2021"
    },
    {
        expenseCategory: "Entertainment",
        expenseAmount: 300,
        expenseDate: "04/02/2021"
    },
    {
        expenseCategory: "Housing",
        expenseAmount: 400,
        expenseDate: "05/02/2021"
    },
    {
        expenseCategory: "Others",
        expenseAmount: 500,
        expenseDate: "06/02/2021"
    }
];

const dbExpenses = {
    expenses: {
        get: function(expenseCategory, expenseAmount, expenseDate) {
            return expenses.find(function(expense) {
                return (
                    expense.expenseCategory === expenseCategory &&
                    expense.expenseAmount === expenseAmount &&
                    expense.expenseDate === expenseDate
                );
            });
        }
    },
    getAllExpensesByCategory: function() {
        return expenses;
    }
};

window.dbExpenses = dbExpenses;

// Write json of categories
const categories = [
    {
        categoryName: "Food",
    },
    {
        categoryName: "Transportation",
    },
    {
        categoryName: "Entertainment",
    },
    {
        categoryName: "Housing",
    },
    {
        categoryName: "Others",
    }
];

const dbCategories = {
    get: function(categoryName) {
        return categories.find(function(category) {
            return category.categoryName === categoryName;
        });
    }
};

window.dbCategories = dbCategories;

// Write json of currencies
const currencies = [
    {
        currencyName: "ILS"
    },
    {
        currencyName: "USD"
    },
    {
        currencyName: "EUR"
    },
    {
        currencyName: "GBP"
    },
    {
        currencyName: "JPY"
    }
];

const dbCurrencies = {
    currencies: {
        get: function(currencyName) {
            return currencies.find(function(currency) {
                return currency.currencyName === currencyName;
            });
        }
    }
};

window.dbCurrencies = dbCurrencies;
