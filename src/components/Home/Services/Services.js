import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [visible, setVisible] = useState(3);
  const allServices = services?.slice(0, visible);
  const [loading, setLoading] = useState(false);

  const ViewMoreServices = () => {
    setVisible((previousLeague) => previousLeague + 3);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://ifixfast.onrender.com/services")
      .then((res) => {
        if (res) {
          setLoading(false);
          setServices(res.data);
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="sectionTitle">
          <h2 className="text-center pt-5 mb-5 section-title">Services</h2>
        </div>
        {services.length ? (
          <div className="row">
            {allServices?.map((service) => (
              <Service service={service} key={service._id} />
            ))}
          </div>
        ) : loading ? (
          <div className="text-center mt-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="text-center mt-4 text-danger">Not Found</div>
        )}

        {services.length && visible === allServices.length ? (
          <div className="mt-4 pt-2 text-center pb-5">
            <button
              onClick={ViewMoreServices}
              className="btn btn-style fw-bold"
            >
              Explore More
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Services;
