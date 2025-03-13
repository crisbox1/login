(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    
    function validarLogin() {
        var contraseña = document.getElementById("contraseña").value;
        if (contraseña === "estudiante") {
            window.location.href = "index.html"; // Redirigir a la página principal
        } else {
            alert("Contraseña incorrecta. Inténtalo de nuevo.");
        }
    }

})();