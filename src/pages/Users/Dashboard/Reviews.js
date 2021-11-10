import React from 'react';

const Reviews = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-2">Add a Review</h2>
            <form action="" className="p-2 mx-auto">
                <input type="text" className="w-full border-black border-2 bg-gray-200 p-4 rounded" placeholder="Title" />
                <textarea type="text" className="w-full border-black border-2 bg-gray-200 mt-2 rounded" cols="10" rows="10" placeholder="Title" />
                <input type="text" className="w-full border-black border-2 bg-gray-200 p-4 rounded" placeholder="Give a Review Out of 5" />
                <button type='submit' className="bg-blue-400 text-lg font-bold px-3 py-2 rounded w-full mt-2 rounded">Submit</button>
            </form>
        </div>
    );
};

export default Reviews;