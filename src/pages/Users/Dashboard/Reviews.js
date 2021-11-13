import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
const Reviews = () => {
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:6010/add-review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Submited your review about us');
                }
            })
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-2">Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="p-2 mx-auto">
                <input type="text" className="w-full border-black border-2 bg-gray-200 p-4 rounded" defaultValue={user?.displayName} {...register("name", { required: true })} />
                <input type="text" className="w-full border-black border-2 bg-gray-200 p-4 rounded" placeholder="Title" {...register("title", { required: true })} />
                <textarea type="text" className="w-full border-black border-2 bg-gray-200 mt-2 rounded" cols="10" rows="10" placeholder="Title" {...register("details", { required: true })} />
                <input type="text" className="w-full border-black border-2 bg-gray-200 p-4 rounded" placeholder="Give a Review Out of 5" {...register("review", { required: true })} />
                <button type='submit' className="bg-blue-400 text-lg font-bold px-3 py-2 rounded w-full mt-2">Submit</button>
            </form>
        </div>
    );
};

export default Reviews;