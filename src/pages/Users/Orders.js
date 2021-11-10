import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Orders = () => {
    return (
        <div class="min-h-screen  py-5">
            <h2 className="text-3xl font-semibold text-center mb-2">My Orders</h2>
            <div class='overflow-x-auto w-full'>
                <table class='container mx-auto  w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
                    <thead class="bg-gray-900">
                        <tr class="text-white text-left">
                            <th class="font-semibold text-sm uppercase px-6 py-4"> Name </th>
                            <th class="font-semibold text-sm uppercase px-6 py-4"> Size </th>
                            <th class="font-semibold text-sm uppercase px-6 py-4"> Address </th>
                            <th class="font-semibold text-sm uppercase px-6 py-4 text-center"> status </th>
                            <th class="font-semibold text-sm uppercase px-6 py-4 text-center"> Actions </th>

                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        <tr>
                            <td class="px-6 py-4">
                                <div class="flex items-center space-x-3">
                                    <div class="inline-flex w-10 h-10"> <img class='w-14 h-14 object-cover' alt='User avatar' src='https://i.imgur.com/siKnZP2.jpg' /> </div>
                                    <div>
                                        <p> Park Side Property </p>

                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <p class=""> 1250Sqft </p>

                            </td>
                            <td class="px-6 py-4">
                                <p class=""> Demra, Dhaka </p>
                            </td>
                            <td class="px-6 py-4 text-center"> <span class="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>

                            <td class="px-6 py-4 text-center">
                                <button href="#" class="bg-blue-400 px-2 py-2 font-bold rounded-lg text-white"><FontAwesomeIcon icon={faEye} /> View</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;