import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    const [visible, setVisible] = useState(3);
    const allServices = services.slice(0, visible);

    const ViewMoreServices =  () => {
        setVisible(previousLeague => previousLeague + 3)
    };

    useEffect(() => {
        fetch("https://powerful-brushlands-39960.herokuapp.com/services")
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
        .catch(error => alert("Something went wrong!! Please try again later!"))
    }, [])

    
    return (
        <div className="container mt-5 mb-5">
            <div className="sectionTitle">
                <h2 className="text-center pt-5 mb-5">Services</h2>
            </div>
            <div className="row ">
               {
                   allServices.map(service => <Service service={service} key={service._id}></Service>)
               }
            </div>
            <div className="mt-3 text-center pb-5">
                <button onClick={ViewMoreServices} className="btn btn-style">View more</button>
            </div>
        </div>
    );
};

export default Services;