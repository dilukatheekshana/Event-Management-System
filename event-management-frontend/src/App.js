import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventToEdit, setEventToEdit] = useState(null);

  const fetchEvents = () => {
    axios.get('http://localhost:8080/api/events')
      .then((response) => setEvents(response.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const clearEdit = () => {
    setEventToEdit(null);
  };

  return (
    <div>
      <h1>Event Management System</h1>
      <EventForm fetchEvents={fetchEvents} eventToEdit={eventToEdit} clearEdit={clearEdit} />
      <EventList events={events} fetchEvents={fetchEvents} setEventToEdit={setEventToEdit} />
      {selectedEvent && <EventDetail event={selectedEvent} fetchEvents={fetchEvents} />}
    </div>
  );
};

export default App;
