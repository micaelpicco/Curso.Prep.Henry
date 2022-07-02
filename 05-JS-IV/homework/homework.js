// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var gato = {
    nombre, //nombre: es la pripiedad, nombre es el valor de la propiedad
    edad,
    meow: function(){
      return 'Meow!'
    }
  }//aca termina el objeto
  return gato
}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property]=null //nos pide que creemos una prop que tenga por valor null. a la misma la creamos por medio de la braket notation ya que la propiedad no existe dentro del objeto
  return objeto
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]() //estamos accediendo a la propiedad metodo dentro del objeto que se llama objeto. como la propiedad nos las estan pasando como parametro entonces debemos usar braket notation.
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  producto = objetoMisterioso.numeroMisterioso * 5 //aca puedo usar la dot.notation porque sabemos que la propiedad numeroMisterioso existe dentro del objeto objeto.Misterioso
  return producto
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad] //cuando me dan por parametro (osea dentro del parentesis de la funcion primera), yo no se que carajo puede ir ahi entonces en esos cassos siempre usar bracketnotation
  return objeto
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var objeto = {
    nombre, //aca podemos poner tambien nombre: nombre, pero cuando el nombre de la propiedad y el nombre del valor son iguales entonces puedo hacer esto
    email,
    password
  }
  return objeto
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  return (usuario.email != null || usuario.email != undefined)
}



function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if(objeto.hasOwnProperty(propiedad)){ //.hasOwnPropery lo usamos para ver si el objeto tiene una propiedad llmada propiedad
    return true
  }
  return false
}

// otra forma usando for
// function tienePropiedad(objeto, propiedad) {
//   for (const key in objeto) {
//     if (key === propiedad) {
//       return true      
//     }
//   }
//   return false
// }


function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  return (usuario.password === password) //estaria mal poner solo un = porque eso es para asignar y aca estamos comparando si son iguales entonces al comparar simpre triple ===
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword
  return usuario
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  usuario.amigos.push(nuevoAmigo)//aca si uso braket notation esta mal porque yo ya conozco el nombre de la propiedad y que la misma existe dentro del objeto
  return usuario
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for (let i = 0; i < usuarios.length; i++) {//debo recorrer todo el array y pararme en cada objeto y a cada uno cambiarle el valor de la propiedad esPremium por true
    usuarios[i].esPremium = true
  }
  return usuarios
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var suma = 0
  for (let i = 0; i < usuario.posts.length; i++) {
    suma = usuario.posts[i].likes + suma //con posts[i] me paro en cada objeto post del array posts
  }
  return suma
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
producto.calcularPrecioDescuento = function(){ //como ya se el nombre de lo que quiero agregar entonces estaria mal usar el braket notation. Si el metodo me lo darian como parametro entonces si se usaria braket
   return producto.precio - (producto.precio * producto.porcentajeDeDescuento)
}
return producto
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
