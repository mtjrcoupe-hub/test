document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (email === "admin@example.com" && password === "123456") {
        alert("تم تسجيل الدخول بنجاح!");
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "البريد الإلكتروني أو كلمة المرور غير صحيحة!";
    }
});
