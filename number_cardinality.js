
let number_cardinality = (value) => {
    let str;//creo una variable
    if(value % 5 == 0){//si es divisible por 5 coloco five
        str = "five";
    }
    if(value % 10 == 0){//si es divisible por 10 coloco zero
        str = "zero";
    }else if(value % 2 == 0 && value % 10 !== 0){//si es divisible por 2 pero no por 10 coloco even
        str = "even";
    }else if(value % 2 !== 0 && value % 5 !== 0){//si no es divisible por 2 ni por 5 coloco odd
        str = "odd";
    }
    return str;//devuelvo la variable
}



console.log(number_cardinality(+process.argv[2]));//llamo a la funcion con el valor situado en el argumento














