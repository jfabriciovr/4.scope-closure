
// Scope GLOBAL 
// variables disponibles en todo el programa
var hello = "hello";
let world = 'hello World';
const helloWorld = 'Hello World!';


const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);

}

anotherFunction();
//hello
//hello World
//Hello Wold!

// ****************************
// MALAS PRCTICAS
// ****************************

// Llamar a una variable que está dentro de una función de manera global
const helloWorld = () => {
    globalVar = 'im global' //variable dentro de la función
}

helloWorld();
console.log(globalVar); // no se considera buena práctica llamar a esta variable que está dentro de la función

// *******************
// DOBLE ASIGNACIÓN (MALA PRACTICA)

const anotherFunction = () => {
    var localVar = globalVar = 'Im Global'; // doble asignación
}
anotherFunction()
console.log(globalVar);
