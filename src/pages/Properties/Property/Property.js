import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faBath, faBed, faCar, faCity, faLocationArrow, faMoneyBill, faTh } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';

const Property = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [property, setProperty] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://immense-island-65259.herokuapp.com/place-order', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Submited a query');
                    reset();
                }
            })
    };

    useEffect(() => {
        axios.get(`https://immense-island-65259.herokuapp.com/property/${id}`)
            .then(res => {
                setProperty(res.data);
                console.log(res.data);
            })
    }, []);




    return (
        <div className="single-property-area mt-5 container mx-auto">
            <div className="property-details">
                <div className="flex flex-auto justify-center border-t-2 border-b-2 p-2">


                    <h2 className="flex-auto m-1"><FontAwesomeIcon icon={faBed} /> Beds: {property.bed}</h2>
                    <h2 className="flex-auto m-1"><FontAwesomeIcon icon={faBath} /> Bath: {property.bath}</h2>
                    <h2 className="flex-auto m-1"><FontAwesomeIcon icon={faCity} /> Floor: {property.floor}</h2>
                    <h2 className="flex-auto m-1"><FontAwesomeIcon icon={faCar} /> Garage: {property.garage}</h2>
                </div>

                <div className="property-img mt-1 w-full grid sm:grid-cols-1 lg:grid-cols-2 p-4">
                    <div className="img mr-3 mt-1">
                        <img src={property.image} alt="" className="rounded-lg" />
                    </div>
                    <div className="spec-details  bg-gray-700 rounded-lg mt-1">
                        <h2 className='text-3xl font-semibold text-gray-100 p-2'>Property Specification:</h2>
                        <h2 className="p-2 text-gray-100 font-semibold text-left"><FontAwesomeIcon icon={faArrowAltCircleRight} /> Builder: {property.builder}</h2>
                        <h2 className="p-2 text-gray-100 font-semibold text-left"><FontAwesomeIcon icon={faTh} /> Area (sq.ft): {property.sqt}</h2>
                        <h2 className="p-2 text-gray-100 font-semibold text-left"><FontAwesomeIcon icon={faArrowAltCircleRight} /> Type: {property.type}</h2>
                        <h2 className="p-2 text-gray-100 font-semibold text-left"><FontAwesomeIcon icon={faLocationArrow} /> Location: {property.location}</h2>
                        <h2 className="p-2 text-gray-100 font-semibold text-left"><FontAwesomeIcon icon={faBed} /> Beds: {property.bed}</h2>
                        <h2 className="p-2 text-gray-100 font-semibold text-left"><FontAwesomeIcon icon={faBath} /> Bath: {property.bath}</h2>
                        <h2 className="p-2 text-gray-100 font-semibold text-left"><FontAwesomeIcon icon={faCity} /> Floor: {property.floor}</h2>
                        <h2 className="p-2 text-gray-100 font-semibold text-left"><FontAwesomeIcon icon={faCar} /> Garage: {property.garage}</h2>
                        <h2 className="p-2 text-blue-400 font-semibold text-left"><FontAwesomeIcon icon={faMoneyBill} /> Price: ${property.price}</h2>
                    </div>
                </div>

                <div className="property-overview text-left p-4">
                    <div className="details border-gray-400 border rounded-lg p-2">
                        <p className="text-lg font-normal">{property.details}</p>
                    </div>
                </div>

                <div className="query-form m-10">
                    <h2 className="text-3xl font-bold text-blue-400 text-center">Make a Query</h2>

                    <section className=" py-1 bg-blue-50">
                        <div className="w-full  px-4 mx-auto mt-6">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                                <div className="rounded-t bg-white mb-0 px-6 py-6">
                                    <div className="text-center flex justify-between">
                                        <h6 className="text-blueGray-700 text-xl font-bold">
                                            Submit a query
                                        </h6>
                                        <button className="bg-blue-400 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                            Buy Property
                                        </button>
                                    </div>
                                </div>
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                            User Information
                                        </h6>
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Name
                                                    </label>
                                                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue={user.displayName} {...register("name", { required: true })} />
                                                    {errors.name && <span className="text-red-500">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Email address
                                                    </label>
                                                    <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue={user.email} {...register("email", { required: true })} />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Phone Number
                                                    </label>
                                                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  {...register("phone", { required: true })} />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Professsion
                                                    </label>
                                                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  {...register("profession", { required: true })} />
                                                </div>
                                            </div>
                                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                                Buying Information
                                            </h6><br /><br />
                                            <div className="flex flex-wrap">
                                                <div className="w-full lg:w-12/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                            Name of Apartment
                                                        </label>
                                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  {...register("apartment")} />
                                                    </div>
                                                </div>
                                                <div className="w-full lg:w-4/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                            Area of Apartment
                                                        </label>
                                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  {...register("area")} />
                                                    </div>
                                                </div>
                                                <div className="w-full lg:w-4/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                            Builders Name
                                                        </label>
                                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  {...register("builders")} />
                                                    </div>
                                                </div>
                                                <div className="w-full lg:w-4/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                            Price
                                                        </label>
                                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  {...register("price")} />
                                                        <input type="hidden" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue='0' {...register("status", { required: true })} />
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                        <hr className="mt-6 border-b-1 border-blueGray-300" />

                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                            Contact Information
                                        </h6>
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-12/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Address
                                                    </label>
                                                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...register("address", { required: true })} />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-4/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                        City
                                                    </label>
                                                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  {...register("city", { required: true })} />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-4/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Country
                                                    </label>
                                                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  {...register("country", { required: true })} />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-4/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Postal Code
                                                    </label>
                                                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...register("postal", { required: true })} />
                                                </div>
                                            </div>
                                            <div className="w-full px-4">
                                                <button className="bg-blue-400 text-gray-100 font-bold text-xl px-10 py-2 rounded-lg">Submit</button>
                                            </div>
                                        </div>

                                        <hr className="mt-6 border-b-1 border-blueGray-300" />



                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Property;