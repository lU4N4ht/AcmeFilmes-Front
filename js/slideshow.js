'use strict';

import { getFilmes } from "./filme.js";

document.addEventListener('DOMContentLoaded', async function () {
    const container = document.getElementById('slide-container');
    const filmes = await getFilmes();
    const slides = preencherSlideShow(container, filmes);
    iniciarSlideShow(slides);
});

function preencherSlideShow(container, filmes) {
    const slides = filmes.map(filme => {
        const slideshow = document.createElement('div');
        slideshow.classList.add('slideshow');
        slideshow.style.backgroundImage = `url(${filme.foto_poster})`;

        const nomeFilme = document.createElement('h1');
        nomeFilme.classList.add('nome-filme');
        nomeFilme.textContent = filme.nome;

        const descricaoFilme = document.createElement('p');
        descricaoFilme.classList.add('descricao-filme');
        descricaoFilme.textContent = filme.sinopse;

        const learnMoreButton = document.createElement('button');
        learnMoreButton.classList.add('learn-more');

        const circleSpan = document.createElement('span');
        circleSpan.classList.add('circle');
        circleSpan.setAttribute('aria-hidden', 'true');

        const arrowSpan = document.createElement('span');
        arrowSpan.classList.add('icon', 'arrow');

        const buttonTextSpan = document.createElement('span');
        buttonTextSpan.classList.add('button-text');
        buttonTextSpan.textContent = 'Veja mais';

        learnMoreButton.appendChild(circleSpan);
        circleSpan.appendChild(arrowSpan);
        learnMoreButton.appendChild(buttonTextSpan);

        learnMoreButton.addEventListener('click', () => {
            window.location.href = '../pages/filmes.html'; // Redirecionamento ao clicar
        });

        slideshow.appendChild(nomeFilme);
        slideshow.appendChild(descricaoFilme);
        slideshow.appendChild(learnMoreButton);

        container.appendChild(slideshow);

        return slideshow;
    });

    return slides;
}

function iniciarSlideShow(slides) {
    let indice = 0;

    setInterval(() => {
        slides.forEach((slide, index) => {
            if (index === indice) {
                slide.style.display = 'flex';
            } else {
                slide.style.display = 'none';
            }
        });

        indice = (indice + 1) % slides.length;
    }, 5000); 
}