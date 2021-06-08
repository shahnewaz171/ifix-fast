import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://powerful-brushlands-39960.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [loggedInUser.email])

    const [navbarAnimation, setNavbarAnimation] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbarAnimation(true);
        }
        else{
            setNavbarAnimation(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={navbarAnimation ? "navbar navbar-expand-lg navbar-light bg-light sticky-md-top nav-bg" : "navbar navbar-expand-lg navbar-light bg-light"}>
            <div className="container">
                <Link to="#" className="navbar-brand">
                    <img src={logo} className="img-fluid" alt="logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" style={{marginTop: loggedInUser.email ? '1.3rem': ''}}>
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <NavLink to="/" exact activeClassName="nav-link-active" className="nav-link me-4">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" activeClassName="nav-link-active" className="nav-link me-4">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" activeClassName="nav-link-active" className="nav-link me-4">Projects</NavLink>
                        </li>
                        {!isAdmin && 
                            <li className="nav-item">
                                <Link to="/book" className="nav-link me-4">Dashboard</Link>
                            </li>
                        }
                        <li className="nav-item">
                            <NavLink to="/contact" activeClassName="nav-link-active" className="nav-link me-4">Contact</NavLink>
                        </li>
                        {isAdmin && 
                            <li className="nav-item">
                                <Link to="/admin" className="nav-link me-4">Admin</Link>
                            </li>
                        }
                        <li className="nav-item">
                            {
                                loggedInUser.email ? <p className="nav-link user-name">{loggedInUser.name == null ? loggedInUser.email : loggedInUser.name}</p> : 
                                <Link to="/login">
                                    <button className="btn btn-style px-4">Login</button>
                                </Link> 
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;