import React, { useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = ({service}) => {
    const {title, price, description, img, _id} = service;

    useEffect(() => {
        AOS.init({ duration: 1000})
    }, [])

    return (
        <div className="col-12 col-md-4 mb mb-md-4 service-animate">
            <div className="serviceLink ">
                <div className="serviceItem service-shadow cardShadow">
                    <div className="">
                        <div className="serviceImg mb-4 cardAnimate">
                            {
                                service.image  ? <img src={`data:image/jpeg;base64,${service.image.img}`} alt=""/>
                                :
                                <img src={img} className="img-fluid" alt=""/>
                            }
                        </div>
                        <h3 className="service-title mb-3">{title}</h3>
                        <p>{description}</p>
                    </div>
                    <div className="d-flex justify-content-between pt-2" data-aos="zoom-in">
                        <h6 className="service-price mt-2">${price}</h6>
                        <Link to={`/book/${_id}`}>
                            <button className="btn btn-style px-3 text-white" style={{borderRadius: '25px'}}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span className="ms-1">Book</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;