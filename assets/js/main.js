
var saveBtn = $(".saveBtn");

// display current date
$("#currentDay").text(moment().format('dddd MMMM Do, YYYY'));


/*
saveBtn.on("click", function (){
    event.preventDefault();
    var hourId = $(this).attr("id").split("-")[1];
    var userInput = $("#hour-" + hourId).val();
    console.log(hourId, userInput);
    //localStorage.setItem(hourId, JSON.stringify(userInput));
})
*/

saveBtn.on("click", function (){
    event.preventDefault();
    var hourId = $(this).attr("id");
    var userInput = $("#9").val();
    console.log(hourId, userInput);
    localStorage.setItem(hourId, JSON.stringify(userInput));
})