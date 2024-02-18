
document.addEventListener("DOMContentLoaded", function() {
    const signInForm = document.getElementById("login-form");
    if (signInForm) {
        signInForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // Check if all fields are filled
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (email === '' || password === '') {
                alert("Please fill out all fields.");
                return;
            }

            // Check if password is at least 8 characters long
            if (password.length < 8) {
                alert("Password must be at least 8 characters long.");
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }
            // signInForm.submit();
            window.location.href = "mainMenu.html";
        });
    } else {
        console.error("Element with ID 'signin-form' not found.");
    }
});