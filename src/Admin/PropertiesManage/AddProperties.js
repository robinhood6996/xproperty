import React from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import { useForm } from "react-hook-form";
import Sidebar from '../Home/Home/Sidebar';
import axios from 'axios';


const AddProperties = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:6010/property', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Sucessfully added');
                    reset();
                }

            })
    };
    return (
        <>
            <Sidebar></Sidebar>
            <Card className=" lg:p-48 lg:ml-40">
                <CardHeader color="purple" contentPosition="none">
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-white text-2xl">Add Properties</h2>
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            style={{ padding: 0 }}
                        >
                            Form
                        </Button>
                    </div>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                            Property Details
                        </h6>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    color="purple"
                                    className="w-full lg:w-12/12 mb-10 font-light border-2 py-2 px-2 rounded shadow-xs"
                                    placeholder="Property Name"
                                    {...register("name", { required: true })}
                                />
                            </div>

                            <div className="w-full lg:w-6/12  mb-10 font-light">
                                <label htmlFor="sqt">Total size in square feet</label>
                                <input
                                    type="text"
                                    color="purple"
                                    className="w-full lg:w-12/12 mb-10 font-light border-2 py-2 px-2 rounded shadow-xs"
                                    placeholder="Property Size (Ex: 1200 Sqt)"
                                    {...register("sqt", { required: true })}
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <label htmlFor="bed">Total Bed Room In Apartments</label>
                                <input
                                    type="text"
                                    color="purple"
                                    className="w-full lg:w-12/12 mb-10 font-light border-2 py-2 px-2 rounded shadow-xs"
                                    placeholder="Bed Room"
                                    {...register("bed", { required: true })}
                                />
                            </div>
                            <div className="w-full lg:w-6/12  mb-10 font-light">
                                <label htmlFor="bed">Total Bath In Apartments</label>
                                <input
                                    className="w-full lg:w-12/12 mb-10 font-light border-2 py-2 px-2 rounded shadow-xs"
                                    type="text"
                                    color="purple"
                                    placeholder="Baths"
                                    {...register("bath", { required: true })}
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <label htmlFor="bed">Floor Number</label>
                                <input
                                    type="text"
                                    className="w-full lg:w-12/12 mb-10 font-light border-2 py-2 px-2 rounded shadow-xs"
                                    color="purple"
                                    placeholder="Floor"
                                    {...register("floor", { required: true })}
                                />
                            </div>
                            <div className="w-full lg:w-6/12  mb-10 font-light">
                                <label htmlFor="bed">Garage Capacity</label>
                                <input
                                    type="text"
                                    className="w-full lg:w-12/12 mb-10 font-light border-2 py-2 px-2 rounded shadow-xs"
                                    color="purple"
                                    placeholder="Garage"
                                    {...register("garage", { required: true })}
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <label htmlFor="bed">Type of Apartment</label>
                                <input
                                    type="text"
                                    className="w-full lg:w-12/12 mb-10 font-light border-2 py-2 px-2 rounded shadow-xs"
                                    color="purple"
                                    placeholder="Type"
                                    {...register("type", { required: true })}
                                />
                            </div>
                            <div className="w-full lg:w-6/12  mb-10 font-light">
                                <label htmlFor="bed">Builders Name</label>
                                <input
                                    type="text"
                                    color="purple"
                                    className="w-full lg:w-12/12 mb-10 font-light border-2 py-2 px-2 rounded shadow-xs"
                                    placeholder="Builder Name"
                                    {...register("builder", { required: true })}
                                />
                            </div>
                            <div className="w-full lg:w-12/12 mb-10 font-light">
                                <label htmlFor="bed">Location of Apartment</label>
                                <input
                                    type="text"
                                    color="purple"
                                    placeholder="Location"
                                    className="w-full lg:w-12/12 mb-10 font-light border-2 py-2 px-2 rounded shadow-xs"
                                    {...register("location", { required: true })}
                                />
                            </div>
                            <div className="w-full lg:w-6/12 mb-10 font-light">
                                <label htmlFor="bed">Price of Apartment</label>
                                <input
                                    type="text"
                                    color="purple"
                                    placeholder="Location"
                                    className="w-full lg:w-12/12 mb-10 font-light border-2 py-2 px-2 rounded shadow-xs"
                                    {...register("price", { required: true })}
                                />
                            </div>
                        </div>

                        <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
                            More Details
                        </h6>
                        <div className="flex flex-wrap mt-10 font-light">
                            <label htmlFor="bed">Details About Apartment</label>
                            <textarea color="purple" placeholder="Details About Property" {...register("details", { required: true })}
                                className="w-full lg:w-12/12 mb-10 font-light border-2 py-2 px-2 rounded shadow-xs" />
                        </div>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-12/12 mb-10 font-light">
                                <label htmlFor="bed">Apartment image link</label>
                                <input
                                    type="text"
                                    color="purple"
                                    placeholder="Image Link"
                                    {...register("image", { required: true })}
                                    className="w-full lg:w-12/12 mb-10 font-light border-2 py-2 px-2 rounded shadow-xs"
                                />
                            </div>
                            <div className="w-full lg:w-12/12 mb-10 font-light">
                                <button type="submit" className="bg-blue-400 px-5 py-2 text-white font-bold rounded">Add Property</button>
                            </div>
                        </div>


                    </form>
                </CardBody>
            </Card>
        </>
    );
};

export default AddProperties;