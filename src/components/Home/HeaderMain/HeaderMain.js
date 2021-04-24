import React from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../../../images/headerImage.jpg';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{height: '490px', marginLeft: '20px'}} className="d-md-flex align-items-center">
            <div className="col-12 col-md-5">
                <h1 className="mb-4 headerTitle">Fast & Quick Fix</h1>
                <p className="text-secondary">Just send valuable laptop, PC, MAC, Mobile,
                    Gaming Device or Smartphone and we'll take care of it.</p>
                <Link to="#">
                    <button type="button" className="btn btn-style text-uppercase mt-4">read more</button>
                </Link>
            </div>
            <div className="col-md-1"></div>
            <div className="col-12 col-md-6 headerImg">
                <img src={headerImage} alt="chair" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;