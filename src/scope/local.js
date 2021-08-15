

const helloWorld = () => {
    const hello = "Hello World";
    console.log(hello);
}

helloWorld();
//el resultado es "Hello World"

//pero en la siguieten linea, se llama de manera global y no está accesible
console.log(hello); //error: hello is no defined

// ***************************
// Ámbito Léxico

var scope = "i am global";

const functionScope = () => {
    var scope = "i am just a local"; //este scope se considera una variable diferente a la scope global
    const func = () =>{
        return scope
    } 
    console.log(func());
};
functionScope(); // "i am just local"
console.log(scope); //"i am global"

