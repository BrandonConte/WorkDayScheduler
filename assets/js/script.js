// Will display todays date
var today = moment().format('dddd, MMM Do YYYY');

$("#currentDay").html(today);

$(document).ready(function() {
    // Makes the save button listener
    $(".save").on("click", function() {
        
        // Will get values from description
    var textInput = $(this).siblings(".description")
    var timeInput = $(this).parents().attr("id");

    // Save input to local storage
    localStorage.setitem(timeInput, textInput);

    })

    function timeKeeper() {
        // Gets number of hours actively
        var timeNow = moment().hour();
        // loop for the blocked times
        $(".timeBlock").each(function() {
            var blockedTime = parseInt($(this).attr('id').split('hour')[1]);

            // Check times and add the classes.
            if(blockedTime < timeNow) {
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
                $(this).addClass('future');
            }
        })
    }

    $("#8AM .description").val(localStorage.getItem("8AM"));

    timeKeeper();
})