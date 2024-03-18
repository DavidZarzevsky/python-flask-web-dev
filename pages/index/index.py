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
        email = request.form.get('email')
        password = request.form.get('password')
        if is_registered(email):
            user = get_user_by_email(email)
            if user['Password'] == password:
                session['email'] = email
                session['usersname'] = user['FirstName']
                session['logged_in'] = True
                return redirect(url_for('mainMenu.mainMenuFunc'))
            else:
                msg = 'Incorrect password, Please try again'
                return render_template("index.html", msg=msg)
        else:
            msg = 'Incorrect email, Please try again'
            return render_template("index.html",msg=msg)

    return render_template("index.html",msg="")