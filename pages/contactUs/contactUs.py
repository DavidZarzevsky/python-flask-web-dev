from flask import Blueprint, render_template

from app import login_required

contactUs = Blueprint(
    'contactUs',
    __name__,
    static_folder='static',
    static_url_path='/contactUs',
    template_folder='templates'
)

# Routes
@contactUs.route('/contactUs')
@login_required
def contactUsFunc():
    return render_template('contactUs.html')