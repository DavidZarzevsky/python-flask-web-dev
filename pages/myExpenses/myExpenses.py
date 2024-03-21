from collections import defaultdict

from flask import Blueprint, render_template, session, json

from app import login_required
from dbHandler import *

myExpenses = Blueprint(
    'myExpenses',
    __name__,
    static_folder='static',
    static_url_path='/myExpenses',
    template_folder='templates'
)
# Define expense categories as constants or enums
EXPENSE_CATEGORIES = ['food', 'transportation', 'utilities', 'entertainment', 'clothing', 'health', 'insurance',
                      'education', 'gifts', 'other']

def categorize_expenses(expenses):
    categorized_expenses = {category: 0 for category in EXPENSE_CATEGORIES}
    for expense in expenses:
        category = expense.get('Category', 'other')
        amount = expense.get('Amount', 0)
        categorized_expenses[category] += amount
    return categorized_expenses

@myExpenses.route('/myExpenses')
@login_required
def myExpensesFunc():
    session['page'] = 'myExpenses'
    expenses = get_expenses(session.get('email', None))
    expenses_by_category = defaultdict(float)
    for expense in expenses:
        expenses_by_category[expense['Category']] += float(expense['Amount'])
    expenses_by_category = dict(expenses_by_category)
    expenses_by_category_json = json.dumps(expenses_by_category)
    userCurrency = session.get('currency', '₪')
    return render_template('myExpenses.html', expensesByCategory=expenses_by_category_json,
                           userCurrency=userCurrency)
