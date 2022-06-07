//SERVICIOS
//Eleccion del servicio: cafe, brunch o catering
//Eleccion del lugar del servicio: NONA o a domicilio
//Cantidad de invitados, tiene que ser un numero mayor a 20 personas

//variables servicio;
const cafe = "cafe";
const brunch = "brunch";
const catering = "catering";

//bienvenida
/* alert("Bienvenido al cotizador de presupuesto de servicios");
let servicio = prompt("Ingrese el tipo de servicio que desea cotizar, elige y esciba textualmente su opcion deseada: cafe, brunch o catering");
if (servicio === "cafe" || servicio === "brunch" || servicio === "catering") {
    let comensales = prompt("Ingrese el numero de comensales para el servicio solicitado: ");
    if (parseFloat(comensales) >= 20) {
        switch (servicio) {
            case "cafe":
                costoServicio(parseFloat(comensales));
                alert("El costo del servicio solicitado teniendo en cuenta la cantidad de comensales es: " + parseFloat(costoServicio));
            case "brunch":
                costoServicio(parseFloat(comensales));
                alert("El costo del servicio solicitado teniendo en cuenta la cantidad de comensales es: " + parseFloat(costoServicio));
            case "catering":
                costoServicio(parseFloat(comensales));
                let tiempos = prompt("¿Cuantos tiempos quisiera incluir en el servicio de catering?: 3 o 4 tiempos. Nota: escriba solamente el numero de tiempos.");
                if (tiempos === "3" || tiempos === "4") {
                    switch (tiempos) {
                        case "3":
                            costoTresTiempos(parseFloat(tiempos));
                            alert("El costo del servicio solicitado teniendo en cuenta la cantidad de comensales y tiempos es: " + parseFloat(costoTresTiempos));
                        break;
                            case "4":
                            costoCuatroTiempos(parseFloat(tiempos));
                            alert("El costo del servicio solicitado teniendo en cuenta la cantidad de comensales y tiempos es: " + parseFloat(costoCuatroTiempos));
                    }
                } else {
                    alert("Tiempos mal ingresado.");
                }
        }
    } else {
        alert("Los servicios son a partir de 20 comensales. Para mas informacion puedes contactarte directamente con nosotros.");
    }
} else {
    alert("Serivicio mal ingresado.");
} */


alert("Bienvenido al cotizador de presupuesto de servicios");
let servicio = prompt("Ingrese el tipo de servicio que desea cotizar, elige y esciba textualmente su opcion deseada: cafe, brunch o catering");
if (servicio === "cafe" || servicio === "brunch" || servicio === "catering") {
    let comensales = prompt("Ingrese el numero de comensales para el servicio solicitado: ");
    while (parseFloat(comensales) >= 20) {
        switch (servicio) {
            case "cafe":
                costoServicio(parseFloat(comensales));
                alert("El costo del servicio solicitado teniendo en cuenta la cantidad de comensales es: " + parseFloat(costoServicio));
            case "brunch":
                costoServicio(parseFloat(comensales));
                alert("El costo del servicio solicitado teniendo en cuenta la cantidad de comensales es: " + parseFloat(costoServicio));
            case "catering":
                costoServicio(parseFloat(comensales));
                let tiempos = prompt("¿Cuantos tiempos quisiera incluir en el servicio de catering?: 3 o 4 tiempos. Nota: escriba solamente el numero de tiempos.");
                if (tiempos === "3" || tiempos === "4") {
                    switch (tiempos) {
                        case "3":
                            costoTresTiempos(parseFloat(tiempos));
                            alert("El costo del servicio solicitado teniendo en cuenta la cantidad de comensales y tiempos es: " + parseFloat(costoTresTiempos));
                            break;
                        case "4":
                            costoCuatroTiempos(parseFloat(tiempos));
                            alert("El costo del servicio solicitado teniendo en cuenta la cantidad de comensales y tiempos es: " + parseFloat(costoCuatroTiempos));
                    }
                } else {
                    alert("Tiempos mal ingresado.");
                }
        }
    } 
    alert("Los servicios son a partir de 20 comensales. Para mas informacion puedes contactarte directamente con nosotros.");
} else {
    alert("Serivicio mal ingresado.");
}

//funcion para calcular el costo del servicio segun cant. de comensales
function costoServicio(comensales) {
    costoServicio = parseFloat(comensales) * 2500;
    return costoServicio;
}

//funciones para calcular el costo del servicio segun cant. de comensales y tiempos
function costoTresTiempos(tiempos) {
    costoTresTiempos = costoServicio * 1.15;
    return costoTresTiempos;
}
function costoCuatroTiempos(tiempos) {
    costoCuatroTiempos = costoServicio * 1.25;
    return costoCuatroTiempos;
}