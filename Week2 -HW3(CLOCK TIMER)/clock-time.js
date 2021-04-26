const timer = document.getElementById('stopwatch'); //set html element to a variable

let hour = 0;   // Start time for Hour
 let min = 0;   // Start time for minutes
  let sec = 0;  // Start time for seconds

let stoptime = true;


/*FUNCTION to START the time*/

startTimer = () => {
  if (stoptime == true) { // if stoptime is true
        stoptime = false; // than the opposite will happen... time will continue
        timerRep(); //starts time
    }
}

/* FUNCTION to STOP the TIME */

stopTimer = () => {
  if (stoptime == false) {
    stoptime = true;
  }
}



timerRep = () => {
    if (stoptime == false) {
    sec = parseInt(sec); //turns any string to integer
    min = parseInt(min); //turns any string to integer
    hour = parseInt(hour); //turns string to integer

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1; //adds a minute after 60 seconds passes.
      sec = 0;      //resets the second section to reiterate from zero
    }
    if (min == 60) {
      hour = hour + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec; //keeps single digit numbers with a zero
    }
    if (min < 10 || min == 0) {
      min = '0' + min; //single digit numbers with a zero
    }
    if (hour < 10 || hour == 0) {
      hour = '0' + hour; //single digit numbers with a zero
    }

    timer.innerHTML = hour + ':' + min + ':' + sec;

    setTimeout("timerRep()", 1000); //actually makes the time go by 1 second
  }
}


/*FUNCTION TO RESET TIMER FROM ZERO*/

resetTimer = () => {
    timer.innerHTML = '00:00:00';
    stoptime = true;
   hour = 0;
   sec = 0;
   min = 0;
}
