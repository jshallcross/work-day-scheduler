
var saveBtn = $(".saveBtn");





// display current date
$("#currentDay").text(moment().format('dddd MMMM Do, YYYY'));




$(document).ready(function(){

    timeCheck();

    saveBtn.on("click", function (){
        event.preventDefault();
        console.log(this);
        var hourId = $(this).attr("id");
        var userInput = $("#save"+hourId).val();
        console.log(hourId, userInput);
        
        localStorage.setItem(hourId,userInput);   
    });
});

//Checks current time and compare it to the hour on the time blocks
function timeCheck() {
    var currentHour = moment().hour();
    
    $('.input-form').each(function (){
        var hour = $(this).attr("id").split("save")[1];
        if (hour < currentHour) {
            $(this).addClass('past');
        } else if (hour == currentHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass("future");
        }
    });
}


setInterval(function(){
    $('.input-form').each(function(){
        timeCheck($(this));
    });
}, 1800000);


