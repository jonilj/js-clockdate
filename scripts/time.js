// Function to calculate current time
function startTime() {
  let now = new Date();
  let sec = now.getSeconds();
  let min = now.getMinutes();
  let hour = now.getHours();
  hour = checkTime(hour)
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById('timeDisplay').innerHTML = hour + ":" + min + ":" + sec;
  setTimeout(startTime, 500);
} 

// If number is less than 10, add 0 in front
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
    }
    return i;
}