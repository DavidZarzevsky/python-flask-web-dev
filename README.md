# x-budget

## Description
This project is a web application that allows users to manage their expenses. The application is built using HTML, CSS, JavaScript.

## Visit our website: [x-budget](http://david-adam-1317051721.us-east-2.elb.amazonaws.com/)!!!

## Technologies
* [Python](https://www.python.org/)
* [Flask](https://flask.palletsprojects.com/en/2.0.x/)
* [mongoDB](https://www.mongodb.com/)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Installation

### Clone the repository
```shell
git clone 'repository_url'
```

### Install dependencies
```shell
pip install -r requirements.txt
```

### edit the .env file
```shell
FLASK_ENV = development
DEBUG = TRUE
FLASK_RUN_HOST = your_host
FLASK_RUN_PORT = your_port

SECRET_KEY = your_secret_key

DB_URI = db_uri
```

### Run the application
```shell
flask run
```

## Usage
The application is a web application that allows users to manage their expenses. The application contains the following pages:

### **Login page**:
The login page is the first page the user will see when he enters the site. It contains two input fields, one for the email and one for the password. 
The user can also click on the "sing up" button to go to the registration page.



### **Registration page**:
The registration page contains input fields for the user's personal details, such as name, email, password, and more. 
The user can also click on the "login" button to go to the login page.

### **Main menu**:
The main menu is the first screen the user will see after logging in, it contains the following options:
* **Add expense**: The add expense screen.
* **My expenses**: see all the expenses of the user.
* **Finance tips**: A page with general tips for managing expenses.
* **Update personal information**: A page where the user can update his personal details.
* **Contact us**: A page with contact details for the site's support.


