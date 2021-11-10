import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import AdminNavbar from './AdminNavbar';

import H6 from '@material-tailwind/react/Heading6';
import AdminHome from './AdminHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faEye, faFolder, faFolderPlus, faTasks, faUsers, faUserShield } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <AdminHome
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">

                    <H6 color="gray">X-Property Admin</H6>

                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/admin"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-black shadow-md"
                                >
                                    {/* <Icon name="dashboard" size="2xl" /> */}
                                    <FontAwesomeIcon icon={faChartLine} />
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="addproperty"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-black shadow-md"
                                >
                                    {/* <Icon name="dashboard" size="2xl" /> */}
                                    <FontAwesomeIcon icon={faFolderPlus} />
                                    Add Property
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to="/manage-property"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <FontAwesomeIcon icon={faTasks} />
                                    Manage Property
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/manage-orders"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <FontAwesomeIcon icon={faFolder} />
                                    Manage All Order
                                </NavLink>
                            </li>

                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/manage-admin"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <FontAwesomeIcon icon={faUserShield} />
                                    Add Admin
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/admin-list"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <FontAwesomeIcon icon={faUsers} />
                                    Admin Lists
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/home"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <FontAwesomeIcon icon={faEye} />
                                    Visit Site
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;