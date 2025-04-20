import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} AlumniConnect. All rights reserved.</p>
      <div className="footer-links">
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
