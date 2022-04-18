import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManageServicesList from '../ManageServicesList/ManageServicesList';
import Sidebar from '../Sidebar/Sidebar';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("https://damp-depths-86611.herokuapp.com/services")
        .then(res => {
            setServices(res.data);
        })
        .catch(error => "" )
    })

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    return (
        <div>
            {
               <Sidebar></Sidebar>
            }
             <div className="title">
                <h3 className="title-name">Manage Services</h3>
                {
                    userInfo == null ? "" : userInfo.email ? <h5>{userInfo.name == null ? userInfo.email : userInfo.name}</h5> : ''
                }
            </div>
            <div className="book-info">
                <div className="pd-description mx-lg-5 mt-4">
                    <table className="table pdList">
                        <thead>
                            <tr className="table-head">
                                <th scope="col">Service Type</th>
                                <th scope="col">Price</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services && services.map(service => <ManageServicesList service={service} key={service._id}></ManageServicesList>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageServices;