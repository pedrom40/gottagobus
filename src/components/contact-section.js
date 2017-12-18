import React from 'react';
import '../css/contact.css';

export default function ContactSection() {
  return(
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Contact Us</h2>
            <h4>Come see us in person!</h4>
            <p>We love our customers, so feel free to visit during normal business hours.</p><br /><br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h5>Gotta Go Bus Service</h5>
            <p>
              <a href="tel:2108423837">(210) 842-3837</a><br />
              <a href="mailto:adelpui1@gmail.com">adelpui1@gmail.com</a>
            </p>
          </div>
          <div className="col-md-6">
            <h5>Hours</h5>
            <p>
              Monday - Friday: 9am - 5pm<br />
              Saturday: By appointment<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
