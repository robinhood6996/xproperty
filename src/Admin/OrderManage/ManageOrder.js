import React, { useEffect, useState } from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
const ManageOrder = () => {
    const { user } = useAuth();
    const [status, setStatus] = useState();
    const [queries, setQuery] = useState([]);

    useEffect(() => {
        axios.get(`https://immense-island-65259.herokuapp.com/all-orders`)
            .then(res => {
                console.log(res.data)
                setQuery(res.data);
            }).catch(error => console.log(error))
    }, [status]);

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure you want to Cancel this Query?');
        if (confirm) {
            axios.delete(`https://immense-island-65259.herokuapp.com/order/${id}`)
                .then(res => {
                    if (res.data.deletedCount == 1) {
                        const allQueries = queries;
                        const rest = allQueries.filter(query => query._id !== id);
                        setQuery(rest);
                        alert('Sucessfully Deleted the order');
                    }
                }).catch(error => console.log(error.message))
        }
        else {
            alert('Your data is safe!')
        }
    }

    //Booking status change api
    const handleStatus = (id, status) => {
        const confirm = window.confirm('Are you sure to change this status');
        if (confirm) {
            axios.put(`https://immense-island-65259.herokuapp.com/order-status/${id}`, {
                status: status
            })
                .then(res => {
                    if (res.data.matchedCount) {
                        setStatus(status);
                    }

                })
        }
    }
    return (
        <>

            <Card className="lg:p-48 lg:ml-40">
                <CardHeader color="purple" contentPosition="left">
                    <h2 className="text-white text-2xl">Order List</h2>
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
                                        Email
                                    </th>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Address
                                    </th>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Phone
                                    </th>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Status
                                    </th>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    queries.map(query => <tr key={query._id}>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            {query.name}
                                        </th>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            {query.email}
                                        </th>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{' '}
                                            {query.address}
                                        </th>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div className="flex">
                                                <div className="w-10 h-10 rounded-full border-2 border-white">
                                                    {query.phone}
                                                </div>

                                            </div>
                                        </th>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div>
                                                <button className={
                                                    query.status == 0 ? 'bg-yellow-500 text-white font-bold px-2 py-2 mx-2'
                                                        : 'bg-yellow-500 text-white font-bold px-2 py-2 mx-2' || query.status == 1 ? 'bg-green-500 text-white font-bold px-2 py-2 mx-2' : 'bg-green-500 text-white font-bold px-2 py-2 mx-2'
                                                } onClick={() => {
                                                    if (query.status == 0) {
                                                        handleStatus(query._id, 1);
                                                    } else {
                                                        handleStatus(query._id, 0);
                                                    }
                                                }} >
                                                    {
                                                        query.status == 0 ? 'Pending' : 'xx' || query.status == 1 ? 'Checked' : 'Approved'
                                                    }
                                                </button>

                                            </div>
                                        </th>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div>
                                                <button className="bg-green-800 text-white font-bold px-2 py-2 mx-2">Edit</button>
                                                <button onClick={() => handleDelete(query._id)} className="bg-red-800 text-white font-bold px-2 py-2">Delete</button>
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

export default ManageOrder;