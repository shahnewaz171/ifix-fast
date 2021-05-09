import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {title, price, description, img, _id} = service;
    return (
        <div className="col-12 col-md-4 mb mb-md-4 service-animate">
            <Link to={`/book/${_id}`} className="serviceLink ">
                <div className="serviceItem service-shadow cardShadow">
                    <div className="serviceImg mb-4 cardAnimate">
                        {
                            service.image  ? <img src={`data:image/jpeg;base64,${service.image.img}`} alt=""/>
                            :
                            <img src={img} className="img-fluid" alt=""/>
                        }
                    </div>
                    <h3 className="service-title mb-3">{title}</h3>
                    <h6 className="service-price mb-3">${price}</h6>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Service;