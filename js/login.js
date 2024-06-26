'use strict'
const btnLogin = document.getElementById('btn');

async function loginValidation() {
   
    const inputEmail = document.getElementById('email').value;
    const inputPassword = document.getElementById('password').value;

    let userStatus = false; 

    const getUsers = async () => {
        const url = 'https://acmefilmes.onrender.com/v2/acmefilmes/usuarios/';
        try {
            const response = await fetch(url);
            const usuarios = await response.json();
            return usuarios;
        } catch (error) {
            alert('Houve um problema com a solicitação de login.');
            return null;
        }
    };

    const usuarios = await getUsers();

    usuarios.forEach(function (user) {

        if(user.email === inputEmail && user.senha === inputPassword) {
            userStatus = true;
            if (user) {
                localStorage.setItem('userId', user.id);
                if (user.administrador === 1) {
                    window.location.href = '../pages/cms.html';
                } else {
                    window.location.href = '../pages/home.html';
                }
            } else {
                alert('Credenciais inválidas. Tente novamente.');
            }
        } 
    });

    if (!userStatus) {
        alert('Credenciais inválidas. Tente novamente.');
    }
}

btnLogin.addEventListener('click', loginValidation);
