import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./EditService.css";

const EditService = () => {
  const { editId } = useParams();
  const { register, handleSubmit, errors } = useForm();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [singleService, setSingleService] = useState([]);

  useEffect(() => {
    localStorage.setItem("editServiceId", editId);
  }, [editId]);

  useEffect(() => {
    const serviceId = localStorage.getItem("editServiceId");
    axios
      .get(`https://ifixfast.onrender.com/service/${serviceId}`)
      .then((res) => {
        if (res) {
          setSingleService(res.data);
        }
      })
      .catch((err) => "");
  });

  const onSubmit = (data) => {
    const title = data.title;
    const price = data.price;
    const description = data.description;
    const service = { editId, title, price, description };
    // console.log(service);

    fetch(`https://ifixfast.onrender.com/update/${editId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    }).then((data) => {
      setOrderSuccess(true);
      localStorage.removeItem("editServiceId");
    });
  };
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div>
      {<Sidebar></Sidebar>}
      <div className="title">
        <h3 className="title-name">Edit Service</h3>
        {userInfo == null ? (
          ""
        ) : userInfo.email ? (
          <h5>{userInfo.name == null ? userInfo.email : userInfo.name}</h5>
        ) : (
          ""
        )}
      </div>
      <div className="book-info">
        <div className="mx-5 mt-5">
          {orderSuccess && (
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <strong>Edit successfully!</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}
          {!orderSuccess && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="bg-white border-radius">
                <div className="row mx-lg-2 pad">
                  <div className="col-12 col-md-6 form-group mb-4">
                    <label className="font-600 mb-2">Service Title</label>
                    <input
                      name="title"
                      ref={register({ required: true })}
                      className="form-control"
                      defaultValue={singleService.title}
                    />
                    {errors.title && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="col-12 col-md-6 form-group mb-4">
                    <label className="font-600 mb-2">Price</label>
                    <input
                      name="price"
                      type="number"
                      ref={register({ required: true })}
                      className="form-control"
                      defaultValue={singleService.price}
                    />

                    {errors.price && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="col-12 col-md-6 form-group mb-4">
                    <label className="font-600 mb-2">Description</label>
                    <textarea
                      name="description"
                      ref={register({ required: true })}
                      className="form-control"
                      rows="3"
                      defaultValue={singleService.description}
                    ></textarea>

                    {errors.description && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="mt-4 btn register-btn submitBtn"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditService;
