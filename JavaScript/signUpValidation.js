document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // Check if all fields are filled
            const firstName = document.getElementById("FirstNameTextBox").value.trim();
            const lastName = document.getElementById("LastNameTextBox").value.trim();
            const birthdate = document.getElementById("date").value.trim();
            const email = document.getElementById("EmailTextBox").value.trim();
            const password = document.getElementById("PasswordTextBox").value.trim();
            const gender = document.getElementById("gender-category").value.trim();

            if (firstName === '' || lastName === '' || birthdate === '' || email === '' || password === '' || gender === '' || gender=== 'Choose gender') {
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

            // Your age validation code here
            const today = new Date();
            const birthDate = new Date(birthdate);
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            if (age < 18) {
                alert("You must be at least 18 years old to sign up.");
            } else {
                // If age is 18 or older, all fields are filled, password is valid, and gender is selected, submit the form and redirect to index page
                signupForm.submit();
                window.location.href = "index.html"; // Redirect to index page
            }
        });
    } else {
        console.error("Element with ID 'signup-form' not found.");
    }
});
