import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Loading from '../../../Loading';
import Sidebar from '../../Admin/Sidebar/Sidebar';
import OrderList from '../OrderList/OrderList';
import './Order.css';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://powerful-brushlands-39960.herokuapp.com/orders")
        .then(res => res.json())
        .then(data => {
            setOrders(data);
        })
        .then(() => setLoading(false))
        .catch(error => alert("Something went wrong!! Please try again later!"))
    }, [])

    console.log(orders);

    
    return (
        <div>
            {
               <Sidebar></Sidebar>
            }
             <div className="title">
                <h3 className="title-name">Order List</h3>
                {
                    loggedInUser.email ? <h5>{loggedInUser.name == null ? loggedInUser.email : loggedInUser.name}</h5> : ''
                }
            </div>
            <div className="book-info">
                
                <div className="pd-description mx-lg-5 mt-4">
                    <div className="text-center">
                        {loading && (
                            <Loading />
                        )}
                    </div>
                    <table className="table pdList">
                        <thead>
                            <tr className="table-head">
                                <th scope="col">Product Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Pay With</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <OrderList order={order} key={order._id}></OrderList>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Order;