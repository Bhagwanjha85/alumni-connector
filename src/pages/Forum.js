import React from "react";
import "../styles/Page.css";

function Forum() {
  return (
    <div className="page-container">
      <h2>Alumni Forum</h2>
      <p>Share your thoughts, ideas, and discussions here.</p>
      {/* Placeholder for posts */}
      <div className="card">
        <h3>Topic: Career Guidance</h3>
        <p>How did you transition from college to corporate? Let's share!</p>
        <button className="btn">Join Discussion</button>
      </div>
    </div>
  );
}

export default Forum;
