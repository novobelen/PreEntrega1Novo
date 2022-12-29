// bienvenida
alert("Bienvenido a PotterMania!")

//-----------------------------------------------------
let repiteProcesoCompra,
    confirmaCompra

do {
    repiteProcesoCompra = false
    confirmaCompra = false

    // catalogo y seleccion
    const tomoValidoSeleccionado = mostrarCatalogo()

    // true | false
    confirmaCompra = confirm("¿Esta seguro de querer comprar este libro?")

    if (confirmaCompra) {
        const nombreTomo = recuperaNombre(tomoValidoSeleccionado)

        alert(`Felicidades por su compra! Usted ha adquido el Tomo ${tomoValidoSeleccionado}: ${nombreTomo}.`)
        repiteProcesoCompra = confirm("¿Desea comprar otro libro?")
    } else {
        alert("Gracias por elegirnos!")
        repiteProcesoCompra = false
    }

} while (confirmaCompra || repiteProcesoCompra);

function mostrarCatalogo() {
    let opcion = null
    let esValido = true
    do {

        if (!esValido) {
            alert("Opcion incorrecta")
        }

        opcion = prompt(
            "Ingrese el numero del libro que deseas comprar\n" +
            "1. Harry Potter y La piedra Filosofal\n" +
            "2. Harry Potter y La Cámara Secreta\n" +
            "3. Harry Potter y El Cáliz de Fuego\n" +
            "4. Harry Potter y La Orden del Fénix",
            "1"
        )

        esValido = recuperaNombre(opcion) ? true : false;

    } while (!esValido);

    return opcion;
}

function recuperaNombre(tomoSeleccionado) {
    switch (tomoSeleccionado) {
        case "1":
            return "Harry Potter y La piedra Filosofal"
        case "2":
            return "Harry Potter y La Cámara Secreta"
        case "3":
            return "Harry Potter y El Cáliz de Fuego"
        case "4":
            return "Harry Potter y La Orden del Fénix"
        default:
            return null
    }
}