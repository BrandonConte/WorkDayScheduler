// Will display todays date
var today = moment().format('dddd, MMM Do YYYY');

$("activeDay").html(today);

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
        
        var timeNow = moment().hour();
        $(".timeBlock").each(function() {
            var blockedTime = parseInt($(this).attr('id').split('hour')[1]);

        })
    }
})