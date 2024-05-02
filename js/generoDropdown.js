'use strict';

document.addEventListener('DOMContentLoaded', async () => {
    const generos = await getGeneros();
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const filmesContainer = document.getElementById('filmes-container');

    generos.forEach(genero => {
        const item = document.createElement('a');
        item.classList.add('dropdown-item');
        item.textContent = genero.nome;
        item.href = '../pages/categorias.html';
        item.addEventListener('click', async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const generoParam = urlParams.get('genero');
            if (generoParam) {
                await preencherCardsGenero(filmesContainer, generoParam);
            }
        });
        dropdownMenu.appendChild(item);
    });
});

async function getGeneros(){
    const url = 'https://acmefilmes.onrender.com/v2/acmefilmes/genero'
    const respose = await fetch(url)
    const data = await respose.json()
    return data.genero
}