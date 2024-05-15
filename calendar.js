document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'America/New_York',
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
        eventDidMount: function (arg) {
            var event = arg.event;
            var dotEl = arg.el.getElementsByClassName('fc-list-event-dot')[0];
            if (dotEl) {
                dotEl.classList.remove('fc-list-event-dot');
                dotEl.classList.add('newdot');
                if (event.title.includes('Lecture')) {
                    dotEl.classList.add('lecture');
                } else if (event.title.includes('Talk') | event.title.includes('Tutorial')) {
                    dotEl.classList.add('talk');
                } else if (event.title.includes('Exercise') | event.title.includes('Project Work')) {
                    dotEl.classList.add('exercise');
                } else if (event.title.includes('Lunch') | event.title.includes('Dinner')) {
                    dotEl.classList.add('meal');
                } else if (event.title.includes('Party') | event.title.includes('Day Off')) {
                    dotEl.classList.add('party');
                } else {
                    dotEl.classList.add('other');
                }
            }
            return null;
        },
        eventClassNames: function (arg) {
            let classNames = [];
            let title = arg.event.title;

            if (title.includes('Lecture')) {
                classNames.push('lecture');
            } else if (title.includes('Talk') || title.includes('Tutorial')) {
                classNames.push('talk');
            } else if (title.includes('Exercise') || title.includes('Project Work')) {
                classNames.push('exercise');
            } else if (title.includes('Lunch') || title.includes('Dinner')) {
                classNames.push('meal');
            } else if (title.includes('Party') || title.includes('Day Off')) {
                classNames.push('party');
            } else {
                classNames.push('other');
            }

            return classNames;
        },
        eventContent: function(arg) {
            let eventTitle = document.createElement('div');
            eventTitle.innerHTML = arg.event.title;
            eventTitle.classList.add('fc-event-title')

            let eventLocation = document.createElement('div');
            let location = arg.event.extendedProps.location;
            if (location) {
               let shortLocation = location.split(',')[0];
               eventLocation.innerHTML = shortLocation;
            }

            let arrayOfDomNodes = [ eventTitle, eventLocation ]

            return { domNodes: arrayOfDomNodes }
          }
    });
    calendar.render();
});