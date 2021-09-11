import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import './Testimonials.css';
import Carousel from "react-elastic-carousel";
import axios from 'axios';


const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([]);

    useEffect(() => {
        axios.get("https://powerful-brushlands-39960.herokuapp.com/reviews")
        .then(res => {
            setTestimonialData(res.data);
        })
        .catch(error => "" )
    }, [])


    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    return (
        <div className="bg-light">
            <div className="container">
                <div className="sectionTitle">
                    <h2 className="text-center pt-5 mb-5 section-title">Testimonials</h2>
                </div>
                <div className="mb-5">
                <Carousel breakPoints={breakPoints}>
                    { 
                        testimonialData && testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id}></Testimonial>)
                    }
                    
                </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;