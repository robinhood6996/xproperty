// import axios from 'axios';
import React, { useState } from 'react';
// import useAuth from '../../../Hooks/useAuth';
import { Switch, Route, Link, useRouteMatch, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCross, faEye, faFolder, faFolderPlus, faSignOutAlt, faTasks, faUsers, faUserShield } from '@fortawesome/free-solid-svg-icons';
import AdminList from '../../MangeAdmin/AdminList';
import AddProperties from '../../PropertiesManage/AddProperties';
import ManageProperties from '../../PropertiesManage/ManageProperties';
import ManageOrder from '../../OrderManage/ManageOrder';
import ManageAdmin from '../../MangeAdmin/ManageAdmin';
import AdminHome from './AdminHome';
import useAuth from '../../../Hooks/useAuth';

const AdminDashboard = () => {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    const { handleLogout } = useAuth();
    let { path, url } = useRouteMatch();

    // const { user } = useAuth();

    // const [admin, setAdmin] = useState();

    // if (user) {
    //     axios.get(`http://localhost:6010/users/${user?.email}`)
    //         .then(res => {
    //             setAdmin(res.data.admin);
    //         })
    // }

    return (
        <>
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">

                    <h6 color="gray">X-Property Admin</h6>

                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to={`${url}`}
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
                                <Link
                                    to={`${url}/addproperty`}
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-black shadow-md"
                                >
                                    {/* <Icon name="dashboard" size="2xl" /> */}
                                    <FontAwesomeIcon icon={faFolderPlus} />
                                    Add Property
                                </Link>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to={`${url}/manage-property`}
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <FontAwesomeIcon icon={faTasks} />
                                    Manage Property
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to={`${url}/manage-orders`}
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <FontAwesomeIcon icon={faFolder} />
                                    Manage All Order
                                </NavLink>
                            </li>

                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to={`${url}/make-admin`}
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <FontAwesomeIcon icon={faUserShield} />
                                    Add Admin
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                {/* <NavLink
                                    to={`${url}/manage-admin`}
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <FontAwesomeIcon icon={faUsers} />
                                    Admin Lists
                                </NavLink> */}
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
                            <li className="rounded-lg mb-2 text-gray-700">
                                <btn
                                    onClick={handleLogout}
                                    className="flex items-center gap-4 text-sm text-red-700 font-light px-4 py-3 rounded-lg cursor-pointer"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                    Logout
                                </btn>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Switch>
                <Route exact path={path}>
                    <AdminHome
                        showSidebar={showSidebar}
                        setShowSidebar={setShowSidebar}
                    ></AdminHome>
                </Route>
                <Route path={`${path}/addproperty`}>
                    <AdminHome
                        showSidebar={showSidebar}
                        setShowSidebar={setShowSidebar}
                    ></AdminHome>
                    <AddProperties />
                </Route>
                <Route path={`${path}/manage-property`}>
                    <AdminHome
                        showSidebar={showSidebar}
                        setShowSidebar={setShowSidebar}
                    ></AdminHome>
                    <ManageProperties />
                </Route>
                <Route path={`${path}/manage-orders`}>
                    <AdminHome
                        showSidebar={showSidebar}
                        setShowSidebar={setShowSidebar}
                    ></AdminHome>
                    <ManageOrder></ManageOrder>
                </Route>
                <Route path={`${path}/make-admin`}>
                    <AdminHome
                        showSidebar={showSidebar}
                        setShowSidebar={setShowSidebar}
                    ></AdminHome>
                    <ManageAdmin></ManageAdmin>
                </Route>
                <Route path={`${path}/manage-admin`}>
                    <AdminHome
                        showSidebar={showSidebar}
                        setShowSidebar={setShowSidebar}
                    ></AdminHome>
                    <AdminList></AdminList>
                </Route>
            </Switch>
        </>
    );
};

export default AdminDashboard;