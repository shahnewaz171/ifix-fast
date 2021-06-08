import React from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Contact.css';
const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_200r93a', 'template_p0s2zut', e.target, 'user_hJSU6AMqoIqz90tZfOa1r')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }

    return (
        <section className="container mb-5">
      <div className="contact-section">
        <h2 className="text-center mb-1 pb-2 pt-5 contact-title">Contact Us</h2>
        <p className="mb-4 pb-4 text-center">We are always available. Feel free to contact us anytime.</p>
        <div className="row mb-5">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <form onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-12 col-md-6 form-group mb-4">
                            <input type="name" name="name" className="form-control" placeholder="Full Name" required/>
                        </div>
                        <div className="col-12 col-md-6 form-group mb-4">
                            <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
                        </div>
                        <div className="col-12 form-group mb-4">
                            <input type="number" name="number" className="form-control" placeholder="Phone Number"/>
                        </div>
                        <div className="col-12 form-group mb-4">
                            <textarea className="form-control" name="message"  rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <div className="col-8 col-sm-5 col-md-4 contact-btn mb-5 pb-2">
                            <button type="submit" className="btn btn-style px-3 mt-4  fw-bold text-white ms-3">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-md-2"></div>
        </div>
      </div>
    </section>
    );
};

export default Contact;