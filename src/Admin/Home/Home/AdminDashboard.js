import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import AddProperties from '../../PropertiesManage/AddProperties';
import ManageProperties from '../../PropertiesManage/ManageProperties';
import Sidebar from './Sidebar';

const AdminDashboard = () => {
    const { user } = useAuth();
    const history = useHistory();
    const [admin, setAdmin] = useState();
    if (user) {
        axios.get(`http://localhost:6010/users/${user?.email}`)
            .then(res => {
                setAdmin(res.data.admin);
            })
    }
    if (admin === false) {
        history.push('/home');
    }
    return (
        <div>
            <Sidebar></Sidebar>

        </div>
    );
};

export default AdminDashboard;