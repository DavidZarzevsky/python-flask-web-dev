from flask import Blueprint, render_template
from app import login_required

mainMenu = Blueprint(
    'mainMenu',
    __name__,
    static_folder='static',
    static_url_path='/mainMenu',
    template_folder='templates'
)

# Routes
@mainMenu.route('/mainMenu')
@login_required
def mainMenuFunc():
    return render_template('mainMenu.html')