// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]//otra forma es poner array.shift()
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1]//array.length es la cantidad de elementos pero el ultimo elemento esta posicionado en array.length-1
}
// otra forma es return array.pop()

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length //no necesita los parentesis porque no es una funcion
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arraynuevo = array.map(function(elemento){ //lo que hacemos con .map es recorrer el array y a cada elemento hacerle algo que nosotros queramos
    return elemento + 1
  })
  return arraynuevo
}

//escrito en arrow functions
// function incrementarPorUno(array) {

//   var arraynuevo = array.map(elemento => elemento + 1)
//   return arraynuevo
// }

//otra forma usando for
//var arraynuevo = []
//for (var i = 0; i < array.length; i++) {    con esto recorro  posicion del array original
//  arraynuevo.push(array[i]+ 1)              con esto hago que el elemento del array original que corresponde a i se le sume 1. entonces si empezamos con i=0, corresponde al primero elemento del array y asi 
//  }
//  return arraynuevo
//}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento) //saber que no ponemos directamente return array.push(elemento) porque eso me devolveria la longitud nueva del array pero yo quiero saber el nuevo array, no su longitud
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)//El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
  return array //aca pasa lo mismo que con .push, no pongo return array.unshift(elemento) ya que me devolveria la longitud del array y yo quiero el nuevo array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ')//el metodo join une todos los elementos de un array en una cadena y devuelve esta cadena. entre parentesis va como queremos que esten separados entre elementos, si ponemos .join() van a estar separados entre comas, si ponemos .join('') van a estar pegados uno a otro
}
//otra forma usando for
/*
function dePalabrasAFrase(palabras){
  cadena = '' 
  for (let i = 0; i < array.length; i++) {
    cadena = cadena + palabras[i] + ' ';
    
  }
  return cadena.trim() //dado que si pondriamos return cadena solamente retornaria la cadena pero con un espacio al final por eso usamos el .trim lo que hace es quitar los espacios al principio y al final de la cadena que generamos
}
*/

// otra forma
// function dePalabrasAFrase(palabras){
//   cadena = '' 
//   for (let i = 0; i < palabras.length; i++) {
//     cadena = `${cadena}${palabras[i]} `;
    
//   }
//   return cadena.trim() 
// }

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(i=0;i<array.length;i++){
    if(array[i]===elemento){
      return true
    }
  }
  return false //el return false va aca afuera del ciclo for porque asi dejamos que el ciclo trabaje y si encuentra a elemtno returne true y se corta el ciclo, sino que haga el ciclo completo del for y si no lo encuentra que el ciclo no juegue mas y pase a la linea fuera del ciclo for
}

//otra forma
// function arrayContiene(array, elemento) {
//   return (array.includes(elemento))
// }


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0 // variable de numeros
  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }
  return suma
}

//otra forma usando reduce
// function agregarNumeros(numeros) {
//   const suma = numeros.reduce((a,b) => (a+b))
//   return suma
// }


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sumaa = 0
  for (let i = 0; i < resultadosTest.length; i++) {
    sumaa = sumaa + resultadosTest[i];
  }
  return sumaa/resultadosTest.length
}

//otra forma usando reduce
// function agregarNumeros(numeros) {
//   const suma = numeros.reduce((a,b) => (a+b))
//   return suma / numeros.length
// }

function numeroMasGrande(numeros) { //siempre que tengamos que comparar algo entre los elemenos de una lista hacemos lo siguiente
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeromayor = numeros[0]//siempre que queramos comparar algo nos creamos una variable con la cual comparar, en este caso nos paramos en el primer elemento del array y comenzamos a comparar con el segundo elemento por eso en el for ponemos que empieze desde el segundo elemento del array
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeromayor){
      numeromayor = numeros[i]
    }
  }
  return numeromayor
}

// otra forma usando sort
// function numeroMasGrande(numeros) { //siempre que tengamos que comparar algo entre los elemenos de una lista hacemos lo siguiente
//   const suma = numeros.sort((a,b) => (a - b))
//   return suma[suma.length-1]
// }

function multiplicarArgumentos() {//aca no recibimos nada dentro del parentesis como siempre entonces como no sabemos que nos van a pasar usamos el arguments
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var multiplicar = 1 //siempre definir esta variable, NO OLVIDARSE
  if (arguments.length < 1){ //podriamos haber puesto tambien if (arguments === undefined){
    return 0
  }
  for (let i = 0; i < arguments.length; i++) {
      multiplicar = arguments[i] * multiplicar;
    }
    return multiplicar
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i]>18){
    contador = contador + 1 //es lo mismo que poner contador ++
    } 
  }
  return contador
}

// otra forma usando filter
// function cuentoElementos(arreglo){
//   const contador = arreglo.filter(el => el > 18)
//   return contador.length
// }


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia===1 || numeroDeDia===7) {
    return 'Es fin de semana'
  }
  return 'Es dia Laboral'
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var num = n.toString() //primero con .toString lo que hacemos es trasnformar el numero n en una string, por ej 98 en '98'
  var num1 = num.split('') //segundo con .split lo que hacemos es formar un array con la string que formamos separandola en elementos segun lo que le ponemos entre paretensis, con ('') separamos la string por cada elemento (ej aguante '98' se trasnforma en ['9' , '8')], con (' ') separamos la string por cada espacio que tenga (ej aguante boca se trasnforma en ['aguante', 'boca']), con ('e') separamos la string por cada e que contenga (ej aguante boca se trasnforma en ['aguant', ' boca']))
  if (num1[0]==='9') {
    return true
  }
  return false
}

//en realidad es al pedo el split porque las strings se pueden manejar como un arrays entonces quedaria
function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var string = n.toString() 
  return (string[0] === '9')
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] === arreglo[i-1]){
      return true
    }
  }
  return false
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses = []
  for (var i = 0; i < array.length; i++) {
    if (array[i]==='Enero' || array[i]==='Marzo'|| array[i]==='Noviembre'){
      meses.push(array[i])
    }
  }
  if(meses.length === 3){
    return meses
  }
  return 'No se encontraron los meses pedidos'
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoarray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i]>100){
      nuevoarray.push(array[i])
    }
  }
  return nuevoarray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = []
  for (var i = 0; i < 10; i++) {
    numero = numero + 2 
    array.push(numero)
    if(numero === i){
      break //break lo que hace es interrumpir el bucle completo donde esta, en este caso interrumple todo el for, y salta a lo que sigue
    }
  }
  if(numero === i){ //si break es true entonces salta a esta linea y debo volver a pedirle la condicion para poder meter el return que quiero
    return 'Se interrumpió la ejecución'
  }
  return array
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = []
  for (let i = 0; i < 10; i++) {
    if (i === 5){
      continue //continue lo que hace es cuando se cumpla la condicion que le impones, no la haga y continue con la que sigue
    }
    numero = numero + 2 
    array.push(numero)
    }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
