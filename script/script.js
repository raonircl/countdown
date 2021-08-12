'use strict'

const formaTempo = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById("segundos");
    const minutos = document.getElementById("minutos");
    const horas = document.getElementById("horas");
    const dias = document.getElementById("dias");

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor((tempo % (60 * 60 * 24 * 365)) / (60 * 60 * 24));

    segundos.textContent = formaTempo(qtdSegundos);
    minutos.textContent = formaTempo(qtdMinutos);
    horas.textContent = formaTempo(qtdHoras);
    dias.textContent = formaTempo(qtdDias);
}
const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);
   
    const contar = () => {
        console.log(tempo)
        tempo--;
        if (tempo == 0) {
            pararContagem();
            //tempo = 0;        
        }
        atualizar(tempo)    
    }
    const id = setInterval(contar,1000);
}

const tempoRestante = () =>{
    const dataEvento = new Date ("2021-10-09 00:00:00");
    const hoje = Date.now();
    return (dataEvento - hoje)
}
contagemRegressiva(tempoRestante());