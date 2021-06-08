import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../../../images/headerImage.jpg';
import './HeaderMain.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeaderMain = () => {
    useEffect(() => {
        AOS.init({ duration: 2000})
    }, [])

    return (
        <main style={{height: '490px', marginLeft: '20px'}} className="d-md-flex align-items-center">
            <div className="col-12 col-md-5"  data-aos="fade-right">
                <h1 className="mb-4 headerTitle">Fast & Quick Fix</h1>
                <p className="text-secondary">Just send valuable laptop, PC, MAC, Mobile,
                    Gaming Device or Smartphone and we'll take care of it.</p>
                <Link to="/login">
                    <button type="button" className="btn btn-style text-uppercase mt-4">get started</button>
                </Link>
            </div>
            <div className="col-md-1"></div>
            <div className="col-12 col-md-6 headerImg"  data-aos="fade-left">
                <img src={headerImage} alt="chair" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;