// Function to calculate current time
function startTime() {
  let now = new Date();
  let s = now.getSeconds();
  let m = now.getMinutes();
  let h = now.getHours();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('timeDisplay').innerHTML = h + ":" + m + ":" + s;
  let t = setTimeout(startTime, 500);
} 

// If number is less than 10, add 0 in front
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
    }
    return i;
}