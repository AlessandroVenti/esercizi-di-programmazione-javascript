/*
  Il carcere di Gotham City
  Sei appena stato nominato direttore presso il carcere di Gotham City.
  Hai l'arduo compito di scrivere un programma che gestisca:
  - I dati anagrafici delle guardie
  - I dati anagrafici dei detenuti
  - I fascicoli personali dei detenuti, che devono contenere almeno queste informazioni:
      - Un identificativo del criminale
      - La data di carcerazione
      - La data di scarcerazione
      - Il crimine commesso

  Visto che sei tu il capo, decidi se usare lo stesso oggetto per gestire sia le guardie che i criminali.
  In ogni caso dovrai definire la banca dati della prigione: crea un array di guardie, uno di detenuti e uno per i fascicoli.

  Prevedi la possibilià di:
    - Assumere nuove guardie
    - Schedare nuovi carcerati
    - Aggiungere nuovi fascicoli
    - Visualizzare l'elenco per ciascuna categoria (guardie, criminali, fascicoli)
    - Effettuare ricerche nei fascicoli per nome del detenuto

  Nel carcere di Gothma City non tutti i detenuti arrivano alla data di scarcerazione,
  gestisci l’eventualità in cui un detenuto sia evaso e quella in cui sia deceduto.

  Scrivi una funzione di riepilogo dell'andamento del carcere e che stampi:
    - il numero delle guardie,
    - il numero di detenuti totali,
    - il numero di detenuti evasi,
    - il numero di detenuti deceduti all’interno della struttura.

  http://www.imparareaprogrammare.it
*/

var deaths = 0;
var escaped = 0;
var guardie = [
  {cognome: 'Chicchini',nome: 'Mariasole',dataDiNascita: '22/09/1965',luogoDiNascita: 'Napoli'},
  {cognome: 'Petrosino',nome: 'Cornelio',dataDiNascita: '31/08/1981',luogoDiNascita: 'Milano'},
  {cognome: 'Fameli',nome: 'Silvia',dataDiNascita: '07/05/1985',luogoDiNascita: 'Vercelli'},
  {cognome: 'Welch',nome: 'Douglas',dataDiNascita: '29/06/1989',luogoDiNascita: 'Manchester'},
  {cognome: 'Lonato',nome: 'Giosuele',dataDiNascita: '08/08/1997',luogoDiNascita: 'Salerno'},
  {cognome: 'Todello',nome: 'Marco',dataDiNascita: '06/01/1975',luogoDiNascita: 'Olbia'},
  {cognome: 'Todd',nome: 'Warren',dataDiNascita: '22/06/1983',luogoDiNascita: 'New York'},
  {cognome: 'Vaughn',nome: 'Oscar',dataDiNascita: '22/08/1985',luogoDiNascita: 'Amsterdam'},
  {cognome: 'Buckshot',nome: 'Colonel',dataDiNascita: '18/11/1991',luogoDiNascita: 'Londra'},
  {cognome: 'Angel',nome: 'Serena',dataDiNascita: '24/07/1981',luogoDiNascita: 'Copenhagen'},
  {cognome: 'Lay',nome: 'Jupiter',dataDiNascita: '17/01/1981',luogoDiNascita: 'Los Angeles'},
  {cognome: 'Moore',nome: 'Alex',dataDiNascita: '16/03/1990',luogoDiNascita: 'Miami'},
  {cognome: 'Scevola',nome: 'Rolando',dataDiNascita: '15/07/1994',luogoDiNascita: 'Torino'},
  {cognome: 'Snarh',nome: 'Janin',dataDiNascita: '06/06/1967',luogoDiNascita: 'Amsterdam'},
  {cognome: 'Roch',nome: 'Donovan',dataDiNascita: '03/07/1967',luogoDiNascita: 'Cupertino'},
  {cognome: 'Tinuvel',nome: 'Elros',dataDiNascita: '20/03/1970',luogoDiNascita: 'Reikyavic'},
  {cognome: 'Fujiwara',nome: 'Takeshi',dataDiNascita: '09/04/1987',luogoDiNascita: 'Tokio'},
  {cognome: 'Lombardi',nome: 'Marco',dataDiNascita: '13/03/1963',luogoDiNascita: 'Roma'}
];

