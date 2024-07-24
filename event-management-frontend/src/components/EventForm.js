import React, { useState } from 'react';
import axios from 'axios';

const EventForm = ({ fetchEvents, eventToEdit, clearEdit }) => {
  const [event, setEvent] = useState({
    id: eventToEdit ? eventToEdit.id : null,
    name: eventToEdit ? eventToEdit.name : '',
    description: eventToEdit ? eventToEdit.description : '',
    date: eventToEdit ? eventToEdit.date : '',
    location: eventToEdit ? eventToEdit.location : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (event.id) {
      axios.put(`http://localhost:8080/api/events/${event.id}`, event)
        .then(() => {
          fetchEvents();
          clearEdit();
        })
        .catch((err) => console.error(err));
    } else {
      axios.post('http://localhost:8080/api/events', event)
        .then(fetchEvents)
        .catch((err) => console.error(err));
    }
    setEvent({ name: '', description: '', date: '', location: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={event.name} onChange={handleChange} placeholder="Event Name" required />
      <input type="text" name="description" value={event.description} onChange={handleChange} placeholder="Description" required />
      <input type="date" name="date" value={event.date} onChange={handleChange} required />
      <input type="text" name="location" value={event.location} onChange={handleChange} placeholder="Location" required />
      <button type="submit">{event.id ? 'Update Event' : 'Add Event'}</button>
      {event.id && <button onClick={clearEdit}>Cancel</button>}
    </form>
  );
};

export default EventForm;
