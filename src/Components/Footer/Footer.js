import React from 'react';

import { faFacebookF, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className=''>
      <footer>
        <div className="footer-wrap">
          <div className="container first_className my-5">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <h3> </h3>
                <p className='fs-6 text-black'> Is Now Accepting Orders . Buy Product Hurry Up ! Now 20% Discount Offer Yee🎈🎈 </p>
              </div>
              <div className="col-md-4 col-sm-6">
                <form className="newsletter">
                  <input type="text" placeholder="Email Address" />

                </form>

              </div>
              <div className="col-md-4   col-sm-6 ">
                <div className="col-md-12">
                  <div className="standard_social_links">
                    <div>
                      <li className="round-btn btn-facebook ms-2"> <Link to="https://www.facebook.com/"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></Link></li>
                      <li className="round-btn btn-google"><Link to="https://www.google.com/"><FontAwesomeIcon className="icon" icon={faGoogle} /></Link></li>
                      <li className="round-btn btn-twitter"><Link to="https://www.twitter.com/"><FontAwesomeIcon className="icon" icon={faTwitter} /></Link></li>
                      <li className="round-btn btn-instagram"><Link to="https://www.instagram.com/"><FontAwesomeIcon className="icon" icon={faInstagram} /></Link></li>
                      <li className="round-btn btn-google"><Link to="https://www.google.com/"><FontAwesomeIcon className="icon" icon={faGoogle} /></Link></li>
                      <li className="round-btn btn-facebook"><Link to="https://www.facebook.com/"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></Link></li>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="second_className my-4">
            <div className="container second_className_bdr">
              <div className="row">
                <div className="col-md-4 col-sm-6">

                  <div className="footer-logo w-50"><img src="https://i.ibb.co/8xnxJnZ/DHAKA-2.png" alt="logo" />
                  </div>
                  <p className='fs-6'> Now 20% Discount Offer Yee🎈🎈 Hurry Up ! </p>
                </div>
                <div className="col-md-2 col-sm-6">
                  <h3 className='fs-5 fw-bolder text-success'>Quick  Links</h3>
                  <ul className="d-flex justify-content-start  flex-column">
                   <Link className='text-primary fs-6' to='/home'>Home</Link>
                   <Link className='text-primary fs-6' to='/feature'>Feature</Link>
                   <Link className='text-primary fs-6' to='/about'>About Us</Link>
                   <Link className='text-primary fs-6' to='/contact'>Contact Us</Link>
                  
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                  <h3 className='fs-5 fw-bolder text-success'>About</h3>
                  <ul className="d-flex justify-content-start  flex-column">
                   <Link className='text-primary fs-6' to='/home'>Term of Use</Link>
                   <Link className='text-primary fs-6' to='/feature'>Privacy Policy</Link>
                   <Link className='text-primary fs-6' to='/about'>Edge Services</Link>
                   <Link className='text-primary fs-6' to='/contact'>Galleria - Curated</Link>
                  
                  </ul>

                </div>
                <div className="col-md-3 col-sm-6">
                  <h3 className='fs-5 fw-bolder text-success'>Newsletter</h3>
                  <ul className="footer-links">
                    <p className='fs-5 text-black'>Don't miss out thousands of great deals & promotions.</p>
                    <Link className='text-primary fs-5' to='/contact'>Newspaper</Link>
                  </ul>
                </div>
              </div>

            </div>
          </div>








          <div className="row">
            <div className="container-fluid">
              <div className="copyright"> Copyright 2022 | All Rights Reserved by @TEAM-174.</div>
            </div>

          </div>
        </div>



      </footer>
    </div>
  );
};

export default Footer;