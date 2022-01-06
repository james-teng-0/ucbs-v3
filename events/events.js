import './eventsss.css'

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: '',
      center: 'title',
      right: 'prev,next today'
    },  
    events: [
      {
        title: 'Bash eric ning up',
        start: '2022-01-05T12:30:00',
        end: '2022-01-07T05:30:00',
        website: 'https://www.facebook.com/',
      },
    ],
    eventColor: '#a08981',
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      meridiem: 'long'
    },
    displayEventEnd:true,
    eventClick: function(info) {
      window.open(info.event.extendedProps.website);
    }
  }); 
  calendar.render();
});

