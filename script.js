document.addEventListener("DOMContentLoaded", function() {
    // Show the login form by default
    document.getElementById("login-container").classList.add("active");

    // Handle form submissions
    document.getElementById("login-form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Login successful!");
        // Here you can add your login logic
    });

    document.getElementById("signup-form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Signup successful!");
        // Here you can add your signup logic
    });
});

// Toggle between login and signup forms
function toggleForms() {
    document.getElementById("login-container").classList.toggle("active");
    document.getElementById("signup-container").classList.toggle("active");
}
