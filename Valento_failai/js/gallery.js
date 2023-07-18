document.addEventListener('DOMContentLoaded', function() {
    const duomenysKuriuosSaugojamIStorage = [
        {
            title: 'Darbas 1',
            img_url: 'https://picsum.photos/200/300?random=1',
            tags: ['js', 'html', 'css', 'python'],
        },
        {
            title: 'Darbas 2',
            img_url: 'https://picsum.photos/200/300?random=2',
            tags: ['js', 'python'],
        },
        {
            title: 'Darbas 3',
            img_url: 'https://picsum.photos/200/300?random=3',
            tags: ['python'],
        }
    ];

    if (localStorage.getItem('gallery') === null) {
        localStorage.setItem('gallery', JSON.stringify(duomenysKuriuosSaugojamIStorage));
    }
    galleryData = JSON.parse(localStorage.getItem('gallery'));

    let galleryDOMelement = document.querySelector('#work_gallery');

    for (let galleryElementData of galleryData) {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const span = document.createElement('span');

        img.src = galleryElementData.img_url;
        img.alt = galleryElementData.title;
        span.innerText = galleryElementData.title;

        div.append(img);
        div.append(span);

        galleryDOMelement.append(div);
    }
});
