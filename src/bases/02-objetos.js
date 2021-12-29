
const persona={
    nombre:"Paola",
    apellido:"Rossi",
    direccion:{
        ciudad:"Barquisimeto",
        zip:2155,
    }
}

// muestra el objeto en forma de tabla
console.table(persona);


// se esta copiando el objeto persona y se esta asignando un nuevo valor
const persona2={...persona};

persona2.nombre="Anttonela";

console.log(persona2);

const items={
    item1:{nombre:"Paola",apellido:"Rossi",edad:22},
    item2:{nombre:"Anttonela", apellido:"Querales",edad:21}
}

console.log(items.item1.nombre, items.item2.apellido);