import React from 'react';

const AdminLogin = () => {
    return (
        <div className="bg-blue-400 h-screen ">
            <div className="container mx-auto ">
                <h2 className="text-center text-3xl font-bold text-white">Admin Login</h2>
                <form action="" className="mt-5 w-3/5 mx-auto">
                    <input type="email" placeholder="Enter Email" className="w-full p-4 border-white m-2 rounded" />
                    <input type="password" placeholder="Enter Email" className="w-full p-4 border-white m-2 rounded" />
                    <button type="submit" className="bg-white font-bold text-black text-lg m-2 px-4 py-2 rounded flex justify-center w-full hover:bg-black hover:text-white transition duration-1000">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;