/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/

var x = Math.random();
var y = x * (30 - 18) + 18;
var z = Math.floor(y);

console.log('voto numerico = ' + z);

if (z==17) {
  console.log('Insufficiente');

} else if (18<=z && z<21) {
     console.log('Sufficiente');
  
} else if (21<=z && z<24) {
     console.log('Buono');
  
} else if (24<=z &&  z<27) {
     console.log('Distinto');
  
} else if (27<=z && z<=29) {
     console.log('Ottimo');
  
} else if (z==30) {
     console.log('Eccellente');
  
}

//Variante con Switch 

var x = Math.random();
var y = x * (30 - 18) + 18;
var z = Math.floor(y);

switch (z) {
    
  case 17 :
    console.log('Insufficiente');
  break;
    
  case 18 :
  case 19 :
  case 20 :
    console.log('Sufficiente');
  break;
    
  case 21 :
  case 22 :
  case 23 :
    console.log('Buono');
  break;
    
  case 24 :
  case 25 :
  case 26 :
    console.log('Distinto');
  break;
    
  case 27 :
  case 28 :
  case 29 :
    console.log('Ottimo');
  break;
    
  case 30 :
    console.log('Eccellente');
  break;
    
  default :
    console.log('Voto sbagliato');
    
}
