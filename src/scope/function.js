function greeting(){
    /*Aqui vamos a tener claro de que todas y cada una de las funcion que creamos en nuestra logica van a tener su propio alcance y las variables declaradas dentro de esta funcion van a ser accesibles solamente dentro de esta funcion y en cualquiera de sus funciones anidadas.*/
    let userName = 'Michelle'
    console.log(userName);

    if(useName === 'Michelle'){
        console.log(`Hello ${userName}!`)
    }
    /*La variable useName es accesible tando para el console.log como para el if */
}

greeting();
console.log(userName);/*Aca no se puede acceder a la variable ya que solo tiene alcance dentro de la funcion y puedo ser transmitida dentro de la logica anidada, pero si la quiero utilizar por fuera NO ES POSIBLE. */