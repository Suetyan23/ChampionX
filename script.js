function login() {
    // Get user inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic check for demo (replace with actual authentication logic)
    if (username === "admin" && password === "1234") {
        // Redirect to home page after successful login
        window.location.href = "home.html";
        return false;  // Prevent form from submitting/reloading
    } else {
        // Show error message if login fails
        document.getElementById('error-message').textContent = "Invalid credentials!";
        return false;  // Prevent form from submitting/reloading
    }
}
