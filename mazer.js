const audio = new Audio();
const generateBtn = document.getElementById("generate");
const stopBtn = document.getElementById("stop");
const genreSelect = document.getElementById("genre");
const loading = document.getElementById("loading");
const canvas = document.getElementById("visualizer");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 150;

// Preload Sample Music
const genreMusic = {
    trending: "assets/sound1.mp3",
    pop: "assets/sound2.mp3",
    edm: "assets/sound1.mp3",
    hiphop: "assets/sound2.mp3",
    jazz: "assets/sound1.mp3"
};

// Generate Music Function
generateBtn.addEventListener("click", () => {
    const genre = genreSelect.value;
    audio.src = genreMusic[genre];
    
    // Show Loading
    loading.style.display = "block";
    generateBtn.disabled = true;

    setTimeout(() => {
        audio.play();
        visualize();
        generateBtn.disabled = false;
        loading.style.display = "none";
        stopBtn.disabled = false;
    }, 2000); // Simulating AI Tune Generation
});

// Stop Music
stopBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    stopBtn.disabled = true;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Visualizer
function visualize() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let bars = 50;
    for (let i = 0; i < bars; i++) {
        let height = Math.random() * 100;
        let x = (i * 8);
        ctx.fillStyle = "lime";
        ctx.fillRect(x, 150 - height, 6, height);
    }
    requestAnimationFrame(visualize);
}

