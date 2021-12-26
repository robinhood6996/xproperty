import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import google from '../../../images/google-logo.svg';
const Login = () => {
    const history = useHistory();
    const { signInUser, setIsLoading, googleSignin, setUser, saveUser } = useFirebase();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const location = useLocation();
    const redirectUri = location.state?.from || '/home';

    const handleEmail = e => {
        const email = e.target.value;
        setEmail(email);
    }
    const handlePassword = e => {
        const password = e.target.value;
        setPassword(password);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInUser(email, password)
            .then(res => {
                history.push(redirectUri);

            }).catch(error => console.log(error.message))
            .finally(setIsLoading(false));

    }

    const handleGoogleSignin = () => {
        googleSignin()
            .then(res => {
                setUser(res.user);
                saveUser(res.user.email, res.user.displayName, 'PUT');
                history.push(redirectUri);
            }).catch(error => alert(error.message))
            .finally(setIsLoading(false))
    }



    return (
        <div className="container mx-auto bg-gray-300 rounded-xl shadow-xl p-4 mb-10 mt-10 w-8/12">
            <div className="login-form mt-5">
                <h1 className='text-5xl font-bold text-gray-900 mb-3 text-center'>Login</h1>
                <form onSubmit={handleLogin} className="sm:w-ful lg:w-2/5 container mx-auto">
                    <div className="input-group p-2">
                        <input type="email" name="email" className="w-full border p-2 bg-gray-200 rounded-lg shadow-md" placeholder="Enter Email Address" onChange={handleEmail} />
                    </div>
                    <div className="input-group p-2">
                        <input type="password" name="password" className="w-full border p-2 bg-gray-200 rounded-lg shadow-md" placeholder="Enter Email Address" onChange={handlePassword} />
                    </div>
                    <p className="p-2">Are you New User? Please <Link to="/register" className="text-red-500"> Register</Link></p>
                    <div className="input-group p-2 text-center">
                        <button className="bg-gray-900 text-gray-50 font-medium px-10 py-3 ">Login</button>
                    </div>
                    <h2 className="text-center">OR</h2>
                    <div className="google-signin text-center flex justify-center">

                        <button type="submit" onClick={handleGoogleSignin} className='bg-gray-900 px-10 py-4 text-gray-50 border text-center flex font-bold'><span><img src={google} style={{ width: 25 }} alt="" /></span>Continue with Google</button>

                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;