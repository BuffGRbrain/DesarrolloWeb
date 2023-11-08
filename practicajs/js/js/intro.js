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

//Tarea hacer una calculadora básica con módulo y solo se piden los números una vez

a = parseFloat(prompt("Digite el primero num: "))
b = parseFloat(prompt("Digite el segundo num: "))
ope = String(prompt("Ingrese la operación a realizar"))
prompt(`La operación seleccionada fue ${ope}`)
calculadora(a,b,ope)

function calculadora(a,b,ope){//Da un error de undefined en resultado y es pq no entra en ningun caso del switch
    let resultado;
    switch(ope){
        case ope == "+":
            resultado = a+b
        case ope == "-":
            resultado = a-b
        case ope == "*":
            resultado = a*b
        case ope == "/":
            resultado = a/b
        case ope == "%":
            resultado = a%b
    }
    console.log(`El resultado de la operación ${ope} de ${a} y ${b} es:  ${resultado}`)
}

function sumarDos(a,b){
    let resultado;
    
    resultado = a+b;
    console.log(`El resultado de la suma de ${a} y ${b} es:  ${resultado}`)
    console.info(`El resultado de la suma de ${a} y ${b} es:  ${resultado}`)
}

function restarDos(a,b){
    let resultado;
    
    resultado = a-b;
    console.log(`El resultado de la suma de ${a} y ${b} es:  ${resultado}`)
    console.info(`El resultado de la suma de ${a} y ${b} es:  ${resultado}`)
}

function multiplicarDos(a,b){
    let resultado;
    
    resultado = a*b;
    console.log(`El resultado de la suma de ${a} y ${b} es:  ${resultado}`)
    console.info(`El resultado de la suma de ${a} y ${b} es:  ${resultado}`)
}

function dividirDos(a,b){
    let resultado;
    
    resultado = a*b;
    console.log(`El resultado de la suma de ${a} y ${b} es:  ${resultado}`)
    console.info(`El resultado de la suma de ${a} y ${b} es:  ${resultado}`)
}

function moduloDos(a,b){
    let resultado;
    
    resultado = a%b;
    console.log(`El resultado de la suma de ${a} y ${b} es:  ${resultado}`)
    console.info(`El resultado de la suma de ${a} y ${b} es:  ${resultado}`)
}


