

//SERVICIOS
//Eleccion del servicio: cafe, brunch o catering
//Cantidad de invitados, tiene que ser un numero mayor a 20 personas


//bienvenida

/* alert("Bienvenido a NONA café");
let opcion = prompt("¿Como te podemos ayudar? Comprar o Servicio?");
if (opcion === "Comprar") {
    let opcionCompra = prompt("¿Dulces, Salados o Shop?");
    if (opcionCompra === "Dulces") {

    } else if (opcionCompra === "Salados") {

    } else if (opcionCompra === "Shop") {

    } else {
        alert("Opcion mal ingresada, refresque el sitio e intente nuevamente. :(");
    }

} else if (opcion === "Servicio") {
    let opcionServicio = prompt("¿Cafe, Brunch o Catering?");
    if (opcionCompra === "Cafe") {

    } else if (opcionCompra === "Brunch") {

    } else if (opcionCompra === "Catering") {

    } else {
        alert("Opcion mal ingresada, refresque el sitio e intente nuevamente. :(");
    }

} else {
    alert("Opcion mal ingresada, refresque el sitio e intente nuevamente. :(");
} */

//SELECCION

const productos = document.querySelector(".elementos");

//CARGAR ELEMENTOS

function cargarElementos() {
    elementos.forEach((elemento) => {
        productos.innerHTML += `
        <div class="col-6 elemento">
                    <div class="card justify-content-center">
                        <a href="./producto.html">
                            <img src="../assets/img/carrot.PNG" alt="" class="card-img-top">
                            <div class="card-body text-center">
                                <h5 class="card-title">Carrot Cake</h5>
                                <p class="card-text">Torta de 8 porciones.</p>
                            </div>
                        </a>
                    </div>
                </div>
        `;
    });
}
cargarElementos();