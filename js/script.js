const minutesEL = document.querySelector("#minutes");
const secondsEL = document.querySelector("#seconds");
const milesecondsEL = document.querySelector("#mileseconds");
const startbtn = document.querySelector("#startbtn");
const pausebtn = document.querySelector("#pausebtn");
const resumebtn = document.querySelector("#resumebtn");
const restbtn = document.querySelector("#restbtn");

let interval;
let minutes = 0;
let seconds = 0;
let mileseconds = 0;
let ispause = false; 

startbtn.addEventListener("click", startTime);
pausebtn.addEventListener("click", pauseTimer);
resumebtn.addEventListener("click", resumeTimer);
restbtn.addEventListener("click", resetTimer);



function startTime() {
    interval = setInterval(() => {
        if (!ispause) {
            mileseconds += 10;

            if (mileseconds === 1000) {
                seconds++;
                mileseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEL.textContent = formatTime(minutes);
            secondsEL.textContent = formatTime(seconds);
            milesecondsEL.textContent = formatMilliseconds(mileseconds);
        }
        startbtn.style.display = "none";
        pausebtn.style.display = "block";
    }, 10);
}

function pauseTimer() {
    ispause = true;
    pausebtn.style.display = "none";
    resumebtn.style.display = "block";
}

function resumeTimer() {
    ispause = false;
    pausebtn.style.display = "block"
    resumebtn.style.display = "none"
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    mileseconds = 0;

    minutesEL.textContent = "00";
    secondsEL.textContent = "00";
    milesecondsEL.textContent = "000";

    startbtn.style.display = "block";
    pausebtn.style.display = "none";
    resumebtn.style.display = "none";
}


function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}
