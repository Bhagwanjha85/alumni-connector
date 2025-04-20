import React from "react";
import "../styles/Page.css";

function Events() {
  return (
    <div className="page-container">
      <h2>Upcoming Events</h2>
      <p>Stay updated with alumni meetups, webinars, and reunions.</p>
      {/* Example event */}
      <div className="card">
        <h3>Annual Alumni Meetup 2025</h3>
        <p>Date: June 20, 2025</p>
        <p>Location: College Auditorium</p>
        <p>Don’t miss the chance to reconnect and network!</p>
      </div>
    </div>
  );
}

export default Events;
