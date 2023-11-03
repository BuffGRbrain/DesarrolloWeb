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
    while(1 === 1){  
        let valorElegido = parseInt(prompt(`Ingrese 1 o 2 para cara o sello`))
        let valorReal = lanzarmoneda()
        valorElegido == valorReal ? cambio = .5*valorRecargado : cambio = -0.2*valorRecargado
        saldo = nuevoSaldo(saldo,cambio)
        cambio > 0 ? alert(`Ganaste ${cambio} y tu nuevo saldo es ${saldo}`) : alert(`Perdiste ${cambio} y tu nuevo saldo es ${saldo}`)
    }
}

juegoMoneda()