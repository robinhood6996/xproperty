import { faBath, faBed, faCar, faCity, faLocationArrow, faTh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import p1 from '../../../images/properties/1.jpg';
import p2 from '../../../images/properties/2.jpg';
import p3 from '../../../images/properties/3.jpg';

const AllProperties = () => {
    const history = useHistory();

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:6010/properties')
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
        <div className="container mx-auto my-3 p-2">
            <div className="properties">
                <div className="properties-header text-center my-3">
                    <h2 className="text-4xl font-bold text-blue-400">Properties For Sale</h2>
                </div>
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">

                    {/* Property  */}
                    {
                        properties.map(property => <div class="w-full bg-gray-800 rounded-lg sahdow-lg overflow-hidden " key={property._id}>
                            <div class="w-full md:w-5/5 h-80">
                                <img className="object-center object-cover w-full h-full" src={property.image} alt="img" />
                            </div>
                            <p class="text-3xl text-left p-4 text-blue-400 font-bold">{property.name}</p>
                            <div class="w-full grid grid-cols-3 text-left p-4">
                                <p class="text-base text-white font-normal"> <FontAwesomeIcon icon={faLocationArrow} />{property.location}</p>
                                <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faTh} /> {property.sqt}Sqft</p>
                                <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faBed} /> Bed Room: {property.bed}</p>
                                <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faBath} /> Bathroom: {property.bath}</p>
                                <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faCity} /> Floor: {property.floor}</p>
                                <p class="text-base leading-relaxed text-gray-100 font-normal"><FontAwesomeIcon icon={faCar} /> Garage: {property.garage}</p>
                            </div>
                            <div className="p-4">
                                <p className="text-lg font-light text-gray-50 text-left">
                                    {property.details.slice(0, 250)} ...<Link to={`property/${property._id}`} className="text-red-600">Read More</Link>
                                </p>
                                <div class="flex justify-start space-x-6 mt-2">
                                    <h4 className="text-2xl font-bold text-blue-400 ">Buy At: ${property.price}</h4>

                                    <button className="bg-blue-400 text-gray-50 font-bold px-4 py-2 rounded"
                                        onClick={() => handleSingleProperty(property._id)}>Buy Now</button>

                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default AllProperties;