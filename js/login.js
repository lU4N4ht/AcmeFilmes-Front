'use strict'

const url = 'https://acmefilmes.onrender.com/v2/acmefilmes/usuarios/';

const getUsers = async () => {
    try {
        const response = await fetch(url);
        const usuarios = await response.json();
        return usuarios;
    } catch (error) {
        alert('Houve um problema com a solicitação de login.');
        return null;
    }
};

document.getElementById('btn').addEventListener('click', async function() {

    const inputEmail = document.getElementById('email').value;
    const inputPassword = document.getElementById('password').value;

    try {
        const usuarios = await getUsers();

        if (!usuarios) {
            return; 
        }

        const usuario = usuarios.usuario.find(user => user.email === inputEmail && user.senha === inputPassword);
        if (usuario) {
            localStorage.setItem('userId', usuario.id);
            if (usuario.administrador === 1) {
                window.location.href = '../pages/cms.html';
            } else {
                window.location.href = '../pages/home.html';
            }
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    } catch (error) {
        alert('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.');
    }
});

