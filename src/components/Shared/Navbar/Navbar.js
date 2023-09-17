import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UserAvatar from "../../../images/b2.png";
import logo from "../../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [navbarAnimation, setNavbarAnimation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo !== null) {
      fetch("https://ifixfast.onrender.com/isAdmin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: userInfo.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setIsAdmin(data);
          }
        })
        .catch((err) => {
          console.error(err.response);
        });
    }
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarAnimation(true);
    } else {
      setNavbarAnimation(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || null;

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav
      className={
        navbarAnimation
          ? "navbar navbar-expand-lg navbar-light bg-light sticky-md-top nav-bg"
          : "navbar navbar-expand-lg navbar-light bg-light"
      }
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} className="img-fluid" alt="logo" />
        </Link>
        {userInfo != null && (
          <div className="nav-link dropdown header-user user-menu smallDevice-block ms-auto small-device-avater">
            <div
              className="dropdown-toggle box-30 cursor rounded-circle"
              id="dropdownMenuItem1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {userInfo.image == null ? (
                <img src={UserAvatar} className="img-circle" alt="" />
              ) : (
                <img src={userInfo?.image} className="img-circle" alt="" />
              )}
            </div>
            <div
              className="dropdown-menu rounded-0"
              aria-labelledby="dropdownMenuItem1"
            >
              <li className="d-flex justify-content-center align-items-center flex-column mt-2 mb-1">
                <h6>{userInfo?.name}</h6>
                <h6>{userInfo?.email}</h6>
                <button onClick={logOut} className="btn btn-outline-info py-0">
                  Logout
                </button>
              </li>
            </div>
          </div>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link me-4 ${isActive ? "nav-link-active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `nav-link me-4 ${isActive ? "nav-link-active" : ""}`
                }
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `nav-link me-4 ${isActive ? "nav-link-active" : ""}`
                }
              >
                Projects
              </NavLink>
            </li>
            {!isAdmin && userInfo !== null ? (
              <li className="nav-item">
                <Link to="/book" className="nav-link me-4">
                  Dashboard
                </Link>
              </li>
            ) : (
              ""
            )}
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link me-4 ${isActive ? "nav-link-active" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
            {isAdmin && (
              <li className="nav-item">
                <Link to="/admin" className="nav-link me-4">
                  Admin
                </Link>
              </li>
            )}
            <li className="nav-item">
              {!userInfo && (
                <Link to="/login">
                  <button className="btn btn-style px-4">Login</button>
                </Link>
              )}
            </li>
          </ul>
          {userInfo && (
            <div className="nav-link pt-0 pb-0 px-2 dropdown header-user user-menu large-device-avater">
              <div
                className="dropdown-toggle box-30 cursor rounded-circle"
                id="dropdownMenuItem1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {userInfo.image != null ? (
                  <img src={userInfo?.image} className="img-circle" alt="" />
                ) : (
                  <img src={UserAvatar} className="img-circle" alt="" />
                )}
              </div>
              <div
                className="dropdown-menu rounded-0"
                aria-labelledby="dropdownMenuItem1"
              >
                <li className="d-flex justify-content-center align-items-center flex-column mt-2 mb-1">
                  <h6>{userInfo?.name}</h6>
                  <h6>{userInfo?.email}</h6>
                  <button
                    onClick={logOut}
                    className="btn btn-outline-info py-0"
                  >
                    Logout
                  </button>
                </li>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
