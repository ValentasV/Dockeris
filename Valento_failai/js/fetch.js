//document.addEventListener('DOMContentLoaded', function() {
//
//    const mygtukas = document.querySelector('#mygtukas');
//    const output = document.querySelector('#output');
//
//    mygtukas.addEventListener('click', function() {
//       gautiDuomenisIsServerio();
//    });
//
//    function gautiDuomenisIsServerio() {
////        fetch('https://jsonplaceholder.typicode.com/posts')
////        fetch('/Galerija.Valentas')
//          fetch('/portfolio.html')
//            .then(response => response.json())
//            .then(data => {
//                for (let galleryElementData of data) {
//                    output.innerHTML += galleryElementData.title + ' - ';
//                }
//            });
//    }
//
//});


document.addEventListener('DOMContentLoaded', function() {

    const mygtukas = document.querySelector('#mygtukas');
    const output = document.querySelector('#output');

    mygtukas.addEventListener('click', function() {
       gautiDuomenisIsServerio();
    });

    function gautiDuomenisIsServerio() {
          fetch('Galerija.Valentas')
            .then(response => response.json())
            .then(data => {
                for (let galleryElementData of data) {
                    output.innerHTML += galleryElementData.title + ' - ';

                const imgElementas = document.createElement('img');


    imgElementas.src = galleryElementData.img_url;
    imgElementas.alt = galleryElementData.title;
    imgElementas.classList.add('Galerija.Valentas');


    const divElementas = document.createElement('div');
    divElementas.appendChild(imgElementas);
    output.appendChild(divElementas);

                }
            });
    }

});
