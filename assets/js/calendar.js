document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'America/New_York',
        initialView: 'timeGridWeek',
        initialDate: '2024-08-21',
        contentHeight: 'auto',
        slotMinTime: '08:00:00',
        slotMaxTime: '23:00:00',
        firstDay: 3,
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
            var tootltipContent = '<strong>' + event.title + '</strong><br>';
            var location = event.extendedProps.location;
            if (location) {
                tootltipContent += '<span class="location">' + location + '</span><br>';
            }
            var tooltip = new Tooltip(arg.el, {
                title: tootltipContent,
                placement: 'top',
                trigger: 'hover',
                container: 'body',
                html: true
            });
            var dotEl = arg.el.getElementsByClassName('fc-list-event-dot')[0];
            if (dotEl) {
                dotEl.classList.remove('fc-list-event-dot');
                dotEl.classList.add('newdot');
                if (event.title.includes('Lect.')) {
                    dotEl.classList.add('lecture');
                } else if (event.title.includes('Talk') | event.title.includes('Tut')) {
                    dotEl.classList.add('talk');
                } else if (event.title.includes('Ex.') | event.title.includes('Project Work')) {
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

            if (title.includes('Lect.')) {
                classNames.push('lecture');
            } else if (title.includes('Talk') || title.includes('Tut')) {
                classNames.push('talk');
            } else if (title.includes('Ex.') || title.includes('Project Work')) {
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
            eventLocation.classList.add('fc-event-location')
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