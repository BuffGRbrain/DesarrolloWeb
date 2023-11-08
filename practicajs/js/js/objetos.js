const animal={
    nombre:"Felix",
    tipo:"gato",
    edad:"4",
    comer(){
        console.log(`El ${this.tipo}, ${this.nombre} esta comiendo`)
    }
}

console.log(animal);
animal.comer();
//ELEMENT es para representar etiquetas en HTML por esto se les debe poner id y nombre
//NODE puede ser ELEMENT o un nodo de texto.

//querySelector sirve tambien para clases
//se pueden cambiar cosas de html y de css con el query}
