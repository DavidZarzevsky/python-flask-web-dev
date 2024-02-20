document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myAccountForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const firstName = document.getElementById("FirstNameTextBox").value.trim();
            const lastName = document.getElementById("LastNameTextBox").value.trim();
            const birthdate = document.getElementById("date").value.trim();
            const email = document.getElementById("EmailTextBox").value.trim();
            const currency = document.getElementById("currency-category").value.trim();
            const gender = document.getElementById("gender-category").value.trim();

            if (firstName === '' || lastName === '' || birthdate === '' || email === '' || currency === '' || currency === 'Choose currency'  || gender === '' || gender === 'Choose gender') {
                alert("Please fill out all fields.");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Age validation
            const today = new Date();
            const birthDate = new Date(birthdate);
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            if (age < 18) {
                alert("You must be at least 18 years old.");
                return;
            }

            // Form submission successful
            alert("Personal information has been saved.");
            form.submit();
            window.location.href = "mainMenu.html";
        });



    } else {
        console.error("Form element not found.");
    }
});
