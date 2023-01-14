const circle = document.querySelectorAll('.progress_circle');
const text = document.querySelectorAll('text');

circle.forEach((el, i) => {
  // take radius
  const radius = el.r.baseVal.value;
  // find circumference
  const lengthCircle = 2 * Math.PI * radius;
  // add new value in style
  el.style.strokeDasharray = `${lengthCircle} ${lengthCircle}`;
  // console.log( el.style.strokeDasharray)
  el.style.strokeDashoffset = lengthCircle;
  // find part of circle
  const offset = lengthCircle - (text[i].textContent.slice(0, -1) / 100) * lengthCircle;
  // add new value in style
  el.style.strokeDashoffset = offset;
});
