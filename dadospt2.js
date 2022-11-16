//Manipulando String e Arrays
/*
Separando um texto que contem os espaços, em um array onde cada texto é uma posição de array
*/

let newPhrase = "Fala meus queridos e queridas"
console.log(newPhrase)
let phraseToArray = newPhrase.split(' ')
console.log(phraseToArray)

// Convertendo novamente o texto para string
//.join(" ") -> Permite que eu gere separações(-,_/'')

let phraseModify = phraseToArray.join(" ").toLowerCase()
console.log(phraseModify)

// Manipulando Strings e Arrays 
// Verificar se contém plavras ou letras

let stringInclude = "Vem ne mim Central IT!!"
console.log(stringInclude.includes("IT"))


//Objetos

let arrayInclide = [
    "PayLivre",
    "Veem",
    "ne mim",
    "Meu amor",
    {
        firstName: "Pay",
        lastName: "Livre"
    }

]
console.log(arrayInclide.includes("Meu amor"))//Ele não consegue aplicar dentro de um objeto, mas funciona normalmente dentro de array

//String startwith
console.log(stringInclude.startsWith("Ve"))
//String endsWith
console.log(stringInclude.endsWith("IT!"))

//Transformando um array em caractere
let wordToArray = "Quem esta gostando diz Hey!!"
console.log(Array.from(wordToArray))


