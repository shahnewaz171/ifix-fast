import axios from 'axios';
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';


const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("https://damp-depths-86611.herokuapp.com/allReview")
            .then(res => {
                if (res) {
                    setLoading(false);
                    setTestimonialData(res.data);
                }
            })
            .catch(error => {
                setLoading(false);
                console.error(error.response);
            })
    }, [])


    const conditionalSettings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        infinite: testimonialData > 3,
        autoplay: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    infinite: testimonialData > 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    infinite: testimonialData >= 1
                }
            }
        ]
    }

    return (
        <div className="bg-light">
            <div className="container">
                <div className="sectionTitle">
                    <h2 className="text-center pt-5 section-title">Testimonials</h2>
                </div>

                {testimonialData.length ?
                    <div className="my-5">
                        <Slider {...conditionalSettings}>
                            {
                                testimonialData && testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id}></Testimonial>)
                            }
                        </Slider>
                    </div>
                    :
                    loading ?
                        <div className="text-center my-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        :
                        <div className="text-center mt-4 text-danger">
                            Not Found
                        </div>
                }
            </div>
        </div>
    );
};

export default Testimonials;