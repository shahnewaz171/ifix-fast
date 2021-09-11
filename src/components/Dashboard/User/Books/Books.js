import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../../App';
import BookList from '../BookList/BookList';
const Books = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://powerful-brushlands-39960.herokuapp.com/bookings?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setBookings(data);
        })
    }, [loggedInUser.email])
    // console.log(bookings);

    return (
        <div>
            {
                <Sidebar></Sidebar>
            }

            <div className="title">
                <h3 className="title-name">Service List</h3>
                {
                    loggedInUser.email ? <h5>{loggedInUser.name == null ? loggedInUser.email : loggedInUser.name}</h5> : ''
                }
            </div>

            <div className="book-info">
                <div className="mt-5 mx-4">
                    {
                        bookings.length === 0 && loggedInUser.email && 
                        <div className="alert alert-success alert-dismissible fade show orderSuccess" role="alert">
                            You have no order placed yet.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>  
                    }
                    <div className="row">
                        {
                            bookings.map(book => <BookList book={book} key={book._id}></BookList>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;