import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';


const ManageServicesList = (props) => {
    const {title, price, description, _id} = props.service;

    const deleteService = (id) => {
        // console.log(id);
        fetch(`https://damp-depths-86611.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            // console.log('Delete successfully', result);
        })
    }
    return (
        <tr>
            <td>{title}</td>
            <td>${price}</td>
            <td>{description}</td>
            <td className="action-icons">
                <Link to={`/editService/${_id}`}><span className="edit-icon"><FontAwesomeIcon icon={faEdit} /></span></Link>
                <span onClick={() => deleteService(_id)} className="delete-icon"><FontAwesomeIcon icon={faTrash}  /> </span>
            </td>
        </tr>
    );
};

export default ManageServicesList;