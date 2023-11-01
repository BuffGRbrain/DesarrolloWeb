//Es isomorfico pq se puede ejecutar en las 3 capas de aplicación web. Front, Back y Base de datos que es la de persistencia.

//Js para correr en bakc necesita un motor como nodejs que permite usar express
//se pueden declara variables con nombres como $nombre, _nombre, nombre. Usa camelCase.

//console.log("como un print") Muestra el output en consola del navegador. 

//usar back comillas `` o no funciona la inclusión de variables.


// recordar usar === para identico y == para igual.
//console.info()
//console.warn() para que saque warning
//console.error() para que saque el mensaje como error
//console.clear() o Ctrl+r
//prompt para pedir input

function sumarDos(){
    let a,b, resultado;
    a = parseInt(prompt("Digite el primero num: "))
    b = parseInt(prompt("Difite el segundo num: "))
    resultado = a+b;
    console.log(`El resultado de la suma de ${a} y ${b} es:  ${resultado}`)
    console.info(`El resultado de la suma de ${a} y ${b} es:  ${resultado}`)
}




