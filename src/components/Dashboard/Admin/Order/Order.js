import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../../Admin/Sidebar/Sidebar";
import OrderList from "../OrderList/OrderList";
import "./Order.css";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api-ifix-fast.vercel.app/orders")
      .then((res) => {
        if (res) {
          setLoading(false);
          setOrders(res.data);
        }
      })
      .catch((error) => "");
  }, []);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div>
      {<Sidebar></Sidebar>}
      <div className="title">
        <h3 className="title-name">Order List</h3>
        {userInfo == null ? (
          ""
        ) : userInfo.email ? (
          <h5>{userInfo.name == null ? userInfo.email : userInfo.name}</h5>
        ) : (
          ""
        )}
      </div>
      <div className="book-info">
        <div className="pd-description mx-lg-5 mt-4">
          {loading && (
            <div className="text-center mt-5">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {orders.length > 0 && (
            <table className="table pdList">
              <thead>
                <tr className="table-head">
                  <th scope="col">Name</th>
                  <th scope="col">Email ID</th>
                  <th scope="col">Service</th>
                  <th scope="col">Pay With</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders &&
                  orders.map((order) => (
                    <OrderList order={order} key={order._id}></OrderList>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
