function validarPassword() {
    const password = document.getElementById("password").value;
    const confirmarPassword = document.getElementById("confirmarPassword").value;
    const mensaje = document.getElementById("mensaje");

    if (password === confirmarPassword) {
        mensaje.style.color = "green";
        mensaje.innerHTML = "La contraseña es correcta";
    } else {
        mensaje.style.color = "red";
        mensaje.innerHTML = "Intenta de nuevo";
    }
}

function redireccionar() {
    window.location.href = "https://www.microsoft.com/es-mx/security/business/security-101/what-is-password-protection#:~:text=Las%20contrase%C3%B1as%20son%20la%20primera,m%C3%A1s%20protegida%20estar%C3%A1%20la%20informaci%C3%B3n.";
}

function cambiarestilo() {
    const texto = document.getElementById("textoHTML");
    texto.style.color = "blue";
    texto.style.fontFamily = "'Courier New', Courier, monospace";
    texto.style.fontWeight = "bold";
}


function estilonormal() {
    const texto = document.getElementById("textoHTML");
    texto.style.color = "";
    texto.style.fontFamily = "Arial, sans-serif";
    texto.style.fontWeight = "";
}
