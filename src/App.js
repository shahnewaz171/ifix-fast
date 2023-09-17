import React, { useEffect, useState } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Navbar from "./components/Shared/Navbar/Navbar";
import ScrollToTop from "./components/Shared/ScrollToTop/ScrollToTop";
import Project from "./components/Home/Project/Project";
import Contact from "./components/Home/Contact/Contact";
import Loading from "./components/Loading";
import Footer from "./components/Shared/Footer/Footer";

// lazy components
const Home = React.lazy(() => import("./components/Home/Home/Home"));
const Book = React.lazy(() => import("./components/Dashboard/User/Book/Book"));
const Review = React.lazy(() =>
  import("./components/Dashboard//User/Review/Review")
);
const Order = React.lazy(() =>
  import("./components/Dashboard/Admin/Order/Order")
);
const AddService = React.lazy(() =>
  import("./components/Dashboard/Admin/AddService/AddService")
);
const MakeAdmin = React.lazy(() =>
  import("./components/Dashboard/Admin/MakeAdmin/MakeAdmin")
);
const Books = React.lazy(() =>
  import("./components/Dashboard/User/Books/Books")
);
const ManageServices = React.lazy(() =>
  import("./components/Dashboard/Admin/ManageServices/ManageServices")
);
const EditService = React.lazy(() =>
  import("./components/Dashboard/Admin/EditService/EditService")
);
const Services = React.lazy(() =>
  import("./components/Home/Services/Services")
);

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
    <React.Suspense fallback={<Loading />}>
      {loading ? <Loading /> : allRoutes}
      <ScrollToTop />
    </React.Suspense>
  );
}

export default App;
