let metai = 1988;
let menuo = 12;
let diena = 21;
let z = metai % 10;
let m = menuo % 10;
let q = diena % 10;
let ats = z + m + q;
console.log(ats);

let r = 15;
let pi = 3.14;
plotas = (r**2) * pi;
console.log(plotas);

ilgis = 2 * pi * r;
console.log(ilgis);

let vardas = "Jonas";
let vieta = 2;
let medalis ;

if (vieta === 1) {
    medalis = "aukso";
}
else if (vieta === 2) {
    medalis = "sidabro";
}
else if (vieta === 3) {
    medalis = "bronzos";
}

if (medalis !== undefined){
    console.log(`žaidėjas ${vardas} gavo medalį ${medalis}`);
}

let a = true;
let e = (a === true) ? true : false;
    console.log(e);

for (let b1 = 0; b1 <= 16;  b1 += 4) {
    console.log(b1);
}

let v = 2+2;

switch (v) {
    case 1:
        console.log("v reikšmė yra mežeznė už 4")
        break;
    case 5:
        console.log("v reikšmė yra didesnė už 4")
        break;
    case 4:
        console.log("v reikšmė yra lygi 4")
        break;
    default:
        console.log("neaiškus rezultatas");
    break;

}

let car = ["volvo", "Saab", {"Car": "BMW"}, 8];

console.log(car[0]);
console.log(car[2].Car);
console.log(car[3]);
console.log(car.length);
car[1] = "Opel";
car[4] = "Audi";
console.log(car[1]);
console.log(car[4]);
console.log(car.length);

for (let j = 0; j < car.length; j += 1) {
    let naujas = car[j];
    console.log(naujas);
}

for(let reikšmė of car) {
    console.log(reikšmė);
}

let animal = "ostrich";

function showAnimal() {
    animal = "elephant"
    let word = animal + " live in Africa";
    console.log(word);
}

console.log(animal);
showAnimal();
console.log(animal);



function rezultatas() {
    skaičiai = 5 * 5
    console.log(skaičiai);
}
rezultatas();




//1. Sukurkite studento objektą, naudokite tuos pačius duomenis (vardas, pavarde)

let studas = [{"Vardas": "Jonaitis"}, {"Pavardė": "Petraitis"}];
console.log(studas[0].Vardas, studas[1].Pavardė);

//2. Sukurkite Objektų masyvą pagal katik sukurto Studento objekto struktura.

let studentai = [
{ vardas: "Petras", pavarde: "Petrulis", pazymiai: [8, 4, 6] },
{ vardas: "Jolė", pavarde: "Jolytė", kursas: 7, pazymiai: [7, 3, 9] },
{ vardas: "Saulius", pavarde: "Sauliukas", pazymiai: [8, 5, 5] },
{ vardas: "Dalia", pavarde: "Dalytė", pazymiai: [7, 4, 5] },
{ vardas: "Matas", pavarde: "Matulis", kursas: 4, pazymiai: [3, 8, 6] },
{ vardas: "Saulė", pavarde: "Saulutė", pazymiai: [1, 2, 3] }
];

//3. Išveskite penkto objekto duomenis (vienas bendras console.log()).
//4. Išveskite tokį patį informacinį sakinį iš objekto duomenų kaip prieš tai išvedėte iš paprastų kintamųjų ("Tomas Tomauskas mokosi KTU, 4 kurse, jo pažymiai: [7, 4, 5].").
//Išbandykite tiek dot notation, tiek bracket notation traukiant duomenis iš masyvo.

console.log(studentai[4].vardas, studentai[4].pavarde,"mokosi KTU, 4 kurse, jo pažymiai:", studentai[4].pazymiai.join(","));
console.log(studentai[4]["vardas"], studentai[4]["pavarde"],"mokosi KTU, 4 kurse, jo pažymiai:", studentai[4]["pazymiai"].join(","));

//5. Išveskite visus studento pažymius, esančius objekte. Naudojant for ciklą.

let studentas = studentai[0];
console.log("Studento", studentas.vardas, studentas.pavarde, "pažymiai:");
for (let h = 0; h < studentas.pazymiai.length; h += 1) {
  console.log(studentas.pazymiai[h]);
}

//6. Pakelkite tris pasirinktus pažymius per vieną skaičių.
//Tačiau atkreipkite dėmesį ar keliamas pažymys gali būti pakeltas (jei dar ne max),
//jei jis jau ir taip yra 10, tuomet palikite tokį koks yra.

function studento_pazymiai(studentas){
    for (let h = 0; h < studentas.pazymiai.length; h += 1) {
    if (studentas.pazymiai[h] < 10) {
studentas.pazymiai[h]++; }}}

for (let h = 0; h < studentai.length; h += 1) {
studento_pazymiai(studentai[h]);}

for (let k = 0; k < studentai.length; k += 1) {
  let studentas = studentai[k];
  console.log("Studentai", studentas.vardas, studentas.pavarde, "pažymiai:");
  for (let j = 0; j < studentas.pazymiai.length; j += 1) {
    console.log(studentas.pazymiai[j]);
}
}

