// Definición de instancias de cada módulo
let moduloLogin;
let moduloLoginsucursal;

function cargarLogin(){
    fetch("modulos/login/login.html").then(
                function (response){
                    return response.text();
                }
            ).then(
                function (html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import("../modulos/login/controllerLogin.js").then(
                                function(controller){
                                    moduloLogin = controller;
                                }
                            );
                }
            );
}

