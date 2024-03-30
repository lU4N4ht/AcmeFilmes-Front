'use strict';
import { postFilme } from "./filme.js";

const adicionarBotao = document.getElementById('btn');

adicionarBotao.addEventListener('click', enviarDados);

function formatarData(dataString) {
    const data = new Date(dataString);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();

    return `${ano}-${mes}-${dia}`;
}

function formatarTempo(tempoString) {
    const [horas, minutos] = tempoString.split(':');
    return `${horas.padStart(2, '0')}:${minutos.padStart(2, '0')}:00`;
}

function formatarValor(valor) {
    return parseFloat(valor).toFixed(2);
}

async function enviarDados() {
    const inputNome = document.getElementById('nome').value;
    const inputSinopse = document.getElementById('sinopse').value;
    const inputFotoCapa = document.getElementById('foto_capa').value;
    const inputFotoPoster = document.getElementById('foto_poster').value;
    const inputDataLancamento = document.getElementById('data_lancamento').value;
    const inputDataRelancamento = document.getElementById('data_relancamento').value;
    const inputDuracao = document.getElementById('duracao').value;
    const inputValorUnitario = document.getElementById('valor_unitario').value;

    if (
        inputNome == '' ||
        inputSinopse == '' ||
        inputFotoCapa == '' ||
        inputFotoPoster == '' ||
        inputDataLancamento == '' ||
        inputDuracao == '' ||
        inputValorUnitario == ''
    ) {
        alert('ERRO: Não é possível enviar, dados obrigatórios');
    } else {
        try {
            const filme = {
                nome: inputNome,
                sinopse: inputSinopse,
                duracao: formatarTempo(inputDuracao),
                data_lancamento: formatarData(inputDataLancamento),
                data_relancamento: inputDataRelancamento ? formatarData(inputDataRelancamento) : null,
                foto_capa: inputFotoCapa,
                valor_unitario: formatarValor(inputValorUnitario),
                foto_poster: inputFotoPoster,
            };

            const response = await postFilme(filme);
            if (response) {
                alert('Dados enviados com sucesso!');
                window.location.reload();
            } else {
                alert('Erro ao enviar os dados');
            }
        } catch (error) {
            alert('Erro ao enviar os dados');
        }
    }
}


