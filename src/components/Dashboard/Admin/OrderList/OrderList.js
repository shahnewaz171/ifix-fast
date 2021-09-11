import React from 'react';

const OrderList = (props) => {
    const {book, status, _id} = props.order;
    // console.log(_id);

    const handleChange = (_id, event) => {
        const status = event.target.value;
        const booking = {_id, status};

        fetch(`https://powerful-brushlands-39960.herokuapp.com/updateStatus/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify( booking)
        })
        .then( data => {
            if(data){
                // console.log('updated');
            }
        })
    }
    return (
        <tr>
            <td>{book.name}</td>
            <td>{book.email}</td>
            <td>{book.service}</td>
            <td>Credit Card</td>
            <td>
                <select name='option' onChange={(event) => handleChange(_id, event)}>
                    <option selected hidden>{status}</option>
                    <option value="Pending">Pending</option>
                    <option value="On going">On going</option>
                    <option value="Done">Done</option>
                </select>
            </td>
        </tr>
    );
};

export default OrderList;