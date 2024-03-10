from flask import render_template
from flask import Blueprint

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
def index():
    return render_template('index.html')
