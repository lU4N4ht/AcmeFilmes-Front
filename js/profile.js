'use strict';

const userId = localStorage.getItem('userId');

window.onload = async function loadProfile(){
    const urlUser = await fetch(`https://acmefilmes.onrender.com/v2/acmefilmes/usuario/${userId}`);
    const user = await urlUser.json();

  
        user.filme.forEach(user => {
            const container = document.getElementById('profile');

            const profilePic = document.createElement('img');
            profilePic.classList.add('foto-perfil');
            profilePic.src = user.foto_url;
            container.appendChild(profilePic);

            const mensagemInicial = document.createElement('div');
            mensagemInicial.classList.add('mensagem-inicial');

            const welcome = document.createElement('h1');
            welcome.textContent = 'Bem-vindo,';
            mensagemInicial.appendChild(welcome);

            const profileName = document.createElement('h2');
            profileName.id = 'home-name';
            profileName.textContent = user.nome;
            mensagemInicial.appendChild(profileName);

            container.appendChild(mensagemInicial);
        });
};
