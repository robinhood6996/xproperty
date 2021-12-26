import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useFirebase from '../../../Hooks/useFirebase';


const Register = () => {
    const history = useHistory();
    const { registerUser } = useFirebase();
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleName = (e) => {
        const name = e.target.value;
        setName(name);

    }
    const handleEmail = (e) => {
        const email = e.target.value;
        setEmail(email);

    }
    const handlePassword = (e) => {
        const password = e.target.value;
        setPassword(password);

    }
    const handleImage = (e) => {
        const image = e.target.value;
        setImage(image);

    }

    const onSubmit = (e) => {
        e.preventDefault();
        registerUser(email, password, name, image, history)

    }

    return (
        <div className="container mx-auto bg-gray-300 rounded-xl shadow-xl p-4 mb-10 mt-10 w-8/12">
            <div className="login-form mt-5">
                <h1 className='text-5xl font-bold text-gray-900 mb-3 text-center'>Register</h1>
                <form onSubmit={onSubmit} className="sm:w-ful lg:w-2/5 container mx-auto">
                    <div className="input-group p-2">
                        <input type="text" name="name" className="w-full border p-2 bg-gray-200 rounded-lg shadow-md" placeholder="Enter Your Name" onChange={handleName} />
                    </div>
                    <div className="input-group p-2">
                        <input type="email" name="email" className="w-full border p-2 bg-gray-200 rounded-lg shadow-md" placeholder="Enter Email Address" onChange={handleEmail} />
                    </div>
                    <div className="input-group p-2">
                        <input type="password" name="password" className="w-full border p-2 bg-gray-200 rounded-lg shadow-md" placeholder="Enter Password" onChange={handlePassword} />
                    </div>
                    <div className="input-group p-2">

                        <input type="text" name="image" className="w-full border p-2 bg-gray-200 rounded-lg shadow-md" placeholder="Profile Photo URL" onChange={handleImage} />
                    </div>
                    <p className="p-2">Already Registered? Please <Link to="/login" className="text-red-500"> Login</Link></p>
                    <div className="input-group p-2 text-center">
                        <button type="submit" className="bg-gray-900 text-gray-50 font-medium px-10 py-3 rounded">Register</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Register;