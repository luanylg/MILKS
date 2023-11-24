$(document).ready(function () {
    $('#inputTelefone').mask('(00) 0000-0000');
    $('#inputCPF').mask('000.000.000-00');
    $('#inputCEP').mask('00.000-000');
});

const selEstados = document.querySelector('#inputEstado');

fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(res => {
        return res.sort((a, b) => a.nome > b.nome ? 1 : -1)
    })
    .then(estados => {
        for (const estado of estados) {
            inputEstado.innerHTML += `<option value="${estado.nome}">${estado.nome}</option>`
        }
    })