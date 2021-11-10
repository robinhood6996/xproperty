import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container mx-auto">
            <div className="login-form mt-5">
                <h2 className='text-3xl font-bold text-blue-400 mb-3 text-center'>Register</h2>
                <form action="" className="sm:w-ful lg:w-2/5 container mx-auto">
                    <div className="input-group p-2">
                        <input type="text" name="name" className="w-full border p-2 bg-gray-200 rounded-lg shadow-md" placeholder="Enter Your Name" />
                    </div>
                    <div className="input-group p-2">
                        <input type="email" name="email" className="w-full border p-2 bg-gray-200 rounded-lg shadow-md" placeholder="Enter Email Address" />
                    </div>
                    <div className="input-group p-2">
                        <input type="password" name="password" className="w-full border p-2 bg-gray-200 rounded-lg shadow-md" placeholder="Enter Password" />
                    </div>
                    <div className="input-group p-2">

                        <input type="text" name="image" className="w-full border p-2 bg-gray-200 rounded-lg shadow-md" placeholder="Profile Photo URL" />
                    </div>
                    <p className="p-2">Already Registered? Please <Link to="/login" className="text-red-500"> Login</Link></p>
                    <div className="input-group p-2 text-center">
                        <button className="bg-blue-400 text-gray-50 font-medium px-10 py-3 rounded">Register</button>
                    </div>
                    <div className="google-signin text-center">
                        <h2 className="text-center">OR</h2>
                        <button className='bg-red-700 px-10 py-4 text-white text-center rounded'>Google Signin</button>

                    </div>
                </form>

            </div>
        </div>
    );
};

export default Register;