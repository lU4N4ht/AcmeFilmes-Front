'use strict';

import { getFilmes} from "./filme.js";

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('filmes-container');

    preencherCards(container);

    document.querySelectorAll('.editar-filme').forEach(controleEditar => {
        controleEditar.addEventListener('click', function () {
            window.location.href = '../pages/addFilme.html';
        });
    });

    const botaoAdd = document.getElementById('btn');
    botaoAdd.addEventListener('click', function () {
        window.location.href = '../pages/addFilme.html';
    });
});

async function preencherCards(container) {
    const filmes = await getFilmes();

    filmes.forEach(filme => {
        let cardFilme = document.createElement('div');
        cardFilme.classList.add('card-filme');

        let descricaoFilme = document.createElement('div');
        descricaoFilme.classList.add('descricao-filme');

        let filmeCapa = document.createElement('div');
        filmeCapa.classList.add('filme-capa');
        filmeCapa.style.backgroundImage = `url(${filme.foto_capa})`;

        let nomeFilme = document.createElement('h1');
        nomeFilme.classList.add('nome-filme');
        nomeFilme.textContent = filme.nome;

        descricaoFilme.appendChild(filmeCapa);
        descricaoFilme.appendChild(nomeFilme);

        cardFilme.appendChild(descricaoFilme);

        cardFilme.dataset.id = filme.id; 

        container.appendChild(cardFilme);

        cardFilme.addEventListener('click', function() {
            const filmeId = filme.id;
            localStorage.setItem('filmeId', filmeId);
            window.location.href = '../pages/editarFilme.html';
        });
    });
}

