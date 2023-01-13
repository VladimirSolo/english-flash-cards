const circle = document.querySelector('.progress_circle');
const radius = circle.r.baseVal.value;
const lengthCircle = 2 * Math.PI * radius;
// numbers
const trueStatus = document.querySelector('.trueStatus');
const falseStatus = document.querySelector('.falseStatus');
const sum = Number(trueStatus.textContent) + Number(falseStatus.textContent);
const perc = Math.floor((trueStatus.textContent * 100) / sum);
// add numbers to style
circle.style.strokeDasharray = `${lengthCircle} ${lengthCircle}`;
circle.style.strokeDashoffset = lengthCircle;
// function find percent
function setProgress(percent) {
  const offset = lengthCircle - (percent / 100) * lengthCircle;
  circle.style.strokeDashoffset = offset;
}

setProgress(perc);
