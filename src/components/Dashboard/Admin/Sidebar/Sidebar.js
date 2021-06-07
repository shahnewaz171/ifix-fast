import React, { useState } from 'react';
import  * as FaIcons from 'react-icons/fa';
import  * as AiIcons from 'react-icons/ai';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faThLarge, faPlus, faUserPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo3.png';
import './Sidebar.css';

const Nav = styled.div`
    background: #dadbde;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const SidebarNav = styled.nav`
    background: #28223a;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
    
`
const SidebarWrap = styled.div`
    width: 100%;
`

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);


    return (
        <div>
            <div className="small-device">
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose  onClick={showSidebar} />
                        </NavIcon>

                        <Link to="/" className="site-title d-block mb-5 mt-3">
                            <img src={logo} alt="logo" className="img-fluid ms-4 ps-1"/>
                        </Link>
                        <div className="categories">
                            <li className="list-color">
                                <Link to="/orderList">
                                    <FontAwesomeIcon icon={faShoppingBag} /> 
                                    <span className="ms-2">Order List</span>
                                </Link>
                            </li>
                            <li className="list-color">
                                <Link to="/addService">
                                    <FontAwesomeIcon icon={faPlus} /> 
                                    <span className="ms-2">Add Service</span>
                                </Link>
                            </li>
                            <li className="list-color">
                                <Link to="/makeAdmin">
                                    <FontAwesomeIcon icon={faUserPlus} /> 
                                    <span className="ms-2">Make admin</span>
                                </Link>
                            </li>
                            <li className="list-color">
                                <Link to="/manageServices">
                                    <FontAwesomeIcon icon={faThLarge} /> 
                                    <span className="ms-2">Manage Services</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <FontAwesomeIcon icon={faEdit} /> 
                                    <span className="ms-2">Edit Services</span>
                                </Link>
                            </li>
                        </div>
                    </SidebarWrap>
                </SidebarNav>
           </div>
           <div className="sidebar-nav sideBar">
                <div className="sidebar-wrap">
                    <Link to="/" className="site-title d-block mb-5 mt-3">
                        <img src={logo} alt="logo" className="img-fluid ms-4 ps-1"/>
                    </Link>
                    <div className="categories">
                        <li className="list-color">
                            <Link to="/orderList">
                                <FontAwesomeIcon icon={faShoppingBag} /> 
                                <span className="ms-2">Order List</span>
                            </Link>
                        </li>
                        <li className="list-color">
                            <Link to="/addService">
                                <FontAwesomeIcon icon={faPlus} /> 
                                <span className="ms-2">Add Service</span>
                            </Link>
                        </li>
                        <li className="list-color">
                            <Link to="/makeAdmin">
                                <FontAwesomeIcon icon={faUserPlus} /> 
                                <span className="ms-2">Make admin</span>
                            </Link>
                        </li>
                        <li className="list-color">
                            <Link to="/manageServices">
                                <FontAwesomeIcon icon={faThLarge} /> 
                                <span className="ms-2">Manage Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <FontAwesomeIcon icon={faEdit} /> 
                                <span className="ms-2">Edit Services</span>
                            </Link>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;