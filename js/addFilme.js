'use strict';
import { postFilme } from "./filme.js";

const adicionarBotao = document.getElementById('btn');

adicionarBotao.addEventListener('click', enviarDados);

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
        inputNome === '' ||
        inputSinopse === '' ||
        inputFotoCapa === '' ||
        inputFotoPoster === '' ||
        inputDataLancamento === '' ||
        inputDuracao === '' ||
        inputValorUnitario === ''
    ) {
        alert('ERRO: Não é possível enviar, dados obrigatórios');
    } else {
        try {
            const filme = {
                nome: inputNome,
                sinopse: inputSinopse,
                duracao: converterDuracaoParaMinutos(inputDuracao),
                data_lancamento: formatarData(inputDataLancamento),
                data_relancamento: formatarData(inputDataRelancamento),
                foto_capa: inputFotoCapa,
                valor_unitario: inputValorUnitario,
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

function converterDuracaoParaMinutos(duracao) {
    const [horas, minutos] = duracao.split(':');
    const horasEmMinutos = parseInt(horas, 10) * 60;
    const minutosInt = parseInt(minutos, 10);
    return horasEmMinutos + minutosInt;
}

function formatarData(dataString) {
    const data = new Date(dataString);
    return data.toISOString().split('T')[0];
}

