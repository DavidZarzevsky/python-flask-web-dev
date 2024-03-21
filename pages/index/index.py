from flask import Blueprint, render_template,session, redirect, url_for, flash, request
from dbHandler import *

# about blueprint definition
index = Blueprint(
    'index',
    __name__,
    static_folder='static',
    static_url_path='/index',
    template_folder='templates'
)

@index.route('/', methods=['GET', 'POST'])
@index.route('/login', methods=['GET', 'POST'])
def loginFunc():
    session['page'] = 'login'
    if request.method == 'POST':
        provided_email = request.form.get('email').lower()
        password = request.form.get('password')
        if is_registered(provided_email):
            user = get_user_by_email(provided_email)
            if user['Password'] == password:
                session['email'] = user['Email']
                session['username'] = user['FirstName']
                session['currency'] = user['Currency']
                session['logged_in'] = True
                return redirect(url_for('mainMenu.mainMenuFunc'))
            else:
                msg = 'Incorrect email or password, Please try again'
                return render_template("index.html", msg=msg)
        else:
            msg = 'Incorrect email, Please try again'
            return render_template("index.html", msg=msg)

    return render_template("index.html", msg="")
