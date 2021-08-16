// NUNCA debemos usar VAR en un loop
// en su lugar usar LET

const anotherFunction = () => {
    for (var i = 0; i < 10; i++){
        setTimeout(()=>{console.log(i);},1000);
    }
};
anotherFunction(); 
//10 10 10 10 10 10 10 10 10 10

const anotherFunction = () => {
    for (let i = 0; i < 10; i++){
        setTimeout(()=>{console.log(i);},1000);
    }
};
anotherFunction(); 
// 0 1 2 3 4 5 6 7 8 9

