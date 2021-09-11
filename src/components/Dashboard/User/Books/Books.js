import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import BookList from '../BookList/BookList';
import axios from 'axios';


const Books = () => {
    const [bookings, setBookings] = useState([]);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    useEffect(() => {
        axios.get(`https://powerful-brushlands-39960.herokuapp.com/bookings?email=${userInfo.email}`)
        .then(res => {
            setBookings(res.data);
        })
        .catch(err => "" )
    }, [userInfo])

    return (
        <div>
            {
                <Sidebar></Sidebar>
            }

            <div className="title">
                <h3 className="title-name">Service List</h3>
                {
                    userInfo == null ? "" : userInfo.email ? <h5>{userInfo.name == null ? userInfo.email : userInfo.name}</h5> : ''
                }
            </div>

            <div className="book-info">
                <div className="mt-5 mx-4">
                    {
                        bookings.length  <=  0 && 
                        <div className="alert alert-success alert-dismissible fade show orderSuccess ms-4" role="alert">
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