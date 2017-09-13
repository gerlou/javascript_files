var password = document.getElementById("txtPassword");
var verifiedPassword = document.getElementById("txtPWVerified");

verifiedPassword.onblur = function() {
    if (verifiedPassword.value == password.value && verifiedPassword.value != "" && password.value != "") {
        alert("The passwords match!");
    }
    else {
        alert("A second try is needed. Please try again.");
        $(document).ready(function() {
            $("#txtPassword").focus();
        });
    }
}
