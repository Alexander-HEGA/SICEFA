let moduloClientes;
let moduloEmpleados;
let moduloProductos;
let moduloPedidos;
let moduloVentas;

console.log("Hola desde Controller Main")

function cargarModuloClientes(){
    fetch("clientes/viewClientes.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modulos/clientes/controllerClientes.js").then(
                            function(controller){
                                moduloClientes = controller;
                            }
                            );
                }
            );
}