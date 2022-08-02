(function showdate() {
    var todaydate = new Date().toLocaleDateString();
    document.getElementById('datecontainer').innerText = todaydate;
})();



// var session = 'Am';

function showTime() {
    var clockTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    document.getElementById('clockcontainer').innerText =
        clockTime;
};
showTime()




var internalRef;

function startClock() {
    internalRef = setInterval(showTime, 1000)

}



function stopClock() {
    clearInterval(internalRef)
}