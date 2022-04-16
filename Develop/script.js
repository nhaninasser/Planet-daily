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
