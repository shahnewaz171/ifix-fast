import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = ({ service }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const history = useHistory();
    const toastId = useRef(null);
    const { title, price, description, img, _id } = service;

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo')) || '';
        if((userInfo) && (userInfo?.email)) {
            fetch('https://powerful-brushlands-39960.herokuapp.com/isAdmin', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email: userInfo?.email })
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setIsAdmin(data)
                    }
                })
        }
        
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const goToBookPage = () => {
        if (isAdmin) {
            toast.dismiss(toastId.current);
            toast.warn("Admin can't book any service!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
            });
        }
        else {
            const location = `/book/${_id}`;
            history.push(location);
        }
    }

    return (
        <>
            <div className="col-12 col-md-4 mb mb-md-4 service-animate">
                <div className="serviceLink ">
                    <div className="serviceItem service-shadow cardShadow">
                        <div className="">
                            <div className="serviceImg mb-4 cardAnimate">
                                {
                                    service.image ? <img src={`data:image/jpeg;base64,${service.image.img}`} alt="" />
                                        :
                                        <img src={img} className="img-fluid" alt="" />
                                }
                            </div>
                            <h3 className="service-title mb-3">{title}</h3>
                            <p>{description}</p>
                        </div>
                        <div className="d-flex justify-content-between pt-2">
                            <h6 className="service-price mt-2">${price}</h6>
                            <button onClick={goToBookPage} className="btn btn-style px-3 text-white" style={{ borderRadius: '25px' }}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span className="ms-1">Book</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;