// Variables privadas

const person = () => {
    var saveName = "Name"; //variable privada
    return { //retorno de un objeto con métodos
        //métodos:
        getName: () => {return saveName;},
        setName: (name) => {saveName = name;},
    }

}
const newPerson = person();
console.log(newPerson.getName());//Name
newPerson.setName('Oscar');
console.log(newPerson.getName()); //Oscar
newPerson.setName('fab');
console.log(newPerson.getName()); //fab

console.log(person.saveName); 
//undefined porque la variable saveName
//no la alcanzamos en un scope global