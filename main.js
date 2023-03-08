//Programación sincrónica: 
//En el modelo sincrónico escribíamos una línea de código, el sistema leía esta línea, ejecutaba el proceso y cuando finalizaba ese proceso, ejecutaba la siguiente línea. 

console.group ("Programación Sincrónica");
console.log ("Primera Tarea");
console.log ("Segunda Tarea");
console.groupEnd("--");

//Programación Asicrónica (o asíncrona o Async)

//setTimeOut
//Recibie dos parámetros: una función o callback con alguna tarea que tiene que ejecutar y como segundo parámetro el tiempo que debe esperara para finalizar esa tarea.

setTimeout (()=> {
    console.log ("Tarea A")
}, 3000)

setTimeout(() => {
    console.log ("Tarea B")
    
}, 2000);

//si tiene el mismo tiempo de timeout va a trabajar en modalidad sincrónica. 

//Ejemplo utilizando esta función para cambiar el color del body despues de 3 seg (3000)

setTimeout(() => {
    document.body.style.backgroundColor = "blueviolet";
}, 3000);

//lo podemos utilizar con un array:

for (let letra of "Hola Mundo"){
    setTimeout(() => {
        console.log(letra)
    }, 4000);
}

//Event Loop: es un bucle que se ejecuta constantemente y se encarga de revisar si el CS está vació. Si lo está, revisa la cola de tarea y las envía al CS para que las ejecute. 

//setInterval 
//tiene la misma sitaxis que el STO pero la unidad de tiempo es un intervalo para la repetición de la función asociada. 

// setInterval(() => {
//     console.log("tic");
    
// }, 2000);

//me permite ejecutar funciones de manera REITERATIVA tras los milisegundos indicados. Hasta que nosotros le indiquemos su detención o se cierre la aplicación
//Para poder cortar la repetición utilizo: clearInterval()

let contador = 0;
const interval = setInterval (()=>{
    console.log("Necesito Vacaciones");
    contador++;
    if(contador == 5){
        clearInterval(interval);
    }
}, 3000)

//Ejemplo de uso de setInterval para cambiar el color del body cada 3 segundos utilizando un array de datos.

const colores = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "black", "white", "blueviolet"]

let i= 0;

const intervalDos = setInterval(() => {
    document.body.style.backgroundColor = colores [i];
    i++;
    if (i == colores.length){
        clearInterval(intervalDos);
    }
    
}, 150);

//Promeses (se pueden cumplir o no)
//¿Qué es una promesa en JS? es un objeto que representa un evento a futuro.
//Se puede cumplir o no. Puede resultar en resuleto o rechazada.
//son una forma de trabajar con servidores
//Sintaxis:

const falsasPromesas = () =>{
        return new Promise ((resolve, reject) =>{
            //resolve: se ejecuta cuando la promesa se cumple
            //reject: se ejecuta cuando la promesa no se cumple
        })
}
console.log(falsasPromesas());

//promise <pendind> : está pendiente de conexión
//podemos tener 3 estados: pending
//fulfilled: se logró correctamente la conexión
// rejected: se rechazó la conexión

class Usuario{
    constructor(user, password){
        this.user = user;
        this.password = password;
    }
}

const usuario1 = new Usuario ("UsuarioUno", 1234);
const usuario2 = new Usuario ("UsuarioDos", 1234);
const admin    = new Usuario ("Admin", 4321);

const usuarios = [usuario1, usuario2, admin];

const solicitarUsuario = (estado) => {
    return new Promise ((resuelto, rechazado)=>{
        if (estado == true){
            resuelto(usuarios);
        } else {
            rechazado ("vuelva otra vez");
        }
    })
}

console.log (solicitarUsuario(true));

//then y catch
//then: se ejecuta cuando la promesa se cumple
//catch: se ejecuta cuando la promesa no se cumple
//finally: se ejecuta siempre al finalizar el proceso.

solicitarUsuario(false)
.then((usuarios)=>{
    console.table(usuarios);
})
.catch ((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log ("Fin del proceso")
})


