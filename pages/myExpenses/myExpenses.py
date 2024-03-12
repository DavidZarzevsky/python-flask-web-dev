from flask import Blueprint, render_template

myExpenses = Blueprint(
    'myExpenses',
    __name__,
    static_folder='static',
    static_url_path='/myExpenses',
    template_folder='templates'
)

# Routes
@myExpenses.route('/myExpenses')
def myExpensesFunc():
    return render_template('myExpenses.html')