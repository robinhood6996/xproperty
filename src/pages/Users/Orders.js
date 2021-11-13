import { faCross, faEye, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Orders = () => {
    const { user } = useAuth();
    const [queries, setQuery] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:6010/orders?email=${user.email}`)
            .then(res => {
                console.log(res.data)
                setQuery(res.data);
            }).catch(error => console.log(error))
    }, []);

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure you want to Cancel this Query?');
        if (confirm) {
            axios.delete(`http://localhost:6010/order/${id}`)
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

    return (
        <div class="min-h-screen  py-5">
            <h2 className="text-3xl font-semibold text-center mb-2">My Orders</h2>
            <div class='overflow-x-auto w-full'>
                <table class='container mx-auto  w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
                    <thead class="bg-gray-900">
                        <tr class="text-white text-left">
                            <th class="font-semibold text-sm uppercase px-6 py-4"> Name </th>
                            <th class="font-semibold text-sm uppercase px-6 py-4"> Size </th>
                            <th class="font-semibold text-sm uppercase px-6 py-4"> Builder </th>
                            <th class="font-semibold text-sm uppercase px-6 py-4 text-center"> status </th>
                            <th class="font-semibold text-sm uppercase px-6 py-4 text-center"> Actions </th>

                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">

                        {
                            queries.map(query => <tr key={query._id}>
                                <td class="px-6 py-4">
                                    <div class="flex items-center space-x-3">

                                        <div>
                                            <p> {query.apartment} </p>

                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <p class=""> {query.area}sqft</p>

                                </td>
                                <td class="px-6 py-4">
                                    <p class=""> {query.builders} </p>
                                </td>
                                <td class="px-6 py-4 text-center"> <span class={query.status == 0 ? 'text-white text-sm w-1/3 pb-1 bg-yellow-300 font-semibold px-2 rounded-full' : 'text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full'}> {query.status == 0 ? 'Pending' : 'Checked'} </span> </td>

                                <td class="px-6 py-4 text-center">
                                    <button href="#" class="bg-blue-400 px-2 py-2 mx-2 font-bold rounded-lg text-white"><FontAwesomeIcon icon={faEye} /> View</button>
                                    <button href="#" class="bg-red-600 px-2 py-2 font-bold rounded-lg text-white" onClick={() => handleDelete(query._id)}><FontAwesomeIcon icon={faTimes} /> Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;