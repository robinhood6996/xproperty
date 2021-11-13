import React, { useEffect, useState } from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';
import img from '../../images/logo.png';
import Sidebar from '../Home/Home/Sidebar';
import axios from 'axios';

const ManageProperties = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:6010/properties')
            .then(res => {
                console.log(res.data)
                setProperties(res.data);
            }).catch(error => console.log('Get Properties Error', error.message));
    }, []);

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure to delete?')
        if (confirm) {
            axios.delete(`http://localhost:6010/properties/${id}`)
                .then(res => {

                    if (res.data.deletedCount == 1) {
                        alert('Deleted Property');
                        const allProperties = properties;
                        const rest = allProperties.filter(property => property._id !== id);
                        setProperties(rest);
                    }
                })
        } else {
            alert('Data Safe!')
        }
    }
    return (
        <>
            <Sidebar></Sidebar>
            <Card className="lg:p-48 lg:ml-40">
                <CardHeader color="purple" contentPosition="left">
                    <h2 className="text-white text-2xl">Property List</h2>
                </CardHeader>
                <CardBody>
                    <div className="overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Name
                                    </th>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Size
                                    </th>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Address
                                    </th>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Image
                                    </th>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    properties.map(property => <tr key={property._id}>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            {property.name}
                                        </th>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            {property.sqt}
                                        </th>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{' '}
                                            {property.location}
                                        </th>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div className="flex">
                                                <div className="w-10 h-10 rounded-full border-2 border-white">
                                                    <Image
                                                        src={property.image}
                                                        rounded
                                                        alt="..."
                                                    />
                                                </div>

                                            </div>
                                        </th>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div>
                                                <button className="bg-green-800 text-white font-bold px-2 py-2 mx-2">Edit</button>
                                                <button className="bg-red-800 text-white font-bold px-2 py-2" onClick={() => handleDelete(property._id)}>Delete</button>
                                            </div>
                                        </th>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </CardBody>
            </Card>
        </>
    );
};

export default ManageProperties;