var detenuti = [
  {cognome: 'Malcolm',nome: 'John',dataDiNascita: '21/09/1965',luogoDiNascita: 'Winchester', fascicolo:{idcriminale:'01',dataCarcerazione: '07/07/2000',dataScarcerazione: '05/02/2021',crimine: 'Tentato Omicidio',deceduto: 'NO', evaso: 'SI'}},
  {cognome: 'Smith',nome: 'Paul',dataDiNascita: '10/03/1964',luogoDiNascita: 'Pikeville', fascicolo:{idcriminale:'02',dataCarcerazione: '28/01/1991',dataScarcerazione: '06/07/2005',crimine: 'Omicidio di secondo grado',deceduto: 'SI', evaso: 'NO'}},
  {cognome: 'Johnson',nome: 'Carl',dataDiNascita: '04/12/1967',luogoDiNascita: 'Deathvalley', fascicolo:{idcriminale:'03',dataCarcerazione: '31/03/1981',dataScarcerazione: '28/12/1989',crimine: 'Guida in stato di ebrezza',deceduto: 'NO', evaso: 'NO'}},
  {cognome: 'Williams',nome: 'Mark',dataDiNascita: '26/04/1976',luogoDiNascita: 'California', fascicolo:{idcriminale:'04',dataCarcerazione: '28/01/1982',dataScarcerazione: '07/03/2000',crimine: 'Omicidio di secondo grado',deceduto: 'SI', evaso: 'NO'}},
  {cognome: 'Brown',nome: 'Dan',dataDiNascita: '09/09/1996',luogoDiNascita: 'Ontario', fascicolo:{idcriminale:'05',dataCarcerazione: '28/01/2016',dataScarcerazione: '06/08/2040',crimine: 'Omicidio di primo grado',deceduto: 'NO', evaso: 'SI'}},
  {cognome: 'Jones',nome: 'Paul',dataDiNascita: '19/01/1968',luogoDiNascita: 'Napoli', fascicolo:{idcriminale:'06',dataCarcerazione: '04/02/1982',dataScarcerazione: '08/07/2000',crimine: 'Truffa',deceduto: 'NO', evaso: 'NO'}},
  {cognome: 'Garcia',nome: 'Rudi',dataDiNascita: '05/02/1969',luogoDiNascita: 'Miami', fascicolo:{idcriminale:'07',dataCarcerazione: '28/01/2009',dataScarcerazione: '17/04/2019',crimine: 'Furto',deceduto: 'NO', evaso: 'NO'}},
  {cognome: 'Rodriguez',nome: 'James',dataDiNascita: '10/03/1980',luogoDiNascita: 'Copenhagen', fascicolo:{idcriminale:'08',dataCarcerazione: '17/04/2009',dataScarcerazione: '30/05/2029',crimine: 'Omicidio premeditato',deceduto: 'NO', evaso: 'SI'}},
  {cognome: 'Miller',nome: 'Miles',dataDiNascita: '05/02/1971',luogoDiNascita: 'Cupertino', fascicolo:{idcriminale:'09',dataCarcerazione: '30/06/1997',dataScarcerazione: '17/04/2009',crimine: 'Omicidio di secondo grado',deceduto: 'SI', evaso: 'NO'}},
  {cognome: 'Martinez',nome: 'Carlos',dataDiNascita: '26/09/1977',luogoDiNascita: 'Mexico', fascicolo:{idcriminale:'10',dataCarcerazione: '13/07/1989',dataScarcerazione: '03/10/2009',crimine: 'Traffico internazione di stupefacenti [cocaina]',deceduto: 'NO', evaso: 'NO'}},
];

var bancaDati = [];
    bancaDati[0] = [guardie];
    bancaDati[1] = [detenuti];

function hiringNewGuard (cognome,nome,datadinascita,luogodinascita,) {
  var newGuard = {
  cognome: cognome,
  nome: nome,
  dataDiNascita: datadinascita,
  luogoDiNascita: luogodinascita
  }
  guardie.push(newGuard);
  console.log(guardie);
}

function scheduleNewCriminal (cognome,nome,datadinascita,luogodinascita,id,datacarcerazione,datascarcerazione,crimine) {
  var newCriminal = {
   cognome: cognome,
   nome: nome,
   dataDiNascita: datadinascita,
   luogoDiNascita: luogodinascita,
   fascicolo: {
     idcriminale: id,
     dataCarcerazione: datacarcerazione,
     dataScarcerazione: datascarcerazione,
     crimine: crimine
   }
  }
  detenuti.push(newCriminal);
  console.log(detenuti);
}

