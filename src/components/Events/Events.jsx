import React, { useEffect, useState } from 'react';
import './events.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/events.json')
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error('Failed to fetch events:', err));
  }, []);

  return (
    <div className="events-container">
      <h1 className="events-heading">Upcoming Events</h1>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={events.length === 1 ? 1 : 2}
        centeredSlides={events.length === 1}
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: events.length === 1,
          },
          768: {
            slidesPerView: events.length === 1 ? 1 : 2,
            centeredSlides: events.length === 1,
          },
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="event-card">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-date">Date: {event.date}</p>
              <p className="event-location">Location: {event.location}</p>
              <p className="event-description">{event.description}</p>
              <a
                href={event.url}
                className="event-link"
                target="_blank"
                rel="noreferrer"
              >
                View on Discord
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Events;
