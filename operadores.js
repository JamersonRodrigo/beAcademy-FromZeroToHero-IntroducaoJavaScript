//Operadores Lógicos


//Operador Incremento e Decremento (++ , --)

let incrementNumber = 4
console.log(incrementNumber)
//+1
incrementNumber++//5
console.log(incrementNumber)
++incrementNumber//6 
console.log(incrementNumber)

let decrementNumber = 50
console.log(decrementNumber)
//+1
decrementNumber--//49
console.log(decrementNumber)
--decrementNumber//48 
console.log(decrementNumber)

//Operadores Aritméticos
// + - * / %
let note1 = 10
let note2 = 7.5
let note3 = 5.5
let note4 = 3.5
let avg = (note1 + note2 + note3+ note4)/4
console.log(Number(Math.floor(avg)))

//Operadores Relacionais e Igualdade
//< > == === != !== >= <=

let numberRelation1 = 20
let numberRelation2 = 40

let relation = numberRelation1 != numberRelation2 // != Diferente no valor
relation = numberRelation1 !== numberRelation2 // !== Diferente no valor ou no tipo(or)
relation = numberRelation1 == numberRelation2 // == Igual no valor
relation = numberRelation1 === numberRelation2 // === Igual no valor e no tipo(and)
console.log(relation)

//Operador de atribuição

let newNumber = 20
newNumber += 40
newNumber *= 3
newNumber -= 60
newNumber /= 6
newNumber %= 5

console.log(newNumber)

//Operadores condicionais(Ternário)
//(condition) ? true : false

let value = 24
let value2 = 32

const newCondition = value >= value2 ? "Isso é verdade" : value <=value2 ? "Isso é verdade, segunda resposta true" : "Resposta falsa para tudo!"
console.log(newCondition)