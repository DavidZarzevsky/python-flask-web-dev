from functools import wraps
from flask import Flask, render_template, request, redirect, url_for, session
from settings import SECRET_KEY
from dbHandler import *

###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')

##session
app.secret_key = SECRET_KEY

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('index.loginFunc'))

@app.route('/health')
def health_check():
    return 'OK', 200

# This function ensures that certain routes can only be accessed by authenticated users
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'username' not in session:
            return redirect(url_for('index.loginFunc'))
        return f(*args, **kwargs)
    return decorated_function

##Pages
# #AddExpense
from pages.addExpense.addExpense import addExpense

app.register_blueprint(addExpense)

# Login
from pages.index.index import index

app.register_blueprint(index)

# mainMenu
from pages.mainMenu.mainMenu import mainMenu

app.register_blueprint(mainMenu)

# financeTips
from pages.financeTips.financeTips import financeTips

app.register_blueprint(financeTips)

# contactUs
from pages.contactUs.contactUs import contactUs

app.register_blueprint(contactUs)

# myAccount
from pages.myAccount.myAccount import myAccount

app.register_blueprint(myAccount)

# myExpenses
from pages.myExpenses.myExpenses import myExpenses

app.register_blueprint(myExpenses)

# signUp
from pages.signUp.signUp import signUp

app.register_blueprint(signUp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)