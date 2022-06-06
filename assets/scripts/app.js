


let resp = document.querySelector('div.resposta');
var resposta = document.getElementById('resposta');

function calculaImc() {
    let altura = parseInt(document.getElementById('altura').value);
    let peso = parseInt(document.getElementById('peso').value);
    let alturaFinal = altura / 100;

    if(altura == '' || peso == '') {
        resp.innerHTML = `algum campo está vazio, preencha o campos correspondentes..`
    }
    else {
        let imc = parseFloat(peso / (alturaFinal * alturaFinal).toFixed(2));
    

    if (imc < 18.5) {
        resp.innerHTML = `<p>Seu IMC é: ${imc}</p>`;
        resp.innerHTML += `abaixo do peso`;
        resposta.style.backgroundColor = '#675ef9';
        resposta.style.color = '#FFF';
    }

    else if (imc == 18.5 || imc <= 24.9) {
        resp.innerHTML = `<p>Seu IMC é: ${imc}</p>`;
        resp.innerHTML += `peso normal`;
        resposta.style.backgroundColor = '#675ef9';
        resposta.style.color = '#FFF';
    }

    else if (imc == 25.0 || imc <= 29.9) {
        resp.innerHTML = `<p>Seu IMC é: ${imc}</p>`;
        resp.innerHTML += `sobrepeso`;
        resposta.style.backgroundColor = '#aa1734';
        resposta.style.color = '#FFF';
    }

    else if (imc == 30.0 || imc <= 34.9) {
        resp.innerHTML = `<p>Seu IMC é: ${imc}</p>`;
        resp.innerHTML += `obesidade de grau 1`;
        resposta.style.backgroundColor = '#ff0000';
        resposta.style.color = '#FFF';
    }

    else if (imc == 35.0 || imc <= 39.9) {
        resp.innerHTML = `<p>Seu IMC é: ${imc}</p>`;
        resp.innerHTML += `obesidade de grau 2`;
        resposta.style.backgroundColor = '#ff0000';
        resposta.style.color = '#FFF';
    }

    else if (imc > 40) {
        resp.innerHTML = `<p>Seu IMC é: ${imc}</p>`;
        resp.innerHTML += `obesidade de grau 3`;
        resposta.style.backgroundColor = '#ff0000';
        resposta.style.color = '#FFF';
    }

    }
}

let btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calculaImc);

function limpar() {
    let outaltura = parseInt(altura.value)
    let outpeso = parseInt(peso.value)

        resp.innerHTML = '';
        resposta.style.backgroundColor = '';
        if (outaltura == '' || outpeso == '') {
            resp.innerHTML = `Os campos ja estão vazios`;
        } else {
            altura.value = '';
            peso.value = '';
        }

}

let btnlimpar = document.getElementById('btnlimpar');
btnlimpar.addEventListener('click', limpar);
