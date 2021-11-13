import React from 'react';
import mobile from '../../../../images/mobile.jpg';
import app from '../../../../images/app.png';
import store from '../../../../images/store.svg';
const Mobile = () => {
    return (
        <div className="container mx-auto mt-20">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2">
                <div className="mobile-img">
                    <img src={mobile} width="500px" alt="" />
                </div>

                <div className="mobile-text my-auto p-2">
                    <h3 className="text-2xl mb-3 font-semibold text-left">Search on the go with our Apartment List Mobile Apps</h3>
                    <p className='text-lg'>Download our app! Search on the go with the Apartment List mobile app. Get personalized matches, easily compare favorites, and contact apartments, all within a beautiful experience designed for the modern day renter. Finding a home has never been easier.

                        We work hard to find the listings that are most relevant to you, making your search easier. From finding the right location to a manageable commute and beyond, we‘re genuinely pumped about helping you through the entire process.</p>

                    <div className="flex gap-10 mt-10">
                        <img src={app} width="150px" alt="" />
                        <img src={store} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mobile;