import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Events.css';

export const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events'); // Call the backend
        setEvents(response.data); // Use the data from the backend
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleNextEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const handlePreviousEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  return (
    <div className='events-section'>
      <div className='container'>
        <h2>Upcoming Events</h2>
        <div className='events-content'>
          {loading ? (
            <div className='loading-message'>Loading events...</div>
          ) : events.length > 0 ? (
            <div className='event-display'>
              <button onClick={handlePreviousEvent} className='arrow-btn'>←</button>
              <div className='event-details'>
                <h3>{events[currentEventIndex].name}</h3>
                <p>{events[currentEventIndex].description}</p>
                <p><strong>Date:</strong> {new Date(events[currentEventIndex].scheduled_start_time).toLocaleString()}</p>
                <p><strong>Location:</strong> {events[currentEventIndex].location || 'TBD'}</p>
              </div>
              <button onClick={handleNextEvent} className='arrow-btn'>→</button>
            </div>
          ) : (
            <div className='no-events-message'>No events found :(</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;