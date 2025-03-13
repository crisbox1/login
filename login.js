document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que la página se recargue

        const usuario = document.getElementById("usuario").value;
        const password = document.getElementById("password").value;

        // Usuarios permitidos
        if ((usuario === "admin" && password === "admin") ||
            (usuario === "estudiante" && password === "estudiante")) {
            
            localStorage.setItem("isLoggedIn", "true"); // Guarda la sesión
            window.location.href = "login.html"; // Redirige a productos
            
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
});
