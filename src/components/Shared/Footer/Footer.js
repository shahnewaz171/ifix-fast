import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="py-4" style={{backgroundColor: '#0a373e'}}>
            <div className="container custom-container">
            <div className="row mt-3 footerInfo">
                <div className="col-6 col-md-4 col-lg-3 mb-4 ">
                    <div className="mb-4">
                        <h6 className="text-white text-bold">ABOUT</h6>
                    </div>
                    <ul className="list-unstyled  m-0">
                        <li className="mb-1">
                            <Link to="#" className="text-white text-14 d-block">About ifixFast</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="text-white text-14 d-block">Privacy Policy</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="text-white text-14 d-block">FAQ</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="text-white text-14 d-block">Service Terms</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-6 col-md-4 col-lg-3 mb-4">
                    <div className="mb-4">
                        <h6 className="text-white text-bold text-uppercase">Quick Links</h6>
                    </div>
                    <ul className="list-unstyled  m-0">
                        <li className="mb-1">
                            <Link to="#" className="text-white text-14 d-block">Project</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="text-white text-14 d-block">Customer Services</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="text-white text-14 d-block">Order a Service</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="text-white text-14 d-block">Our Team</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-6 col-md-4 col-lg-3 mb-4">
                    <div className="mb-4">
                        <h6 className="text-white text-bold">CONTACT</h6>
                    </div>
                    <ul className="list-unstyled  m-0">
                        <li className="mb-1">
                            <Link to="#" className="text-white text-14 d-block">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-6 col-md-4 col-lg-3 mb-4">
                    <div className="mb-4">
                        <h6 className="text-white text-bold">ifixFast</h6>
                    </div>
                    <ul className="list-unstyled  m-0">
                        <li className="mb-1">
                            <Link to="#" className="text-white text-14 d-block">
                                Ashulia, Savar <br/> Dhaka - 1230, Bangladesh <br/> info@ifixFast.com <br/> +880 1969-548437
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-between pb-3 mt-5 border-top">
                <div className="navbar-brand">
                    <Link to="#">
                        <img src={logo}alt="logo" className="img-fluid mt-0 text-white"/>
                    </Link>
                </div>
                <div className="d-flex flex-wrap mt-3">
                    <div>
                        <span className="text-white d-block mt-2 float-left">&copy; 2021  <Link to="#" className="text-white text-info">Shahnewaz</Link> - All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </div>
        </div>

    );
};

export default Footer;