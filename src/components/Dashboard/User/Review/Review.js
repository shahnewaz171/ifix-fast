import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        console.log(newInfo);
    }

    const onSubmit = () => {
        const formData = new FormData()
      
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('designation', info.designation);
        formData.append('quote', info.quote);

        console.log(formData);

        fetch('https://powerful-brushlands-39960.herokuapp.com/addReview', {
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

    };

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
                <h3 className="title-name">Review</h3>
                {
                    loggedInUser.email ? <h5>{loggedInUser.name == null ? loggedInUser.email : loggedInUser.name}</h5> : ''
                }
            </div>

            <div className="book-info">
                {
                    orderSuccess && <div className="mx-5 mt-4">
                        <div className="alert alert-success alert-dismissible fade show orderSuccess" role="alert">
                            Thanks for your feedback.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                }
                <div className="mx-5 mt-4 width">
                    <div>
                        {!orderSuccess && <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="bg-white border-radius">
                                <div className="row mx-lg-2 pad">
                                    <div className="col-12 form-group mb-4">
                                        <label className="font-600 mb-2">Name</label>
                                        <input onChange={handleBlur} name="name"  ref={register({ required: true })} className="form-control"/>
                                        {errors.name && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className="col-12 form-group mb-4">
                                        <label className="font-600 mb-2">Company's name Designation</label>
                                        <input onChange={handleBlur} name="designation" ref={register({ required: true })} className="form-control"/>
                                        {errors.designation && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="col-12 form-group mb-4">
                                        <label className="font-600 mb-2">Add Photo</label>
                                        <input onChange={handleImageUpload}  type="file" name="image" ref={register({ required: true })} className="custom-file-input form-control"/>
                                    </div>
                                    <div className="col-12 form-group mb-4">
                                        <label className="font-600 mb-2">Description</label>
                                        <textarea onChange={handleBlur} name="quote" ref={register({ required: true })} className="form-control" rows="3"></textarea>
                                        {errors.quote && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div>
                                        <button className="mt-4 btn btn-style px-5 submitBtn" type="submit">Submit</button>
                                    </div>
                                </div>      
                            </div>
                        </form>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;