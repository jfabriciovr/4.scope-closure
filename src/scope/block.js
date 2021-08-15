//*************************** 
// Block scope
// ***************************

const fruits = () => {
   if (true) {
       var fruits1 = 'apple'; //global
       let fruits2 = 'banana'; //local
       const fruits3 = 'kiwi'; //local
   } 
   console.log(fruits1);
   //console.log(fruits2); // error not defined
   console.log(fruits3); // error not defined
}
fruits();

// *********

let x =1; // global
{
    let x = 2; // local esta "x" se considera una variable distinta a la global x
    console.log(x); // 2
}
console.log(x); // 1

// ************

var x = 1;
{
    var x = 2; // se considera una re-declaración de la primer variable x global
    console.log(x); // 2
}
console.log(x); // 2

// *************
// usando VAR en el for

const anotherFunction = () => {
    for (var i = 0; i < 10; i++){
        console.log(i); // 0 1 2 3 4 5 6 7 8 9
        setTimeout(() => {console.log(i);}, 1000)
    }
};
anotherFunction(); // 10 10 10 10 10 10 10 10 10 10

// usando LET ne el for
const anotherFunction = () => {
    for (let i = 0; i < 10; i++){
        console.log(i); // 0 1 2 3 4 5 6 7 8 9
        setTimeout(() => console.log(i), 1000)
    }
};
anotherFunction(); // 0 1 2 3 4 5 6 7 8 9

// EJEMPLO Anterior pero sin arrow functions
// *****************************
function anotherFunction () {
    for(var i = 0; i < 10; i++){
        console.log(i);
        setTimeout(function(){console.log(i);},1000);
    }
}
anotherFunction();


