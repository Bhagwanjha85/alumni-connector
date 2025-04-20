import React from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Home.css';
import { FaUserFriends, FaCalendarAlt, FaHandsHelping, FaComments, FaUserCircle } from 'react-icons/fa';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="home-container">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <h1>Welcome back, {user?.name || 'Alumnus'} 🎓</h1>
          <p className="tagline">
            Reconnect. Inspire. Grow.
          </p>
          <p className="hero-message">
            AlumniConnect helps you stay in touch with your batchmates, find new career opportunities,
            join discussions, and give back to the community.
          </p>
        </section>

        {/* Feature Cards */}
        <section className="dashboard-section">
          <div className="dashboard-grid">

            <div className="card">
              <FaUserFriends className="card-icon" />
              <h3>Alumni Directory</h3>
              <p>Browse profiles and discover alumni around the globe.</p>
            </div>

            <div className="card">
              <FaCalendarAlt className="card-icon" />
              <h3>Events & Reunions</h3>
              <p>Join memorable get-togethers and professional meetups.</p>
            </div>

            <div className="card">
              <FaHandsHelping className="card-icon" />
              <h3>Mentorship</h3>
              <p>Mentor juniors or find experienced guides in your field.</p>
            </div>

            <div className="card">
              <FaComments className="card-icon" />
              <h3>Forum & Discussions</h3>
              <p>Post questions, share updates, and collaborate in groups.</p>
            </div>

            <div className="card">
              <FaUserCircle className="card-icon" />
              <h3>Your Profile</h3>
              <p>Update your academic and professional journey with ease.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h2>Stay Connected. Stay Inspired. 🌐</h2>
          <p>
            Join the community of alumni making a difference. Let your experience guide the next generation.
          </p>
        </section>
      </main>
    </div>
  );
}
