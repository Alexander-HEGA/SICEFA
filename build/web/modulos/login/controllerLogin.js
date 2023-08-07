
export function mostrarMensaje() {
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    )
}

export function validarLoginSucursal() {
    let user = document.getElementById("txtUser").value;
    let password = document.getElementById("txtPassword").value;

    if (user !== "empleado123") {
        Swal.fire({
            icon: 'error',
            title: 'Usuario incorrecto',
            text: 'Ingresa nuevamente el usuario',
        })
        document.getElementById('txtUser').required = "required";
    } else if (password !== "password") {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña incorrecta',
            text: 'Ingresa nuevamente la contraseña',
        })
        document.getElementById('txtPassword').required = "required";
    } else {
        window.location.href = 'modulos/main.html';
    }

}

export function cargarLoginSucursal() {
    fetch("modulos/login/loginsucursal.html").then(
        function (response) {
            return response.text();
        }
    ).then(
        function (html) {
            document.getElementById("contenedorPrincipal2").innerHTML = html;
            import("controllerLogin.js").then(
                function (controller) {
                    moduloLoginsucursal = controller;
                }
            );
        }
    );
}

export function validarLoginCentral() {
    let user = document.getElementById("txtUserCentral").value;
    let password = document.getElementById("txtPasswordCentral").value;

    if (user !== "admin") {
        Swal.fire({
            icon: 'error',
            title: 'Usuario incorrecto',
            text: 'Ingresa nuevamente el usuario',
        })
        document.getElementById('txtUser').required = "required";
    } else if (password !== "root") {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña incorrecta',
            text: 'Ingresa nuevamente la contraseña',
        })
        document.getElementById('txtPassword').required = "required";
    } else {
        window.location.href = 'modulos/main.html';
    }


}


export function ocultar_login_central() {
    // Ocultar el div con id "loginCentral"
    document.getElementById("loginCentral").style.display = 'none';

    // Mostrar el div con id "loginSucursal"
    document.getElementById("loginSucursal").style.display = 'block'; // O 'inline' si es un div inline
}

export function mostrar_login_central() {
    // Mostrar el div con id "loginCentral"
    document.getElementById("loginCentral").style.display = 'block'; // O 'inline' si es un div inline
    
    // Ocultar el div con id "loginSucursal"
    document.getElementById("loginSucursal").style.display = 'none';
}


