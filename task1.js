const minEle = document.getElementById('min');
const secEle = document.getElementById('sec');
let min = parseInt(minEle.textContent);
let sec = parseInt(secEle.textContent);
let timerId;

function getModifiedTime(time) {
    return time < 10 ? `0${time}` : time;
}

function start() {
    timerId = setInterval(() => {
        if (min === 0 && sec === 0) {
            clearInterval(timerId);
            return;
        }
        if (sec === 0) {
            sec = 59;
            min -= 1;
        } else {
            sec -= 1;
        }
        minEle.textContent = getModifiedTime(min);
        secEle.textContent = getModifiedTime(sec);
    }, 1000);
}

const stop = function () {
    clearInterval(timerId);
};

const reset = () => {
    clearInterval(timerId);
    min = 25;
    sec = 0;
    minEle.textContent = getModifiedTime(min);
    secEle.textContent = getModifiedTime(sec);
};
