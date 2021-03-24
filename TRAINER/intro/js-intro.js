// BEFEHLE
console.log('text aus js datei')

// KOMMENTARE
// Einzeiler, z.B. ausgabe in die Konsole
/* 
mehrzeilige 
Kommentare
 */

// ==========================================
// VARIABLEN
// Definition:
// Semantische Syntax:
// Schlüsselwort VariablenName = VariablenWert;
let variable3 = 345;
let variable4 = 'text';

// Aufruf einer Variable - mit ihrem Namen
console.log(variable3) // 345
console.log(variable4) // text
console.log(variable3 + variable4) // 345text

// =====================================
// FUNKTIONEN
// Definition:
// Semantische Syntax:
// Schlüsselwort FunktionenName RundeKlammern GeschweifteKlammern
function sagHallo() {
    console.log('hallo aus fkt sagHallo')
}
function aufwiedersehen() {
    console.log('aufwiedersehen aus function aufwiedersehen')
}
// Aufruf einer Funktion - mit ihrem Namen:
sagHallo();
aufwiedersehen();


// =====================================
// ARRAYS - Sammlungen von Daten
// Definition:
// Semantische Syntax:
// SchlüsselWortEinerVariable ArrayName = [element1, element2, element3]
let blumen = ['Rose', 'Nelke', 'Tulpe'];
let farben = ['schwarz', 'gelb'];

// Aufruf von einem Array - mit seinem Namen;
console.log(blumen);
console.log(blumen[0]);
// alert(blumen);

// =====================================
// OBJEKTE - Sammlungen von 'Key : Value' / 'Property : Value' Paare
// Definition:
// Semantische Syntax:
// SchlüsselWortEinerVariable ObjektName = { prop1: Wert, prop2: Wert }
let auto = {
    baujahr: 2010, 
    km: 2000, 
    farbe: 'grau', 
    model: 'audi Q5',
    ändereFarbe: function(neueFarbe) {
        auto.farbe = neueFarbe // todo #1
    }
}

let tisch = {
    farbe: 'blau',
    höhe: '60 cm',
    einheit: 'cm'
}

// Aufruf von einem Objekt - mit seinem Namen;
console.log(auto)
console.log(auto.model)
auto.ändereFarbe('blau')
auto.ändereFarbe(farben[0])
console.log(auto.farbe) // schwarz
 
console.log(tisch)
console.log(tisch.höhe)