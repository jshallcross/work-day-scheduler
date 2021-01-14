
var saveBtn = $(".saveBtn");

// display current date
$("#currentDay").text(moment().format('dddd MMMM Do, YYYY'));



saveBtn.on("click", function (){
    event.preventDefault();
    var hourId = $(this).attr("id");
    var userInput = $("#save"+hourId).val();
    console.log(hourId, userInput);
    //localStorage.setItem(hourId, JSON.stringify(userInput));
})