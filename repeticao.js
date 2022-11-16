//For

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
//  }


//  for (let i = 1; i <= 10; i++) {
//      if(i === 5)
//      //break;
//      continue
//      console.log(i)
//  }


 //********While(Enquanto)*******
//   let interator = 1
//   while(interator <= 20){
//      console.log(interator)
//      //Incremento
//      interator++
//   }
 


//*******For Of*******
//Array

  let number = ['Maria', 'Pedro', 'João', 'Jenifer','Luan']
  //num = number(FOR OF)
  //For Of( Valores do Array)
  for(num of number){
     
     console.log(num)
  }


 
//********For In********
//   let animals = {
//      name:'Leão',
//      weight: 200,
//      age: 4
//   }
//   for(item in animals){
//      //Tipo 1 para capturar valores de objetos em um For in
//      console.log(animals["name"])
//      //Tipo 2 para capturar todo objeto
//      console.log(animals)
//      //Tipo 3 mostra os valores dentro das propriedades
//      console.log(aniamls[item])
//      //Tipo4 capturar valores individuais das propriedades de um objeto
//      console.log(animals.name)
//   }


  let arrayName = [
     'Jenifer', 'Luan', 'Regis', 'Moacir'
  ]

  for (item in arrayName) {
     console.log(arrayName) // Mostra todo Array
     console.log(arrayName[item])  //Mostra todos os valores  
     console.log(arrayName[2]) // Mostrar diretamente um vetor
     console.log(item)// Index dos vetores(posições)
     
    }
