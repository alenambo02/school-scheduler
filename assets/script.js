//utilized moment.js to be able to display the actual current day 
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));

//utilized moment.js to be able to display the current time 
var time = moment().format("hh:mm:ss");
$("#timeSlot").text(time);

//get live time above???
var submitButton = $("#btn");


//functions below
var hour9 = $("#hr9"); 
var hour10 = $("#hr10"); 
var hour11 = $("#hr11"); 
var hour12 = $("#hr12"); 
var hour1 = $("#hr1");
var hour2 = $("#hr2"); 
var hour3 = $("#hr3"); 
var hour4 = $("#hr4"); 
var hour5 = $("#hr5"); 
var hour6 = $("#hr6");

var hour = moment().hour();
console.log(hour);

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
currentTime(13, hour1);
currentTime(14, hour2);
currentTime(15, hour3);
currentTime(16, hour4);
currentTime(17, hour5);
currentTime(18, hour6);


function renderScheduledItem(event) {
var text = event.target.dataset.btn
    if (text === "save9"){
    var sumbitted = hour9.val();
    localStorage.setItem("hour9", sumbitted)
    }
    console.log(text)
    if (text === "save9"){
        var sumbitted = hour9.val();
        localStorage.setItem("hour9", sumbitted)
        }
}

$("#btn").on("click", renderScheduledItem);
   