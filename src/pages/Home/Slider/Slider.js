import React from 'react';
import { Link } from 'react-router-dom';
import './Slide.css';

const Slider = () => {
    return (
        <div className="slide">
            <div className="text">
                <h2 className="text-xl lg:text-4xl text-white font-bold">Best Apartments in Best Price</h2>
                <Link to="/properties">
                    <button className="p-4 mt-3 bg-white text-blue-400 rounded mx-auto">Explore</button>
                </Link>
            </div>
        </div>
    );
};

export default Slider;