document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.getElementById("login-form");
    if (signInForm) {
        signInForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (email === '' || password === '') {
                alert("Please fill out all fields.");
                return;
            }

            if (password.length < 8) {
                alert("Password is too short.");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }
            signInForm.submit();

            // const foundUser = window.dbUsers.users.get(email, password);
            //
            // if (!foundUser) {
            //     alert("Username or password are incorrect, to create a new user go to the register page.");
            //     return;
            // }
            // window.location.href = 'mainMenu'
        });
    } else {
        console.error("Element 'signin-form' not found.");
    }
});