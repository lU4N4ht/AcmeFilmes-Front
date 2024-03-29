'use strict';

const filmeId = localStorage.getItem('filmeId');
import { getFilme } from "./filme.js";

window.onload = async function carregarFilme() {
    const filme = await getFilme(filmeId);

    const nomeFilme = document.getElementById('nome');
    nomeFilme.value = filme.nome;

    const sinopseFilme = document.getElementById('sinopse');
    sinopseFilme.value = filme.sinopse;

    const fotoCapaFilme = document.getElementById('foto_capa');
    fotoCapaFilme.value = filme.foto_capa;

    const fotoPosterFilme = document.getElementById('foto_poster');
    fotoPosterFilme.value = filme.foto_poster;

    const dataLancamentoFilme = document.getElementById('data_lancamento');
    dataLancamentoFilme.value = filme.data_lancamento.split('T')[0];

    const dataRelancamentoFilme = document.getElementById('data_relancamento');
    dataRelancamentoFilme.value = filme.data_relancamento ? filme.data_relancamento.split('T')[0] : '';

    const duracaoFilme = document.getElementById('duracao');
    duracaoFilme.value = filme.duracao.split('T')[1].slice(0, -1);

    const valorUnitarioFilme = document.getElementById('valor_unitario');
    valorUnitarioFilme.value = filme.valor_unitario;
}

const confirmarBotao = document.getElementById('btn');

confirmarBotao.addEventListener('click', atualizarDados);

async function atualizarDados(){

    const inputNome = document.getElementById('nome').value;
    const inputSinopse = document.getElementById('sinopse').value;
    const inputFotoCapa = document.getElementById('foto_capa').value;
    const inputFotoPoster = document.getElementById('foto_poster').value;
    const inputDataLancamento = document.getElementById('data_lancamento').value;
    const inputDataRelancamento = document.getElementById('data_relancamento').value;
    const inputDuracao = document.getElementById('duracao').value;
    const inputValorUnitario = document.getElementById('valor_unitario').value;

    if(inputNome === '' || inputSinopse === '' || inputFotoCapa === '' || inputFotoPoster === '' || inputDataLancamento === '' || inputDuracao === '' || inputValorUnitario === ''){

        alert('ERRO: Não é possivel remover dados obrigatórios');

    } else {
        try {
            
            const _data = {
                nome: inputNome,
                sinopse: inputSinopse,
                duracao: inputDuracao,
                data_lancamento: inputDataLancamento,
                data_relancamento: inputDataRelancamento,
                foto_capa: inputFotoCapa,
                valor_unitario: inputValorUnitario,
                foto_poster: inputFotoPoster,
            };

            const _url = `https://acmefilmes.onrender.com/v2/acmefilmes/atualiza/filme/${filmeId}`;

            const _options = {
                method: 'PUT',
                body: JSON.stringify(_data),
                headers: { "Content-type": "application/json; charset=UTF-8" },
                mode: 'cors',
                redirect: 'follow',
                cache: 'default'
            };

            const response = await fetch(_url, _options);
            if (response.ok) {
                alert('Dados atualizados com sucesso !');
                window.location.reload();
            } else {
                alert('Erro ao atualizar os dados');
            }

        } catch (error) {
            
            alert('Erro ao atualizar os dados');
        }
    }
}



const deletarBotao = document.getElementById('btn-deletar');

deletarBotao.addEventListener('click', deletarFilme);


async function deletarFilme() {
    try {
        const _url = `https://acmefilmes.onrender.com/v2/acmefilmes/deletar/filme/${filmeId}`;

        const _options = {
            method: 'DELETE',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            mode: 'cors',
            redirect: 'follow',
            cache: 'default'
        };

        const response = await fetch(_url, _options);
        if (response.ok) {

            alert('Filme deletado com sucesso !');

            window.location.href = '../pages/cms.html';
        } else {

            alert('Erro ao deletar o filme');
        }

    } catch (error) {
        alert('Erro ao deletar o filme');
    }
}

