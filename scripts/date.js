function todayDay() {
    let d = new Date();
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get current day of the week and display it 
    document.getElementById('dayDisplay').innerHTML = weekDay[d.getDay()];
} 

function startDate() {
    
}