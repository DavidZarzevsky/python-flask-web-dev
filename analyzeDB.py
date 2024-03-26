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

def print_all_users():
    for user in users_collection.find():
        print(user)

def print_all_expenses():
    for expense in expenses_collection.find():
        print(expense)


print_all_users()
print('------------------')
print_all_expenses()
