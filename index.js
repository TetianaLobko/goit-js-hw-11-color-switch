const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body');

startBtnRef.addEventListener('click', onStartChanging);
stopBtnRef.addEventListener('click', onStopChanging);

let intervalId = null;

function onStartChanging() {
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
  }, 1000);
  startBtnRef.disabled = true;
}

function onStopChanging() {
  clearInterval(intervalId);
  startBtnRef.disabled = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};






