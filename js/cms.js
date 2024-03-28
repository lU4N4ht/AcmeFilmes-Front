'use strict';

import { getFilmes, getFilme } from "./filme.js";

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('filmes-container');

    preencherCards(container);
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
        filmeCapa.style.backgroundImage = `url(${filme.foto_url})`;

        let nomeFilme = document.createElement('h1');
        nomeFilme.classList.add('nome-filme');
        nomeFilme.textContent = filme.nome;

        let controleEditar = document.createElement('div');
        controleEditar.classList.add('controle', 'editar-filme');

        let controleDeletar = document.createElement('div');
        controleDeletar.classList.add('controle', 'deletar-filme');
    

        descricaoFilme.appendChild(filmeCapa);
        descricaoFilme.appendChild(nomeFilme);
        cardFilme.appendChild(controleEditar);
        cardFilme.appendChild(controleDeletar);
        cardFilme.appendChild(descricaoFilme);
        container.appendChild(cardFilme);

        cardFilme.addEventListener('click', async () => {
            const filmeId = cardFilme.dataset.id;
            const filme = await getFilme(filmeId);
            exibirPopup(filme);
        });
    });
}
