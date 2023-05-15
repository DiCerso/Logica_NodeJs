let fizz_buzz = (value) => {
    let aux = [];
    for (let i = 1; i <= value; i++) { //realizo el bucle dependiendo que valor entra
        if(i % 3 == 0 && i % 5 == 0){//verifica si es multiplo de 3 y 5
            aux.push("FizzBuzz");
        }else if(i % 3 == 0){//verifica si es multiplo de 3
            aux.push("Fizz");
        }else if(i % 5 == 0){//verifica si es multiplo de 5
            aux.push("Buzz");
        }else{ // si no es multiplo
            aux.push(i);
        }
    }
    return aux;//devuelvo el array
}


console.log(fizz_buzz(process.argv[2]));//llamo a la funcion con el valor situado en el argumento
//pruebas: 
/* ******************************** */
//node ejercicio1.js 30:
/* salida : [
  1,      2,      'Fizz',
  4,      'Buzz', 'Fizz',
  7,      8,      'Fizz',
  'Buzz', 11,     'Fizz',
  13,     14,     'FizzBuzz',
  16,     17,     'Fizz',
  19,     'Buzz', 'Fizz',
  22,     23,     'Fizz',
  'Buzz', 26,     'Fizz',
  28,     29,     'FizzBuzz'
]*/

/* ******************************** */
// node ejercicio1.js 15
/* 
salida: 
[
  1,          2,
  'Fizz',     4,
  'Buzz',     'Fizz',
  7,          8,
  'Fizz',     'Buzz',
  11,         'Fizz',
  13,         14,
  'FizzBuzz'
]
 */




