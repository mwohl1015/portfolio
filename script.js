document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the form from reloading

        // Get form values
        let firstName = document.getElementById("firstName").value.trim();
        let lastName = document.getElementById("lastName").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        // Validation: Ensure all fields are filled
        if (firstName === "" || lastName === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Show confirmation message
        document.getElementById("confirmationMessage").style.display = "block";

        // Clear form fields
        document.getElementById("contactForm").reset();
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-scroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.2
    });

    fadeElements.forEach(el => observer.observe(el));
});
