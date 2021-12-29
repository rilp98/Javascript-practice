const persona={
    nombre:'Paola',
    edad:22,
    apellido:'Rossi',
    clave:'Hola soy la clave'
}

//const { nombre,apellido }=persona;
//console.log(nombre, apellido);


const retornaPersona= ({clave,nombre,apellido,edad,rango='Capitan'})=>{

    //console.log(nombre,apellido,edad,rango);

    return{
        nombreClave:clave,
        anios:edad
    }
}

const {nombreClave,anios} = retornaPersona(persona);

 console.log(nombreClave,anios);