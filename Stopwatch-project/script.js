let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let toggleModeButton = document.getElementById('toggleMode');
let toggleFullscreenButton = document.getElementById('toggleFullscreen');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;
let darkMode = false;

startButton.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopButton.addEventListener('click', function () {
    timer = false;
});

resetButton.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    updateDisplay();
});

toggleModeButton.addEventListener('click', function () {
    darkMode = !darkMode;
    applyDarkMode();
});

toggleFullscreenButton.addEventListener('click', function () {
    toggleFullScreen();
});

function stopWatch() {
    if (timer) {
        count++;
        if (count == 100) {
            second++;
            count = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
        updateDisplay();
        setTimeout(stopWatch, 10);
    }
}

function updateDisplay() {
    let hourString = hour < 10 ? "0" + hour : hour;
    let minuteString = minute < 10 ? "0" + minute : minute;
    let secondString = second < 10 ? "0" + second : second;
    let countString = count < 10 ? "0" + count : count;

    document.getElementById('hour').innerHTML = hourString;
    document.getElementById('minute').innerHTML = minuteString;
    document.getElementById('second').innerHTML = secondString;
    document.getElementById('count').innerHTML = countString;
}

function applyDarkMode() {
    if (darkMode) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#f0f0f0';
        document.body.style.color = '#333';
    }
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
