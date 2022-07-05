//hablemos de VARIABLES

var a;//DECLARACION.
var b = 'b';//DECLARACION Y ASIGNACION.
b = 'bb'; //REASIGNADO el valor.
var a = 'aa'; //REDECLARACION de la variable.

//GLOBAL SCOPE
/*Se dice que cualquier variable que se encuentre en el documento, como las variables a y b de arriba, pasan a ser variables globales. Estas se instancian dentro del objeto WINDOW */
var fruit = 'apple'; // global

console.log(fruit); /*Estamos leendo a la variable fruit sin problema */

function brestFruit(){
    console.log(fruit); /*No es necesario que fruit este dentro de la funcion para que se pueda leer. */
};

brestFruit();

/*Hay que tener cuidado al momento de declarar una variable porque puede ser que no nos demos cuenta de que estemos creando una variable GLOBAL, cuando no declaramos la variable y solo la asigamos  por defecto va pasar a ser una variable global. */

function conuntries(){
    country = 'Guatemala';//GLOBAL
    console.log(country);
}/*Country solo la asiganamos en la funcion pero no la declaramos en ningun lugar fuera de ella, de asignacion ya la hace global, por ello hay que usar VAR, LET o CONST al momento de declarar y asignar. */

conuntries();//Aca estamos leyendo a country
console.log(country)//Aca tambien lo estamos leyendo, aunque solo se declare dentro de la funcion.