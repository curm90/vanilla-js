const daysEl = document.querySelector('.days');
const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');

function countdown() {
  const now = new Date().getTime();
  const newYears = new Date('1 jan 2021').getTime();

  const totalSeconds = (newYears - now) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600 / 24) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.textContent = formatTime(days);
  hoursEl.textContent = formatTime(hours);
  minutesEl.textContent = formatTime(minutes);
  secondsEl.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(() => {
  countdown();
}, 1000);
