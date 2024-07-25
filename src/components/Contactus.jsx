import React from 'react';
import '../css/Contactus.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 contactheading">Contact Us</h2>
      <div className="row">
        <div className="col-md-12">
          <h5>Address:</h5>
          <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
          <h5>Phone:</h5>
          <p>+1 (123) 456-7890</p>
          <h5>Email:</h5>
          <p>info@springdale.edu</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509326!2d144.95565131531578!3d-37.81732797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772f7d1c7ab6f6!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1628582157005!5m2!1sen!2sus"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
        <div className="col-md-12 my-5">
        <form>
            <div class="heading1">
                <h2>Touch With Springdale</h2> 
            </div>
            <div class="row1_2">
                <div>
                    <input type="text" placeholder="Frist Name"/>
                </div>
                <div>
                    <input type="text" placeholder="Last Name"/>
                </div>
            </div>
            <div class="row1_2">
                <div>
                    <input type="email" placeholder="Email Address"/>
                </div>
                <div>
                    <input type="phone" placeholder="Phone No."/>
                </div>
            </div>
            <div class="subject" id="sub-msg">
                <input type="email" placeholder="Address...."/>
            </div>
            <div class="Message" id="sub-msg">
                <input type="message" placeholder="Message..."/>
            </div>
            <div class="submit-btn">
                <button class=" btn btn-primary">Submit</button>
            </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
