const d = new Date();
console.log(d);


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
