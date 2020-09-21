// Function to calculate current time
function startTime() {
  let now = new Date(); 
  let min = now.getMinutes();
  let hour = now.getHours();
  hour = checkTime(hour)
  min = checkTime(min);
  document.getElementById('timeDisplay').innerHTML = hour + ":" + min;
  setTimeout(startTime, 500);
} 

// If hour and minute is less than 10, add 0 in front of digit
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
    }
    return i;
}

// Function to get current weekday (by name)
function todayDay() {
  let now = new Date();
  let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  document.getElementById('dayDisplay').innerHTML = weekDay[now.getDay()] + ", ";
} 

// Function to get current day and month
function startDate() {
  let now = new Date();
  let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  month = month[now.getMonth()];
  let day = now.getDate();

  document.getElementById('dateDisplay').innerHTML = month + " " + day;
}