function addDossier(cognome,crimine) {
  for (i = 0; i < detenuti.length; i++) {
    if (detenuti[i].cognome === cognome) {
    detenuti[i].fascicolo.crimine += ' , ' + crimine;
    break;
    }
  }
  console.log(detenuti);
}

function researchCriminalDossier(cognome) {
  for (j = 0; j < detenuti.length; j++) {
    if (detenuti[j].cognome === cognome) {
       console.log(detenuti[j].fascicolo);
    }
  }
}

function researchGuard(cognome) {
   for (k = 0; k < guardie.length; k++) {
     if (guardie[k].cognome === cognome) {
       console.log(guardie[k]);
     }
   }
}

function researchCriminal(cognome) {
  for (m = 0; m < detenuti.length; m++) {
    if (detenuti[m].cognome === cognome) {
      console.log(detenuti[m]);
    }
  }
}

function escapedCriminals () {
  for (q = 0; q < detenuti.length; q++) {
    if (detenuti[q].fascicolo.evaso === 'SI') {
      escaped += 1;
    }
  }
  alert('I detenuti evasi sono ' + escaped);
}

function deathCriminals() {
  for (n = 0; n < detenuti.length; n++) {
    if (detenuti[n].fascicolo.deceduto === 'SI') {
      deaths += 1;
    }
  }
  alert('I detenuti deceduti sono ' + deaths);
}

function visualize(string2) {
   if (string2 === 'banca dati') {
     console.log(bancaDati);
   } else if (string2 === 'elenco guardie') {
     console.log(guardie);
   } else if (string2 === 'elenco detenuti') {
     console.log(detenuti);
   }
}

function thePenitentiary(string1) {
   if (string1 === 'visualizzare') {
     visualize(String(prompt('Cosa vuoi visualizzare? Banca dati, elenco guardie, o elenco detenuti?')));
   } else if (string1 === 'assumere') {
      hiringNewGuard(String(prompt('Inserisci il cognome')),String(prompt('Inserisci il nome')),String(prompt('Inserisci la data di nascita')),String(prompt('Inserisci il luogo di nascita')));
   } else if (string1 === 'schedare') {
      scheduleNewCriminal(String(prompt('Inserisci il cognome')),String(prompt('Inserisci il nome')),String(prompt('Inserisci la data di nascita')),String(prompt('Inserisci il luogo di nascita')),String(prompt('Registra ID criminale')),String(prompt('Inserisci la data di carcerazione')),String(prompt('Inserisci la data di scarcerazione')),String(prompt('Inserisci il crimine commesso')));
   } else if (string1 === 'ricerca guardia') {
      researchGuard(String(prompt('Inserisci cognome della guardia.')));
   } else if (string1 === 'ricerca detenuto') {
      researchCriminal(String(prompt('Inserisci cognome del detenuto.')));
   } else if (string1 === 'ricerca fascicolo') {
      researchCriminalDossier(String(prompt('Inserisci cognome del detenuto di cui desideri il fascicolo.')));
   } else if (string1 === 'aggiungere fascicolo') {
      addDossier(String(prompt('Inserisci cognome del detenuto')),String(prompt('Registra nuovo crimine commesso')));
   } else if (string1 === 'totale guardie') {
      alert('ìl totale delle guardie è ' + guardie.length);
   } else if (string1 === 'totale detenuti') {
      alert('il totale dei detenuti è ' + detenuti.length);
   } else if (string1 === 'totale detenuti evasi') {
      escapedCriminals();
   } else if (string1 === 'totale detenuti deceduti') {
      deathCriminals();
   }
}

thePenitentiary(String(prompt(`Benvenuto nel database del carcere di Gotham City. Queste sono le operazioni che puoi effettuare:\n Visualizzare:   puoi accedere alla banca dati ,all'elenco delle guardie, o l'elenco dei detenuti. \n Assumere:   Puoi assumere una nuova guardia penitenzaria. \n Schedare:   Puoi schedare un nuovo detenuto. \n Ricerca guardia:   Ricercare i dati di una guardia. \n Ricerca detenuto:   Ricercare i dati di un detenuto. \n Ricerca fascicolo :   Ricercare il fascicolo di un detenuto. \n Aggiungere fascicolo:   Aggiungere un nuovo crimine al fascicolo di un detenuto. \n Totale guardie:   Numero totale di guardie all'interno della struttura. \n Totale detenuti:   Numero totale di detenuti all'interno della struttura. \n Totale detenuti evasi:  Totale dei detenuti evasi dalla struttura. \n Totale detenuti deceduti:   totale dei detenuti morti nella struttura.`)));
