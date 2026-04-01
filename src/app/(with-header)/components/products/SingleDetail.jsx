'use client'
import React, { useState } from 'react'


export default function SingleDetail({data}) {
    let [mainImg, setMainImg]=useState(data.thumbnail)
    return (
        <div className="max-w-[1200px] mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* LEFT - IMAGE SECTION */}
            <div>
                <div className="border rounded-lg overflow-hidden">
                    <img
                        src={mainImg}
                        alt="product"
                        className="w-full h-[400px] object-contain"
                    />
                </div>

                {/* Thumbnail images */}
                <div className="flex gap-3 mt-4">
                    {data.images.map((item) => (
                        <img
                        onClick={()=>setMainImg(item)}
                            key={item}
                            src={item}
                            className="w-20 h-20 border cursor-pointer"
                            alt=""
                        />
                    ))}
                </div>
            </div>

            {/* RIGHT - DETAILS */}
            <div>
                <h1 className="text-3xl font-bold mb-3">{data.title}</h1>

                <p className="text-xl text-green-600 font-semibold mb-4">
                    ₹{data.price}
                </p>

                <p className="text-gray-600 mb-6">
                    {data.description}
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-4 mb-6">
                    <button
                        className="px-3 py-1 border"
                        
                    >-</button>

                    <span>1</span>

                    <button
                        className="px-3 py-1 border"
                       
                    >+</button>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                    <button className="bg-black text-white px-6 py-3">
                        Add to Cart
                    </button>

                    <button className="border px-6 py-3">
                        Buy Now
                    </button>
                </div>

                {/* Extra Info */}
                <div className="mt-8">
                    <h3 className="font-semibold mb-2">Product Details</h3>
                    <ul className="list-disc ml-5 text-gray-600">
                        <li>Brand: {data.brand}</li>
                        <li>Rating: {data.rating}</li>
                        <li>Stock: {data.stock}</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