//7. Suskaičiuokite ir išveskite trijų pasirinktų pažymių sumą.

function Studento_Pazymiu_Suma(vardas, pavarde) {
  for (let i = 0; i < studentai.length; i += 1) {
    if (studentai[i].vardas === vardas && studentai[i].pavarde === pavarde) {
      const Suma = studentai[i].pazymiai[0] + studentai[i].pazymiai[1] + studentai[i].pazymiai[2];
      console.log(`Studento ${vardas} ${pavarde} trijų pasirinktų pažymių suma: ${Suma}`);
      return;
    }
  }
}
Studento_Pazymiu_Suma("Petras", "Petrulis")


//8. Suskaičiuokite ir išveskite dviejų pasirinktų pažymių sandaugą.

function Skaiciu_sandauga(vardas, pavarde) {
  for (let i = 0; i < studentai.length; i += 1) {
    if (studentai[i].vardas === vardas && studentai[i].pavarde === pavarde) {
      const Daugyba = studentai[i].pazymiai[1] * studentai[i].pazymiai[2];
      console.log(`Studento ${vardas} ${pavarde} dviejų pažymių daugyba: ${Daugyba}`);
      return;
    }
  }
}
Skaiciu_sandauga("Saulius", "Sauliukas")


//9. Patikrinkite ar kursas yra numeral tipo.

function ar_numeral_tipo(skaicius) {
  return typeof skaicius === "number";
}
let student = studentai[4];

    if (ar_numeral_tipo(student.kursas)) {
  console.log(student.vardas + " " + student.pavarde + " kursas yra numeral tipo.");
}
    else {
  console.log(student.vardas + " " + student.pavarde + " kursas nėra numeral tipo.");
}


//10. Patikrinkite ar studentas mokosi ketvirtame kurse ir ar ši reikšmė yra kaip numeral (===).

const stu = studentai[1];
    if (typeof stu.kursas === "number" && stu.kursas === 7) {
  console.log(stu.vardas + " " + stu.pavarde + " mokosi septintame kurse.");
}
    else {
  console.log(stu.vardas + " " + stu.pavarde + " nesimokina 7 kurse.");
}


function saule() {alert ("Paspaudei mygtuką")}
document.body.addEventListener("click", saule);
mygtukas.onclick = saule;
mygtukas2.onclick = () => alert("labas");
mygtukas3.onclick = function() {alert ("viso gero");};



//let skaicius = Math.random();
////skaicius = Math.random() * 10;
//skaicius *= 10;
////console.log(skaicius);
//
//
//skaicius = Math.floor(skaicius);
//
//console.log(skaicius);


// Generuojamas atsitiktinis skaicius nuo 0 iki 1 neimtinai

//let atsitiktinisSkaicius = Math.floor(Math.random() * 10 + 1 );
//console.log(atsitiktinisSkaicius)
//// atsitiktinis skaicius dauginamas iš 10
////atsitiktinisSkaicius *= 10;
//
//// Suapvalinsiu atsitiktini skaiciu iki sveiko skaiciaus


//RANDOM
//let atsitiktinisSkaicius = Math.floor(Math.random() * 10 + 1 );
//console.log("FLOOR" + atsitiktinisSkaicius)

////FLOOR
//let atsitiktinisSkaicius = Math.floor(Math.random() * 9 + 1 );
//console.log(atsitiktinisSkaicius);
//
////CEIL
//atsitiktinisSkaicius = Math.ceil(Math.random() * 8 + 1 );
//console.log(atsitiktinisSkaicius);
//
////ROUND
//atsitiktinisSkaicius = Math.round(Math.random() * 6 + 1 );
//console.log(atsitiktinisSkaicius);
//
////TRUNC
//atsitiktinisSkaicius = Math.trunc(Math.random() * 12 + 1 );
//console.log(atsitiktinisSkaicius);

//TIKRINIMAS PER FUNKCIJAS
//let atsitiktinisSkaicius = Math.random();
//
//atsitiktinisSkaicius *= 10;
//if (atsitiktinisSkaicius < 1) {atsitiktinisSkaicius = 1}
//if (atsitiktinisSkaicius > 10) {atsitiktinisSkaicius = 10}
//
//atsitiktinisSkaiciusF = Math.floor(atsitiktinisSkaicius);
//atsitiktinisSkaiciusC = Math.ceil(atsitiktinisSkaicius);
//atsitiktinisSkaiciusR = Math.round(atsitiktinisSkaicius);
//atsitiktinisSkaiciusT = Math.trunc(atsitiktinisSkaicius);
//
//console.log('Floor: ' + atsitiktinisSkaiciusF);
//console.log('Ceil: ' + atsitiktinisSkaiciusC);
//console.log('Round: ' + atsitiktinisSkaiciusR);
//console.log('Trunc: ' + atsitiktinisSkaiciusT);

//let i = 0;
//while (i < 16) {
//    console.log(i);

