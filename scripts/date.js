function todayDay() {
    let now = new Date();
    // Declare an array containing the days of the week starting with Sunday
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Get current day of the week and display it 
    document.getElementById('dayDisplay').innerHTML = weekDay[now.getDay()];
} 

function startDate() {
    let now = new Date();
    let year = now.getFullYear();
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month = month[now.getMonth()];
    let day = now.getDate();

    document.getElementById('dateDisplay').innerHTML = year + " " + month + " " + day;
}