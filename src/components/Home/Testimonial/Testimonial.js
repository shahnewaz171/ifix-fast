import React, { useEffect } from 'react';
import './Testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonial = ({testimonial}) => {
    const {name, quote, designation, img} = testimonial;
    useEffect(() => {
        AOS.init({ duration: 2000})
    }, [])

    return (
        <div className="item testimonialInfo">
            <div className="single-box">
                <div className="img-area">
                    {
                        testimonial.image  ? <img src={`data:image/jpeg;base64,${testimonial.image.img}`} alt=""/>
                        :
                        <img src={img} alt=""/>
                    }
                </div>
                
                <div className="img-text">
                    <h2 className="reviewStyle">{name}</h2>
                    <p className="reviewStyle" style={{fontWeight: '500', fontSize: '15px'}}>{designation}</p>
                    <p>{quote}</p>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} className="me-2 mb-3" />
                        <FontAwesomeIcon icon={faStar} className="me-2  mb-3"/>
                        <FontAwesomeIcon icon={faStar} className="me-2 mb-3"/>
                        <FontAwesomeIcon icon={faStar} className="me-2 mb-3"/>
                        <FontAwesomeIcon icon={faStar} className="me-2 mb-3"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;