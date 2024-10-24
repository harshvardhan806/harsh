document.getElementById('switch-to-register').onclick = function() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
};

document.getElementById('switch-to-login').onclick = function() {
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
};

document.getElementById('login-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here, you can add logic to validate the login credentials
    // If the login is successful, redirect to the home page
    window.location.href = 'home.html'; // Change 'home.html' to your actual home page
};

// Optionally, handle registration form submission (if needed)
document.getElementById('register-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here, you can add logic to handle registration (e.g., validation, sending data to a server)
    // For now, let's just log a message (or you can redirect after registration if needed)
    console.log('Registration form submitted');
    // You might want to redirect to a different page or stay on the same page after registration
};
