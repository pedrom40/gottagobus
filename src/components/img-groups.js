import React from 'react';
import Img from './img';
import '../css/img-groups.css';

export default function ImgGroups() {
  return(
    <section className="img-groups">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Img srcUrl="/images/places-we-go.jpg" altText="Places We Go" />
            <h3>25 Passenger Bus for All Occasions</h3>
            <p>Weddings, Family Reunions, Quincea&ntilde;eras, City Tours, Wine Tours, Private Parties, etc.</p><br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Img srcUrl="/images/bus.jpg" altText="Our Bus" widthSize="100%" heightSize="269px" />
            <h3>Competitive Pricing</h3>
            <p>Time and destination determine the cost, we will only charge you for the time we spend together, no bulk pricing!</p>
          </div>
          <div className="col-md-6">
            <Img srcUrl="/images/rocks.jpg" altText="San Antonio River Rocks" />
            <h3>Get Your Group Together and Lets Go!</h3>
            <p>Call Antonio "Tony" Del Pui at <a href="tel:2108423837">(210) 842-3837</a> or email me at <a href="mailto:adelpui1@gmail.com">adelpui1@gmail.com</a> to schedule your event.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
