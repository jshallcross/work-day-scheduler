
var saveBtn = $(".saveBtn");






// display current date
$("#currentDay").text(moment().format('dddd MMMM Do, YYYY'));


function onLoad() {
    
}




$(document).ready(function(){
    timeCheck();

    saveBtn.on("click", function (){
        event.preventDefault();
        var hourId = $(this).attr("id");
        var userInput = $("#save"+hourId).val();
        console.log(hourId, userInput);
        localStorage.setItem(hourId, JSON.stringify(userInput));
    });
    


});


function timeCheck() {
    var currentHour = moment().hour();
    console.log(currentHour);
    $('.input-form').each(function (){
        var hour = $(this).attr("id").split("save")[1];
        if (hour < currentHour) {
            $(this).addClass('past');
        } else if (hour == currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}




