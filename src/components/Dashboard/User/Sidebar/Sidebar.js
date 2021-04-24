import React, { useState } from 'react';
import  * as FaIcons from 'react-icons/fa';
import  * as AiIcons from 'react-icons/ai';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
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
                                <Link to="/book">
                                    <FontAwesomeIcon icon={faShoppingCart} /> 
                                    <span className="ms-2">Book</span>
                                </Link>
                            </li>
                            <li className="list-color">
                                <Link to="/books">
                                    <FontAwesomeIcon icon={faShoppingBag} /> 
                                    <span className="ms-2">Book List</span>
                                </Link>
                            </li>
                            <li className="list-color">
                                <Link to="/review">
                                    <FontAwesomeIcon icon={faCommentDots} /> 
                                    <span className="ms-2">Review</span>
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
                            <Link to="/book">
                                <FontAwesomeIcon icon={faShoppingCart} /> 
                                <span className="ms-2">Book</span>
                            </Link>
                        </li>
                        <li className="list-color">
                            <Link to="/books">
                                <FontAwesomeIcon icon={faShoppingBag} /> 
                                <span className="ms-2">Book List</span>
                            </Link>
                        </li>
                        <li className="list-color">
                            <Link to="/review">
                                <FontAwesomeIcon icon={faCommentDots} /> 
                                <span className="ms-2">Review</span>
                            </Link>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;