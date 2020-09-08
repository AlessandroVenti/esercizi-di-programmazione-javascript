/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/

var a = 20, b = 13, c = 4, d = 6, e = 30

 if (a<b && a<c && a<d && a<e && b>a && b>c && b>d && b>e) {
    console.log(`Maggiore = ${b} , Minore = ${a}`);

}else if(a<b && a<c && a<d && a<e && c>a && c>b && c>d && c>e) {
    console.log(`Maggiore = ${c} , Minore = ${a}`);

}else if(a<b && a<c && a<d && a<e && d>a && d>b && d>c && d>e) {
    console.log(`Maggiore = ${d} , Minore = ${a}`);

}else if(a<b && a<c && a<d && a<e && e>a && e>b && e>c && e>d) {
    console.log(`Maggiore = ${e} , Minore = ${a}`);

}else if(b<a && b<c && b<d && b<e && a>b && a>c && a>d && c>e) {
    console.log(`Maggiore = ${a} , Minore = ${b}`);

}else if(b<a && b<c && b<d && b<e && c>a && c>b && c>d && c>e) {
    console.log(`Maggiore = ${c} , Minore = ${b}`);

}else if(b<a && b<c && b<d && b<e && d>a && d>b && d>c && d>e) {
    console.log(`Maggiore = ${d} , Minore = ${b}`);

}else if(b<a && b<c && b<d && b<e && e>a && e>b && e>c && c>d) {
    console.log(`Maggiore = ${e} , Minore = ${b}`);

}else if(c<a && c<b && c<d && c<e && a>b && a>c && a>d && c>e) {
    console.log(`Maggiore = ${a} , Minore = ${c}`);

}else if(c<a && c<b && c<d && c<e && b>a && b>c && b>d && b>e) {
    console.log(`Maggiore = ${b} , Minore = ${c}`);

}else if(c<a && c<b && c<d && c<e && d>a && d>b && d>c && d>e) {
    console.log(`Maggiore = ${d} , Minore = ${c}`);

}else if(c<a && c<b && c<d && c<e && e>a && e>b && e>c && e>d) {
    console.log(`Maggiore = ${e} , Minore = ${c}`);

}else if(d<a && d<b && d<c && d<e && a>b && a>c && a>d && a>e) {
    console.log(`Maggiore = ${a} , Minore = ${d}`);

}else if(d<a && d<b && d<c && d<e && b>a && b>c && b>d && b>e) {
    console.log(`Maggiore = ${b} , Minore = ${d}`);

}else if(d<a && d<b && d<c && d<e && c>b && c>b && c>d && c>e) {
    console.log(`Maggiore = ${c} , Minore = ${d}`);

}else if(d<a && d<b && d<c && d<e && e>a && e>b && e>c && e>d) {
    console.log(`Maggiore = ${e} , Minore = ${d}`);

}else if(e<a && e<b && e<c && e<d && a>b && a>c && a>d && a>e) {
    console.log(`Maggiore = ${a} , Minore = ${e}`);

}else if(e<a && e<b && e<c && e<d && b>a && b>c && b>d && b>e) {
    console.log(`Maggiore = ${b} , Minore = ${e}`);

}else if(e<a && e<b && e<c && e<d && c>a && c>b && c>d && c>e) {
    console.log(`Maggiore = ${c} , Minore = ${e}`);

}else if(e<a && e<b && e<c && e<d && d>a && d>b && d>c && d>e) {
    console.log(`Maggiore = ${d} , Minore = ${e}`);

}
