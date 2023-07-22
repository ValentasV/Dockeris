document.addEventListener('DOMContentLoaded', function() {

    const meniuSarasas = [
        {
            pavadinimas: 'Pagrindinis',
            nuoroda: 'index.html',
            klases: 'meniu_item',
        },
        {
            pavadinimas: 'Testas',
            nuoroda: '"test.html"',
            klases: 'meniu_item',
        },
        {
            pavadinimas: 'Pradžios puslapis',
            nuoroda: 'pradinis.html',
            klases: 'meniu_item',
        },
        {
            pavadinimas: 'Augalo informacija',
            nuoroda: 'augalas.html',
            klases: 'meniu_item',
        },
        {
            pavadinimas: 'Daržo informacija',
            nuoroda: 'daržas.html',
            klases: 'meniu_item',
        },
         {
            pavadinimas: 'Vartotojo duomenys',
            nuoroda: 'vartotojai.html',
            klases: 'meniu_item',
        },
         {
            pavadinimas: 'Kontaktai',
            nuoroda: 'contacts.html',
            klases: 'meniu_item',
        },
         {
            pavadinimas: 'Mokėjimo forma',
            nuoroda: 'payment_form.html',
            klases: 'meniu_item',
        },
          {
            pavadinimas: 'Užduotis',
            nuoroda: 'uzduotis.html',
            klases: 'meniu_item',
        },
         {
            pavadinimas: 'Skaičiai',
            nuoroda: 'SKAICIAI.html',
            klases: 'meniu_item',
        },
         {
            pavadinimas: 'Portvelis',
            nuoroda: 'portfolio.html',
            klases: 'meniu_item',
        },
          {
            pavadinimas: 'Saugojimas',
            nuoroda: 'saugojimas.html',
            klases: 'meniu_item',
        },
    ];

    let busimoMeniuDOMElementai = document.querySelectorAll('.meniu');
    let meniuHTMLas = '';

    for (let meniuElementoDuomenys of meniuSarasas) {
        let naujasMeniuElementas = '<a href="' + meniuElementoDuomenys.nuoroda +
            '" class="' + meniuElementoDuomenys.klases + '">' + meniuElementoDuomenys.pavadinimas + '</a>';
        // REZULTATAS: <a href="index.html" class="meniu_item">Pagrindinis</a>
        meniuHTMLas += naujasMeniuElementas;
    }

    for (let meniuDOMElementas of busimoMeniuDOMElementai) {
        meniuDOMElementas.innerHTML = meniuHTMLas;
    }
});