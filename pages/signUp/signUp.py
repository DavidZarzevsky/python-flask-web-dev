from flask import Blueprint, render_template, session, redirect, url_for, request
from dbHandler import *

signUp = Blueprint(
    'signUp',
    __name__,
    static_folder='static',
    static_url_path='/signUp',
    template_folder='templates'
)

@signUp.route('/signUp', methods=['GET', 'POST'])
def signUpFunc():
    session['pagen'] = 'register'
    if request.method == 'POST':
        first_name = request.form.get('FirstName')
        last_name = request.form.get('LastName')
        gender = request.form.get('gender-category')
        currency = request.form.get('currency-category')
        birthdate = request.form.get('date')
        email = request.form.get('Email')
        password = request.form.get('Password')
        if not is_registered(email):
            create_user(email, password, first_name, last_name, birthdate, currency, gender)
            return redirect(url_for('index.loginFunc'))
        else:
            message = "This email is already registered!"
            return render_template('signUp.html', msg=message)
    return render_template('signUp.html', msg='')

