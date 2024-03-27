'use strict';

// popup.js
export async function exibirPopup(filme) {
    const popup = document.getElementById('popup');
    popup.innerHTML = '';

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    const header = document.createElement('div');
    header.classList.add('header');

    const closeButton = document.createElement('div');
    closeButton.classList.add('button');
    closeButton.textContent = 'X';

    const titulo = document.createElement('h1');
    titulo.textContent = filme.nome;

    const infoFilme = document.createElement('div');
    infoFilme.classList.add('info-filme');

    const capaFilme = document.createElement('div');
    capaFilme.classList.add('capa-filme');
    capaFilme.style.backgroundImage = `url(${filme.foto_capa})`;

    const content = document.createElement('div');
    content.classList.add('content');

    const infoNome = criarInfoElemento('Nome:', filme.nome);
    const infoSinopse = criarInfoElemento('Sinopse:', filme.sinopse);
    const infoDuracao = criarInfoElemento('Duração:', filme.duracao);
    const infoDataLancamento = criarInfoElemento('Data de Lançamento:', filme.data_lancamento);
    const infoValorUnitario = criarInfoElemento('Valor unitário:', filme.valor_unitario);

    header.appendChild(closeButton);
    header.appendChild(titulo);

    content.appendChild(infoNome);
    content.appendChild(infoSinopse);
    content.appendChild(infoDuracao);
    content.appendChild(infoDataLancamento);
    content.appendChild(infoValorUnitario);

    infoFilme.appendChild(capaFilme);
    infoFilme.appendChild(content);

    popupContent.appendChild(header);
    popupContent.appendChild(infoFilme);

    popup.appendChild(popupContent);

    closeButton.addEventListener('click', function () {
        popup.classList.remove('show');
    });

    popup.classList.add('show');
}

function criarInfoElemento(titulo, texto) {
    const info = document.createElement('div');
    info.classList.add('info');

    const infoTitulo = document.createElement('h2');
    infoTitulo.textContent = titulo;

    const infoTexto = document.createElement('p');
    infoTexto.textContent = texto;

    info.appendChild(infoTitulo);
    info.appendChild(infoTexto);

    return info;
}
