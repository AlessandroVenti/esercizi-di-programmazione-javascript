/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/

var x = Math.random();
var y = x * (9999 - 1) +1;
var z = Math.floor(y)

console.log('Numero = ' +z);

var a = z.toString();

if (a.length==1) {
   console.log('1 cifra');
  
} else if (a.length==2) {
   console.log('2 cifre');
  
} else if (a.length==3) {
   console.log('3 cifre');
  
} else if (a.length==4) {
   console.log('4 cifre');
  
}

//Metodo senza usare .length

var number = Math.round(Math.random() * (9999 - 1) + 1);

if (0 < number && number < 10) {
  console.log(`1 cifra`);
} else if (10 <= number && number < 100) {
  console.log(`2 cifre`);
} else if (100 <= number && number < 1000 ) {
  console.log(`3 cifre`);
} else if (1000 <= number) {
  console.log(`4 cifre`);
}

// Metodo con Switch-Case

var number = Math.round(Math.random() * (9999 - 1) + 1);
var numberString = number.toString();
console.log(number);


switch (numberString.length) {
  case 1 :
    console.log(`1 cifra`);
    break;
  case 2 :
    console.log(`2 cifre`);
    break;
  case 3 :
    console.log(`3 cifre`);
    break;
  case 4 :
    console.log(`4 cifre`);
} 

