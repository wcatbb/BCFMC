// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', function (event) {
        const listHoursArray = document.body.querySelectorAll('.list-hours li');
        listHoursArray[new Date().getDay()].classList.add(('today'));
    })
// Fullcalendar.io
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
    });
    calendar.render();
    });
    $("#registerButton").click(function(){
        $('#registerModal').modal('show');
    });
    $("#loginButton").click(function(){
        $('#loginModal').modal('show');
    });
    function phoneFormat(input) {//returns (###) ###-####
        input = input.replace(/\D/g,'');
        var size = input.length;
        if (size>0) {input="("+input}
        if (size>3) {input=input.slice(0,4)+") "+input.slice(4,11)}
        if (size>6) {input=input.slice(0,9)+"-" +input.slice(9)}
        return input;
    }