import React from 'react'

import './Footer.css'

function Footer() {
  return (
    <React.Fragment>
      <div className='bottom-banner'>
        <img src="/Images/bottomBanner.png" alt="" />
      </div>
      <div className="footerParentDiv">
        <div className="content">
          <div>
            <div className="heading">
              <p>POPULAR LOCATIONS</p>
            </div>
            <div className="list">
              <ul>
                <li>Kolkata</li>
                <li>Mumbai</li>
                <li>Chennai</li>
                <li>Pune</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="heading">
              <p>ABOUT US</p>
            </div>
            <div className="list">
              <ul>
                <li>About OLX Group</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>OLXPeople</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="heading">
              <p>OLX</p>
            </div>
            <div className="list">
              <ul>
                <li>Help</li>
                <li>Sitemap</li>
                <li>Legal & Privacy information</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className='footer-text'>
            <p className='fw-bold'>Other Countries</p>
            <p>Indonesia - Pakistan - South Africa</p>
          </div>
          <div className='footer-text'>
            <p>All rights reserved © 2006-2023 OLX</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer