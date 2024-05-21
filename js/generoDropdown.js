'use strict';

document.addEventListener('DOMContentLoaded', async () => {
    const generos = await getGeneros();
    const dropdownMenu = document.querySelector('.dropdown-menu');
    generos.forEach(genero => {
        const item = document.createElement('a');
        item.classList.add('dropdown-item');
        item.textContent = genero.nome;
        item.href = '../pages/categorias.html';
        item.addEventListener('click', async () => {
            localStorage.setItem('generoNome', genero.nome);
        });
        dropdownMenu.appendChild(item);
    });
});

async function getGeneros(){
    const url = 'https://acmefilmes.onrender.com/v2/acmefilmes/genero';
    const response = await fetch(url);
    const data = await response.json();
    return data.genero;
}