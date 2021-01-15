
var saveBtn = $(".saveBtn");


$(document).ready(function() {
    // display current date
    $("#currentDay").text(moment().format('dddd MMMM Do, YYYY'));
    // Runs timeCheck to determine time block colour scheme
    timeCheck();
    // Get any localStorage items previously saved
    $("#9 .user-input").val(localStorage.getItem("9"));
    $("#10 .user-input").val(localStorage.getItem("10"));
    $("#11.user-input").val(localStorage.getItem("11"));
    $("#12 .user-input").val(localStorage.getItem("12"));
    $("#13 .user-input").val(localStorage.getItem("13"));
    $("#14 .user-input").val(localStorage.getItem("14"));
    $("#15 .user-input").val(localStorage.getItem("15"));
    $("#16 .user-input").val(localStorage.getItem("16"));
    $("#17 .user-input").val(localStorage.getItem("17"));
});

// Save Button
saveBtn.on("click", function (){
    event.preventDefault();
    // variable for time block id upon save click
    var hourId = $(this).parent().attr("id");
    console.log(hourId);
    // variable for user input upon save click
    var userInput = $(this).siblings(".user-input").val();
    console.log(userInput);
    // stores both elements in local storage
    localStorage.setItem(hourId,userInput);
    // runs timeCheck upon any save
    timeCheck();       
    }); 

//Checks current time and compare it to the hour on the time blocks
function timeCheck() {
    // Current hour retrieved via moment.js
    var currentHour = moment().hour();
    $('.user-input').each(function (){
        // variable for the hour id
        var hour = $(this).attr("id").split("save")[1];
        // compares current hour to hour id
        if (hour < currentHour) {
            $(this).addClass('past');
        } else if (hour == currentHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass("future");
        }
    });
}

// Runs the time check function every 15 minutes
setInterval(function(){
    $('.input-form').each(function(){
        timeCheck($(this));
        // Also checks to make sure date has not changed
        $("#currentDay").text(moment().format('dddd MMMM Do, YYYY'));
    });
}, 900000);


