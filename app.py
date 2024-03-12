from flask import Flask, redirect, url_for
from flask import render_template

###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')

# #AddExpense
from pages.addExpense.addExpense import addExpense
app.register_blueprint(addExpense)

#Login
from pages.index.index import index
app.register_blueprint(index)

#mainMenu
from pages.mainMenu.mainMenu import mainMenu
app.register_blueprint(mainMenu)

#financeTips
from pages.financeTips.financeTips import financeTips
app.register_blueprint(financeTips)

#contactUs
from pages.contactUs.contactUs import contactUs
app.register_blueprint(contactUs)

#myAccount
from pages.myAccount.myAccount import myAccount
app.register_blueprint(myAccount)

#myExpenses
from pages.myExpenses.myExpenses import myExpenses
app.register_blueprint(myExpenses)

#signUp
from pages.signUp.signUp import signUp
app.register_blueprint(signUp)


###### Pages
## Homepage
# from pages.index.index import index
#
# app.register_blueprint(index)
#
# ## About
# from pages.about.about import about
#
# app.register_blueprint(about)
#
# ## Profile
# from pages.profile.profile import profile
#
# app.register_blueprint(profile)
#
# ## Profile
# from pages.menu.menu import menu
#
# app.register_blueprint(menu)
#
# ## Catalog
# from pages.catalog.catalog import catalog
#
# app.register_blueprint(catalog)
#
# ## Page error handlers
# from pages.page_error_handlers.page_error_handlers import page_error_handlers
#
# app.register_blueprint(page_error_handlers)
#
# ###### Components
# ## Main menu
# from components.main_menu.main_menu import main_menu
#
# app.register_blueprint(main_menu)
