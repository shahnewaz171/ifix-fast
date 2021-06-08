import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import './Testimonials.css';
import Carousel from "react-elastic-carousel";
import Item from './Item';


const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([]);

    useEffect(() => {
        fetch("https://powerful-brushlands-39960.herokuapp.com/reviews")
        .then(res => res.json())
        .then(data => {
            setTestimonialData(data);
        })
        .catch(error => alert("Something went wrong!! Please try again later!"))
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
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id}></Testimonial>)
                    }
                    
                </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;