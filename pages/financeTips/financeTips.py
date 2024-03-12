from flask import Blueprint, render_template

financeTips = Blueprint(
    'financeTips',
    __name__,
    static_folder='static',
    static_url_path='/financeTips',
    template_folder='templates'
)

# Routes
@financeTips.route('/financeTips')
def finanaceTipsFunc():
    return render_template('financeTips.html')