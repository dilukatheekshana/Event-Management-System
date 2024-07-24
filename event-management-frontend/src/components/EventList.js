import React from 'react';
import axios from 'axios';

const EventList = ({ events, fetchEvents, setEventToEdit }) => {
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/events/${id}`)
      .then(fetchEvents)
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <p>{new Date(event.date).toLocaleDateString()}</p>
          <p>{event.location}</p>
          <button onClick={() => setEventToEdit(event)}>Edit</button>
          <button onClick={() => handleDelete(event.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
