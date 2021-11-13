import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo.png'
const Footer = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 bg-gray-900 p-10">
                <div className="logo mb-4">
                    <img src={logo} width="350px" alt="" />
                </div>
                <div className="menu1 mb-5">
                    <h2 className="text-xl font-bold text-white border-l-2 border-blue-400 p-2">Company</h2>
                    <ul className="mt-10">
                        <li className="text-white font-semibold py-2"><Link to="/about">About Us</Link> </li>
                        <li className="text-white font-semibold py-2"><Link to="/contact">Contact Us</Link></li>
                        <li className="text-white font-semibold py-2"><Link to="/faq">Blogs</Link></li>
                        <li className="text-white font-semibold py-2"><Link to="/career">Services</Link></li>

                    </ul>
                </div>
                <div className="menu2 mb-5">
                    <h2 className="text-xl font-bold text-white border-l-2 border-blue-400  p-2">Services</h2>
                    <ul className="mt-10">
                        <li className="text-white font-semibold py-2"><Link to="/services">Apartments</Link> </li>
                        <li className="text-white font-semibold py-2"><Link to="/services">House Apartments</Link></li>
                        <li className="text-white font-semibold py-2"><Link to="/services">Office Apartments</Link></li>
                        <li className="text-white font-semibold py-2"><Link to="/services">Near Apartments</Link></li>

                    </ul>
                </div>
                <div className="menu1 mb-5">
                    <h2 className="text-xl font-bold text-white border-l-2 border-blue-400  p-2">Get in touch</h2>
                    <div className="get-area1 mt-10">
                        <h2 className="text-white font-semibold">Need Help?</h2>
                        <h2 className="text-white font-semibold text-blue-400">(406) 555-0120</h2>
                    </div>
                    <div className="get-area1 mt-5">
                        <h2 className="text-white font-semibold">Email Us At:</h2>
                        <h2 className="text-white font-semibold text-blue-400">service.xproperty@xproperty.com</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;