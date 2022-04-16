const d = new Date();
console.log(d);

//Current date and time formatting using moment
now = moment().format('LLLL');

const currentDate = $('#currentDay');
    currentDate.text(now);

// adding color change to rows   
var currentHour = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
for (var i = 0; i < currentHour.length; i++) {
    if (d < currentHour[i]) {
        $("#" + currentHour[i])
            .removeClass("present")
            .addClass("future");
    } else if (d > currentHour[i]) {
        $("#" + currentHour[i])
            .removeClass("present")
            .addClass("past");
    } else {
        $("#" + currentHour[i])
            .addClass("present");
    }
}
//Save functionality to local storage 
$(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var textContent = $(this).siblings(".description").val();
    localStorage.setItem(time, textContent);
});

function getText() {
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));
}

getText();