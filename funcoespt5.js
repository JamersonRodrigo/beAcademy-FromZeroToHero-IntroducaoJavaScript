//**********Hoisting********
digaMinhaIdade()


//Funciona
function digaMinhaIdade(){
    return console.log(30)
}


//Não funciona
// const digaMinhaIdade = function(){
//     return console.log(30)
// }


//*******Callback *******
            //function
// function minhaFuncao(callback){
//     console.log('Inicio da minha função =)')

//     callback(15,15)

//     console.log('Final da minha função')
// }

// minhaFuncao(
//     (num1,num2)=>{
//         return console.log(num1 + num2)
//     }
// )


//*********Function Construct*********

function Sum(num1,num2){
    this.num1 = num1,
    this.num2 = num2,
    this.calc = function(num1,num2){
        return total = num1 + num2
    }
}

const math = new Sum()
console.log(math.calc(20,40))


//
const data = new Date().getDate();
console.log(data)

// const math = new Sum()
// //console.log(math)
// console.log(math.calc(32,32))

// const math2 = new Sum()
// console.log(math2.calc(50,64))

// const math = new Sum()
// const num1 = math.num1=24
// const num2 = math.num2=50


// console.log(num1)
// console.log(num2)
// console.log(math.calc(num1,num2))

// const math2 = new Sum()
// const number1 = math.num1 = 30
// const number2 = math.num2 = 10
// console.log(math2.calc(number1,number2))


// const math = new Sum().calc(45,45)

// console.log(math)