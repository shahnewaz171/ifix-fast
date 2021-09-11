import React from 'react';
import './BookList.css';

const BookList = (props) => {
    const {service, status} = props.book;
    return (
        <div className="col-12 col-md-4 mb-4">
            <div className="bg-white service-shadow border-radius pad2">
                <div className="serviceImg mb-4 d-flex justify-content-between">
                    <img src={service.img} className="img-fluid" alt=""/>
                    {
                        status === 'Done' && <h6 className="book-status done px-2">{status}</h6>
                    }
                     {
                        status === 'On going' && <h6 className="book-status onGoing px-2">{status}</h6>
                    }
                     {
                        status === 'Pending' && <h6 className="book-status pending px-2">{status}</h6>
                    }
                </div>
                <h4 className="service-title mb-3">{service.title}</h4>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default BookList;