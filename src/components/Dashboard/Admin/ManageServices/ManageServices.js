import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import ManageServicesList from '../ManageServicesList/ManageServicesList';
import Sidebar from '../Sidebar/Sidebar';
import './ManageServices.css';

const ManageServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://powerful-brushlands-39960.herokuapp.com/services")
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
        .catch(error => alert("Something went wrong!! Please try again later!"))
    })

    return (
        <div>
            {
               <Sidebar></Sidebar>
            }
             <div className="title">
                <h3 className="title-name">Manage Services</h3>
                {
                    loggedInUser.email ? <h5>{loggedInUser.name == null ? loggedInUser.email : loggedInUser.name}</h5> : ''
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
                                services.map(service => <ManageServicesList service={service} key={service._id}></ManageServicesList>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageServices;