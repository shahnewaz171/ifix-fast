import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const [visible, setVisible] = useState(3);
    const allServices = services.slice(0, visible);
    const [loading, setLoading] = useState(false);

    const ViewMoreServices =  () => {
        setVisible(previousLeague => previousLeague + 3)
    };

    useEffect(() => {
        setLoading(true)
        fetch("https://powerful-brushlands-39960.herokuapp.com/services")
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
        .then(() => setLoading(false))
        .catch(error => alert("Something went wrong!! Please try again later!"))
    }, [])

    return (
        <div className="container mt-5 mb-5">
            <div className="sectionTitle">
                <h2 className="text-center pt-5 mb-5 section-title">Services</h2>
            </div>
            <div className="text-center mt-4">
                    {loading && (
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    )}
                </div>
            <div className="row">
               {
                   allServices.map(service => <Service service={service} key={service._id}></Service>)
               }
            </div>
            <div className="mt-4 pt-2 text-center pb-5">
                <button onClick={ViewMoreServices} className="btn btn-style fw-bold">Explore More</button>
            </div>
        </div>
    );
};

export default Services;