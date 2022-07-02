// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arreglo = []
  for (const props in objeto) { //aca usa el for in cuando recorremos un objeto, con props hacemos referencia a las propeidades del objeto
    arreglo.push([props, objeto[props]])
  }
  return arreglo
}
//OTRO METODO DE UNA SOLA LINEA
// return Object.entries(objeto)
//}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var contador = {} //nos formamos el objeto vacio que quiere que le enviemos
  for (const i of string) { //usamos for of en este caso, donde vamos recorriendo el string que nos envian por parametro. primero nos paramos en la primera letra suponiendo que es una s, como constador[s] no existe entonces pasa de largo el if y va al else y le da el valor de 1. luego va a la segunda letra y si por ej es una s, como contador[s] ya existe entonces entra al if y le suma 1. y asi sigue con la proxima letra
    if (contador[i]) {  //al poner como condicion contador[i] en el if, le estamos poniendo como condiciones: si contador[i] existe entonces haceme tal cosa sino contador[i] = undefined que siginfica false entonces para al else y crea la propiedad i con el valor de 1
      contador[i]++
    } else {
      contador[i] = 1
    }
  }
  return contador
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var array = s.split('')
  var mayus = ''
  var minus = ''
  for (let i = 0; i < array.length; i++) {
    if(array[i] === array[i].toUpperCase()){ //toUpperCase lo que hace es poner en mayuscula la primera eltra del string
      mayus += array[i]//con el += lo que hago es ir agregando array[i] en el string mayus si cumple con la condicion. es lo mismo que el push para arrays pero en este caso tengo string.
    }else {
      minus += array[i]
    }
  }
  return mayus + minus
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array = str.split(' ')//con la oracion que nos manden, nos armamos un array con un elemento por palabra por eso dejamos u espacio en la funcion split
  var arraynuevo = []
  for (let i = 0; i < array.length; i++) {
    arraynuevo.push(array[i].split('').reverse().join('')) //a cada palabra i del array la spliteamos para formarnos un elemento por cada letra, la invertimos y la volvemos a unir. esto lo reteptimos para cada caso de cada palabra del array. el reverse solo funciona para arrays por eso spliteo
    
  }
  return arraynuevo.join(' ') //unimos cada elemento del arraynuevo con un espacio
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  if (numero.toString() === numero.toString().split('').reverse().join('')) {
    return 'Es capicua'
  } else {
    return 'No es capicua'
  }
}
//otra forma
// var alreves = numero.toString().split('').reverse().join('')  aca primero formo numero en una string y la invierto y uno
// var alreves = parseInt(alreves)  con parseInt lo que hago es pasar de naturaleza string a numero para poder compararlo directamente con el parametro numero que nos mandan
// if (numero === alreves) {
//   return 'Es capicua'
// } else {
//   return 'No es capicua'
// }
// }

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var array = cadena.split('')
  var arraynuevo = []
  for (let i = 0; i < array.length; i++) {
     if(array[i] === 'a' || array[i] === 'b' || array[i] === 'c'){
       continue
      } else {
       arraynuevo.push(array[i])
     }
  }
  return arraynuevo.join('')
}

//otra forma usando replace
// function deleteAbc(cadena){
//   return cadena.replace(/[abc]/gi,'') //si en alguna de las letras de la cadena encuentra a,b o c las reemplaza por nada
// }

//otra forma
// var nuevacadena = cadena.split('').filter(x => x !== 'a' && x !== 'b' && x !== 'c')  aca lo que hago es usar la funcion filter. primero me forma un array, luego filtro cada elemento del array si x(cada elemento del array) es diferente de a, b y c, que me lo saque del array original y me los guarde en el array nuevo llamado nueva cadena. si yo en vez de usar !== hubiera usa === entonces me hubiera devuelta un array nuevo con solo esos elementos iguales a a,b y c
// return nuevacadena.join('')

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arraynuevo = arr.sort(function(a,b){ //la funcion sort es para ordenar los elementos del array de alguna forma. si ponemos solo arr.sort() me ordena el array con una forma predeterminada segun que haya adentro del array. pero si le pongo adentro una funcion, la misma debe tener los parametros a y b donde al recorrer el array, a siempre es el elemento anterior a b y los compara segun la funcion que le pongamos adentro
    return a.length - b.length //esta es la funcion que le ponemos segun como queramos que se ordenen, en este caso se van a ir comparando las longitudes de los elementos y cada comparacion tira un numero para luego ordenarlos automaticamente segun ese numero. si yo hubiera querido en orden decreciente hubiera puesto return b.lenght - a.length
  }) //la funcion del metodo sort siempre debe retornar!!!!
  return arraynuevo
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
// var arrayinterseccion = []
// for (let i = 0; i < arreglo1.length; i++) {//siempre que tengamos que comparar 2 arreglos usamos dos for, uno para recorrer un arreglo y el otro para recorrer el otro. Luego los comparo con alguna condicion que quiero
//   for (let j = 0; j < arreglo2.length; j++) {
//     if(arreglo1[i] === arreglo2[j]){
//       arrayinterseccion.push(arreglo1[i])
//     }
    
//   }
  
// }
// return arrayinterseccion
// }

//otra forma
var arreglointerseccion = arreglo1.filter(x => arreglo2.includes(x)) //lo que hago aca es comprar dos arreglos filtrando uno de ellos, diciendo que si los elementos del arreglo1 estan incluidos en el arreglo 2, sacamelos y ponemelos en otro arreglo.
return arreglointerseccion
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

