// Display today's date.
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
 
$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description.
        var textInput = $(this).siblings(".description").val();
        var timeInput = $(this).parent().attr("id");

        // Save text in local storage.
        localStorage.setItem(timeInput, textInput);
    })
    function timeTracker() {
        //get number of hours.
        var timeNow = moment().hour();

        // loop time blocks.
        $(".time-block").each(function () {
            var blockedTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add classes.
            if (blockedTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockedTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    // Get item from local storage.
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})