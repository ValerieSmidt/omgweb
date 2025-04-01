import React, { useState, useEffect } from 'react'
import './Events.css'

export const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching events - replace with your actual API call
    setTimeout(() => {
      setEvents([]);  // Empty array to simulate no events
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='events-section'>
      <div className='container'>
        <h2>Upcoming Events</h2>
        <div className='events-content'>
          {loading ? (
            <div className='loading-message'>Loading events...</div>
          ) : events.length > 0 ? (
            <div className='events-list'>
              {/* Map through events here when you have them */}
              Events will be displayed here
            </div>
          ) : (
            <div className='no-events-message'>No events found :(</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Events