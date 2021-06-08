import React from 'react';
import './Project.css';
import phone from '../../../images/phone.jpg';
import tablet from '../../../images/tablet.jpg';
import laptop from '../../../images/laptop.jpg';
 
const Project = () => {
    return (
        <div className="container mt-5 mb-5 pb-4">
            <div className="sectionTitle">
                <h2 className="text-center pt-5 mb-5 section-title">Projects</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                <div className="col">
                    <div className="card">
                        <img src={phone} className="card-img-top"  alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">REPAIR SMARTPHONE</h5>
                            <p className="card-text">We handle all major smartphones of different brands. Using best quality tools and equipment to repair phones.</p>
                        </div>
                        <div className="projectBtn">
                            <button className="btn btn-style px-3 text-uppercase mt-3 mb-4">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={tablet} className="card-img-top"  alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">TABLET REPAIR</h5>
                            <p className="card-text">We offer professional level repairs like reworking on motherboards, CPU. And All software related issues.</p>
                        </div>
                        <div className="projectBtn">
                            <button className="btn btn-style px-3 text-uppercase mt-3 mb-4">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={laptop} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">LAPTOP & MAC UPGRADE</h5>
                            <p className="card-text">Our Mac, Macbook, Laptop repair service offers you high-quality repairs services with premium price in budget. </p>
                        </div>
                        <div className="projectBtn">
                            <button className="btn btn-style px-3 text-uppercase mt-3 mb-4">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;