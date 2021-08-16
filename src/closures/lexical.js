
// Ambito Léxico
// es las funciones que se ejecutan
// utilizando la cadena del alcance
// donde estaba vigente en su momento

const buildCount = (i) => {
    let count = i;
    const displayCount = () =>{ //función closure
        console.log(count++) // primero lo imprime y luego le aumenta una unidad
    };
    return displayCount;
};
const myCount = buildCount(1);
myCount(); //1
myCount(); //2
myCount(); //3

const myOtherCount = buildCount(10);
myOtherCount(); //10
myOtherCount(); //11