const form = document.getElementById("login");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError"); 
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", loginsubmit);

function loginsubmit(e) {
    e.preventDefault();

    const email = emailInput.value.trim(); 
    const password = passwordInput.value.trim();

    // Clearing previous errors
    emailError.textContent = "";
    passwordError.textContent = "";

    let throw_error = true;

    // Email validation
    if (email === "") {
        emailError.textContent = "Email is required";
        throw_error = false;
    } 

    // Password validation
    if (password === "") {
        passwordError.textContent = "Password is required";
        throw_error = false;
    } else if (password.length < 6 || password.length > 32) { 
        passwordError.textContent = "Password must be 6 to 32 characters";
        throw_error = false;
    }

    if (throw_error) {
        const storedUserData = localStorage.getItem("user");
        if (storedUserData) {
            const userObj = JSON.parse(storedUserData);

            
            if (userObj.email === email && userObj.password === password) {
                alert("Login successful!");
                window.location.href = "index.html"; 
            } else {
                alert("Incorrect email or password.");
            }
        } else {
            alert("User does not exist. Please register first.");
            window.location.href = "registration.html"; 
        }
    }
}
