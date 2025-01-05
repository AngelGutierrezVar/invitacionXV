    var audio = document.getElementById("audio");
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
    });