import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Book from "./components/Dashboard/User/Book/Book";
import BookList from "./components/Dashboard//User/BookList/BookList";
import Navbar from "./components/Shared/Navbar/Navbar";
import Review from "./components/Dashboard//User/Review/Review";
import Home from "./components/Home/Home/Home";
import Order from "./components/Dashboard/Admin/Order/Order";
import AddService from "./components/Dashboard/Admin/AddService/AddService";
import MakeAdmin from "./components/Dashboard/Admin/MakeAdmin/MakeAdmin";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Books from "./components/Dashboard/User/Books/Books";
import ManageServices from "./components/Dashboard/Admin/ManageServices/ManageServices";
import EditService from "./components/Dashboard/Admin/EditService/EditService";
import './App.css';
import ScrollToTop from "./components/Shared/ScrollToTop/ScrollToTop";
import Services from "./components/Home/Services/Services";
import Footer from "./components/Shared/Footer/Footer";
import Project from "./components/Home/Project/Project";
import Contact from "./components/Home/Contact/Contact";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    <>
      <Router>
        <Switch>
          {loading ?
            <Loading /> :
            <Route exact path="/">
              <Navbar />
              <Home />
              <ScrollToTop></ScrollToTop>
            </Route>
          }
          <PrivateRoute path="/book/:bookId">
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/book">
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/books">
            <Books />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manageServices">
            <ManageServices />
          </PrivateRoute>
          <PrivateRoute path="/editService/:editId">
            <EditService />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/services">
            <Navbar />
            <Services />
            <Footer />
            <ScrollToTop></ScrollToTop>
          </Route>
          <Route path="/projects">
            <Navbar />
            <Project />
            <Footer />
            <ScrollToTop></ScrollToTop>
          </Route>
          <Route path="/contact">
            <Navbar />
            <Contact />
            <Footer />
            <ScrollToTop></ScrollToTop>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
