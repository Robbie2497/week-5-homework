var date = new Date();
// var dateMonth = date.toLocaleString('default', { month: 'long' });
// console.log(dateMonth);
// var dateDay = date.getDay();
// var newDay = dateDay - 2;
// console.log(dateDay)
// var dateYear = date.getFullYear();
// console.log(dateYear);
// var hours = date.getHours() ; // gives the value in 24 hours format
// var AmOrPm = hours >= 12 ? 'pm' : 'am';
// hours = (hours % 12) || 12;
// var minutes = date.getMinutes() ;
// var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm; 
// document.getElementById("currentDay").innerHTML = dateMonth + " " + newDay + " " + dateYear + " " + finalTime;
// finalTime // final time Time - 22:10
console.log(date)



// Grab save button and create function
$(".saveBtn").on("click", function () {
    // Make sure that it is actually grabing the save button element
    console.log("saveBtn");
    // Create a new variable and set it to saveBtn attribute using the value from data-time
    var saveTask = $(this).attr("data-time");
    // Make sure it is returning the correct data
    console.log(saveTask);
    // Create a new variable and set it to the element
    var saved = $("textarea[data-time = " + saveTask + "]").val();
    // Make sure it grabbed the correct data
    console.log(saved);
    // Use localStorage.setItem to save the ("key", "value"), in this case, the variable saveTask and saved
    localStorage.setItem(saveTask, saved);

});

$(".clearBtn").on("click", function () {

    console.log("clearBtn");

    var clearTask = $(this).attr("data-time");

    console.log(clearTask);

    $("textarea[data-time = " + clearTask + "]").val("");

    localStorage.setItem(clearTask, "");

});

// To grab from the localStorage and put it's value in the element
$("textarea").each(function () {
    // Create new variables to hold values from saved localStorage so we can set those values to the element when the page reloads
    var saveTask = ($(this).attr("data-time"));
    var newSave = localStorage.getItem(saveTask);
    $(this).val(newSave);
    var hour = date.getHours();
    console.log(hour);
    console.log(newSave);
    
    if (hour == saveTask) {
        $("textarea[data-time =" + saveTask + "]").addClass("present");
    }
    if (hour > saveTask) {
        $("textarea[data-time =" + saveTask + "]").addClass("past");
    }
    if (hour < saveTask) {
        $("textarea[data-time =" + saveTask + "]").addClass("future");
    }
});
    
    

