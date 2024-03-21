from flask import Blueprint, render_template, request, redirect, url_for, session
from dbHandler import *
from app import login_required

# addExpense blueprint definition

addExpense = Blueprint(
    'addExpense',
    __name__,
    static_folder='static',
    static_url_path='/addExpense',
    template_folder='templates'
)

# Routes
@addExpense.route('/addExpense', methods=['GET', 'POST'])
@login_required
def addExpenseFunc():
    if request.method == 'POST':
        category = request.form['expense-category']
        amount = request.form['expense-amount']
        add_expense(session['email'], category, amount)
        return redirect(url_for('mainMenu.mainMenuFunc'))
    return render_template('addExpense.html')
