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
        title: 'Introduction to Crypto',
        start: '2022-02-21T12:30:00',
        end: '2022-02-22T05:30:00',
        website: 'https://www.facebook.com/',
      },
      {
        title: 'Sausage Sizzle',
        start: '2022-02-28T12:30:00',
        end: '2022-03-01T05:30:00',
        website: 'https://www.facebook.com/',
      },
      {
        title: 'Introduction to Solidity',
        start: '2022-03-14T12:30:00',
        end: '2022-03-15T05:30:00',
        website: 'https://www.facebook.com/',
      },
      {
        title: 'UCBS Pub Crawl',
        start: '2022-03-21T12:30:00',
        end: '2022-03-22T05:30:00',
        website: 'https://www.facebook.com/',
      },
      {
        title: 'Course - An Overview of Smart Contracts',
        start: '2022-04-04T12:30:00',
        end: '2022-04-05T05:30:00',
        website: 'https://www.facebook.com/',
      },
      {
        title: 'Careers in Crypto',
        start: '2022-04-11T12:30:00',
        end: '2022-04-12T05:30:00',
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

