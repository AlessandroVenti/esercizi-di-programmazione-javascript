/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4

    
  http://www.imparareaprogrammare.it
*/


var a = 0;
    var maxNumber = 0;

function createInvertedArray(element1,element2) {
          a = Array.from(element1.toString()).map(Number);
          console.log(`N = ${a}, K = ${element2}`);
          a.reverse();
          a.unshift(0);
}

function maxOfArray(a) {
  for (l = 0; l < a.length; l++) {
       if(a[l] > maxNumber) {
        return maxNumber = a[l];
        }
  }


function indexOfNumber(a,element2) {
     for ( i = 0; i < a.length; i++) {
       if (a[i] !== element2) {
      } else {
        console.log(i);
       }
     }
}

function middleResult(a,element2) {
    if (a[k] <= maxNumber) {
      indexOfNumber(a,element2);
  } else {
        console.log(0);
         }
 }
}

function finalResult(element1, element2)  {
         createInvertedArray(element1,element2);
         maxOfArray(a)
         middleResult(a,element2)
}

  finalResult(14878,10);
