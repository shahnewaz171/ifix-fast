import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Admin/Sidebar/Sidebar';


const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const [info, setInfo] = useState({});
    const [orderSuccess, setOrderSuccess] = useState(false);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const onSubmit = data =>{
        // console.log(data);
        const formData = new FormData()
        // console.log(info);
        formData.append('email', info.email);

        fetch('https://powerful-brushlands-39960.herokuapp.com/addAdmin', {
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

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    return (
        <div>
            {
               <Sidebar></Sidebar>
            }
             <div className="title">
                <h3 className="title-name">Make Admin</h3>
                {
                    userInfo == null ? "" : userInfo.email ? <h5>{userInfo.name == null ? userInfo.email : userInfo.name}</h5> : ''
                }
            </div>
            <div className="book-info">
                <div className="mx-5 mt-4" style={{width: '100%'}}>
                    {orderSuccess && <div className="mx-5 mt-4">
                            <div className="alert alert-success alert-dismissible fade show orderSuccess" role="alert">
                                <strong>Well done!</strong> Successfully added.
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </div>
                    }
                    {!orderSuccess &&  <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="bg-white border-radius">
                            <div className="row mx-lg-2 pad">
                                <div className="col-12 col-md-6 form-group mb-4">
                                    <label className="font-600 mb-2">Email</label>
                                    <input onBlur={handleBlur} name="email" type="email" placeholder="admin@gmail.com" ref={register({ required: true })} className="form-control"/>
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                    <button className="mt-4 btn btn-style submitBtn px-4" type="submit">Submit</button>
                                </div>
                               
                            </div>
                        </div>
                        
                    </form>   
                    }
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;