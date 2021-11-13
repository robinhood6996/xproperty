import React from 'react';
import errorimg from '../../images/404.jpg';
const NotFound = () => {
    return (
        <div className="contaner flex justify-center">
            <img className="" src={errorimg} alt="" />
        </div>
    );
};

export default NotFound;