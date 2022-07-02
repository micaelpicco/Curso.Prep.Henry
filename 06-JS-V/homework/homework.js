// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  function Usuario(opciones){ //Usuario es un constructor, opciones es un objeto con las sig propiedades que debo crear
    this.usuario = opciones.usuario //pongo opciones.usuario porque debo crear la propiedad usuario dentro del objeto opciones
    this.nombre = opciones.nombre
    this.email = opciones.email
    this.password = opciones.password
  } //todo esto primero es el constructor

  Usuario.prototype.saludar = function(){ //con esto accedemos al constructor mediante .protype y le agregamos la funcion saludar
    return 'Hola, mi nombre es ' + this.nombre
  }
  return Usuario
}

function agregarMetodoPrototype(Constructor) { //constructor es un objeto que tiene un constructor que no conozco pero puedo acceder a el por medio del prototype
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function(){ //con esto accedemos al constructor mediante .protype y le agregamos la funcion saludar
    return 'Hello World!'
}
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function(){
    return this.toString().split('').reverse().join('')//primero lo llevamos a un string si no lo fuese, despues lo spliteamos y creamos una rray con cada letra del string, despues invertimos el array, y despues juntamos todo de vuelta
  }
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona { //aca estamos usando la sintaxis de CLASES, NO usando la sintaxis de funciones normales como antes, cambia todo de como crear el constructor y la funcion
    constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre
      this.apellido = apellido
      this.edad = edad
      this.domicilio = domicilio 

    }
    detalle (){ //asi es el agregado de una funcion usando CLASES. esto lo podriamos haber metido adentro del cosntructor tambien 
      var objeto = {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        domicilio: this.domicilio,
      }
      return objeto
    }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  var personanueva = new Persona (nombre, apellido, edad, dir) //estoy creando un nuevo objeto llamado nuevapersona con el constructor Persona con los argumentos que le paso entre parentesis. entre parentesis va lo que me estan dando como parametro
  return personanueva
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function(){ //aca estamos usando el metodo tradicional, el profe no supo como agregar un metodo a una clase ya creada por medio del metodo clases pero usarlo asi y fue
    return this.nombre + ', ' + this.edad + ' años'
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
