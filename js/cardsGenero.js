'use strict'

async function preencherCardsGenero(container, genero) {
    const filmesGenero = await getFilmeGenero(genero);

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
    const url = `https://acmefilmes.onrender.com/v2/acmefilmes/filtro/filme/genero?genero=${nomeGenero}`
    const respose = await fetch(url)
    const data = await respose.json()
    if (data.filme && data.filme.length > 0) {
        return data.filme;
    } else {
        throw new Error('Filmes não encontrados');
    }
}
