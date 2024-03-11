from flask import Blueprint, render_template


# about blueprint definition
index = Blueprint(
    'index',
    __name__,
    static_folder='static',
    static_url_path='/index',
    template_folder='templates'
)

# Routes
@index.route('/')
@index.route('/login')
def indexFunc():
    return render_template('index.html')
