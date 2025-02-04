    /*var audio = document.getElementById("audio");
    var pause = document.getElementById("pause");
    var playPauseText = document.getElementById("play-pause-text");

    pause.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            pause.classList.remove("fa-play");
            pause.classList.add("fa-pause");
            playPauseText.textContent = "Pause";
        } else {
            audio.pause();
            pause.classList.remove("fa-pause");
            pause.classList.add("fa-play");
            playPauseText.textContent = "Play";
        }
    });*/

    /*let horas = 2;
    let minutos = 0;
    let segundos = 0;
    cargarSegundos();

//Definimos y ejecutamos los segundos
    function cargarSegundos(){
    let txtSegundos;
  
    if(segundos < 0){
    segundos = 59;
    }
  
//Mostrar Segundos en pantalla
    if(segundos < 10){
    txtSegundos = `0${segundos}`;
    }else{
    txtSegundos = segundos;
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos --;
  
    cargarMinutos(segundos);
}

//Definimos y ejecutamos los minutos
function cargarMinutos(segundos){
    let txtMinutos;
  
    if(segundos == -1 && minutos !== 0){
    setTimeout(() => {
        minutos--;
    },500)
    }else if(segundos == -1 && minutos == 0){
    setTimeout(() => {
    minutos = 59;
    },500)
    }
  
//Mostrar Minutos en pantalla
    if(minutos < 10){
    txtMinutos = `0${minutos}`;
    }else{
    txtMinutos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMinutos;
    cargarHoras(segundos,minutos);
}

//Definimos y ejecutamos las horas
function cargarHoras(segundos,minutos){
    let txtHoras;
  
    if(segundos == -1 && minutos == 0 && horas !== 0){
    setTimeout(() => {
    horas--;
    },500)
    }else if(segundos == -1 && minutos == 0 && horas == 0){
    setTimeout(() => {
    horas = 2;
    },500)
    }
  
//Mostrar Horas en pantalla
    if(horas < 10){
    txtHoras = `0${horas}`;
    }else{
    txtHoras = horas;
    }
    document.getElementById('horas').innerHTML = txtHoras;
}

//Ejecutamos cada segundo
setInterval(cargarSegundos, 1000);*/

let fecha = new Date(2025, 2, 29);
let msFecha = fecha.getTime();

let parrafoDias = document.querySelector("#dias");
let parrafoHoras = document.querySelector("#horas");
let parrafoMinutos = document.querySelector("#minutos");
let parrafoSegundos = document.querySelector("#segundos");
let spanFecha = document.querySelector("#fecha");
let cuentaAtras = document.querySelector("#cuenta-atras");

spanFecha.innerText = fecha.toLocaleDateString();

let intervalo = setInterval(() => {

    let hoy = new Date().getTime();

    let distancia = msFecha - hoy;

    let msPorDia = 1000 * 60 * 60 * 24;
    let msPorHora = 1000 * 60 * 60;
    let msPorMinuto = 1000 * 60;
    let msPorSegundo = 1000;

    let dias = Math.floor(distancia / msPorDia);
    let horas = Math.floor((distancia % msPorDia) / msPorHora);
    let minutos = Math.floor((distancia % msPorHora) / msPorMinuto);
    let segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo);

    
    parrafoDias.innerText = dias;
    parrafoHoras.innerText = horas < 10 ? "0" + horas : horas;
    parrafoMinutos.innerText = minutos < 10 ? "0" + minutos : minutos;
    parrafoSegundos.innerText = segundos < 10 ? "0" + segundos : segundos;


    if (distancia < 0) {
        clearInterval(intervalo);
        cuentaAtras.innerHTML = "<p class='grande'>¡Ya llegamos!</p>"
    }
    
}, 1000)