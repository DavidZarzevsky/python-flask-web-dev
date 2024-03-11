from flask import Blueprint, render_template

# addExpense blueprint definition

addExpense = Blueprint(
    'addExpense',
    __name__,
    static_folder='static',
    static_url_path='/addExpense',
    template_folder='templates'
)


# Routes
@addExpense.route('/addExpense')
def addExpenseFunc():
    return render_template('addExpense.html')
