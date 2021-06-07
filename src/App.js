import React, { createContext, useState } from "react";
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

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Home />
            </Route>
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
              <AddService />
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
          </Switch>
      </Router>
    </UserContext.Provider>  
    </div>
  );
}

export default App;
