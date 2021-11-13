import React, { useEffect, useState } from 'react';
import {
    Link,
    useHistory,

} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faTh } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';
const Properties = () => {
    const history = useHistory();

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get('https://immense-island-65259.herokuapp.com/properties')
            .then(res => {
                console.log(res.data)
                setProperties(res.data);
            }).catch(error => console.log(error.message))
    }, []);

    const handleSingleProperty = id => {
        const url = `/property/${id}`;
        history.push(url);
    }
    return (
        <div className="container mx-auto my-3 p-3">
            <div className="properties">
                <div className="properties-header text-center my-3">
                    <h2 className="text-4xl font-bold text-blue-400">Properties For Sale</h2>
                </div>
                <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4">
                    {/* Property  */}
                    {
                        properties.slice(0, 8).map(property => <div class="w-full bg-gray-800 rounded-lg sahdow-lg overflow-hidden " key={property._id}>
                            <div class="w-full md:w-5/5 h-80">
                                <img className="object-center object-cover w-full h-full" src={property.image} alt="img" />
                            </div>
                            <p class="text-2xl text-left p-4 text-blue-400 font-bold">{property.name}</p>
                            <div class="w-full grid grid-cols-3 text-left p-2">
                                <p class="text-base text-white font-normal"> <FontAwesomeIcon icon={faLocationArrow} /> {property.location}</p>
                                <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faTh} /> {property.sqt} Sqft</p>
                            </div>
                            <div className="p-2">
                                <p className="text-md font-light text-gray-50 text-left">
                                    {property.details.slice(0, 200)} ...<Link to={`property/${property._id}`} className="text-red-600">Read More</Link>
                                </p>
                                <div class="flex justify-start space-x-6 mt-2">
                                    <h4 className="text-xl font-bold text-blue-400 ">Buy At: ${property.price}</h4>

                                    <button onClick={() => handleSingleProperty(property._id)} className="bg-blue-400 text-gray-50 font-medium px-4 py-2 rounded">Buy Now</button>

                                </div>
                            </div>
                        </div>)
                    }



                </div>
            </div>
        </div>
    );
};

export default Properties;