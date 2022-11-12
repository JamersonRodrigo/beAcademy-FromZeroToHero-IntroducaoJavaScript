// Declarar 
//Objetos

const human = {
    name: "Jamerson Rodrigo",
    age: 22,
    weight: 76,
    isAthlete: true,
    walk: function walking(){
        console.log('Eu trabalho muito rs')
    }
} //Objeto

/*console.log(human)
console.log({human})
console.log(human.age)
console.log(human.walk())*/

//Concatenar  
console.log("O Humano " + human.name + " tem a idade de " + human.age + " anos!")


//Interpolação
console.log(`O Humano ${human.name} tem a idade de ${human.age} anos!`)


//*******Array******
const animals = [
    "Elefante",//0
    "Gato",//1
    "Leão",//2
    "Cachorro",//3
    {
        name: "Moacir",
        age: 2,
        weight: 4
    }
]
//Tamnho 5
console.log(animals[4].name)