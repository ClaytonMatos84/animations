function init() {
    const moveElement1 = document.getElementById('moveConteudo1');
    const moveElement2 = document.getElementById('moveConteudo2');
    const moveElement3 = document.getElementById('moveConteudo3');
    const moveElement4 = document.getElementById('moveConteudo4');
    const arrayElements = [moveElement1, moveElement2, moveElement3, moveElement4];

    function moveContent(element, index) {
        const property = (index % 2 == 0) ? 'marginLeft' : 'marginRight';
        if (element.style[property] != '0px' &&
            element.getBoundingClientRect().top > 0 &&
            ((element.getBoundingClientRect().top + 70) <= window.innerHeight)) {
            element.style[property] = '0';
        } else if (element.style[property] != '-800px' &&
            element.getBoundingClientRect().bottom > 0 &&
            ((element.getBoundingClientRect().bottom - (element.getBoundingClientRect().height + 140)) + element.getBoundingClientRect().height < 0 ||
                element.getBoundingClientRect().bottom >= (window.innerHeight + element.getBoundingClientRect().height - 80))) {
            element.style[property] = '-800px';
        }
    }

    const imgHelper1 = document.getElementById('imgHelper1');
    const imgHelper2 = document.getElementById('imgHelper2');
    const imgHelper3 = document.getElementById('imgHelper3');
    const imgHelper4 = document.getElementById('imgHelper4');

    function hiddenHelperImg() {
        if ((imgHelper1.style.opacity != 0 || imgHelper1.style.opacity == '') &&
            (imgHelper1.getBoundingClientRect().top <= 350 && imgHelper1.getBoundingClientRect().top > 20)) {
            imgHelper1.style.opacity = '0';
            imgHelper2.style.opacity = '1';

            imgHelper3.style.opacity = '0';
            imgHelper4.style.opacity = '1';
        } else if ((imgHelper1.style.opacity != 1 || imgHelper1.style.opacity == '') &&
            (imgHelper1.getBoundingClientRect().top > 350 || imgHelper1.getBoundingClientRect().top <= 20)) {
            imgHelper1.style.opacity = '1';
            imgHelper2.style.opacity = '0';

            imgHelper3.style.opacity = '1';
            imgHelper4.style.opacity = '0';
        }
    }


    window.addEventListener('scroll', () => {
        arrayElements.forEach((element, index) => {
            moveContent(element, index);
        });

        hiddenHelperImg();
    });

    const actualYear = document.getElementById('anoAtual');
    actualYear.textContent = new Date().getFullYear();
}

window.addEventListener('load', this.init);
