'use strict';

import { getFilmes, getFilme } from "./filme.js";
import { exibirPopup } from "./popup.js";

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('filmes-container');

    preencherCards(container);
});

async function preencherCards(container) {
    const filmes = await getFilmes();

    filmes.forEach(filme => {
        let cardFilme = document.createElement('div');
        cardFilme.classList.add('card-filme');
        cardFilme.dataset.id = filme.id; 

        let filmeCapa = document.createElement('div');
        filmeCapa.classList.add('filme-capa');
        filmeCapa.style.backgroundImage = `url(${filme.foto_capa})`;

        let filmeNome = document.createElement('p');
        filmeNome.classList.add('filme-nome');
        filmeNome.textContent = filme.nome;

        cardFilme.appendChild(filmeCapa);
        cardFilme.appendChild(filmeNome);

        container.appendChild(cardFilme);

        cardFilme.addEventListener('click', async () => {
            const filmeId = cardFilme.dataset.id;
            const filme = await getFilme(filmeId);
            exibirPopup(filme);
        });
    });
}


