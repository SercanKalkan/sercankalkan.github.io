function updateTimer() {
	// yyyy-MM-dd HH:mm:ss
    past  = Date.parse("2019-12-02 19:09:00");
    now     = new Date();
    diff    = now - past;
    
    years  = Math.floor( diff / (1000*60*60*24*30*12) );
    months = Math.floor( diff / (1000*60*60*24*30) );
    days   = Math.floor( diff / (1000*60*60*24) );
    hours  = Math.floor( diff / (1000*60*60) );
    mins   = Math.floor( diff / (1000*60) );
    secs   = Math.floor( diff / 1000 );
    
    y = years;
    M = months - years  * 12;
    d = days   - months * 30;
    h = hours  - days   * 24;
    m = mins   - hours  * 60;
    s = secs   - mins   * 60;
    document.getElementById("timer")
    .innerHTML =
    '<div><span>Since: 2019-12-02</span></div><br>'+
    '<div>' + y + '<span>Years</span></div>' +
    '<div>' + M + '<span>Months</span></div>' +
    '<div>' + d + '<span>Days</span></div>' +
    '<div>' + h + '<span>Hours</span></div>' +
    '<div>' + m + '<span>Minutes</span></div>' +
    '<div>' + s + '<span>Seconds</span></div>' ;
}
setInterval('updateTimer()', 1000 );

