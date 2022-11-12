

// Declarar VAR, LET e CONST

/*let name = "Luan"
console.log(name)
name = 32
console.log(name)
name = "Monteiro"
console.log(name)
*/ 
// A váriavel let é dinâmica, podendo assim receber mudanças de valores



/*const name = "Luan"
console.log(name)
name = "Monteiro"*/

// A váriavel const, não recebe mudanças de valores



//******Globais******//
//Hoisting -> Var 


/*console.log('Variável name existe aqui?', name)
{//Scopo (Bloco de código)
    //Local
    var name = "Luan"
}
console.log('Variável name existe aqui?', name)*/


//****Locais****//

let name = "Jamerson"
console.log('Meu nome chegou aqui?', name)
{//Scopo (Bloco de código)
    //Local
    let name = "Jenifer"
    console.log('Meu nome chegou aqui?', name)
}
console.log('Meu nome chegou aqui?', name)

