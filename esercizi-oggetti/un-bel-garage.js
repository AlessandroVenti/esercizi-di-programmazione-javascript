/*
  Un bel garage
  Scrivi un programma per la gestione di un garage.
  Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
  Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

  Consigli:
  Puoi usare un array come base per salvare le automobili.

  http://www.imparareaprogrammare.it
*/

var garage = [];
    garage[0] = [{marca: 'Ferrari', modello: ['Berlinetta','Ferrari 812 Superfast','Ferrari Portofino','Ferrari Monza']}];
    garage[1] = [{marca: 'Lamborghini', modello: ['Aventandor','Huracan','Urus','Diablo']}];
    garage[2] = [{marca: 'Pagani', modello: ['Huayra','Huayra BC','Zonda','Zonda rodster']}];
    garage[3] = [{marca: 'Bugatti', modello: ['Chiron','Veyron','Urus','Divo']}];
    garage[4] = [{marca: 'Mc Laren', modello: ['Mc Laren 570S','Mc Laren 720S','Mc Laren GT','Mc Laren 620R']}];



function autoCars(key1) {
  for (i = 0; i < garage.length; i++) {
    for(j = 0; j <garage[i].length; j++) {
      if (key1 === garage[i][j].marca) {
          console.log(garage[i][j].modello)
      }
    }
  }
}
autoCars(String(prompt('Inserisci nome marca...')));
