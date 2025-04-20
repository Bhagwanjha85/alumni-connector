import React from "react";
import "../styles/Page.css";

function Profile() {
  // You can later fetch and use real user data here
  return (
    <div className="page-container">
      <h2>My Profile</h2>
      <div className="card">
        <p><strong>Name:</strong> Vineet Sharma</p>
        <p><strong>Email:</strong> vineet@example.com</p>
        <p><strong>Graduation Year:</strong> 2022</p>
        <p><strong>Current Role:</strong> Data Scientist</p>
      </div>
    </div>
  );
}

export default Profile;
