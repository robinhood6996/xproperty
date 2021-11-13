import React from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import { useForm } from "react-hook-form";
// import Sidebar from '../Home/Home/Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ManageAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const user = { email: data.email };
        axios.put('http://localhost:6010/user/admin', user)
            .then(res => {
                alert('Made an admin sucessfully');
            })
    };
    return (
        <>
            {/* <Sidebar></Sidebar> */}
            <Card className=" lg:p-48 lg:ml-40">
                <CardHeader color="purple" contentPosition="none">
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-white text-2xl">Add Admin</h2>
                        <Link to="/admin-list">
                            <Button className='bg-black px-4 py-2'>
                                Admin List
                            </Button>
                        </Link>
                    </div>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                            Make Admin
                        </h6>
                        <div className="flex flex-wrap mt-10">

                            <div className="w-full lg:w-6/12  mb-10 font-light">
                                <input
                                    type="email"
                                    color="purple"
                                    className="w-full lg:w-12/12 mb-10 font-light border-2 py-2 px-2 rounded shadow-xs"
                                    placeholder="Email"
                                    {...register("email", { required: true })}
                                />
                            </div>



                            <div className="w-full lg:w-12/12 mb-10 font-light">
                                <button type="submit" className="bg-blue-400 px-5 py-2 text-white font-bold rounded">Make Admin</button>
                            </div>
                        </div>


                    </form>
                </CardBody>
            </Card>
        </>
    );
};

export default ManageAdmin;