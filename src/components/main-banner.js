import React from 'react';
import '../css/main-banner.css';
import Img from './img';

export default function MainBanner() {
  return (
    <section className="banner">
      <div className="container-fluid">
        <div className="row maroon-col">
          <div className="col-md-6">
            <Img srcUrl="/images/Antonio-and-Teresa-Del-Pui.jpg" altText="Antonio and Teresa Del Pui" />
          </div>
          <div className="col-md-6">
            <div className="spacer">
              <h1>WE'LL TAKE YOU<br />WHERE YOU GOTTA GO!</h1><br />
              <h2>
                <a href="tel:2108423837">(210) 842-3837</a> - <a href="mailto:adelpui1@gmail.com">adelpui1@gmail.com</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
