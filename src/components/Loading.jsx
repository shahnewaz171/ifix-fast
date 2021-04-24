import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

const Loading = () => {
    const loaderStyle = {
        height: '100vh',
        marginTop: '2rem'
    }
    return (
        <div style={loaderStyle}>
             <Loader type="Grid" color="#0a373e" height={60} width={60} timeout={3000} />
        </div>
    );
};

export default Loading;