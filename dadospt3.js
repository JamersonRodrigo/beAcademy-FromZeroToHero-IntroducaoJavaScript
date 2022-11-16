//Manipulando Arrays

const animals = ["galinha","cachorro", "elefante","girafa","leão"]
console.log(animals)

//Adicionar item no fim do Array
console.log(animals.push("rato"))
console.log(animals)
//Adicionar item no começo do Array
console.log(animals.unshift("porco"))
console.log(animals)
//Remover item do fim
console.log(animals.pop())
console.log(animals)
//Remover item do começo
console.log(animals.shift())
console.log(animals)
//Pegar somente alguns elementos do array
//Não modifica o array
console.log(animals.slice(0,3))
console.log(animals)
//Remover 1 ou mais itens do array
//console.log(animals.splice(1,3)) 
//Encontrar a posição do array
let index = animals.indexOf("cachorro")
console.log(index)
animals.splice(index, 1)
console.log(animals)