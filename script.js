document.getElementById("loginForm").addEventListener("submit", function(event) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "user" && password === "password") { // Example credentials
        window.location.href = "currency-converter.html"; // Redirect to the currency converter
    } else {
        alert("Invalid username or password.");
        event.preventDefault();
    }
});
