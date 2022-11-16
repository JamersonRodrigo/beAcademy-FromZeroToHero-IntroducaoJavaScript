//Type Conversion
//Convertendo String para número e número para String

console.log(Number("9") + 24)
console.log(String(9) + ' Converteu diacho !!')

//Contar Caracteres
let oneWord = "Jamerson" //8 letras
console.log(oneWord.length)

//Maiúsculas e Minúsculas
let phrase = "Olha o bonde da PayLivre uaaaaaaaaaauuuuuu!"
console.log(phrase.toUpperCase())
console.log(phrase.toLowerCase())

//Convertendo para Inteiro
let decimalNumber = 32.8
console.log(parseInt(decimalNumber))
//Convertendo para Decimal
let intergerNumber = 24
console.log(parseFloat(intergerNumber))
//Trabalhando com casas decimais, números depois da vírgula
let niceNumber = 24.98883416589
console.log(niceNumber.toFixed(4))
console.log(niceNumber.toFixed(4).replace('.', ','))

//Precisão Numérica
let otherNumber = 129/32
console.log( Number(otherNumber.toPrecision()))


