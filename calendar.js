document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'timeGridWeek',
      initialDate: '2024-08-21',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay,listWeek'
      },
      googleCalendarApiKey: 'AIzaSyBhK1Z3vN8QWKNdJX5V4c9SWqMn7jyytO4',
      events: {
        googleCalendarId: '3240885f8cde993cfb4753a3d5b563b5a20bc8936448b5291b67fc6396b70659@group.calendar.google.com'
      },
      eventDidMount: function(arg){

        var event = arg.event;
        if (event.title.includes("Lecture")) {
          event.setProp('backgroundColor', 'red');  
        } else {
          event.setProp('backgroundColor', 'orange');
        }
        return null;
      }
    });
    calendar.render();
    
  });