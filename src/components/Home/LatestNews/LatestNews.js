import React, { useEffect } from 'react';
import './LatestNews.css';
import blogImage1 from '../../../images/latest-news/image1.jpg';
import blogImage2  from '../../../images/latest-news/image2.jpg';
import blogImage3 from '../../../images/latest-news/image3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LatestNews = () => {
    useEffect(() => {
        AOS.init({ duration: 2000})
    }, [])

    return (
        <div className="container mt-4 mb-5 pb-3">
            <div className="sectionTitle">
                <h2 className="text-center pt-5 mb-5 section-title">Latest News & Blog</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                <div className="col col-md-4" data-aos="fade-up-right">
                    <div className="card borderStyle">
                        <img src={blogImage1} className="card-img-top"  alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">The Ultimate Laptop Computer Buying Guide</h5>
                        </div>
                        <div className="author">
                            <span>
                                <FontAwesomeIcon icon={faUser} />
                                <Link to="#" className="ms-2">admin</Link>
                            </span>
                            <span className="ms-5">
                                <FontAwesomeIcon icon={faCalendarAlt} />
                                <time className="ms-2">April 18, 2021</time>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col col-md-4" data-aos="fade-up">
                    <div className="card">
                        <img src={blogImage2} className="card-img-top"  alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">5 Ways To Secure Your Computer From Virus</h5>
                        </div>
                        <div className="author">
                            <span>
                                <FontAwesomeIcon icon={faUser} />
                                <Link to="#" className="ms-2">admin</Link>
                            </span>
                            <span className="ms-5">
                                <FontAwesomeIcon icon={faCalendarAlt} />
                                <time className="ms-2">April 18, 2021</time>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col col-md-4" data-aos="fade-up-left">
                    <div className="card">
                        <img src={blogImage3} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Four Common iPad Problems That Need Repairs</h5>
                        </div>
                        <div className="author">
                            <span>
                                <FontAwesomeIcon icon={faUser} />
                                <Link to="#" className="ms-2">admin</Link>
                            </span>
                            <span className="ms-5">
                                <FontAwesomeIcon icon={faCalendarAlt} />
                                <time className="ms-2">April 18, 2021</time>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;