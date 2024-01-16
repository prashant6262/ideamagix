function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var message = document.getElementById("message").value;

    document.getElementById("fullNameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneNumberError").innerText = "";
    document.getElementById("messageError").innerText = "";

    if (fullName === "") {
        document.getElementById("fullNameError").innerText = "Please enter your full name.";
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        return false;
    }

    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
        document.getElementById("phoneNumberError").innerText = "Please enter a valid phone number.";
        return false;
    }

    if (message === "") {
        document.getElementById("messageError").innerText = "Please enter your message.";
        return false;
    }

    return true;
}


document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        fadeOutLoader();
    }
};

function fadeOutLoader() {
    var loader = document.getElementById("pageLoader");
    loader.style.opacity = 0;
    setTimeout(function () {
        loader.style.display = "none";
    }, 500);
}


