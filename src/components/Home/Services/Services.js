import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Services = () => {
    const [services, setServices] = useState([]);
    const [visible, setVisible] = useState(3);
    const allServices = services.slice(0, visible);
    const [loading, setLoading] = useState(false);

    const ViewMoreServices = () => {
        setVisible(previousLeague => previousLeague + 3);
    };

    useEffect(() => {
        setLoading(true)
        let mounted = true
        axios.get("https://powerful-brushlands-39960.herokuapp.com/services")
            .then(res => {
                if (mounted) {
                    setLoading(false)
                    setServices(res.data);
                }
            })
            .catch(error => "")
        return () => {
            mounted = false
        }
    }, [])

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="sectionTitle">
                    <h2 className="text-center pt-5 mb-5 section-title">Services</h2>
                </div>
                <div className="text-center mt-4">
                    {loading && (
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )}
                </div>
                <div className="row">
                    {
                        allServices && allServices.map(service => <Service service={service} key={service._id}></Service>)
                    }
                </div>
                {services.length && visible === allServices.length ? <div className="mt-4 pt-2 text-center pb-5">
                    <button onClick={ViewMoreServices} className="btn btn-style fw-bold">Explore More</button>
                </div> : ""
                }
            </div>
            <ToastContainer />
        </>
    );
};


export default Services;