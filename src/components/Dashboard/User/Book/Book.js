import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import Sidebar from "../Sidebar/Sidebar";
import "./Book.css";

const Book = () => {
  const { bookId } = useParams();
  const [singleService, setSingleService] = useState([]);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const [bookingData, setBookingData] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (bookId) {
      axios
        .get(`https://ifixfast.onrender.com/service/${bookId}`)
        .then((res) => {
          if (res) {
            setSingleService(res.data);
          }
        });
    } else {
      console.log("");
    }
  }, [bookId]);

  const onSubmit = (data) => {
    setBookingData(data);
  };

  const handlePaymentSuccess = (paymentId) => {
    const bookingDetails = {
      ...userInfo,
      service: singleService,
      book: bookingData,
      bookingTime: new Date(),
      paymentId,
      status: "Pending",
    };

    fetch("https://ifixfast.onrender.com/addBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setOrderSuccess(true);
        }
      });
  };

  return (
    <div>
      {<Sidebar></Sidebar>}
      <div className="title">
        <h3 className="title-name">Book</h3>
        {userInfo == null ? (
          ""
        ) : userInfo.email ? (
          <h5>{userInfo.name == null ? userInfo.email : userInfo.name}</h5>
        ) : (
          ""
        )}
      </div>

      <div className="book-info">
        {orderSuccess && (
          <div className="mx-5 mt-4">
            <div
              className="alert alert-success alert-dismissible fade show orderSuccess"
              role="alert"
            >
              <strong>Well done!</strong> Your booking placed successfully.
              Also, you will see your booking list by clicking on the book list
              option.
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </div>
        )}

        {bookId === undefined && (
          <div className="mx-5 mt-4">
            <div
              className="alert alert-warning alert-dismissible fade show orderSuccess"
              role="alert"
            >
              Please go to the home page and select a service then you can book
              a service. Thank you!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </div>
        )}

        {singleService.title != null && (
          <div className="mx-5 mt-4 width">
            {!orderSuccess && (
              <div style={{ display: bookingData ? "none" : "block" }}>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="bg-white border-radius">
                    <div className="row mx-lg-2 pad">
                      {userInfo.name && (
                        <div className="col-12 form-group mb-4">
                          <input
                            name="name"
                            defaultValue={userInfo.name}
                            ref={register({ required: true })}
                            className="form-control"
                            readOnly
                          />
                          {errors.name && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
                        </div>
                      )}

                      <div className="col-12 form-group mb-4">
                        <input
                          name="email"
                          defaultValue={userInfo.email}
                          type="email"
                          ref={register({ required: true })}
                          className="form-control"
                          readOnly
                        />
                        {errors.email && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className="col-12 form-group mb-4">
                        <input
                          name="service"
                          defaultValue={singleService.title}
                          type="text"
                          ref={register({ required: true })}
                          className="form-control"
                          readOnly
                        />
                        {errors.service && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div>
                        <button
                          className="mt-4 btn btn-style px-4 submitBtn"
                          type="submit"
                        >
                          Proceed to pay
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {!orderSuccess && (
              <div style={{ display: bookingData ? "block" : "none" }}>
                <h2 className="mb-5 mt-3">Payment Method</h2>
                <ProcessPayment
                  handlePayment={handlePaymentSuccess}
                ></ProcessPayment>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
