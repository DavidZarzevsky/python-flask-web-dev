from datetime import datetime
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from settings import DB_URI

# get the uri from .env file
uri = DB_URI

# create client
client = MongoClient(uri, server_api=ServerApi('1'), tlsInsecure=True)

# Connections
db = client['Xbudget']
users_collection = db['users']
expenses_collection = db['expenses']

# create user
def create_user(email, password, firstName, lastName, dateOfBirth, currency, gender):
    email = email.lower()
    user = {
        'Email': email,
        'Password': password,
        'FirstName': firstName,
        'LastName': lastName,
        'DateOfBirth': dateOfBirth,
        'Currency': currency,
        'Gender': gender,
        'CreatedAt': datetime.now()
    }
    users_collection.insert_one(user)

# get user by email
def get_user_by_email(email):
    user = users_collection.find_one({'Email': email})
    return user

# check if user is registered
def is_registered(email):
    user = users_collection.find_one({'Email': email})
    if user:
        return True
    else:
        return False

# add expense
def add_expense(email, category, amount):
    expense = {
        'Email': email,
        'Category': category,
        'Amount': amount,
        'CreatedAt': datetime.now()
    }
    expenses_collection.insert_one(expense)

# get expenses
def get_expenses(email):
    expenses = expenses_collection.find({'Email': email})
    return expenses
