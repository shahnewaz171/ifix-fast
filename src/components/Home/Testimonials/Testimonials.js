import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css';
import axios from 'axios';


const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("https://powerful-brushlands-39960.herokuapp.com/reviews")
            .then(res => {
                if (res) {
                    setLoading(false);
                    setTestimonialData(res.data);
                }
            })
            .catch(error => "")
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

                {loading && (
                    <div className="text-center my-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}

                <div className="my-5">
                    <Slider {...conditionalSettings}>
                        {
                            testimonialData && testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id}></Testimonial>)
                        }

                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;