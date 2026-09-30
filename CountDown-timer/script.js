"strict mode";

const hoursEl = document.getElementById("hours");
const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYearsDate = "17 May 2027";

function countdown() {
  const newYeardate = new Date(newYearsDate);
  const currentDate = new Date();

  const totalSeconds = (newYeardate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);
  const months = Math.floor(totalSeconds / 3600 / 24 / 30);

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  monthsEl.innerHTML = formatTime(months);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);

  console.log(days, hours, minutes, seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);
