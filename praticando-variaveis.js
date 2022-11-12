//1. Declare uma variável de nome person

var person

//.2 Que tipo de dado é a variável acima? 

console.log(typeof person)
//O tipo de dado acima é udenfined

/*var person = 24
console.log(typeof person)
Esse exemplo mostra uma forma de descobrir o tipo de variável declarada!
*/

//3. Declare uma varável e atribua valores para cada um dos dados:

var person = {
    name: "Jamerson",//string
    age: 22,// Integer
    weight: 76.5,// Float
    isAdmin: false,//Boolean
    isAMan: true//boolean
}
console.log(person)

/*4. A variável human abaixo é de que tipo de dados?
//A variável human é um object
//4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
//4.2 Mostre no console a seguinte mensagem:
O humano <name> tem o peso de <weight> kg.
*/

let human = { 
    name: "Jamerson",//string
    age: 22,// Integer
    weight: 76.5,// Float
    isAdmin: false,//Boolean
    isAMan: true//boolea
}

console.log(`O humano${human.name} temm o peso de ${human.weight} kg.`)

//5. Declare uma variável do tipo Array, de nome humans e atribua a ela nenhum valor, ou seja, somente a Array vazio.

//6. Atribua o objeto human sem copiar dentro da array humans.
let humans = [human]
console.log(humans)

//7. Coloque no console o valor da posição zero do Array acima

console.log(humans[0].name)

//8.Crie um novo objeto human e coloque na posição 1 do array humans.

let newHuman = { 
    name: "Rodrigo",//string
    age: 22,// Integer
    weight: 76.5,// Float
    isAdmin: true,//Boolean
    isAMan: true//boolea
}
humans = [
    human,
    newHuman
]
console.log(humans[1])

//OS resultados da saída abaixo é:
//a)
console.log(a)
var a = 1 //undefined

//b)

let b 
console.log(b)
{
    let b = 2
    console.log(b)
}
console.log(b)//undefined, 2 ,undefined

//c)
console.log(c)
{
    let c = 3
    console.log(c)
}
console.log(c) // todos serão undefined 

//d)
const d = 10
{
    console.log(d)
    const d = 20
    console.log(d)
} // undefined pois const não se muda o valor