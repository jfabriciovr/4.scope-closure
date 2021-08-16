// CLOSURE
// FUNCIONES que regresan FUNCIONES

// la mejor definición:
// Closure: Es una función o un objeto con funciones
// que recuerda el estado de las variables al momento
// de ser invocada, y conserva este estado a través
// de reiteradas ejecuciones.

// definición de platzi:
// Es la combinación de una función y el ámbito léxico
// en la cual ha sido declarada dicha función
// en otras palabras, un closure recuerda el ámbito
// en el que fue creado.

// *****************************************
// ALCANCÍA versión 1 sin closures
// ******************************************

// ejemplo SIN el uso de closures:
const moneyBox = (coins) => {
    var saveCoins = 0; 
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}
moneyBox(5);
moneyBox(10);
// $5
// $10 por lo que no guarda en memoria el valor anterior

// *****************************************
// ALCANCÍA versión 2 con closures
// ******************************************
//USANDO CLOSURES:
// ejemplo donde si va acumulando los valores
const moneyBox = () => {
    var saveCoins = 0;
    
    // FUNCION INTERNA 
    
    const countCoins = (coins) => { 
        // el valor de saveCoins se conserva incluso
        // al finalizar la función
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
        // en JavaScript, el alcance de una variable se define
        // por su UBICACION dentro del código fuente y las
        // funciones anidaddas (INTERNAS) tienen acceso a las 
        // variables declaradas en alcance EXTERNO.
    } 
    return countCoins; // retorna la función interna
};
let myMoneyBox = moneyBox(); //
// let myMoneyBox es una variable que ES UNA FUNCION
// porque RECIBE UNA FUNCION de moneyBox()
// es un tipo especial de objeto
// que combina dos cosas: una función y el ámbito en 
// el que se crea es función.
myMoneyBox(4); // 4
myMoneyBox(6); // 4+6 = 10
myMoneyBox(10); //10+10 = 20

// *****************************************
// ALCANCÍA versión 3 más resumida
// ******************************************
const moneyBox = () =>{
    var saveCoins = 0;
    //directamente en el return escribimos una
    // función anónima:
    return (coins) => { // la forma tradicional sería return function(coins){} 
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
};
let myMoneyBox = moneyBox();
myMoneyBox(4); // 4
myMoneyBox(6); // 4+6 = 10
myMoneyBox(10); //10+10 = 20

// ***********************************
// EJEMPLO 2. Color printer
// ***********************************
const makeColorPrinter = (color) => {
    let colorMessage = `The color is ${color}`;
    return () =>{console.log(colorMessage)}
}
let greenColorPrinter = makeColorPrinter('green');
greenColorPrinter(); // the color is green

// ************************************
// EJEMPLO 3. Usando variables privadas
// y RETORNANDO UN OBJETO con sus propias funciones
// ************************************
function makeCounter(n){
    let count = n; // esta variable es privada
    return {
        increase: function(inc){count+=inc;},
        getCount: function(){return count}
    }
}
let counter = makeCounter(7);

console.log(counter.count); 
// undfined, la variable "count" no está en el scope global

counter.increase(5); // 12
counter.increase(5); // 17
console.log('The count is: ', counter.getCount());
// The cound is: 17

