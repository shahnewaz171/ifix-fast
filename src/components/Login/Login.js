import React, { useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import logo from "../../images/logo.png";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  storeUserInfo,
  createUserWithEmailAndPassword,
  handleFacebookSignIn,
  handleGoogleSignIn,
  initializeLoginFramework,
  signInWithEmailAndPassword,
} from "./loginManager";
import "./Login.css";
import Loading from "../Loading";

initializeLoginFramework();

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const password = useRef();
  const toastId = useRef(null);
  password.current = watch("password");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
    newUser: false,
  });

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      if (res) {
        setLoading(true);
        history.replace(from);
      }
    });
  };

  const facebookSignIn = () => {
    handleFacebookSignIn().then((res) => {
      if (res) {
        setLoading(true);
        history.replace(from);
      }
    });
  };

  const handleBlur = (e) => {
    let isFieldValid = true;

    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const onSubmit = (e) => {
    toast.dismiss(toastId.current);
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.email, user.password).then((res) => {
        if (res?.success) {
          setUser(res);
          toast.success("Account created successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
          setNewUser(!newUser);
        } else if (res?.error) {
          toast.error(res?.error, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 4000,
          });
        }
      });
    } else if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        if (res?.success) {
          storeUserInfo(res);
          setLoading(true);
          history.replace(from);
        } else if (res?.error) {
          toast.error(res?.error, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 4000,
          });
        }
      });
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="pt-3">
        <div className="container">
          <Link to="/" className="navbar-brand web-name">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>

      <div className="container mt-5">
        <div className="login-area mb-3">
          <div className="mb-3 text-center">
            {newUser ? <h4>Create an account</h4> : <h4>Login</h4>}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Signup form */}
            {newUser && (
              <>
                <div className="form-group  mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="name"
                    onBlur={handleBlur}
                    ref={register({ required: true, minLength: 4 })}
                    className="form-control"
                    name="name"
                    id="name"
                  />
                  {errors.name && errors.name.type === "required" && (
                    <p>Please enter your name</p>
                  )}
                  {errors.name && errors.name.type === "minLength" && (
                    <p>Please enter at least 4 characters</p>
                  )}
                </div>
                <div className="form-group  mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    onBlur={handleBlur}
                    className="form-control"
                    name="email"
                    id="email"
                    ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <p>Please enter your email address</p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p>Please enter the valid email address</p>
                  )}
                </div>
                <div className="form-group  mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    onBlur={handleBlur}
                    ref={register({ required: true, minLength: 6 })}
                    className="form-control"
                    name="password"
                    id="password"
                  />
                  {errors.password && errors.password.type === "required" && (
                    <p>Please enter your password</p>
                  )}
                  {errors.password && errors.password.type === "minLength" && (
                    <p>Please enter at least 6 characters</p>
                  )}
                </div>
                <div className="form-group mb-1">
                  <label htmlFor="password_confirm">Confirm Password</label>
                  <input
                    type="password"
                    onBlur={handleBlur}
                    ref={register({
                      required: true,
                      validate: (value) => value === password.current,
                    })}
                    className="form-control"
                    id="password_confirm"
                    name="password_confirm"
                  />
                  {errors.password_confirm &&
                    errors.password_confirm.type === "required" && (
                      <p>This field is required</p>
                    )}
                  {errors.password_confirm &&
                    errors.password_confirm.type === "validate" && (
                      <p>Password does not match</p>
                    )}
                </div>
              </>
            )}
            {/* Login form */}
            {!newUser && (
              <>
                <div className="form-group  mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    onBlur={handleBlur}
                    className="form-control"
                    name="email"
                    id="email"
                    ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <p>Please enter your email address</p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p>Please enter the valid email address</p>
                  )}
                </div>
                <div className="form-group  mb-1">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    onBlur={handleBlur}
                    ref={register({ required: true, minLength: 6 })}
                    className="form-control"
                    name="password"
                    id="password"
                  />
                  {errors.password && errors.password.type === "required" && (
                    <p>Please enter your password</p>
                  )}
                  {errors.password && errors.password.type === "minLength" && (
                    <p>Please enter at least 6 characters</p>
                  )}
                </div>
                <div className="row form-group mb-3">
                  <div className="col-6">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember" className="ms-2">
                      Remember Me
                    </label>
                  </div>
                  <div className="col-6 text-right forget">
                    <p className="text-color" style={{ textAlign: "end" }}>
                      Forget Password
                    </p>
                  </div>
                </div>
              </>
            )}
            <div className="form-group mt-3">
              <input
                type="submit"
                className="btn col-12 btn-style"
                value={newUser ? "Create an account" : "Login"}
              />
              {user?.error && <p className="text-danger mt-2">{user?.error}</p>}
              {user?.success && (
                <p className="success-alert mt-2">
                  {newUser ? "Account created successfully" : ""}
                </p>
              )}
            </div>
            {newUser ? (
              <p className="text-center mt-3">
                Already have an account?{" "}
                <span
                  onClick={() => setNewUser(!newUser)}
                  className="link-span"
                >
                  Login
                </span>
              </p>
            ) : (
              <p className="text-center mt-3">
                Don't have an account?{" "}
                <span
                  onClick={() => setNewUser(!newUser)}
                  className="link-span"
                >
                  Create an account
                </span>
              </p>
            )}
          </form>
        </div>

        <div className="extra-info  mb-5">
          <div className="or mb-3">
            <div className="col-4 border-bottom"></div>
            <div className="px-3">Or</div>
            <div className="col-4 border-bottom"></div>
          </div>
          <div className="social-link">
            <button onClick={googleSignIn} className="btn btn-facebook mb-2">
              <FontAwesomeIcon className="me-2" icon={faGoogle} />
              Continue with Google
            </button>
            <button onClick={facebookSignIn} className="btn btn-facebook">
              <FontAwesomeIcon className="me-2" icon={faFacebook} />
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
