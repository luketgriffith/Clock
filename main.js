function tickTock(){
var clock= $('.clock');
var dt = new Date();
var hours= dt.getHours();
var minutes= dt.getMinutes();
var seconds= dt.getSeconds();
var ampm= (hours<12) ? 'AM' : 'PM';
var currentHours= (hours>12) ? '0'+(hours-12) : hours;
var currentMinutes= (minutes<10) ? '0'+minutes : minutes;
var currentSeconds= (seconds<10) ? '0'+seconds : seconds;
var timeString= currentHours + ":" + currentMinutes + ":" + currentSeconds + ampm;
clock.text(timeString);
}

setInterval('tickTock()', 1000);
var body= $('body');
