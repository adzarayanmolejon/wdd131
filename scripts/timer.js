let timerInterval;
let remainingTime = 0;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    remainingTime = minutes * 60 + seconds;

    if (remainingTime > 0) {
        clearInterval(timerInterval);
        timerDisplay.classList.remove('expired');
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    remainingTime = 0;
    timerDisplay.textContent = formatTime(0);
    timerDisplay.classList.remove('expired');
}

function updateTimer() {
    if (remainingTime > 0) {
        remainingTime--;
        timerDisplay.textContent = formatTime(remainingTime);
    } else {
        clearInterval(timerInterval);
        timerDisplay.classList.add('expired');
        triggerVibration();
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function triggerVibration() {
    if (navigator.vibrate) {
        navigator.vibrate([500, 300, 500, 300, 500]); // Vibrate, pause, vibrate, pause, vibrate
    } else {
        console.log("Vibration not supported on this device.");
    }
}
