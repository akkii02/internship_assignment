import React from 'react';
import classes from './Footer.module.css';
import img from "../imgg/Group.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerColumn}>
        <img src={img} alt="Company Logo" />
        <p>Email: info@company.com</p>
        <p>Phone: +1234567890</p>
      </div>
      <div className={classes.footerColumn}>
        <h3>Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li>Booking</li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>
      <div className={classes.footerColumn}>
        <h3>Legal</h3>
        <ul>
          <li><a href="/terms">Terms of Use</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li>Cookie Policy</li>
        </ul>
      </div>
      <div className={classes.footerColumn}>
        <h3>Product</h3>
        <ul>
          <li><a href="/tour">Take a Tour</a></li>
          <li><a href="/chat">Live Chat</a></li>
          <li>Reviews</li>
        </ul>
      </div>
      <div className={classes.footerColumn}>
        <h3>Newsletter</h3>
        <p>Stay updated</p>
        <form>
          <input type="email" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
