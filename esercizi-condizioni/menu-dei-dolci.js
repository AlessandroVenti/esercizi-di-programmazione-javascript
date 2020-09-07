/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/


var x = Math.random();
var y = x * (8-1) + 1;
var z = Math.floor(y);
console.log('1. Tiramisu');
console.log('2. Torta della nonna');
console.log('3. Cheescake alla nutella');
console.log('4. Macedonia');
console.log('5. Pannacotta');
console.log('Numero scelto:' + z);
switch (z) {
  case 1 :
   console.log('Hai scelto il dolce Tiramisu');
  break;
  case 2 :
   console.log('Hai scelto il dolce Torta della nonna');
   break;
  case 3 :
   console.log('Hai scelto il dolce Cheescake alla nutella');
   break;
  case 4 :
   console.log('Hai scelto il dolce Macedonia');
   break;
  case 5 :
   console.log('Hai scelto il dolce Pannacotta');
   break;
  default :
   console.log('Dolce non disponibile');
}
