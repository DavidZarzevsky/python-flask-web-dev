from flask import Blueprint, render_template

signUp = Blueprint(
    'signUp',
    __name__,
    static_folder='static',
    static_url_path='/signUp',
    template_folder='templates'
)

# Routes
@signUp.route('/signUp')
def signUpFunc():
    return render_template('signUp.html')