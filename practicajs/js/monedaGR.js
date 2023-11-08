function lanzarmoneda(){
    let moneda = Math.floor((Math.random()*2)+1)
    console.log(`El resultado del lanzamiento fue ${moneda}`)
    return moneda
}

//se usa tmb para recargar
function nuevoSaldo(saldo,cambio){//el cambio puede ser positivo o negativo
    console.log(`El valor previo era ${saldo}`) 
    saldo = saldo + cambio   
    console.log(`El valor nuevo es ${saldo}`) 
    return saldo
}

function juegoMoneda(){
    let nombreCompleto = prompt("Ingrese su nombre completo")
    let valorRecargado = parseFloat(prompt(`Bienvenido/a ${nombreCompleto} porfavor ingrese el valor a recargar`))
    let saldo = 0
    saldo = nuevoSaldo(saldo,valorRecargado)
    let cambio = 0
    let whiler = true
    while(whiler){  
        let valorElegido = parseInt(prompt(`Ingrese 1 o 2 para cara o sello`))
        let valorReal = lanzarmoneda()
        let valorApostado = parseInt(prompt("Cuanto quieres apostar en porcentaje"))*saldo
        
        valorElegido == valorReal ? cambio = .5*valorApostado : cambio = -0.2*valorApostado
        saldo = nuevoSaldo(saldo,cambio)
        cambio > 0 ? alert(`Ganaste ${cambio} y tu nuevo saldo es ${saldo}`) : alert(`Perdiste ${cambio} y tu nuevo saldo es ${saldo}`)
        
        let deci = prompt("¿Quieres seguir jugando?")
        deci == "si" ? whiler = true : whiler=false
    }
}

juegoMoneda()