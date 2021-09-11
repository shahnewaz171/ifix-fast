import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

const Loading = () => {
    const loaderStyle = {
        height: '100vh',
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div style={loaderStyle}>
             <Loader type="Puff" color="#0a373e" height={80} width={80} />
        </div>
    );
};

export default Loading;