import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';
import Sidebar from '../../Admin/Sidebar/Sidebar';
import './AddService.css';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const [orderSuccess, setOrderSuccess] = useState(false);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        // console.log(newInfo);
    }

    const onSubmit = () =>{
        const formData = new FormData()
      
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('price', info.price);
        formData.append('description', info.description);

        // console.log(formData);

        fetch('https://powerful-brushlands-39960.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                setOrderSuccess(true);
            }
        })
        .catch(error => {
            console.error(error)
        })

    }

    
    const handleImageUpload = (event) => {
        const newFile = event.target.files[0];
        setFile(newFile);
        
    }

    return (
        <div>
            {
               <Sidebar></Sidebar>
            }
             <div className="title">
                <h3 className="title-name">Add Service</h3>
                {
                    loggedInUser.email ? <h5>{loggedInUser.name == null ? loggedInUser.email : loggedInUser.name}</h5> : ''
                }
            </div>
            <div className="book-info">
                {orderSuccess && <div className="mx-5 mt-4">
                    <div className="alert alert-success alert-dismissible fade show orderSuccess" role="alert">
                        <strong>Well done!</strong> Your new service successfully added.
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                }
                <div className="mx-5 mt-4">
                    {!orderSuccess && <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="bg-white border-radius">
                            <div className="row mx-lg-2 pad">
                                <div className="col-12 col-md-6 form-group mb-4">
                                    <label className="font-600 mb-2">Service Title</label>
                                    <input onChange={handleBlur} name="title"  ref={register({ required: true })} className="form-control"/>
                                    {errors.title && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="col-12 col-md-6 form-group mb-4">
                                    <label className="font-600 mb-2">Price</label>
                                    <input onChange={handleBlur}  name="price" ref={register({ required: true })} className="form-control"/>
                                    {errors.price && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="col-12 col-md-6 form-group mb-4">
                                    <label className="font-600 mb-2">Description</label>
                                    <input onChange={handleBlur} name="description" ref={register({ required: true })} className="form-control"/>
                                    {errors.description && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="col-12 col-md-6 form-group mb-4">
                                    <label className="font-600 mb-2">Add Photo</label>
                                    <input onChange={handleImageUpload} type="file" name="image" ref={register({ required: true })} className="custom-file-input form-control"/>
                                </div>
                            </div>
                        </div>
                        <div>
                           <button className="mt-4 btn btn-style submitBtn px-4" type="submit">Submit</button>
                        </div>
                    </form>   
                    }
                </div>
            </div>
        </div>
    );
};

export default AddService;