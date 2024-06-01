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
            var tooltipContent = '<strong>' + event.title + '</strong><br>\n';
            tooltipContent += calendar.formatRange(
                event.start,
                event.end,
                {
                    'hour': 'numeric',
                    'minute': '2-digit',
                    'meridiem': 'short'
                });
            var location = event.extendedProps.location;
            if (location) {
                tooltipContent += '\n<span class="location">' + location + '</span><br>';
            }

            var dotEl = arg.el.getElementsByClassName('fc-list-event-dot')[0];
            var eventTitle = event.title.toLowerCase();
            var eventType = '';

            // Determine event type based on title
            if (eventTitle.includes('lect.')) {
                eventType = 'lecture';
            } else if (eventTitle.includes('talk') || eventTitle.includes('tut')) {
                eventType = 'talk';
            } else if (eventTitle.includes('ex.') || eventTitle.includes('project work')) {
                eventType = 'exercise';
            } else if (eventTitle.includes('lunch') || eventTitle.includes('dinner')) {
                eventType = 'meal';
            } else if (eventTitle.includes('party') || eventTitle.includes('day off')) {
                eventType = 'party';
            } else {
                eventType = 'other';
            }
            event.setExtendedProp('type', eventType);

            if (dotEl) {
                dotEl.classList.remove('fc-list-event-dot');
                dotEl.classList.add('newdot');
                dotEl.classList.add(eventType);
            }
                        // var eventColor = window.getComputedStyle(arg.el.querySelector('.fc-event-dot')).getPropertyValue('background-color');
            var eventColor;
            // #eventColor = window.getComputedStyle(dotEl).backgroundColor;

            var tooltip = new Tooltip(arg.el, {
                title: tooltipContent,
                placement: 'top',
                trigger: 'hover',
                container: 'body',
                html: true
            });

            return null;
        },
        eventClassNames: function (arg) {
            var event = arg.event;
            var eventType = event.extendedProps.type;
            let classNames = [];
            console.log(eventType)
            // Use eventType to determine the class name
            if (eventType) {
                classNames.push(eventType);
            }
            return classNames;
        
        },
        eventContent: function (arg) {
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

            let arrayOfDomNodes = [eventTitle, eventLocation]

            return { domNodes: arrayOfDomNodes }
        }
    });
    calendar.render();
});