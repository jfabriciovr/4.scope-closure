const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
};
fruits();
console.log(fruit); //error, la variable no es global

// Variables Let no se pueden volver a declarar pero si se pueden er
// Const no se pueden ni volver a declarar ni volver a asiognar 

const anotherFunction = () => {
    var x = 1;
    var x = 2; // volver a declarar "x" con var si es válido pero es buena práctica
    let y = 1;
   // let y = 2; // error, volver a declarar "y" con let no es válido
    y = 3; // asignarle otro valor a "y" si es válido
    console.log(x);
    console.log(y);

}
anotherFunction(); 
// 2
// 3

