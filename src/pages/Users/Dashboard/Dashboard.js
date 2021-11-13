import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="mt-5 container mx-auto">
            <h2 className="text-center font-bold text-3xl text-blue-400">Welcome! {user.displayName}</h2>
            <div className="grid grid-cols-3 mt-3 gap-5 p-2">

                <button className="bg-transparent border-blue-400 border-2 font-bold text-md lg:text-lg px-4 py-2 rounded">  <Link to="/orders">My Orders</Link></button>


                <button className="bg-transparent border-blue-400 border-2 font-bold text-md lg:text-lg px-4 py-2 rounded"><Link to="/reviews">Reviews</Link></button>


                <button className="bg-transparent border-blue-400 border-2 font-bold text-md lg:text-lg px-4 py-2 rounded"> <Link to="/pay">Pay</Link></button>

            </div>
        </div>
    );
};

export default Dashboard;