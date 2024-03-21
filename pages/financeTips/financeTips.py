from flask import Blueprint, render_template

from app import login_required

financeTips = Blueprint(
    'financeTips',
    __name__,
    static_folder='static',
    static_url_path='/financeTips',
    template_folder='templates'
)

# Routes
@financeTips.route('/financeTips')
@login_required
def finanaceTipsFunc():
    return render_template('financeTips.html')