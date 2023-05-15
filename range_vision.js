

let range_vision = (value) => {
    let min , one ;//declaro las variables minimo y one

    for (let i = 0; i < +String(value).length; i++) {//realizo un bucle dependiendo de cuantos digitos tiene el numero

        let caracter = +String(value)[i], suma = 0; //consigo el dato de alcance y creo la variable suma

        for (let j = caracter*(-1); j <= caracter; j++) {//realizo un bucle desde -caracter hasta caracter
            if(String(value)[i+j] != undefined && j != 0){ //verifico si existe un valor y en caso de hacerlo, sumo a la variable
                suma += +(String(value)[i+j]);
            }
        }
        if(i == 0){ // si es le primer valor lo guardo como minimo
            min = suma;
        }

        if(caracter == 1 && (suma < one || one == undefined)){//en caso de que exista un caracter 1 y sea menor al anterior lo guardo
            one = suma;
        }else if(caracter !== 1 && suma < min){//en caso de que no sea un 1 y sea menor al mas chico lo guardo
            min = suma;
        }
    }

    if (one <= min) {//en caso de que el numero 1 sea menor al valor mas chico devuelve true, de lo contrario devuelve false
        return true;
    } else {
        return false;
    }

}


console.log(range_vision(+process.argv[2]));//llamo a la funcion con parametros
























