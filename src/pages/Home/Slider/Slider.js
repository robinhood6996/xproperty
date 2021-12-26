import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slide.css';
import slide1 from '../../../images/slider/slide1.jpg'
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
const Slider = () => {


    // install Swiper modules
    SwiperCore.use([Autoplay, Pagination, Navigation]);
    return (
        //  <div className="slide">
        //             <div className="text">
        //                 <h2 className="text-xl lg:text-4xl text-white font-bold">Best Apartments in Best Price</h2>
        //                 <Link to="/properties">
        //                     <button className="p-4 mt-3 bg-white text-blue-400 rounded mx-auto">Explore</button>
        //                 </Link>
        //             </div>
        //         </div> 
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
        }} pagination={{
            "clickable": true
        }} className="mySwiper">
            <SwiperSlide>
                <div className="slide1">
                    <div className="slide-text flex justify-between text-center">
                        <div className="w-3/12"></div>
                        <div>
                            <h1 className="sm:text-xl md:text-6xl lg:text-9xl uppercase text-gray-50">X-Property</h1>
                            <p className='text-gray-50 text-xl  text-center  mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex sapiente eaque dignissimos laudantium quam nemo nesciunt modi doloremque ut! </p>
                            <button className='bg-yellow-500 text-gray-50 text-xl font-bold p-4 mt-10'>
                                <Link to="/properties">Exlopre More</Link>
                            </button>
                        </div>
                        <div className="w-2/12"></div>
                    </div>
                    <div className="slide-img">

                    </div>

                    <div className="bg-overlay"></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <div className="slide-text flex justify-between text-center">
                        <div className="w-3/12"></div>
                        <div>
                            <h1 className="sm:text-xl md:text-6xl lg:text-9xl uppercase  text-gray-50">HOUSEHOLDS</h1>
                            <p className='text-gray-50 text-xl  text-center  mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex sapiente eaque dignissimos laudantium quam nemo nesciunt modi doloremque ut! </p>
                            <button className='bg-yellow-500 text-gray-50 text-xl font-bold p-4 mt-10'>
                                <Link to="/properties">Exlopre More</Link>
                            </button>
                        </div>
                        <div className="w-2/12"></div>
                    </div>
                    <div className="slide-img2">

                    </div>

                    <div className="bg-overlay"></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <div className="slide-text flex justify-between text-center">
                        <div className="w-3/12"></div>
                        <div>
                            <h1 className="sm:text-xl md:text-6xl lg:text-9xl uppercase  text-gray-50">The Skyline</h1>
                            <p className='text-gray-50 text-xl  text-center  mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex sapiente eaque dignissimos laudantium quam nemo nesciunt modi doloremque ut! </p>
                            <button className='bg-yellow-500 text-gray-50 text-xl font-bold p-4 mt-10'>
                                <Link to="/properties">Exlopre More</Link>
                            </button>
                        </div>
                        <div className="w-2/12"></div>
                    </div>
                    <div className="slide-img3">

                    </div>

                    <div className="bg-overlay"></div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;