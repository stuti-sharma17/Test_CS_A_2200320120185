  function validate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") { 
        window.location.href = "C:\Users\Lenovo\OneDrive\Desktop\FSD_Test\convertor.html";
    } else {
        alert("Invalid username or password.");
        event.preventDefault();
    }
};
