function countdown() {
    nowyear  = Date.parse("2025-12-02 19:09:00");
    end  = new Date();
    diff2 =nowyear - end;
    
    years  = Math.floor( diff2 / (1000*60*60*24*30*12) );
    months = Math.floor( diff2/ (1000*60*60*24*30) );
    days   = Math.floor( diff2 / (1000*60*60*24) );
    hours  = Math.floor( diff2 / (1000*60*60) );
    mins   = Math.floor( diff2 / (1000*60) );
    secs   = Math.floor( diff2 / 1000 );
    
    ye = years;
    Mo = months - years  * 12;
    da = days   - months * 30;
    mi = mins   - hours  * 60;
    se = secs   - mins   * 60;
    ho = hours  - days   * 24;
    
    document.getElementById("countdown").innerHTML =
    '<div><span>HOW LONG IS LEFT TO OUR ANNIVERSARY?</span></div><br>'+
    '<div>' + ye + '<span>Years</span></div>' +
    '<div>' + Mo + '<span>Months</span></div>' +
    '<div>' + da + '<span>Days</span></div>' +
    '<div>' + ho + '<span>Hours</span></div>' +
    '<div>' + mi + '<span>Minutes</span></div>' +
    '<div>' + se + '<span>Seconds</span></div>' ;
}
setInterval('countdown()', 1000 );
