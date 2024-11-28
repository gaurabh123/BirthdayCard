document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("background-music");
    const playButton = document.getElementById("play-music");

    const isMusicPlaying = localStorage.getItem("musicPlaying") === "true";
    playButton.textContent = isMusicPlaying ? "Pause Music 🎵" : "Play Music 🎵";

    playButton.addEventListener("click", () => {
        if (music.paused) {
            music.play().catch((err) => console.error("Music playback error:", err));
            playButton.textContent = "Pause Music 🎵";
            localStorage.setItem("musicPlaying", "true");
        } else {
            music.pause();
            playButton.textContent = "Play Music 🎵";
            localStorage.setItem("musicPlaying", "false");
        }
    });

    function createBalloon() {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");

        const colors = ["red", "blue", "yellow", "green", "purple", "pink", "orange"];
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        const size = Math.random() * 10 + 20;
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size + 10}px`;

        const startDirection = Math.random() < 0.5 ? "horizontal" : "vertical";
        if (startDirection === "horizontal") {
            balloon.style.left = Math.random() > 0.5 ? "-50px" : `${window.innerWidth + 50}px`;
            balloon.style.top = `${Math.random() * window.innerHeight}px`;
        } else {
            balloon.style.top = Math.random() > 0.5 ? "-50px" : `${window.innerHeight + 50}px`;
            balloon.style.left = `${Math.random() * window.innerWidth}px`;
        }

        const duration = Math.random() * 3 + 4;
        balloon.style.animationDuration = `${duration}s`;

        document.body.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, duration * 1000);
    }

    setInterval(createBalloon, 300);
});