//utilized moment.js to be able to display the actual current day 
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));

//utilized moment.js to be able to display the current time 
var time = moment().format("hh:mm:ss");
$("#timeSlot").text(time);

var submitButton = $("#btn");

//functions below
//created variables below that reference my html id's
var hour9 = $("#hr9"); 
var hour10 = $("#hr10"); 
var hour11 = $("#hr11"); 
var hour12 = $("#hr12"); 
var hour13 = $("#hr1");
var hour14 = $("#hr2"); 
var hour15 = $("#hr3"); 
var hour16 = $("#hr4"); 
var hour17 = $("#hr5"); 
var hour18 = $("#hr6");

var hour = moment().hour();
console.log(hour);
//used if/else statements in order to appply present, future, and past css styles to change colors based on the current time
function currentTime (bfr, afr) {
    if (hour == bfr) {
        afr.addClass("present");
    }
    else if(hour < bfr) {
        afr.addClass("future");
    }
    else if(hour > bfr) {
        afr.addClass("past");
    }
}
currentTime(9, hour9);
currentTime(10, hour10);
currentTime(11, hour11);
currentTime(12, hour12);
currentTime(13, hour13);
currentTime(14, hour14);
currentTime(15, hour15);
currentTime(16, hour16);
currentTime(17, hour17);
currentTime(18, hour18);

//created a fucntion that 
function renderScheduledItem(event) {
var text = event.target.dataset.btn;
    if (text === "save9"){
    var sumbitted = hour9.val();
    localStorage.setItem("hour9", sumbitted)
    }
    if (text === "save10"){
    var sumbitted = hour10.val();
    localStorage.setItem("hour10", sumbitted)
    }
    if (text === "save11"){
    var sumbitted = hour11.val();
    localStorage.setItem("hour11", sumbitted)
    }
    if (text === "save12"){
    var sumbitted = hour12.val();
    localStorage.setItem("hour12", sumbitted)
    }    
    if (text === "save13"){
    var sumbitted = hour13.val();
    localStorage.setItem("hour1", sumbitted)
    }
    if (text === "save14"){
    var sumbitted = hour14.val();
    localStorage.setItem("hour2", sumbitted)
    }
    if (text === "save15"){
    var sumbitted = hour15.val();
    localStorage.setItem("hour3", sumbitted)
    }
    if (text === "save16"){
    var sumbitted = hour16.val();
    localStorage.setItem("hour4", sumbitted)
    }  
    if (text === "save17"){
    var sumbitted = hour17.val();
    localStorage.setItem("hour5", sumbitted)
    }
    if (text === "save18"){
    var sumbitted = hour18.val();
    localStorage.setItem("hour6", sumbitted)
    }  
}
//gave each time slot a button that upon click renders the item inside the textbox into the local storage
$("#btn0").on("click", renderScheduledItem);
$("#btn1").on("click", renderScheduledItem);
$("#btn2").on("click", renderScheduledItem);
$("#btn3").on("click", renderScheduledItem);
$("#btn4").on("click", renderScheduledItem);
$("#btn5").on("click", renderScheduledItem);
$("#btn6").on("click", renderScheduledItem);
$("#btn7").on("click", renderScheduledItem);
$("#btn8").on("click", renderScheduledItem);
$("#btn9").on("click", renderScheduledItem);

//created a function that allowed me to retrieve the variable from my local storage using (getItem)
function storeMessage() {
hour9.val(localStorage.getItem("hour9"));
hour10.val(localStorage.getItem("hour10"));
hour11.val(localStorage.getItem("hour11"));
hour12.val(localStorage.getItem("hour12"));
hour13.val(localStorage.getItem("hour1"));
hour14.val(localStorage.getItem("hour2"));
hour15.val(localStorage.getItem("hour3"));
hour16.val(localStorage.getItem("hour4"));
hour17.val(localStorage.getItem("hour5"));
hour18.val(localStorage.getItem("hour6"));
//called my function
}
storeMessage();


   