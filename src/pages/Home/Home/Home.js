import React from 'react';
import Properties from '../Properties/Properties';
import Reviews from '../Reviews/Reviews';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Slider from '../Slider/Slider';
import Mobile from './Mobile/Mobile';

const Home = () => {
    return (
        <div >

            <Slider></Slider>
            <Properties></Properties>
            <Reviews></Reviews>
            <Mobile></Mobile>
            <Footer></Footer>
        </div>
    );
};

export default Home;