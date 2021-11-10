import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo.png';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (

        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white  shadow-lg">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to="/"
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                            href="#pablo"
                        >
                            <img src={logo} width="150px" alt="" />
                        </Link>
                        <button
                            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-black rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link to="/"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="#pablo"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/properties"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="#pablo"
                                >
                                    Properties
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="#pablo"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="#pablo"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="#pablo"
                                >
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <span
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-red-600 hover:opacity-75"
                                    href="#pablo"
                                >
                                    Robin welknslgdosjdfoi sdfnosdfo
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;