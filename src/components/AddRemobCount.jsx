import { useState } from "react";


const AddRemobCount = () => {

    const [count, setCount] =  useState(0)

    // Add Count
    const evanHandale = ()=>{
        setCount(count + 1)
    }
    // Single Remove
    const singleRemove = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    // All Remove
    const allRemove = ()=>{
        setCount(0)
    }

    return (
        <div className="container mx-auto items-center w-screen flex justify-center py-50">
            <div className="bg-black text-white text-center p-5 rounded-lg">
                <h2 className="text-xl mb-5 ">Counting Number</h2>
                <p c>The Count Number: {count}</p>

                <div className="flex gap-5 mt-5">
                    {/* Add button */}
                    <button onClick={evanHandale} className="bg-green-500 px-6 py-2 rounded-lg cursor-pointer hover:bg-green-700 duration-300">Add (+)</button>

                    {/* Single Remove */}
                    <button onClick={singleRemove} className="bg-red-500 px-6 py-2 rounded-lg cursor-pointer hover:bg-red-600 duration-300">Remove (-)</button>

                    {/* All remove */}
                    <button onClick={allRemove} className="bg-gray-500 px-6 py-2 rounded-lg cursor-pointer hover:bg-gray-600 duration-300">All Remove</button>
                </div>
            </div>
        </div>
    );
};

export default AddRemobCount;