import React, { useEffect, useState } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Navbar from "./components/Shared/Navbar/Navbar";
import ScrollToTop from "./components/Shared/ScrollToTop/ScrollToTop";
import Loading from "./components/Loading";
import Book from "./components/Dashboard/User/Book/Book";
import Review from "./components/Dashboard//User/Review/Review";
import Order from "./components/Dashboard/Admin/Order/Order";
import Project from "./components/Home/Project/Project";
import AddService from "./components/Dashboard/Admin/AddService/AddService";
import MakeAdmin from "./components/Dashboard/Admin/MakeAdmin/MakeAdmin";
import Books from "./components/Dashboard/User/Books/Books";
import ManageServices from "./components/Dashboard/Admin/ManageServices/ManageServices";
import EditService from "./components/Dashboard/Admin/EditService/EditService";
import Services from "./components/Home/Services/Services";
import Home from "./components/Home/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Contact from "./components/Home/Contact/Contact";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const element = [
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          index: true,
          element: (
            <>
              <Navbar />
              <Home />
            </>
          ),
        },
        {
          path: "books",
          element: (
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          ),
        },
        {
          path: "book",
          element: (
            <PrivateRoute>
              <Book />
            </PrivateRoute>
          ),
        },
        {
          path: "book/:bookId",
          element: (
            <PrivateRoute>
              <Book />
            </PrivateRoute>
          ),
        },
        {
          path: "review",
          element: (
            <PrivateRoute>
              <Review />
            </PrivateRoute>
          ),
        },
        {
          path: "admin",
          element: (
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          ),
        },
        {
          path: "orderList",
          element: (
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          ),
        },
        {
          path: "addService",
          element: (
            <PrivateRoute>
              <AddService />
            </PrivateRoute>
          ),
        },
        {
          path: "makeAdmin",
          element: (
            <PrivateRoute>
              <MakeAdmin />
            </PrivateRoute>
          ),
        },
        {
          path: "manageServices",
          element: (
            <PrivateRoute>
              <ManageServices />
            </PrivateRoute>
          ),
        },
        {
          path: "editService/:editId",
          element: (
            <PrivateRoute>
              <EditService />
            </PrivateRoute>
          ),
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "services",
          element: (
            <>
              <Navbar />
              <Services />
              <Footer />
            </>
          ),
        },
        {
          path: "projects",
          element: (
            <>
              <Navbar />
              <Project />
              <Footer />
            </>
          ),
        },
        {
          path: "contact",
          element: (
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          ),
        },
      ],
    },
  ];
  const allRoutes = useRoutes(element);

  return (
    <>
      {loading ? <Loading /> : allRoutes}
      <ScrollToTop />
    </>
  );
}

export default App;
