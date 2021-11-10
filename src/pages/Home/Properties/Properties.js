import React from 'react';
import {
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faCar, faCity, faCoffee, faLocationArrow, faTh } from '@fortawesome/free-solid-svg-icons'
import p1 from '../../../images/properties/1.jpg';
import p2 from '../../../images/properties/2.jpg';
import p3 from '../../../images/properties/3.jpg';
const Properties = () => {
    return (
        <div className="container mx-auto my-3">
            <div className="properties">
                <div className="properties-header text-center my-3">
                    <h2 className="text-4xl font-bold text-blue-400">Properties For Sale</h2>
                </div>
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Property  */}
                    <div class="w-full bg-gray-800 rounded-lg sahdow-lg overflow-hidden ">
                        <div class="w-full md:w-5/5 h-80">
                            <img className="object-center object-cover w-full h-full" src={p1} alt="photo" />
                        </div>
                        <p class="text-3xl text-left p-4 text-blue-400 font-bold">Central Park View</p>
                        <div class="w-full grid grid-cols-3 text-left p-4">
                            <p class="text-base text-white font-normal"> <FontAwesomeIcon icon={faLocationArrow} /> Demra, Dhaka</p>
                            <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faTh} /> 1200 Sqft</p>
                            <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faBed} /> Bed Room: 3</p>
                            <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faBath} /> Bathroom: 2</p>
                            <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faCity} /> Floor: 5</p>
                            <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faCar} /> Garage: 1</p>
                        </div>
                        <div className="p-4">
                            <p className="text-lg font-light text-gray-50 text-left">
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </p>
                            <div class="flex justify-start space-x-6 mt-2">
                                <h4 className="text-2xl font-bold text-blue-400 ">Buy At: $56000</h4>
                                <Link to="/property">
                                    <button className="bg-blue-400 text-gray-50 font-bold px-4 py-2 rounded">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Property  */}
                    <div class="w-full bg-gray-800 rounded-lg sahdow-lg overflow-hidden ">
                        <div class="w-full md:w-5/5 h-80">
                            <img className="object-center object-cover w-full h-full" src={p1} alt="photo" />
                        </div>
                        <p class="text-3xl text-left p-4 text-blue-400 font-bold">Central Park View</p>
                        <div class="w-full grid grid-cols-3 text-left p-4">
                            <p class="text-base text-white font-normal"> <FontAwesomeIcon icon={faLocationArrow} /> Demra, Dhaka</p>
                            <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faTh} /> 1200 Sqft</p>
                            <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faBed} /> Bed Room: 3</p>
                            <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faBath} /> Bathroom: 2</p>
                            <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faCity} /> Floor: 5</p>
                            <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faCar} /> Garage: 1</p>
                        </div>
                        <div className="p-4">
                            <p className="text-lg font-light text-gray-50 text-left">
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </p>
                            <div class="flex justify-start space-x-6 mt-2">
                                <h4 className="text-2xl font-bold text-blue-400 ">Buy At: $56000</h4>
                                <Link to="/property">
                                    <button className="bg-blue-400 text-gray-50 font-bold px-4 py-2 rounded">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>


                    {/* Property  */}
                    <div class="w-full bg-gray-800 rounded-lg sahdow-lg overflow-hidden ">
                        <div class="w-full md:w-5/5 h-80">
                            <img className="object-center object-cover w-full h-full" src={p1} alt="photo" />
                        </div>
                        <p class="text-3xl text-left p-4 text-blue-400 font-bold">Central Park View</p>
                        <div class="w-full grid grid-cols-3 text-left p-4">
                            <p class="text-base text-white font-normal"> <FontAwesomeIcon icon={faLocationArrow} /> Demra, Dhaka</p>
                            <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faTh} /> 1200 Sqft</p>
                            <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faBed} /> Bed Room: 3</p>
                            <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faBath} /> Bathroom: 2</p>
                            <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faCity} /> Floor: 5</p>
                            <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faCar} /> Garage: 1</p>
                        </div>
                        <div className="p-4">
                            <p className="text-lg font-light text-gray-50 text-left">
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </p>
                            <div class="flex justify-start space-x-6 mt-2">
                                <h4 className="text-2xl font-bold text-blue-400 ">Buy At: $56000</h4>
                                <Link to="/property">
                                    <button className="bg-blue-400 text-gray-50 font-bold px-4 py-2 rounded">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Properties;