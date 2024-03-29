import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import AOS from "aos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);

    emailjs
      .sendForm(
        "service_hmua3ph",
        "template_p0s2zut",
        e.target,
        "user_hJSU6AMqoIqz90tZfOa1r"
      )
      .then(
        (data) => {
          if (data) {
            toast.success("Successfully Send!", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
            e.target.reset();
          }
        },
        (error) => {
          toast.error("Something went wrong! Try again after sometimes", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        }
      );
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container mb-5">
      <div className="contact-section">
        <h2 className="text-center mb-1 pb-2 pt-5 contact-title section-title">
          Contact Us
        </h2>
        <p className="mb-4 pb-4 text-center">
          We are always available. Feel free to contact us anytime.
        </p>
        <div className="row mb-5" data-aos="fade-left">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <form onSubmit={sendEmail}>
              <div className="row">
                <div className="col-12 col-md-6 form-group mb-4">
                  <input
                    type="name"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="col-12 col-md-6 form-group mb-4">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="col-12 form-group mb-4">
                  <input
                    type="number"
                    name="number"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="col-12 form-group mb-4">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="col-8 col-sm-5 col-md-4 contact-btn mb-5 pb-2">
                  <button
                    type="submit"
                    className="btn btn-style px-3 mt-4  fw-bold text-white ms-3"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
