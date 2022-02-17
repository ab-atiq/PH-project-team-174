import React from 'react';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import ContactItem from '../ContactItem';
import phone from '../../img/phone.svg';
import email from '../../img/emailme.svg';
import location from '../../img/location.svg';
import Tittle from '../Tittle';
import './Contact.css';
const Contact = () => {
    return (
        <div>
         <div>
         <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{ height: '400px'}}
      src="https://www.hubspot.com/hubfs/Contact%20Us/portsmouth.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Get in touch</h3>
      <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
         </div>
         <div className="mt-3">
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703802988!2d90.27923923029098!3d23.780573257422212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1638286729076!5m2!1sen!2sbd" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'0192222222'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'team174@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Dhaka'} text2={'Bangladesh'} title={'Address'}/>
                </div>
            </div>
         </div>
    <div>
    <Container>
  <Row className="mt-5">
    <section class="contact" id="contact">
        <div class="max-width">
            <div class="contact-content">
              
                <div class="column right">
                    <div class="text text-center">---Contact with us---</div>
                    <form class="contact-form" action="https://formspree.io/f/xbjwrkwj" method="POST">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" name="fullName" class="fullname" placeholder="Name"/>
                            </div>
                            <div class="field email">
                                <input type="text" name="email" class="email-input" placeholder="Email"/>
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" name="subject" class="subject" placeholder="Subject"/>
                        </div>
                        <div class="field textarea">
                            <textarea name="message" class="message" cols="30" rows="10" placeholder="Message.."></textarea>
                        </div>
                        <div class="button-area">
                            <button class="send-msg" type="submit" name="send">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  </Row>
</Container>
</div>
        </div>
    );
};

export default Contact;