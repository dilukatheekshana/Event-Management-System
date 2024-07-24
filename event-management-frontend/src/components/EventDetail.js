import React, { useState } from 'react';
import axios from 'axios';

const EventDetail = ({ event, fetchEvents }) => {
  const [attendee, setAttendee] = useState('');

  const handleRegister = () => {
    axios.post(`http://localhost:8080/api/events/${event.id}/attendees`, attendee, {
      headers: {
        'Content-Type': 'text/plain',
      },
    })
    .then(fetchEvents)
    .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      <p>{event.location}</p>
      <h3>Attendees</h3>
      <ul>
        {event.attendees.map((attendee, index) => (
          <li key={index}>{attendee}</li>
        ))}
      </ul>
      <input type="text" value={attendee} onChange={(e) => setAttendee(e.target.value)} placeholder="Your Name" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default EventDetail;
