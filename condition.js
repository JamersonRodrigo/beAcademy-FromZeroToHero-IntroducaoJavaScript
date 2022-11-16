//IF and ELSE
//Se e Senão

//< > == === != !==
/*let num = 10 
if(num > 5){
    console.log('Sou maior que 5')
}else{
    console.log('Não sou maior que 5')
}*/


let num = 10 
let num2 = 20
let isAdmin = true

//&& (AND)(OR)(NOT)


if(num <= 10){
    console.log('Sou Menor')
}else if(num < 10 && num2 == 20){
    console.log('Segunda resposta verdade')
}else{
    console.log("Resposta falsa")
}

//SWITCH

let myExpression = 'd'
switch (myExpression) {
    case 'a':
    console.log('Apertou o A')
        break
    case 'b':
        console.log('Apertou o B')
        break
    case 'c' :
        console.log('Apertou o C')
        break
   
    default:
        console.log("Você apertou outra tecla", myExpression)
        break
}

//Calculadora

function calc(num1, operador, num2){
    let result

    switch (operador) {
        case "+":
            result = num1
            + num2
            break;
        case "-":
            result = num1
            - num2
            break;
        case "*":
            result = num1
            * num2
            break;
        case "/":
            result = num1
            / num2
            break;        
        default: console.log('Operador INVÁLIDO!!!')
            break;
    }
    return result
}
console.log(calc(12,'%',12))

