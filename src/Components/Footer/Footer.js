import React from 'react';
import './Footer.css';
import { faFacebookF, faGoogle, faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <div className="container">
            <div class="row">
                <div class="g-3 d-flex justify-content-start align-items-center text-left col-lg-3 col-md-3 col-sm-6 col-12">
                <i class="fas fa-shipping-fast"></i>
                    {/* <FontAwesomeIcon className="icon" icon={faShippingfast} /> */}
                    <div class="ps-3"><h5 class="my-1">Free Shipping</h5><p class="my-1">Free Shipping Inside Dhaka</p>
                    </div></div>
                    <div class="g-3 d-flex justify-content-start align-items-center text-left col-lg-3 col-md-3 col-sm-6 col-12">
                    <i class="fas fa-headset"></i>
                    <div class="ps-3"><h5 class="my-1">24/7 Support</h5><p class="my-1">Find The Best Range Of Organic Product</p>
                    </div></div>
                    <div class="g-3 d-flex justify-content-start align-items-center text-left col-lg-3 col-md-3 col-sm-6 col-12">
                    <i class="far fa-credit-card"></i>
                    <div class="ps-3"><h5 class="my-1">Safe Payment</h5><p class="my-1">Free Shipping When Spent 10000TK</p>
                    </div></div>
                    <div class="g-3 d-flex justify-content-start align-items-center text-left col-lg-3 col-md-3 col-sm-6 col-12">
                    <i class="fas fa-dollar-sign"></i>
                    <div class="ps-3"><h5 class="my-1">Cashback Offers</h5><p class="my-1">Get Cashback On Hot Products</p>
                        </div></div>
                </div>
            </div>
            <footer>
  <div className="footer-wrap">
  <div className="container first_className">
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <h3> </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cumque nulla nesciunt quasi nostrum. Harum.</p>
        </div>
        <div className="col-md-4 col-sm-6">
        <form className="newsletter">
           <input type="text" placeholder="Email Address"/> 
         <button className="newsletter_submit_btn btn-success mt-2" type="submit">Submit</button>  
        </form>
        
        </div>
        <div className="col-md-4 col-sm-6">
        <div className="col-md-12">
          <div className="standard_social_links">
        <div>
          <li className="round-btn btn-facebook"><Link to="https://www.facebook.com/"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></Link></li>
          <li className="round-btn btn-google"><Link to="https://www.google.com/"><FontAwesomeIcon className="icon" icon={faGoogle} /></Link></li>
          <li className="round-btn btn-twitter"><Link to="https://www.twitter.com/"><FontAwesomeIcon className="icon" icon={faTwitter} /></Link></li>
          <li className="round-btn btn-instagram"><Link to="https://www.instagram.com/"><FontAwesomeIcon className="icon" icon={faInstagram} /></Link></li>   
          <li className="round-btn btn-google"><Link to="https://www.google.com/"><FontAwesomeIcon className="icon" icon={faGoogle} /></Link></li>
          <li className="round-btn btn-facebook"><Link to="https://www.facebook.com/"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></Link></li>
         
        </div>
      </div>  
        </div>
          <div className="clearfix"></div>
        <div className="col-md-12"><h3 style={{textAlign:'right'}}>-Stay Connected</h3></div>
        </div>
      </div>
  </div>
    <div className="second_className">
      <div className="container second_className_bdr">
      <div className="row">
        <div className="col-md-4 col-sm-6">

          <div className="footer-logo"><img src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/logo.svg" alt="logo"/>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cumque nulla nesciunt quasi nostrum. Harum.</p>
        </div>
        <div className="col-md-2 col-sm-6">
          <h3>Quick  Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a>
            </li>
            <li><a href="#">About us</a>
            </li>
            <li><a href="#">Contact Us</a>
            </li>
            <li><a href="#" target="_blank">Terms &amp; Conditions</a>
            </li>
            <li><a href="#" target="_blank">Privacy Policy</a>
            </li>
            <li><a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h3>About</h3>
          <ul className="footer-category">
            <li><a href="#">Term of Use</a>
            </li>
            <li><a href="#">Privacy Policy</a>
            </li>
            <li><a href="#">Edge Services</a>
            </li>
            <li><a href="#">Galleria - Curated</a>
            </li>
          </ul>
          <div className="clearfix"></div>
        </div>
        <div className="col-md-3 col-sm-6">
          <h3>Newsletter</h3>
          <ul className="footer-links">
            <p>Don't miss out thousands of great deals & promotions.</p>
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