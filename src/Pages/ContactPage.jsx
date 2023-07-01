import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <footer className="footer">
        <h2 className='footer-header'>Get in Touch</h2>
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-heading">About Us</h4>
          <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula auctor lorem nec commodo.</p>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Contact Us</h4>
          <p className="footer-text">123 Street, City, Country</p>
          <p className="footer-text">Email: info@example.com</p>
          <p className="footer-text">Phone: +1 123 456 7890</p>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">© 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default ContactPage;
