//Throw and Try Catch
function myAge(myAge){
    if(!myAge){
        throw "Você precisa colocar a idade!"
    }
    console.log("Eu executei depois do erro!")
}
try{
    myAge(22)
    console.log("Já tratei o erro e deu certo!")
} catch(error){
    console.log(error)
}
console.log("Programa continua")