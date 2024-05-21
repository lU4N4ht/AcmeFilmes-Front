'use strict'

async function preencherCardsGenero() {
    const nomeGenero = localStorage.getItem('generoNome');
    if (!nomeGenero) {
        console.error('Genero não encontrado no localStorage');
        return;
    }

    const filmesGenero = await getFilmeGenero(nomeGenero);
    console.log('Filmes:', filmesGenero);

    const container = document.getElementById('filmes-container');
    container.innerHTML = '';

    filmesGenero.forEach(filme => {
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

async function getFilmeGenero(nomeGenero){
    const url = `https://acmefilmes.onrender.com/v2/acmefilmes/filtro/filme/genero?genero=${nomeGenero}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.filme && data.filme.length > 0) {
            return data.filme;
        } else {
            console.log('Filmes não encontrados');
            return [];
        }
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        return [];
    }
}

preencherCardsGenero();
