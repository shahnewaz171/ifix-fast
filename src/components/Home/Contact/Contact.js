import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
const Contact = () => {
    return (
        <section className="container mb-5">
      <div className="contact-section">
        <h2 className="text-center mb-1 pb-2 pt-5 contact-title">Contact Us</h2>
        <p className="mb-4 pb-4 text-center">We are always available. Feel free to contact us anytime.</p>
        <div className="row mb-5">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <form>
                    <div className="row">
                        <div className="col-12 col-md-6 form-group mb-4">
                            <input type="text" className="form-control" placeholder="Full Name"/>
                        </div>
                        <div className="col-12 col-md-6 form-group mb-4">
                            <input type="email" name="email" className="form-control" placeholder="Email Address"/>
                        </div>
                        <div className="col-12 form-group mb-4">
                            <input type="number" name="subject" className="form-control" placeholder="Phone Number"/>
                        </div>
                        <div className="col-12 form-group mb-4">
                            <textarea className="form-control" name="message"  rows="5" placeholder="Your Message"></textarea>
                        </div>
                        <div className="col-8 col-sm-5 col-md-4 contact-btn mb-5 pb-2">
                            <Link to="#" className="btn btn-style px-3 mt-4  fw-bold text-white ms-3">Send Message</Link>
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