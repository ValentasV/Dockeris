const ManoVardas = "Valentas Valionis";

const ManoVardasDOM = document.getElementById("ManoVardas");

ManoVardasDOM.innerHTML = ManoVardas;



const Titulinis = "Titulinis puslapis";

const TitulinisDOM = document.querySelector(".Titulinis");

TitulinisDOM.innerHTML = "Titulinis puslapis";




const Puslapiukas = "NAUJAS";

const PuslapiukasDOM = document.querySelector("#Puslapiukas");

PuslapiukasDOM.innerHTML = "NAUJAS";


const Listo_numeriai = document.querySelectorAll("#listas li");
    for (let c = 0; c < Listo_numeriai.length; c += 1) {
        let listas = Listo_numeriai[c];
        let numeris = Math.floor(Math.random() * 10 + 10 );
    listas.innerHTML = "Random numeris: " + numeris;
}

//Suskaičiuoti kiek mūsų HTML faile yra <img> tagų. Rezultatas išvedamas konsolėje.
const images = document.getElementsByTagName('img');
const imgKiekis = images.length;
console.log("HTML faile yra " + imgKiekis + " <img> tagai.");


//Tą patį rezultatą išvesti į elementą kurio id="uuid". (pvz.: "Šiame puslapyje yra 8 paveikslėliai")

const elementas = document.getElementById("uuid");
const atsakymas = (`Šiame puslapyje yra ${imgKiekis} paveikslėlių`);
elementas.innerHTML = atsakymas



//Paspaudus mygtuką, Window Alert'e atspausdinti paveikslėlių kiekį.

const mygtukoElementas = document.querySelector("button");
mygtukoElementas.addEventListener('click', () => alert(atsakymas));


//Pakeisti kas antro paveikslėlio alt atributo reikšmę į žodį "testas".

for (let x = 0; x < imgKiekis; x += 2) {
    let paveikslelis = images[x];
    //Alternatyva  paveikslelis.setAttribute("alt", "Testas");
    paveikslelis.alt = "Testas"
}


//Elementui su "uuid" id reikšme, pakeisti css į
//{font-size: 24px; background-color: green; width: 200px; height:200px;}
elementas.style.fontSize = "24px";
elementas.style.backgroundColor = "green";
elementas.style.width = "200px";
elementas.style.height = "200px";
 //Alternatyva    elementas.style = "font-size: 24px; background-color: green; width: 200px; height: 200px;"


//// 1 uzduotis
//let imgTagai = document.getElementsByTagName('img');
//let imgTaguSkaicius = imgTagai.length;
//console.log("HTML faile yra " + imgTaguSkaicius + " <img> tagai.");
//// 2 uzduotis
//let elementas = document.getElementById('uuid');
//elementas.textContent = "Šiame faile yra " + imgTaguSkaicius + " <img> tagai.";
//console.log(elementas.textContent);
////3 uzduotis
//let mygtukas = document.querySelector('button');
//mygtukas.addEventListener('click', function() {
//  window.alert("Paveikslėlių kiekis: " + imgTaguSkaicius);
//});
////4 uzduotis
//let paveiksleliai = document.querySelectorAll('img');
//for (let i = 0; i < paveiksleliai.length; i += 2) {
//  paveiksleliai[i].setAttribute('alt', 'testas');
//}
//////5 uzduotis
//elementas.style.fontSize = '24px';
//elementas.style.backgroundColor = 'green';
//elementas.style.width = '200px';
//elementas.style.height = '200px';



