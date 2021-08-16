// HOISTING significa elevar
// El levantamiento de las declaraciones

// ******************************+
// CASO 1
// *******************************
a = 2;
var a;
console.log (a); // 2
//el hoisting eleva la declaración de var a
// al inicio del código
// es como si hubiéramos escrito
// var a; 
// a=2;
// console.log (a);

// ******************************+
// CASO 2
// *******************************
console.log(a);
var a = 2;
// undefined
// JavaScript usa el hoisting en las declaraciones
// y no en las inicializaciones

// ******************************+
// CASO 3
// *******************************
nameOfDog('Elmo'); // Elmo


function nameOfDog(name){
    console.log(name);
}

//JavaScript primero guarda en memora la
//definición de las funciones 
// es por eso que aunque estamos llamado 
// a la función antes de ser definida
// SI se ejecute
