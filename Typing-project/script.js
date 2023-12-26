document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.getElementById("text-container");
    const input = document.getElementById("input");
    const timerDisplay = document.getElementById("timer");
    const scoreDisplay = document.getElementById("score");
    const startBtn = document.getElementById("startBtn");

    let timer;
    let startTime;
    let score = 0;

    const texts = [
        "The quick brown fox jumps over the lazy dog.",
        "Programming is fun and rewarding.",
        "Practice makes perfect.",
        "Coding challenges improve problem-solving skills.",
        "Type with accuracy and speed.",
    ];

    function getRandomText() {
        return texts[Math.floor(Math.random() * texts.length)];
    }

    function updateText() {
        textContainer.textContent = getRandomText();
    }

    function startGame() {
        score = 0;
        updateText();
        input.value = "";
        startTime = Date.now();
        timer = setInterval(updateTimer, 1000);
        startBtn.disabled = true;
        input.addEventListener("input", checkInput);
    }

    function updateTimer() {
        const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
        timerDisplay.textContent = `Time: ${elapsedSeconds}s`;
    }

    function checkInput() {
        const typedText = input.value.trim();
        const targetText = textContainer.textContent.trim();

        if (typedText === targetText) {
            score++;
            updateText();
            input.value = "";
            scoreDisplay.textContent = `Score: ${score}`;
        }
    }

    function endGame() {
        clearInterval(timer);
        startBtn.disabled = false;
        input.removeEventListener("input", checkInput);
    }

    startBtn.addEventListener("click", startGame);
});
